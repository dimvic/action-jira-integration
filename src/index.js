const core = require('@actions/core')
const github = require('@actions/github')
const { get } = require('lodash')

const JiraConnector = require('./jira/jira_connector')
const GithubConnector = require('./github/github_connector')

const {
  JIRA_PROJECT_KEY_REGEXP,

  PR_ENFORCE_ISSUE_EXISTS,
  // PR_ENFORCE_ISSUE_TYPE_REGEXP,
  PR_UPDATE_TITLE,
  PR_UPDATE_DESCRIPTION,
  PR_ISSUE_CODE_REGEXP,
  PR_SKIP_BASE_REF_REGEXP,
  PR_SKIP_HEAD_REF_REGEXP,
  PR_SKIP_USER_REGEXP,
} = require('./input')

const {
  inspect,
  getPrTitle,
  getPrDescription,
} = require('./utils')


const VALID_EVENTS = ['pull_request']

async function run() {
  const eventName = github.context.eventName
  if (VALID_EVENTS.indexOf(eventName) < 0) {
    core.setFailed(`Invalid event: ${eventName}`)
    return
  }

  const pull_request = github.context.payload.pull_request
  const title = pull_request.title

  core.info(`Pull Request title: ${title}`)

  /*
   * skip if PR base ref matches regexp
   */
  if (PR_SKIP_BASE_REF_REGEXP && pull_request.base.ref.match(new RegExp(PR_SKIP_BASE_REF_REGEXP))) {
    core.info('Skipping because PR base ref matches regexp')
    core.info(`Base: ${pull_request.base.ref}`)
    core.info(`Base skip regexp: ${pull_request.base.ref}`)
    return
  }

  /*
   * skip if PR head ref matches regexp
   */
  if (PR_SKIP_HEAD_REF_REGEXP && pull_request.head.ref.match(new RegExp(PR_SKIP_HEAD_REF_REGEXP))) {
    core.info('Skipping because PR head ref matches regexp')
    core.info(`Head: ${pull_request.head.ref}`)
    core.info(`Head skip regexp: ${PR_SKIP_HEAD_REF_REGEXP}`)
    return
  }

  /*
   * skip it if PR author matches regexp
   */
  if (PR_SKIP_USER_REGEXP && pull_request.user.login.match(new RegExp(PR_SKIP_USER_REGEXP))) {
    core.info('Skipping because PR author matches regexp')
    core.info(`Author: ${pull_request.user.login}`)
    core.info(`Author skip regexp: ${PR_SKIP_USER_REGEXP}`)
    return
  }

  // core.info(inspect(github.getOctokit(GITHUB_TOKEN)))

  // Get Jira issue code
  const issueCodeMatches = title.match(new RegExp(PR_ISSUE_CODE_REGEXP)) || []
  const issueCode = (get(issueCodeMatches, issueCodeMatches.length - 1) || '')
    .toString()
    .split(/\W/)
    .map((str) => str.toUpperCase())
    .join('-')

  /*
   * Check issue code
   */
  if (!issueCode) {
    if (PR_ENFORCE_ISSUE_EXISTS) {
      core.setFailed('Could not read an issue code from PR title.')
    } else {
      core.info('Could not read an issue code from PR title.')
    }
    core.info(`Issue code regexp: ${PR_ISSUE_CODE_REGEXP}`)
    return
  }

  /*
   * Check issue code project key
   */
  if (JIRA_PROJECT_KEY_REGEXP && !issueCode.split(/\W/)[0].match(new RegExp(JIRA_PROJECT_KEY_REGEXP))) {
    core.setFailed('Issue code - project key mismatch')
    core.info(`Issue code: ${issueCode}`)
    core.info(`Project key regexp: ${JIRA_PROJECT_KEY_REGEXP}`)
    return
  }

  core.info(`Recognized Issue Code: ${issueCode}`)


  /*
   * Get Jira issue
   */
  if (!(PR_ENFORCE_ISSUE_EXISTS || PR_UPDATE_TITLE || PR_UPDATE_DESCRIPTION)) {
    return;
  }

  const jiraConnector = new JiraConnector
  let jiraIssue

  try {
    jiraIssue = await jiraConnector.getIssue(issueCode)
  } catch (e) {
    if (PR_ENFORCE_ISSUE_EXISTS) {
      core.setFailed('Jira issue lookup raised an error')
    } else {
      core.info('Jira issue lookup raised an error')
    }
    core.info(inspect(e))
    return
  }

  if (!jiraIssue) {
    return;
  }

  /*
   * Update GitHub PR title and description
   */
  let prTitle = null
  let prDescription = null

  if (PR_UPDATE_TITLE) {
    prTitle = getPrTitle(jiraIssue, title)
  }
  if (PR_UPDATE_DESCRIPTION) {
    prDescription = getPrDescription(pull_request.body, jiraIssue)
  }

  if (PR_UPDATE_TITLE || PR_UPDATE_DESCRIPTION) {
    const updatingProperties = [
      prTitle ? 'title' : null,
      prDescription ? 'description' : null
    ].filter(v => !!v).join(' and ')

    core.info(`Updating PR ${updatingProperties}`)

    const githubConnector = new GithubConnector
    await githubConnector.updatePR(prTitle, prDescription)
  }
  /*
   * Add Jira comment
   */
  // console.log(`Adding comment to ${issueId}: \n${comment}`)
  // await this.Jira.addComment(issueId, { body: comment })

  /*
   * Transition Jira issue status
   */
  // const { argv } = this
  //
  // const issueId = argv.issue
  // const { transitions } = await this.Jira.getIssueTransitions(issueId)
  //
  // const transitionToApply = _.find(transitions, (t) => {
  //   if (t.id === argv.transitionId) return true
  //   if (t.name.toLowerCase() === argv.transition.toLowerCase()) return true
  // })
  //
  // if (!transitionToApply) {
  //   console.log('Please specify transition name or transition id.')
  //   console.log('Possible transitions:')
  //   transitions.forEach((t) => {
  //     console.log(`{ id: ${t.id}, name: ${t.name} } transitions issue to '${t.to.name}' status.`)
  //   })
  //
  //   return
  // }
  //
  // console.log(`Selected transition:${JSON.stringify(transitionToApply, null, 4)}`)
  //
  // await this.Jira.transitionIssue(issueId, {
  //   transition: {
  //     id: transitionToApply.id,
  //   },
  // })
  //
  // const transitionedIssue = await this.Jira.getIssue(issueId)
  //
  // // console.log(`transitionedIssue:${JSON.stringify(transitionedIssue, null, 4)}`)
  // console.log(`Changed ${issueId} status to : ${_.get(transitionedIssue, 'fields.status.name')} .`)
  // console.log(`Link to issue: ${this.config.baseUrl}/browse/${issueId}`)
}

run()

const core = require("@actions/core");

module.exports = {
  GITHUB_TOKEN: core.getInput('github-token', { required: true }),
  JIRA_USERNAME: core.getInput('jira-username', { required: true }),
  JIRA_TOKEN: core.getInput('jira-token', { required: true }),
  JIRA_BASE_URL: core.getInput('jira-base-url', { required: true }),
  JIRA_PROJECT_KEY_REGEXP: core.getInput('jira-project-key-regexp', { required: false }),

  PR_ENFORCE_ISSUE_EXISTS: core.getInput('pr-enforce-issue-exists', { required: false }),
  PR_ENFORCE_ISSUE_TYPE_REGEXP: core.getInput('pr-enforce-issue-type-regexp', { required: false }),
  PR_UPDATE_TITLE: core.getInput('pr-update-title', { required: false }) !== 'false',
  PR_UPDATE_DESCRIPTION: core.getInput('pr-update-description', { required: false }) !== 'false',
  PR_ISSUE_CODE_REGEXP: core.getInput('pr-issue-code-regexp', { required: false }),
  PR_SKIP_BASE_REF_REGEXP: core.getInput('pr-skip-base-ref-regexp', { required: false }),
  PR_SKIP_HEAD_REF_REGEXP: core.getInput('pr-skip-head-ref-regexp', { required: false }),
  PR_SKIP_USER_REGEXP: core.getInput('pr-skip-user-regexp', { required: false }),
}

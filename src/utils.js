const util = require('util')

const { JIRA_BASE_URL } = require('./input')

const HIDDEN_MARKER_END = '<!--description-action-hidden-marker-end-->'
const HIDDEN_MARKER_START = '<!--description-action-hidden-marker-start-->'
const WARNING_MESSAGE_ABOUT_HIDDEN_MARKERS = '<!--do not remove this marker, its needed to replace info when ticket title is updated -->'

const escapeRegexp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getPrTitle = (issue) => {
  return `[${issue.key.toUpperCase()}] ${issue.fields.summary}`
}

const getPrDescription = (oldBody, jiraIssue) => {
  const addonDescription = buildPrDescription(jiraIssue);
  const hiddenMarkerStartRg = escapeRegexp(HIDDEN_MARKER_START)
  const hiddenMarkerEndRg = escapeRegexp(HIDDEN_MARKER_END)

  const rg = new RegExp(`${hiddenMarkerStartRg}([\\s\\S]+)${hiddenMarkerEndRg}`, 'iugm')
  const bodyWithoutJiraDetails = (oldBody ?? '').replace(rg, '')

  return `${bodyWithoutJiraDetails}
${HIDDEN_MARKER_START}
${WARNING_MESSAGE_ABOUT_HIDDEN_MARKERS}
---
${addonDescription}
${HIDDEN_MARKER_END}`
}

const buildPrDescription = (issue) => {
  const details = {
    key: issue.key,
    summary: issue.fields.summary,
    url: `${JIRA_BASE_URL}/browse/${issue.key}`,
    type: {
      name: issue.fields.issuetype.name,
      icon: issue.fields.issuetype.iconUrl,
    },
    project: {
      name: issue.fields.project.name,
      url: `${JIRA_BASE_URL}/browse/${issue.fields.project.key}`,
      key: issue.fields.project.key,
    },
  }
  const displayKey = details.key.toUpperCase()
  return `
<table>
<tr>
  <td>
    <a href="${details.url}" title="${displayKey}" target="_blank"><img alt="${details.type.name}" src="${details.type.icon}" /> ${displayKey} - ${details.summary}</a>
  </td>
</tr>
</table>
${issue.fields.description}

`
}

module.exports = {
  inspect: o => util.inspect(o, { showHidden: false, depth: null }),
  escapeRegexp,
  getPrTitle,
  getPrDescription,
  buildPrDescription,
}

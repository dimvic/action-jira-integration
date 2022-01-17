const { format } = require('url')
const fetch = require('node-fetch')

const {
  JIRA_USERNAME,
  JIRA_TOKEN,
  JIRA_BASE_URL,
} = require('../input')

module.exports = class JiraConnector {
  async addComment(issueId, data) {
    return this.fetch('addComment', {
      pathname: `/rest/api/2/issue/${issueId}/comment`,
    }, {
      method: 'POST',
      body: data,
    })
  }

  async createIssue(body) {
    return this.fetch('createIssue',
      { pathname: '/rest/api/2/issue' },
      { method: 'POST', body })
  }

  async getIssue(issueId, query = {}) {
    const { fields = [], expand = [] } = query

    return this.fetch('getIssue', {
      pathname: `/rest/api/2/issue/${issueId}`,
      query: {
        fields: fields.join(','),
        expand: expand.join(','),
      },
    })
  }

  async getIssueTransitions(issueId) {
    return this.fetch('getIssueTransitions', {
      pathname: `/rest/api/2/issue/${issueId}/transitions`,
    }, {
      method: 'GET',
    })
  }

  async transitionIssue(issueId, data) {
    return this.fetch('transitionIssue', {
      pathname: `/rest/api/3/issue/${issueId}/transitions`,
    }, {
      method: 'POST',
      body: data,
    })
  }

  async client(state) {
    const response = await fetch(state.req.url, state.req)

    state.res = {
      headers: response.headers.raw(),
      status: response.status,
      body: await response.text()
    }

    if (state.res.body && (response.headers.get('content-type') || '').includes('application/json')) {
      state.res.body = JSON.parse(state.res.body)
    }

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return state
  }

  async fetch(apiMethodName,
              { host, pathname, query },
              { method, body, headers = {} } = {}) {
    const url = format({ host: host || JIRA_BASE_URL, pathname, query })

    method ||= 'GET'

    headers['Content-Type'] = 'application/json'
    headers.Authorization = `Basic ${Buffer.from(`${JIRA_USERNAME}:${JIRA_TOKEN}`).toString('base64')}`

    if (body && headers['Content-Type'] === 'application/json') {
      body = JSON.stringify(body)
    }

    const state = {
      req: {
        method,
        headers,
        body,
        url,
      },
    }

    try {
      await this.client(state)
    } catch (error) {
      delete state.req.headers

      throw Object.assign(new Error('Jira API error'), state, { originalError: error })
    }

    return state.res.body
  }
}


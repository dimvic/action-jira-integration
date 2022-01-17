module.exports = {
  expand: 'renderedFields,names,schema,operations,editmeta,changelog,versionedRepresentations,customfield_10010.requestTypePractice',
  id: '10006',
  self: 'https://unhgr.atlassian.net/rest/api/2/issue/10006',
  key: 'UNH-3',
  fields: {
    statuscategorychangedate: '2022-01-14T19:57:38.467+0200',
    issuetype: {
      self: 'https://unhgr.atlassian.net/rest/api/2/issuetype/10007',
      id: '10007',
      description: 'A small, distinct piece of work.',
      iconUrl: 'https://unhgr.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium',
      name: 'Task',
      subtask: false,
      avatarId: 10318,
      hierarchyLevel: 0
    },
    parent: {
      id: '10005',
      key: 'UNH-2',
      self: 'https://unhgr.atlassian.net/rest/api/2/issue/10005',
      fields: {
        summary: 'Epic 1',
        status: {
          self: 'https://unhgr.atlassian.net/rest/api/2/status/10003',
          description: '',
          iconUrl: 'https://unhgr.atlassian.net/',
          name: 'To Do',
          id: '10003',
          statusCategory: {
            self: 'https://unhgr.atlassian.net/rest/api/2/statuscategory/2',
            id: 2,
            key: 'new',
            colorName: 'blue-gray',
            name: 'To Do'
          }
        },
        priority: {
          self: 'https://unhgr.atlassian.net/rest/api/2/priority/3',
          iconUrl: 'https://unhgr.atlassian.net/images/icons/priorities/medium.svg',
          name: 'Medium',
          id: '3'
        },
        issuetype: {
          self: 'https://unhgr.atlassian.net/rest/api/2/issuetype/10000',
          id: '10000',
          description: 'A big user story that needs to be broken down. Created by Jira Software - do not edit or delete.',
          iconUrl: 'https://unhgr.atlassian.net/images/icons/issuetypes/epic.svg',
          name: 'Epic',
          subtask: false,
          hierarchyLevel: 1
        }
      }
    },
    timespent: null,
    project: {
      self: 'https://unhgr.atlassian.net/rest/api/2/project/10001',
      id: '10001',
      key: 'UNH',
      name: 'Unhooked',
      projectTypeKey: 'software',
      simplified: false,
      avatarUrls: {
        '48x48': 'https://unhgr.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403',
        '24x24': 'https://unhgr.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=small',
        '16x16': 'https://unhgr.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=xsmall',
        '32x32': 'https://unhgr.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10403?size=medium'
      }
    },
    fixVersions: [],
    aggregatetimespent: null,
    resolution: null,
    resolutiondate: null,
    workratio: -1,
    watches: {
      self: 'https://unhgr.atlassian.net/rest/api/2/issue/UNH-3/watchers',
      watchCount: 1,
      isWatching: false
    },
    issuerestriction: { issuerestrictions: {}, shouldDisplay: false },
    lastViewed: '2022-01-14T23:11:48.071+0200',
    created: '2022-01-14T19:57:37.915+0200',
    customfield_10020: null,
    customfield_10021: null,
    customfield_10022: null,
    customfield_10023: null,
    priority: {
      self: 'https://unhgr.atlassian.net/rest/api/2/priority/3',
      iconUrl: 'https://unhgr.atlassian.net/images/icons/priorities/medium.svg',
      name: 'Medium',
      id: '3'
    },
    customfield_10024: null,
    customfield_10025: null,
    labels: [],
    customfield_10016: null,
    customfield_10017: null,
    customfield_10018: {
      hasEpicLinkFieldDependency: false,
      showField: false,
      nonEditableReason: {
        reason: 'PLUGIN_LICENSE_ERROR',
        message: 'The Parent Link is only available to Jira Premium users.'
      }
    },
    customfield_10019: '0|i00013:',
    aggregatetimeoriginalestimate: null,
    timeestimate: null,
    versions: [],
    issuelinks: [],
    assignee: null,
    updated: '2022-01-14T23:12:17.071+0200',
    status: {
      self: 'https://unhgr.atlassian.net/rest/api/2/status/10003',
      description: '',
      iconUrl: 'https://unhgr.atlassian.net/',
      name: 'To Do',
      id: '10003',
      statusCategory: {
        self: 'https://unhgr.atlassian.net/rest/api/2/statuscategory/2',
        id: 2,
        key: 'new',
        colorName: 'blue-gray',
        name: 'To Do'
      }
    },
    components: [],
    timeoriginalestimate: null,
    description: 'Epic 1 task 1 description\n' +
      '\n' +
      '*this is bold*\n' +
      '\n' +
      '+this is underline+\n' +
      '\n' +
      '_this is italics_\n' +
      '\n' +
      'done',
    customfield_10010: null,
    customfield_10014: 'UNH-2',
    customfield_10015: null,
    timetracking: {},
    customfield_10005: null,
    customfield_10006: null,
    security: null,
    customfield_10007: null,
    customfield_10008: null,
    attachment: [],
    aggregatetimeestimate: null,
    customfield_10009: null,
    summary: 'Epic 1 task 1',
    creator: {
      self: 'https://unhgr.atlassian.net/rest/api/2/user?accountId=61e19e52e7637900688c1dff',
      accountId: '61e19e52e7637900688c1dff',
      avatarUrls: {
        '48x48': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '24x24': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '16x16': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '32x32': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png'
      },
      displayName: 'Dimitrios Vichos',
      active: true,
      timeZone: 'Europe/Athens',
      accountType: 'atlassian'
    },
    subtasks: [],
    reporter: {
      self: 'https://unhgr.atlassian.net/rest/api/2/user?accountId=61e19e52e7637900688c1dff',
      accountId: '61e19e52e7637900688c1dff',
      avatarUrls: {
        '48x48': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '24x24': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '16x16': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png',
        '32x32': 'https://secure.gravatar.com/avatar/8da0340875c9ecb0ff4362a0f6578bed?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDV-0.png'
      },
      displayName: 'Dimitrios Vichos',
      active: true,
      timeZone: 'Europe/Athens',
      accountType: 'atlassian'
    },
    customfield_10000: '{}',
    aggregateprogress: { progress: 0, total: 0 },
    customfield_10001: null,
    customfield_10002: null,
    customfield_10003: null,
    customfield_10004: null,
    environment: null,
    duedate: null,
    progress: { progress: 0, total: 0 },
    comment: {
      comments: [],
      self: 'https://unhgr.atlassian.net/rest/api/2/issue/10006/comment',
      maxResults: 0,
      total: 0,
      startAt: 0
    },
    votes: {
      self: 'https://unhgr.atlassian.net/rest/api/2/issue/UNH-3/votes',
      votes: 0,
      hasVoted: false
    },
    worklog: { startAt: 0, maxResults: 20, total: 0, worklogs: [] }
  }
}

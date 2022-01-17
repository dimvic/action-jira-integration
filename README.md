For options see [action.yml](./action.yml)

```yml
name: Jira integration
on:
  pull_request:
    types: [ opened, edited, synchronize, reopened ]

jobs:

  jira_integration:
    name: JIRA integration
    runs-on: ubuntu-latest
    steps:
      - name: JIRA integration
        uses: dimvic/action-jira-integration@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          jira-username: ${{ secrets.JIRA_USERNAME }}
          jira-token: ${{ secrets.JIRA_TOKEN }}
          jira-base-url: https://unhgr.atlassian.net
          jira-project-key-regexp: 'UNH'
          pr-enforce-issue-type-regexp: 'true'
          pr-update-title: 'true'
          pr-update-description: 'true'
          pr-issue-code-regexp: '^\[(\w+[_-]\d+)\]'
          pr-skip-base-ref-regexp: '^deploy/'
          pr-skip-head-ref-regexp: ''
          pr-skip-user-regexp: 'dimvic'
```

Heavily inspired by [cakeinpanic/jira-description-action](https://github.com/cakeinpanic/jira-description-action)

import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Form from './Form'

test('render component', () => {
    const repos = [
        {
            "id": 368830066,
            "node_id": "MDEwOlJlcG9zaXRvcnkzNjg4MzAwNjY=",
            "name": "automationGeneralitatWeb",
            "full_name": "l0g0l/automationGeneralitatWeb",
            "private": false,
            "owner": {
                "login": "l0g0l",
                "id": 74728521,
                "node_id": "MDQ6VXNlcjc0NzI4NTIx",
                "avatar_url": "https://avatars.githubusercontent.com/u/74728521?v=4",
                "gravatar_id": "",
                "url": "https://api.github.com/users/l0g0l",
                "html_url": "https://github.com/l0g0l",
                "followers_url": "https://api.github.com/users/l0g0l/followers",
                "following_url": "https://api.github.com/users/l0g0l/following{/other_user}",
                "gists_url": "https://api.github.com/users/l0g0l/gists{/gist_id}",
                "starred_url": "https://api.github.com/users/l0g0l/starred{/owner}{/repo}",
                "subscriptions_url": "https://api.github.com/users/l0g0l/subscriptions",
                "organizations_url": "https://api.github.com/users/l0g0l/orgs",
                "repos_url": "https://api.github.com/users/l0g0l/repos",
                "events_url": "https://api.github.com/users/l0g0l/events{/privacy}",
                "received_events_url": "https://api.github.com/users/l0g0l/received_events",
                "type": "User",
                "site_admin": false
            },
            "html_url": "https://github.com/l0g0l/automationGeneralitatWeb",
            "description": null,
            "fork": false,
            "url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb",
            "forks_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/forks",
            "keys_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/teams",
            "hooks_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/hooks",
            "issue_events_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/issues/events{/number}",
            "events_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/events",
            "assignees_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/assignees{/user}",
            "branches_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/branches{/branch}",
            "tags_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/tags",
            "blobs_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/languages",
            "stargazers_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/stargazers",
            "contributors_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/contributors",
            "subscribers_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/subscribers",
            "subscription_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/subscription",
            "commits_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/contents/{+path}",
            "compare_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/merges",
            "archive_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/downloads",
            "issues_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/issues{/number}",
            "pulls_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/labels{/name}",
            "releases_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/releases{/id}",
            "deployments_url": "https://api.github.com/repos/l0g0l/automationGeneralitatWeb/deployments",
            "created_at": "2021-05-19T10:28:24Z",
            "updated_at": "2021-05-20T07:10:36Z",
            "pushed_at": "2021-05-20T07:10:33Z",
            "git_url": "git://github.com/l0g0l/automationGeneralitatWeb.git",
            "ssh_url": "git@github.com:l0g0l/automationGeneralitatWeb.git",
            "clone_url": "https://github.com/l0g0l/automationGeneralitatWeb.git",
            "svn_url": "https://github.com/l0g0l/automationGeneralitatWeb",
            "homepage": null,
            "size": 51,
            "stargazers_count": 0,
            "watchers_count": 0,
            "language": "JavaScript",
            "has_issues": true,
            "has_projects": true,
            "has_downloads": true,
            "has_wiki": true,
            "has_pages": false,
            "forks_count": 0,
            "mirror_url": null,
            "archived": false,
            "disabled": false,
            "open_issues_count": 0,
            "license": null,
            "forks": 0,
            "open_issues": 0,
            "watchers": 0,
            "default_branch": "main"
        }
    ]
    const component = render(<Form repos={repos} />)



})
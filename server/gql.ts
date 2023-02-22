export function discussionsGql(ghDiscussionCategoryId: string | undefined) {
  return `{
        repository(name: "blog", owner: "D121216") {
            discussions(first: 10, categoryId: "${ghDiscussionCategoryId}") {
              nodes {
                title
                url
                bodyHTML
                bodyText
                createdAt
                number
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
    }`;
}

export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(name: "blog", owner: "D121216") {
      discussion(number: ${postId}) {
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }
  `;
}

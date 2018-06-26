# apollo-tutorial-kit

*foked from https://github.com/apollographql/apollo-tutorial-kit. See changes at [CHANGELOG](https://github.com/legend80s/apollo-tutorial-kit/blob/master/CHANGELOG.md).*

Starting point for the Apollo GraphQL Server tutorial.

Follow along with the tutorial in the blog post: [How to build a GraphQL server](https://medium.com/apollo-stack/tutorial-building-a-graphql-server-cddaa023c035#.wy5h1htxs). If you want to skip ahead to the solution, check out the [server-tutorial-solution](https://github.com/apollographql/apollo-tutorial-kit/tree/server-tutorial-solution) branch of this repo.

Up-to-date documentation and explanations can be found in the [Apollo Server docs](https://www.apollographql.com/docs/apollo-server/)

## Getting started

```bash
git clone https://github.com/legend80s/apollo-starter-kit
cd apollo-starter-kit
npm install
npm start
```

Then open [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

When you paste this on the left side of the page:

```graphql
{
  apps(size: 5) {
    id
    group {
      id
      name
    }
    type
    status
    created
    updated
    owner {
      id
      username
    }
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "apps": [
      {
        "id": "xxxxxxxxx1",
        "group": {
          "id": "xxxxxxxxx2",
          "name": "app_name"
        },
        "type": 3,
        "status": 1,
        "created": 1530015000,
        "updated": 1530015380,
        "owner": {
          "id": "xx",
          "username": "hello"
        }
      },
      {
        "id": "xxxxxxxxx3",
        "group": {
          "id": "xxxxxxxxx4",
          "name": "app_name"
        },
        "type": 3,
        "status": 1,
        "created": 1530015000,
        "updated": 1530015330,
        "owner": {
          "id": "yy",
          "username": "world"
        }
      }
    ]
  }
}
```

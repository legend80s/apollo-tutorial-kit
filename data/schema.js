const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
type Query {
  app(id: String): App
  apps(id: String, groupName: String, ownerId: String, page: Int, size: Int): [App]
}

type Group {
  name: String
  id: String
}

type Owner {
  id: String
  username: String
  email: String

  aliyun_status: Int
  aliyun_status_updated: Int
  aliyun_user_id: String
  aliyun_bid: String
  client_id: String
  client_secret: String
  discount: Int
  type: Int
  created: Int
  updated: Int
}

type App {
  id: String
  group: Group
  type: Int
  status: Int
  created: Int
  updated: Int
  owner: Owner
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;

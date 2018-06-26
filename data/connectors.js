const fetch = require('../lib/fetch');
const querystring = require('querystring');

const HOST = 'http://opensearch-dev.aliyuncs.com';
const INNER_API_PREFIX = 'v3/innerapi';
const INNERAPI_ENDPOINT = `${HOST}/${INNER_API_PREFIX}`

const App = {
  /**
   * Search for a single App by its ID
   * @param {String} id
   */
  async findById(id) {
    const url = `${INNERAPI_ENDPOINT}/apps/${id}`;

    app = await fetch(url);

    // 假装没有返回 owner 的详情，让 resolver 自己去获取
    app.owner = { id: app.owner.id }

    return app;
  },

  find({ groupName, ownerId, ...otherParams }) {
    const queries = [];

    const others = querystring.stringify(otherParams);

    groupName && (queries.push(`group[name]=${groupName}`));
    ownerId && (queries.push(`owner[id]=${ownerId}`));

    const url = `${INNERAPI_ENDPOINT}/apps?${queries.join('&')}` + (others ? `&${others}` : '');
    
    return fetch(url)
      // 假装没有返回 owner 的详情，让 resolver 自己去获取
      // rest 操作符必须 node +10.2.1
      .then(apps => apps.map(app => ({
        ...app,
        owner: { id: app.owner.id },
      })));
  },
};

const Owner = {
  findById: (id) => fetch(`${INNERAPI_ENDPOINT}/users/${id}`),
};

module.exports = {
  App,
  Owner,
};

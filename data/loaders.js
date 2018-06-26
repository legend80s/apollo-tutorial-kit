const DataLoader = require('dataloader');
const { Owner } = require('./connectors');

const ownerLoader = new DataLoader(
  keys => Promise.all(keys.map(Owner.findById))
);

const loaders = {
  owner: ownerLoader,
};

module.exports = loaders;

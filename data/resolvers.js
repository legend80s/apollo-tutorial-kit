const { App, Owner } = require('./connectors');

const resolvers = {
  Query: {
    app(root, args) {
      return App.findById(args.id);
    },

    apps(root, args) {
      return App.find(args);
    }
  },

  App: {
    owner(app, args, { loaders }) {
      // console.log('app.owner:', app.owner);
      // console.log('args:', args);
      // console.log('loaders:', loaders);
      return loaders.owner.load(app.owner.id);
      // return Owner.findById(app.owner.id)
    }
  },
};

module.exports = resolvers;

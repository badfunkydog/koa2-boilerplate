import User from './../models/User';

export default (router) => {
  router
    .get('/users', async (ctx) => {
      ctx.body = await User.find({});
    })
    .post('/users', async (ctx) => {
      ctx.status = 501;
    })
    .get('/users/:id', async (ctx) => {
      const user = await User.findById(ctx.params.id);
      if (user) ctx.body = user;
    })
    .put('/users/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/users/:id', async (ctx) => {
      const user = await User.findByIdAndRemove(ctx.params.id);
      if (user) ctx.status = 204;
    });
};

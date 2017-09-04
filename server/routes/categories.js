import Category from './../models/Category';

export default (router) => {
  router
    .get('/categories', async (ctx) => {
      ctx.body = await Category.find({});
    })
    .post('/categories', async (ctx) => {
      ctx.status = 501;
    })
    .get('/categories/:id', async (ctx) => {
      const category = await Category.findById(ctx.params.id);
      if (category) ctx.body = Category;
    })
    .put('/categories/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/categories/:id', async (ctx) => {
      const category = await Category.findByIdAndRemove(ctx.params.id);
      if (category) ctx.status = 204;
    });
};

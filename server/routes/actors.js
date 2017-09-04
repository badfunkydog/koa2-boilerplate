import Actor from './../models/Actor';

export default (router) => {
  router
    .get('/actors', async (ctx) => {
      ctx.body = await Actor.find({});
    })
    .post('/actors', async (ctx) => {
      ctx.status = 501;
    })
    .get('/actors/:id', async (ctx) => {
      const actor = await Actor.findById(ctx.params.id);
      if (actor) ctx.body = Actor;
    })
    .put('/actors/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/actors/:id', async (ctx) => {
      const actor = await Actor.findByIdAndRemove(ctx.params.id);
      if (actor) ctx.status = 204;
    });
};

import Topic from './../models/Topic';

export default (router) => {
  router
    .get('/topics', async (ctx) => {
      ctx.body = await Topic.find({});
      // TODO: populate with last message (content, user, actor)
    })
    .post('/topics', async (ctx) => {
      ctx.status = 501;
    })
    .get('/topics/:id', async (ctx) => {
      const topic = await Topic.findById(ctx.params.id);
      if (topic) ctx.body = Topic;
    })
    .put('/topics/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/topics/:id', async (ctx) => {
      const topic = await Topic.findByIdAndRemove(ctx.params.id);
      if (topic) ctx.status = 204;
    });
};

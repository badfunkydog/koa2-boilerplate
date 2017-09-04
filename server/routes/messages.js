import Message from './../models/Message';

export default (router) => {
  router
    .get('/messages', async (ctx) => {
      ctx.status = 501;
    })
    .post('/messages', async (ctx) => {
      ctx.status = 501;
    })
    .get('/messages/:id', async (ctx) => {
      ctx.status = 501;
    })
    .put('/messages/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/messages/:id', async (ctx) => {
      const message = await Message.findByIdAndRemove(ctx.params.id);
      if (message) ctx.status = 204;
    });
};

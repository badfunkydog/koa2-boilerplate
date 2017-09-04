import Board from './../models/Board';

export default (router) => {
  router
    .get('/boards', async (ctx) => {
      ctx.body = await Board.find({});
      // TODO: populate categories
    })
    .post('/boards', async (ctx) => {
      ctx.status = 501;
    })
    .get('/boards/:id', async (ctx) => {
      const board = await Board.findById(ctx.params.id);
      if (board) ctx.body = Board;
    })
    .put('/boards/:id', async (ctx) => {
      ctx.status = 501;
    })
    .delete('/boards/:id', async (ctx) => {
      const board = await Board.findByIdAndRemove(ctx.params.id);
      if (board) ctx.status = 204;
    });
};

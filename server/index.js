import Koa from 'koa';
import middleware from './middleware';
import config from './../constants/server.json';

const app = new Koa();
const PORT = process.env.PORT ? process.env.PORT : config.DEFAULT_PORT;

app.use(middleware());

app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(PORT, () => {

});

export default app;

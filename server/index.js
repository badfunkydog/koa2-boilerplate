import Koa from 'koa';
import Router from 'koa-router';

import compose from 'koa-compose';
import convert from 'koa-convert';
import logger from 'koa-logger';
import helmet from 'koa-helmet';
import cors from 'koa-cors';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';

import importDir from 'import-dir';

const app = new Koa();
const router = new Router();
const routes = importDir('./routes');

Object.keys(routes).forEach(name => routes[name](router));

const SESSION_CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. **/
};

// middleware
app.use(
  compose([
    logger(),
    helmet(),
    convert(cors()),
    convert(bodyParser()),
    session(SESSION_CONFIG, app),
  ]),
);

// auth

// routes
app.use(
  compose([
    router.routes(),
    router.allowedMethods(),
  ]),
);

export default app;

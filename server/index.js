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

import ROUTER_CONFIG from './../constants/router.json';
import SESSION_CONFIG from './../constants/session.json';

const app = new Koa();
const router = new Router(ROUTER_CONFIG);
const routes = importDir('./routes');

Object.keys(routes).forEach(name => routes[name](router));

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

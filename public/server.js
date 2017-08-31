import app from './../server';
import config from './../constants/server.json';
// import { connectDatabase } from './../server/db';

const port = process.env.PORT || config.DEFAULT_PORT;

(async () => {
  try {
    // const info = await connectDatabase(development);
    // console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
  } catch (error) {
    // console.error('Unable to connect to database');
  }

  try {
    await app.listen(port);
    console.log(`Server started on port ${port}`);
  } catch (error) {
    console.log(error);
  }
})();

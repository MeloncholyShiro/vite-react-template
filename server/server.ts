import fastify from 'fastify';

const app = fastify();

// your beautiful code...

app.route({
  method: 'GET',
  url: '/',
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      name: { type: 'string' },
    },
    // the response needs to be an object with an `hello` property of type 'string'
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' },
        },
      },
    },
  },
  // this function is executed for every request before the handler is executed
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => ({ hello: 'world' }),
});

const start = async () => {
  try {
    await app.listen(3000);
  } catch (error) {
    app.log.error(error);
    throw new Error("Can't start server");
  }
};

start();

export const viteNodeApp = app;

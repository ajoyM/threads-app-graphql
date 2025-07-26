import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

async function init() {
const PORT = Number(process.env.PORT) || 7000;
const app = express();

app.use(express.json());

const server = new ApolloServer({
  typeDefs: `
    type Query {
      hello: String
      say(name: String): String
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hello World!',
      say: (_, { name }: { name: String }) => `Hey ${name}, How are you`,
    },
  },
});

await server.start()

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    })
});

app.use('/graphql', expressMiddleware(server))

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})
}

init();
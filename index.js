// const graphqlYoga = require('graphql-yoga'); //오래된 코드 => babel-node로 좀더 좋게 바꿀수 있음(import 형식으로)
import { GraphQLServer } from "graphql-yoga";
import resolvers from './graphql/resolvers'
 
const server = new GraphQLServer({
    typeDefs:"./graphql/schema.graphql",
    resolvers
})

server.start(()=>console.log('GraphQL Server Running'))
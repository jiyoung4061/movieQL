import { getMovies,getById } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movies: (_, { id }) => getById(id),
  },
};

export default resolvers;

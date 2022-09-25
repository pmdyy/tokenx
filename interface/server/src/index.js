require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: process.env.PG_HOST,
  database: 'postgres',
  password: process.env.PG_PASSWORD,
  port: 9700,
});

const typeDefs = gql`
  type Query {
    blocks(number: Int): [Block]
  }

  type Block {
    number: Int
    hash: String
    parent_hash: String
    nonce: String
    sha3_uncles: String
    logs_bloom: String
    transactions_root: String
    state_root: String
    receipts_root: String
    miner: String
    difficulty: Int
    total_difficulty: Float
    size: Int
    extra_data: String
    gas_limit: Int
    gas_used: Int
    timestamp: Int
    transaction_count: Int
    base_fee_per_gas: Int
  }
`;

const resolveFunctions = {
  Query: {
    blocks: async (_, { number }) => {
      const res = await pool.query(
        `SELECT * FROM blocks WHERE number = ${number}`
      );
      return res.rows;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers: resolveFunctions });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

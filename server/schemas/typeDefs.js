const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Tech {
    _id: ID
    name: String
}

type Matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Number
    tech2_votes: Number
}

type Query {
    techs: [Tech]!
    tech( name: String! ): Tech
}

type Mutation {
    addMatchup( tech1: String!, tech2: String! ): Matchup
    addVotes(matchup_id: ID!, tech1_votes: String!, tech2_votes: String!): Matchup
}
`

module.exports = typeDefs;
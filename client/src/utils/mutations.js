import { gql } from '@apollo/client';

export const ADD_MATCHUP = gql`
  mutation addMatchup($tech1: String!, $tech2: String!) {
    addMatchup(tech1: $tech1, tech2: $tech2) {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
  }
`;

export const ADD_VOTE = gql`
  mutation addVote($matchup_id: ID!, $tech1_votes: Number!, $tech2_votes: Number!) {
    addVote(matchup_id: $matchup_id, tech1_votes: $tech1_votes, tech2_votes: $tech2_votes) {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
  }
`;

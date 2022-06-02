import { gql } from '@apollo/client';

export const QUERY_TECHS = gql`
    query techs {
        _id
        name
    }
`;

export const QUERY_MATCHUP = gql`
    query matchup($_id: ID!) {
        matchup(_id: $_id) {
            _id
            tech1
            tech2
            tech1_votes
            tech2_votes
        }
    }
`;

export const QUERY_MATCHUPS = gql`
    query matchups {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
`;

// export const QUERY_VOTES = gql`

// `
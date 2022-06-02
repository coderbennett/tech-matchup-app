const { Tech, Matchup } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        techs: async () => {
            return Tech.find();
        },
        tech: async (parent, { name }) => {
            return Tech.findOne({ name });
        },
        matchups: async () => {
            return Matchup.find();
        },
        matchup: async (parent, { matchup_id }) => {
            return Matchup.findOne({ _id: matchup_id});
        } 
    },

    Mutation: {
        addMatchup: async (parent, { tech1, tech2 }) => {
            const matchup = await Matchup.create({ tech1, tech2 });
            return { matchup };
        },
        addVotes: async (parent, { matchup_id, tech1_votes, tech2_votes}) => {
            const matchup = await Matchup.findOneAndUpdate(
                { _id: matchup_id },
                {
                    $set: {
                        tech1_votes,
                        tech2_votes
                    }
                },
                { new: true }
            );
            return matchup;
        }
    }
};

module.exports = resolvers;
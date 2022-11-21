const Reg = require('../mongoose/register');

const resolvers = {

    Query: {

        hello: () => {
            return "Hello this is query"
        },
        
        getallRe: async () => {
            const r = await Reg.find();
            return r;
        }

    },

    Mutation: {

        addRe: async (_, {username, email, birthday, password, confirmPassword}) => {
            const r = new Reg({username, email, birthday, password, confirmPassword});
            await r.save();
            return r;
        }

    }

 

    
   
}

module.exports = resolvers;
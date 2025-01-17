const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

//put these in .env
const secret = 'secretplaceholder';
const expiration = '2h';

module.exports = {
    AuthenticationError: new GraphQLError('Could not authenticate user.', {
        extensions: {
            code: 'UNAUTHENTICATED',
        },
    }),

    authMiddleware: function ({req}) {
        let token = req.body.token || req.query.token || req.headers.authorization;

        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if (!token) {
            return req;
        }

        try {
            const { authenticatedPerson } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = authenticatedPerson;
        } catch {
            console.log('Invalid token');
        }

        return req;
    },

    signToken: function ({ email, userName, _id }) {
        const payload = { email, userName, _id};
        return jwt.sign({ authenticatedPerson: payload }, secret, { expiresIn: expiration });
    }
}
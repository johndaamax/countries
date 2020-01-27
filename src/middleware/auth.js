const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-token-auth');

    if(!token)
        return res.status(401).json({message: 'Failed to find token. Unauthorized!'})

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
        req.user = decodedToken.user;
        next();
    } catch (error) {
        res.status(401).json({message: 'Token is not valid!'})
    }
};
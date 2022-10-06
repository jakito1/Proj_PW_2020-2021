const jwt = require('jsonwebtoken');
const config = require('../JWTconfig');

/**
 * Function to verify the JSON web token
 * 
 * @param {Object} req Request
 * @param {Object} res Response
 * @param {Function} next Next function
 */
async function verifyToken(req, res, next) {
    try{
        let token = req.headers.cookie;
        if (!token){
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }      
        token = req.headers.cookie.replace('token=','');  
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err){
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });  
            }
            req.userEmail = decoded.id;
            next();
        });
    }catch (err) {
        console.log(err);
    }

}

module.exports = verifyToken;
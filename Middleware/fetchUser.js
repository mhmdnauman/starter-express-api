const jwt = require("jsonwebtoken");
const JWT_SECRET = "Helloo!!Youarecute$#@";

const fetchUser = (req, res, next) =>{

    //Get the user from JWT token and add id to req object

    const token = req.body.AuthToken;
    if(!token){
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
    try {
     
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();   
    } catch (error) {
        res.status(401).send({error: "Please Authenticate using a valid token"});
    }
}

module.exports = fetchUser;
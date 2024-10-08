const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
    const headerAuth = req.headers.token
    // console.log(req.headers.token);
    if (headerAuth) {
        const token = headerAuth.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
            if (err) return res.status(404).json("your not valid")
            req.user = user;
            next();
        })
    } else {
        return res.status(404).json("your not authenticated..!")
    }
};




const verifyTokenAndAutharization = (req, res, next) => {
    verifyToken(req, res, () => {
        console.log("..",req.user);
        if (req.user.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(404).json("you are not allowed to do that...🚫🚫🚫")
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            return res.status(404).json("your not allowed that ...🚫🚫🚫")
        };
    })
};

module.exports = {
    verifyToken,
    verifyTokenAndAdmin,
    verifyTokenAndAutharization
}
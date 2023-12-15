const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) throw new Error('Invalid username or password');

        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
}

const checkToken = (req, res) => {
    // req.user will always be there for you when a token is sent
    console.log('req.user', req.user);
    res.json(req.exp);
}

function createJWT(user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h' }
    );
}


module.exports = {
    create,
    login,
    checkToken
};


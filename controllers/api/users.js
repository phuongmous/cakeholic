const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../../models/user');

const create = async (req, res) => {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        console.error(err);
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

const getInfo = async (req, res) => {
    try {
      const user = await User.findOne(req.body.user);
      res.json(user);
    } catch (error) {
      console.error('Error fetching user information:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
};

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
    getInfo,
    checkToken  
};


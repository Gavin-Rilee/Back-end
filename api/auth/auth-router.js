const router = require("express").Router()
const bcryptjs = require("bcryptjs")
const Users = require("../users/model")

const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

const makeToken = (user) => {
  const payload = {
    subject: user.username,
  };
  const options = {
    expiresIn: '1h',
  };
  return jwt.sign(payload, secret, options);
};

const { isValidRegister, isValidLogin, generateToken } = require("./auth-middleware")

router.post("/register", async (req, res, next) => {
  const credentials = req.body

  if (isValidRegister(credentials)) {
    const rounds = 10
    credentials.password = bcryptjs.hashSync(credentials.password, rounds)

    try {
      const { username } = credentials
      const user = await Users.findBy({ username })

      if (!user) {
        try {
          const data = await Users.add(credentials)
          return res.status(200).json(data)
        } catch (err) {
          next(err)
        }
      } else {
        res.status(400).json(credentials)
      }
    } catch (err) {
      next(err)
    }
  } else {
    res.status(400).json("Username, first_name, last_name, email, password and role required")
  }
})

router.post("/login", async (req, res, next) => {
  const credentials = req.body

  if (isValidLogin(credentials)) {
    try {
      const { username, password } = credentials
      const user = await Users.findBy({ username })
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = makeToken(user)
        return res.status(200).json({ message: `Welcome, ${username}`, token, user})
      } else {
        res.json("Invalid username or password")
      }
    } catch (err) {
      next(err)
    }
  } else {
    res.status(400).json("Username and password required")
  }
})

module.exports = router

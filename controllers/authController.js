'use strict';
import jwt from 'jsonwebtoken';
import passport from '../utils/pass';

const login = (req, res) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      console.log('login', err, user, info);
      if (err || !user) {
        res.status(400).send('');
        return;
      }
      req.login(user, { session: false }, (err) => {
        if (err) {
          res.status(400).send('');
          return;
        }
        const token = jwt.sign(req.user, process.env.JWT_SECRET);
        res.json({ message: 'Welcome!', user: req.user, token: token });
      });
    })(req, res);
  };
  

export { login };

"use strict";
import passport from "passport";
import Strategy from "passport-local";
import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { getUserLogin } from "../models/userModel";

passport.use(
  new Strategy(async (username, password, done) => {
    const params = username;
    try {
      const user = await getUserLogin(params);
      if (user === undefined) {
        return done(null, false, { message: "Incorrect email." });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, { user }, { message: "Logged In Successfully" });
    } catch (err) {
      return done(err);
    }
  })
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (payload, done) => {
      console.log("jwt payload", payload);
      done(null, payload);
    }
  )
);

export default passport;

'use strict';
import express from 'express';
import passport from '../utils/pass';
import { station_get, station_list_get, station_post, station_edit, station_del } from '../controllers/stationController';

const router = express.Router();

router.get('/', station_list_get);

router.get('/:id', station_get);

router.post('/', station_post);

router.put('/edit', passport.authenticate('jwt', {session: false}), station_edit);

router.delete('/:id', passport.authenticate('jwt', {session: false}), station_del);

export default router;

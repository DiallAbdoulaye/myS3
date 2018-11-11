import { Router } from 'express';
import passport from 'passport'
import users from './user';
import buckets from './bucket'
import auth from './auth';

const api = Router();

api.get('/', (req, res) => {
    res.json({ hello: 'one.code' });
});

api.use('/users', passport.authenticate('jwt', { session : false }), users);
api.use('/users/:uuid/buckets',buckets)
api.use('/auth', auth);

export default api;

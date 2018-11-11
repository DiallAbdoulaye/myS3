import { Router } from 'express';
import Bucket from "../models/bucket";

let api = Router();

api.post('/', async (req, res) => {
    try {
        const { uuid } = req.params;
        const { name } = req.params;

        const bucket = new Bucket({name, user_uuid: uuid});
        //Filesystem -> create directrory -> name
        //fileSystem dans lib ----> createBucket
        // /opt/workspace/myS3/$user_uuid/$name

        await bucket.save();

        res.status(201).json(bucket)
    } catch (err) {
        res.status(400).json({ err : err.message })
    }
})


export default api;

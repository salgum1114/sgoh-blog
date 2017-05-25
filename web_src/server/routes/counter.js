import express from 'express';

export default function counter() {
    function getIP(req) {
        return req.connection.remoteAddress.split(":").pop();
    }

    const router = express.Router();

    router.post('/', (req, res) => {
        return res.json({number: req.body.number});
    })

    return router;
};

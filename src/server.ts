import {Request, Response} from "express";

const express = require('express');

import {getRoversList} from "./controllers";
import {getRoverPhotos} from "./controllers";

const router = express.Router();
const app = express();
const port = 8000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Test backend is running on port ${port}`);
});

app.use('/', router);

router.get('/test', (req: Request, res: Response) => res.send('Hello world !'));

router.get('/rovers', getRoversList);

router.get('/rovers/:roverName/photos/:cameraType', getRoverPhotos);

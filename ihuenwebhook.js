'use strict';

import express from 'express';

const app = express().use(express.json()); // creates http server

const token = 'VERIFICATION_TOKEN'; // type your verification token here

app.post('/', (req, res) => {

    // check if verification token is correct

    if (req.query.token !== token) {

        return res.sendStatus(401);

    }

    // print request body

    console.log(req.body);

    // return a text response

    const data = {

        responses: [

            {

                type: 'randomText',

                messages: ['Hi', 'Hello']

            }

        ]

    };

    res.json(data);

});

// app.listen() part should always be located in the last line of your code

app.listen(3000, () => console.log('[ChatBot] Webhook is listening'));
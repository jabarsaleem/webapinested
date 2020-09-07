const express = require('express');

const bodyparser = require('body-parser');


const mongoose = require('mongoose');

const promos = require('../models/promos');
const { findById } = require('../models/promos');

const PromoRouter = express.Router();

PromoRouter.use(bodyparser.json());

PromoRouter.route('/')
ß

    .get((req, res, next) => {
        promos.find({})
            .then((promos) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promos);

            }, (err) => next(err))
            .catch((err) => next(err));

    })

    .put((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .post((req, res, next) => {
        promos.create(req.body)
            .then((promo) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promo);

            }, (err) => next(err))
            .catch((err) => next(err));


    })

    .delete((req, res, next) => {

        promos.remove({})
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);

            }, (err) => next(err))
            .catch((err) => next(err));

    });
PromoRouter.route('/:promoid')

    .get((req, res, next) => {

        promos.findById(req.params.promoid).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);

        }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req, res, next) => {
        promos.findByIdAndRemove(req.params.promoid).then((reps) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(reps);

        }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req, res, next) => {

        res.statusCode = 403;
        res.end("this operation is invaild");

    })
    .put((req, res, next) => {

        promos.findByIdAndUpdate(req.params.promoid, { $set: req.body }, { new: true }).then((promo) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(promo);

        }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = PromoRouter;
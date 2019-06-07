var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var app = express();
var Knex = require('knex');
const knexConfig = require('./knexfile');

const { Model } = require('objection');



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const knex = Knex(knexConfig.development);
Model.knex(knex);

app.get('/test/get', function (req, res) {
    knex.select().from('studentinfo').then(function (studentinfo) {
        res.send(studentinfo);
    })
})

app.post('/test/post', function (req, res) {
    let data = req.body;
    knex('studentinfo').insert(data)
        .then(function () {
            knex.select().from('studentinfo').then(function (studentinfo) {
                res.send(studentinfo);
            })

        })
})

app.put('/test/put/:id', function (req, res) {
    let data = req.body;
    knex('studentinfo').where('id', req.params.id)
        .update(data)
        .then(function () {
            knex.select()
                .from('studentinfo')
                .then(function (studentinfo) {
                    res.send(studentinfo);
                })
        })
})


app.delete('/test/delete/:id', function (req, res) {
    knex('studentinfo').where('id', req.params.id)
        .del()
        .then(function () {
            knex.select()
                .from('studentinfo')
                .then(function (studentinfo) {
                    res.send(studentinfo);
                })
        })
})




app.listen(port, function () {
    console.log("listening on port:", port);
})
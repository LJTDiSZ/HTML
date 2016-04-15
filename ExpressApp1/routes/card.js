﻿var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    var cardDesign = global.dbHelper.getModel('carddesign');
    cardDesign.find({}, "_id user template meta", function (error, cds) {
        res.render('cdhome', { title: 'Card Home', products: cds });
    });
});

router.get('/:id', function (req, res) {
    res.render('cdview', { title: 'Card View', cdid: req.params.id });
});

router.get('/:id/fore', function (req, res) {
    var bgfileSample = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\1\\1.sample.jpg";
    var Canvas = require('canvas'), Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
    var img = new Image;
    img.src = bgfileSample;
    ctx.drawImage(img, 0, 0);
    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);


    //var cardDesign = global.dbHelper.getModel('carddesign');
    //cardDesign.findOne({ _id: req.params.id }, "logo cardJson", function (error, cd) {
    //    //console.log(cd.template);
    //    var Canvas = require('canvas'), Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
    //    var bgfileArr = cd.cardJson.fore.bgfile.split("/");
    //    var bgfile = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\" + bgfileArr[3] + "\\" + bgfileArr[5];

    //    var bgfileSample = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\" + bgfileArr[3] + "\\" + bgfileArr[3] + ".sample.jpg";
    //    res.sendFile(bgfileSample);

    //    var img = new Image;
    //    img.src = bgfile;
    //    ctx.drawImage(img, 0, 0);

    //    //ctx.font = '30px Impact';
    //    //ctx.rotate(.1);
    //    //ctx.fillText("Awesome!", 50, 100);
    //    ////ctx.fillText(cd.template.objectId, 100, 100);
        
    //    //var te = ctx.measureText('Awesome!');
    //    //ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    //    //ctx.beginPath();
    //    //ctx.lineTo(50, 102);
    //    //ctx.lineTo(50 + te.width, 102);
    //    //ctx.stroke();

    //    //res.setHeader('Content-Type', 'image/png');
    //    //canvas.pngStream().pipe(res);
    //});
});
router.get('/:id/back', function (req, res) {
    //var cardDesign = global.dbHelper.getModel('carddesign');
    //cardDesign.findOne({ _id: req.params.id }, function (error, cd) {
    //    console.log(cd.template);
    //});

    //var Canvas = require('canvas'), Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
    //ctx.font = '30px Impact';
    //ctx.rotate(.1);
    //ctx.fillText("Awessfgsfghdfghome!", 50, 100);
    ////ctx.fillText(cd.template.objectId, 100, 100);
       
    //res.setHeader('Content-Type', 'image/jpeg');
    //canvas.jpegStream({
    //    bufsize: 4096,
    //    quality: 100,
    //    progressive: false
    //}).pipe(res);


    var Canvas = require('canvas'), Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
        ctx.font = '30px Impact';
        ctx.rotate(.1);
        ctx.fillText("Awesome!", 50, 100);
        
        //var te = ctx.measureText('Awesome!');
        //ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        //ctx.beginPath();
        //ctx.lineTo(50, 102);
        //ctx.lineTo(50 + te.width, 102);
        //ctx.stroke();

        res.setHeader('Content-Type', 'image/jpeg');
        canvas.jpegStream().pipe(res);
});

module.exports = router;
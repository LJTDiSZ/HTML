var express = require('express');
var path = require('path');
var fs = require('fs');
var Canvas = require('canvas');
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
    //var bgfileSample = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\1\\1.sample.jpg";
    var bgfileSample = "/Users/Jun/Documents/WEB/gitlab/cardserver/design/1/1.sample.jpg";
    var logofile = "/Users/Jun/Documents/WEB/LOGO.jpg";

    var Image = Canvas.Image, canvas = new Canvas(800, 500), ctx = canvas.getContext('2d');
    var img = new Image;
    img.src = logofile;
    ctx.drawImage(img, 0, 0, 800, 500);
    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);
    //
    //fs.readFile(bgfileSample, function(err, data){
    //    if (err) throw err;
    //
    //    //res.setHeader('Content-Type', 'image/jpeg');
    //    //res.end(data);
    //
    //    var img = new Canvas.Image;
    //    //img.dataMode = Canvas.Image.MODE_IMAGE | Canvas.Image.MODE_MIME;
    //    img.onload = function(){
    //        console.log(img.width + ":" + img.height);
    //
    //        var canvas = new Canvas(img.width, img.height);
    //        var ctx = canvas.getContext('2d');
    //        ctx.drawImage(img, 0, 0, img.width /4, img.height /4);
    //
    //        res.setHeader('Content-Type', 'image/jpeg');
    //        canvas.jpegStream({
    //            quality: 100
    //        }).pipe(res);
    //
    //        //canvas.toDataURL('image/jpeg', 1, function(err, jpeg){
    //        //    //console.log(jpeg);
    //        //    res.write('<html><body>HI<br/>');
    //        //    res.write('<img src="' + jpeg + '" />');
    //        //    res.write('</body></html>');
    //        //    res.end();
    //        //    //res.setHeader('Content-Type', 'image/jpeg');
    //        //    //res.end(jpeg);
    //        //});
    //    };
    //    img.onerror = function(err){console.log('Error:');console.log(err);}
    //    img.src = data;
    //
    //    //res.setHeader('Content-Type', 'image/png');
    //    //canvas.pngStream().pipe(res);
    //
    //});

    //var Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
    //ctx.fillStyle = '#ccc';
    //ctx.fillRect(0,0,200,200);
    //ctx.font = '30px Impact';
    //ctx.rotate(.1);
    //ctx.fillStyle = '#000';
    //ctx.fillText("Awesome!", 50, 100);
    //
    //var te = ctx.measureText('Awesome!');
    //ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    //ctx.beginPath();
    //ctx.lineTo(50, 102);
    //ctx.lineTo(50 + te.width, 102);
    //ctx.stroke();
    //
    //res.setHeader('Content-Type', 'image/jpeg');
    //canvas.jpegStream({
    //            quality: 100
    //        }).pipe(res);

            //canvas.toDataURL('image/jpeg', 1, function(err, jpeg){
            //    //console.log(jpeg);
            //    res.write('<html><body>HI<br/>');
            //    res.write('<img src="' + jpeg + '" />');
            //    res.write('</body></html>');
            //    res.end();
            //    //res.setHeader('Content-Type', 'image/jpeg');
            //    //res.end(jpeg);
            //});
    //
    //var gm = require('gm');//.subClass({imageMagick: true});
    ////gm(bgfileSample)
    //gm(525, 400, "#ccc")
    //    .fontSize(48)
    //    //.font("Arial.ttf")
    //    .stroke("#efe", 2)
    //    .fill("#555")
    //    .drawText(20, 72, "graphics")
    //    .fill("#fa0")
    //    .drawText(204, 72, " magick")
    //    //.write(global.appRoot + '/public/imgs/new.png', function(err){
    //    //    if (err) return console.dir(arguments)
    //    //    console.log(this.outname + ' created  :: ' + arguments[3])
    //    //    if (err) console.log(err);
    //    //});
    //    .quality(100)
    //    .stream('jpeg').pipe(res);


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


    var Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
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
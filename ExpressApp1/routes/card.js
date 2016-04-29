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
    // Office Windows
    var bgfileSample = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\1\\1.sample.jpg";
    var logofile = "D:\\Work\\Tongyi\\income\\模版1\\LOGO.jpg";
    var tmpfile = "D:\\Work\\Tongyi\\income\\模版1\\tmp.jpg";
    
    //MAC
    //var bgfileSample = "/Users/Jun/Documents/WEB/gitlab/cardserver/design/1/1.sample.jpg";
    //var logofile = "/Users/Jun/Documents/WEB/LOGO.jpg";
    //var tmpfile = "/Users/Jun/Documents/WEB/tmp.jpg";
    
    //Ubuntu
    // var bgfileSample = "/home/jun/Documents/design/1/1.sample.jpg";
    // var logofile = "/home/jun/Documents/design/LOGO.jpg";
    // var tmpfile = "/home/jun/Documents/design/tmp.jpg";

    // var Image = Canvas.Image, canvas = new Canvas(800, 500), ctx = canvas.getContext('2d');
    // var img = new Image;
    // img.src = logofile;
    // ctx.drawImage(img, 0, 0, 800, 500);
    // res.setHeader('Content-Type', 'image/png');
    // canvas.pngStream().pipe(res);
    
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
    var gm = require('gm');//.subClass({imageMagick: true});
    // gm(bgfileSample)
    //     .geometry('+500+150')
    //     .composite(logofile)
    // // gm(525, 400, "#ccc")
    // //    .fontSize(48)
    // //    //.font("Arial.ttf")
    // //    .stroke("#efe", 2)
    // //    .fill("#555")
    // //    .drawText(20, 72, "graphics")
    // //    .fill("#fa0")
    // //    .drawText(204, 72, " magick")
    // //    .draw('image over 500,100 0,0 ' + logofile)
    //    //.write(global.appRoot + '/public/imgs/new.png', function(err){
    //    //    if (err) return console.dir(arguments)
    //    //    console.log(this.outname + ' created  :: ' + arguments[3])
    //    //    if (err) console.log(err);
    //    //});
    //    .quality(100)
    //    .stream('jpeg').pipe(res);
    
    // gm().command("composite")
    // .in("-gravity", "center")
    // .in("/home/jun/Documents/design/l3.jpg")
    // .in("/home/jun/Documents/design/l2.jpg")
    
    gm(logofile).resize(100, 100, "!").write(tmpfile, function(er){
        if (er){
            console.log("failed to resize logo");
            console.log(er);
        }    
    
        gm(bgfileSample)
            .composite(tmpfile)
            .geometry('+500+180')
            .write(tmpfile, function(err) {
                if (err) {
                    console.log("failed to write tmpfile.");
                    console.log(err);
                    return;
                }
                
                gm(tmpfile)
                    .font("MingLiU").fontSize(48).fill("red").drawText(400, 72, "grap方正硬笔行书简体hics")
                    .font("msyh").fontSize(24).fill("blue").drawText(400, 120, " mag中华人民共和国ick")
                    .font("simkai").fontSize(36).fill("blue").drawText(400, 144, " mag中华人董事长民共和国ick")
                    .font("sursong").fontSize(48).fill("red").drawText(400, 180, "grap方正硬笔行书简体hics")
                    .quality(100)
                    .stream('jpeg').pipe(res);
            });
    });
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
    var bgfileSample = "D:\\Work\\Tongyi\\gitlab\\cardserver\\design\\1\\1.sample.jpg";
    // var cardDesign = global.dbHelper.getModel('carddesign');
    // cardDesign.findOne({ _id: req.params.id }, function (error, cd) {
    //    console.log(cd.template);console.log(cd._id);
    //    var lgdata = cd.logo.fore.file.replace(/^data:image\/\w+;base64,/, '');
    //    var lgbuf = new Buffer(lgdata, 'base64');
    //    var gm = require('gm');
    //    gm(lgbuf)
    //     .quality(100)
    //     .stream('jpeg').pipe(res);
    // });

    //var company = global.dbHelper.getModel('company');
    //company.findOne({ _id: '5722cc1404a720b81de36f3a' }, function (error, c) {
    //   console.log(c.cname);console.log(c._id);
    //   var lgdata = c.logo;
    //   var lgbuf = new Buffer(lgdata, 'base64');
    //   //var gm = require('gm');
    //   //gm(lgbuf)
    //   // .quality(100)
    //    // .stream('jpeg').pipe(res);

    //    //res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    //    //res.end(lgdata);

    //    res.contentType('image/jpeg');
    //    res.end(lgdata);
    //});


    var company = global.dbHelper.getModel('companyDesign');
    company.findOne({ _id: req.params.id }, function (error, c) {
        console.log(c.companyId); console.log(c._id);
        var lgdata = c.fore.file;
        var lgsdata = c.fore.sampleFile;
        var lgbuf = new Buffer(lgdata, 'base64');
        var lgsbuf = new Buffer(lgsdata, 'base64');
        var gm = require('gm');
        //gm(lgbuf, "1.jpg")
        //    .quality(100)
        //    .stream('jpeg').pipe(res);
        gm(lgsbuf, '1.jpg').size(function (err, value) {
            if (value) {
                console.log(value);
            }
            console.log(this);
            this.quality(100).stream('jpeg').pipe(res);
        });
        console.log("done.");
    });

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


    // var Image = Canvas.Image, canvas = new Canvas(200, 200), ctx = canvas.getContext('2d');
    //     ctx.font = '30px Impact';
    //     ctx.rotate(.1);
    //     ctx.fillText("Awesome!", 50, 100);
        
    //     //var te = ctx.measureText('Awesome!');
    //     //ctx.strokeStyle = 'rgba(0,0,0,0.5)';
    //     //ctx.beginPath();
    //     //ctx.lineTo(50, 102);
    //     //ctx.lineTo(50 + te.width, 102);
    //     //ctx.stroke();

    //     res.setHeader('Content-Type', 'image/jpeg');
    //     canvas.jpegStream().pipe(res);
    
    // var bgfileSample = "/home/jun/Documents/design/1/1.sample.jpg";
    // var logofile = "/home/jun/Documents/design/LOGO.jpg";
    // var gm = require('gm');//.subClass({imageMagick: true});
    // // gm(bgfileSample)
    // gm(525, 400, "#fff")
    //    .fontSize(48)
    //    //.font("Arial.ttf")
    //    .stroke("#efe", 2)
    //    .fill("#555")
    //    .drawText(20, 72, "graphics")
    //    .fill("#fa0")
    //    .drawText(204, 72, " magick")
    //    .draw('image Over 100,100 0,0 ' + logofile)
    //    .quality(100)
    //    .stream('jpeg').pipe(res);
});

module.exports = router;
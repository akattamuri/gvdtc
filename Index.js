//AIzaSyCiU8vZ_QQQXb660jtFlfIxmnA5D87YySg

const Dark_tire_url = 'https://storage.googleapis.com/ocr_storage/Dark_tire_image.JPG';
const Brigh_tire_url = 'https://storage.googleapis.com/ocr_storage/Bright_tire_image.JPG';
const veh_title_url = 'https://storage.googleapis.com/ocr_storage/Veh_Title.JPG';



var single = require('./singlereq');

single(Dark_tire_url, function (){
    console.log("first image processed");
});
single(Brigh_tire_url, function (){
    console.log("second image processed");
});

single(Brigh_tire_url, function (){
    console.log("third image processed");
});
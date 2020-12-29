console.log('serverrrrrrr fileeeee')
const express = require("express");
const path = require("path");
const history = require("connect-history-api-fallback");
// const jobList = require("./jobList.json");
// const jobDetails = require("./jobDetails.json");

const app = express();

const staticFileMiddleware = express.static(path.join(__dirname, "../dist"));

app.get("/api/joblist", function(req, res) {
  res.status(jobList.statusCode);
  res.json(jobList.result);
});

app.get("/api/jobdetail/:id", function(req, res) {
  switch (req.params.id) {
    case "1":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "2":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "3":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "4":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
    case "5":
      res.status(jobDetails[req.params.id - 1].statusCode);
      res.json(jobDetails[req.params.id - 1].result);
      break;
  }
});

app.use(history());
app.use(staticFileMiddleware);

const port = 8000;

app.listen(port, function() {
  console.log("App now running on port", port);
});

const jobDetails =
[
  {
  "version":"1.0", "statusCode":200, 
  "result":{
    "jobId":"1", "positionName":"Jandarma Bölge Komutanı", "companyName":"Vosyoyvsyvosyv", "durationDay":0,
    "durationDayText":"Taze çıktı!", "imageUrl":"https://localhost/bluecollar/company/job/Default/6.jpg", "countryCode":"TR",
    "countryName":"Turkey",
    "cityName":"İstanbul",
    "townName":"Ümraniye",
    "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey", "postalCode":34768,
    "hasLatitude":true,
    "hasLongitude":true,
    "latitude":41.0266502,
    "longitude":29.1157803,
    "description":"syovsvyosvyoyvsoby",
    "status":1,
    "contactPhone":{
      "countryCallingCode":"+90", "areaCode":"879", "number":"9797979"
     } 
  }
},
{
  "version":"1.0", "statusCode":200, 
  "result":{
    "jobId":"2", "positionName":"Pozisyon 2", "companyName":"Sirket 2", "durationDay":0,
    "durationDayText":"Taze çıktı!", "imageUrl":"https://localhost/bluecollar/company/job/Default/6.jpg", "countryCode":"TR",
    "countryName":"Turkey",
    "cityName":"İstanbul",
    "townName":"Ümraniye",
    "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey", "postalCode":34768,
    "hasLatitude":true,
    "hasLongitude":true,
    "latitude":41.0266502,
    "longitude":29.1157803,
    "description":"syovsvyosvyoyvsoby",
    "status":1,
    "contactPhone":{
      "countryCallingCode":"+90", "areaCode":"879", "number":"9797979"
     } 
  }
},
{
  "version":"1.0", "statusCode":200, 
  "result":{
    "jobId":"3", "positionName":"Pozisyon 3", "companyName":"Sirket 3", "durationDay":0,
    "durationDayText":"Taze çıktı!", "imageUrl":"https://localhost/bluecollar/company/job/Default/6.jpg", "countryCode":"TR",
    "countryName":"Turkey",
    "cityName":"İstanbul",
    "townName":"Ümraniye",
    "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey", "postalCode":34768,
    "hasLatitude":true,
    "hasLongitude":true,
    "latitude":41.0266502,
    "longitude":29.1157803,
    "description":"syovsvyosvyoyvsoby",
    "status":1,
    "contactPhone":{
      "countryCallingCode":"+90", "areaCode":"879", "number":"9797979"
     } 
  }
},
{
  "version":"1.0", "statusCode":200, 
  "result":{
    "jobId":"4", "positionName":"Pozisyon 4", "companyName":"Sirket 4", "durationDay":0,
    "durationDayText":"Taze çıktı!", "imageUrl":"https://localhost/bluecollar/company/job/Default/6.jpg", "countryCode":"TR",
    "countryName":"Turkey",
    "cityName":"İstanbul",
    "townName":"Ümraniye",
    "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey", "postalCode":34768,
    "hasLatitude":true,
    "hasLongitude":true,
    "latitude":41.0266502,
    "longitude":29.1157803,
    "description":"syovsvyosvyoyvsoby",
    "status":1,
    "contactPhone":{
      "countryCallingCode":"+90", "areaCode":"879", "number":"9797979"
     } 
  }
},
{
  "version":"1.0", "statusCode":200, 
  "result":{
    "jobId":"5", "positionName":"Pozisyon 5", "companyName":"Sirket 5", "durationDay":0,
    "durationDayText":"Taze çıktı!", "imageUrl":"https://localhost/bluecollar/company/job/Default/6.jpg", "countryCode":"TR",
    "countryName":"Turkey",
    "cityName":"İstanbul",
    "townName":"Ümraniye",
    "address":"Saray Mahallesi Site Yolu Sokak No:7 34768 Ümraniye/İstanbul Turkey", "postalCode":34768,
    "hasLatitude":true,
    "hasLongitude":true,
    "latitude":41.0266502,
    "longitude":29.1157803,
    "description":"syovsvyosvyoyvsoby",
    "status":1,
    "contactPhone":{
      "countryCallingCode":"+90", "areaCode":"879", "number":"9797979"
     } 
  }
}
]

const jobList =
{
  "version":"1.0", "statusCode":200, 
  "result":{
    "items":[ 
      {
      "jobId":"1", "positionName":"Gerber Operatörü", "companyName":"Testoğlu Lahmacun Pide Ve Kebap", "durationDay":0,
      "durationDayText":"Taze çıktı!",
      "imageUrl":"http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg",
      "distance":"8,53 km yakınında", "latitude":41.050968170166023, "longitude":29.062856674194339, "cityName":"İstanbul", "townName":"Çengelköy Mahallesi"
      },
      {
      "jobId":"2", "positionName":"Pozisyon 2", "companyName":"Sirket 2", "durationDay":0,
      "durationDayText":"Taze çıktı!",
      "imageUrl":"http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg",
      "distance":"8,53 km yakınında", "latitude":41.050968170166023, "longitude":29.062856674194339, "cityName":"İstanbul", "townName":"Çengelköy Mahallesi"
      },
      {
      "jobId":"3", "positionName":"Pozisyon 3", "companyName":"Sirket 3", "durationDay":0,
      "durationDayText":"Taze çıktı!",
      "imageUrl":"http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg",
      "distance":"8,53 km yakınında", "latitude":41.050968170166023, "longitude":29.062856674194339, "cityName":"Ağrı", "townName":"Çengelköy Mahallesi"
      },
      {
      "jobId":"4", "positionName":"Pozisyon 4", "companyName":"Sirket 4", "durationDay":0,
      "durationDayText":"Taze çıktı!",
      "imageUrl":"http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg",
      "distance":"8,53 km yakınında", "latitude":41.050968170166023, "longitude":29.062856674194339, "cityName":"Ankara", "townName":"Çengelköy Mahallesi"
      },
      {
      "jobId":"5", "positionName":"Pozisyon 5", "companyName":"Sirket 5", "durationDay":0,
      "durationDayText":"Taze çıktı!",
      "imageUrl":"http://localhost/bluecollar/Company/Job/000/000/000/avatar/ 13920170713010155805.jpg",
      "distance":"8,53 km yakınında", "latitude":41.050968170166023, "longitude":29.062856674194339, "cityName":"İzmir", "townName":"Çengelköy Mahallesi"
      } 
    ],
    "total":5 
  }
}
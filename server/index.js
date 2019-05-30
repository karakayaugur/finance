const path = require('path');
const express = require('express');
const http = require('http');
const axios = require('axios');
const morgan=require('morgan');
const bodyParser = require("body-parser");
const app = express();
const appServer = http.createServer(app);


const cors = require('cors');

app.use(cors());

let config = {
    port: process.env.PORT || 3000,
};

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.resolve(__dirname, '../client')));

app.post('*/api/*', (req, res) => {
    const apiMapping = [
        { key: '/api/user/login', value: 'api/v3/merchant/user/login' },
        { key: '/api/transactions/report', value: 'api/v3/transactions/report' },
        { key: '/api/transaction/list', value: 'api/v3/transaction/list' },
        { key: '/api/transaction', value: 'api/v3/transaction' },
        { key: '/api/client', value: 'api/v3/client' }
    ]
    
    const endpoint = apiMapping.find(item => item.key === req.url)

    if (!endpoint) return res.status(400).send(req.url)

    requestURL = `https://sandbox-reporting.rpdpymnt.com/${endpoint.value}`;
    const headers = req.headers.authorization ? { headers: { "Authorization": req.headers.authorization } } : null

    axios.post(
        requestURL,
        { ...req.body },
        { ...headers }
    )
        .then(response => res.send(response.data))
        .catch(err => {
            console.log(err);
            res.status(400).send()
        })
});

app.use("/", express.static(path.join(__dirname, "./../client/dist")));
app.use("/*", express.static(path.join(__dirname, "./../client/dist")));
 
var startServer = function () {
    appServer.listen(config.port, (req, res) => {
        console.log(`Finance server is listening on ${config.port}`);
    });
}

setImmediate(startServer);
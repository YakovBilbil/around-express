const setNoCacheHeaders = (req, res, next) => {
    res.header({
        "Cache-Control": "no-store"
    });
    next();
};

module.exports = {
    setNoCacheHeaders
};



//////////////////////////// CORS /////////////////



// an array of allowed domains
const allowedOrigins = [
    'https://around.nomoreparties.co',
    'http://around.nomoreparties.co',
    'http://localhost:3000'
];

app.use(function(req, res, next) {
    const { origin } = req.headers; // assign the corresponding header to the origin variable

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');

    if (allowedOrigins.includes(origin)) { // check that the origin value is among the allowed domains
        res.header('Access-Control-Allow-Origin', origin);
    }

    // Respond to preflight OPTIONS requests
    if (req.method === 'OPTIONS') {
        res.send()
    } else {
        next();
    }
});




/*
The cors Package
For convenience, you can also use the npm install cors package to set the headers for you. The configuration is simple:
*/
const cors = require("cors");
// Place this before any routes
const allowedOrigins = [
    "https://around.nomoreparties.co",
    "http://around.nomoreparties.co",
    "http://localhost:3000", // Use the port your frontend is served on
];
app.use(cors({ origin: allowedOrigins }));
var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

app.all('/*', function(req , res ) {
    res.send('\
        <!DOCTYPE html>\
        <html>\
            <head>\
                <title>Performance Web Results DB</title>\
            </head>\
            <body>\
                <h1>Welcome to Perfrmance DB</h1>\
            </body>\
        </html>\
    ');
});


app.listen(PORT, function() {
    console.log('Server Running on '+ PORT);

});

var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

app.all('/*', function(req , res ) {
    res.send('\
        <!DOCTYPE html>\
        <html>\
            <head>\
                <base href="/">\
                <title>Moshe</title>\
               \
            </head>\
            <body>\
                <div ui-view></div>\
                <script src="bundle.js"></script>\
            </body>\
        </html>\
    ');
});


app.listen(PORT, function() {
    console.log('\n\n\nServer Running on '+ PORT+"\n\n\n");
});

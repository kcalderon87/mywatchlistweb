// server.js, Heroku will autostart this when found
var express = require('express'),
    app = express();
app.use(express.static('www'));
console.log("port:", process.env.PORT);
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
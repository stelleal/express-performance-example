// CLUSTERING WITH PM2

// CLI :
// pm2 start server-pm2.js -i max

const express = require('express');

const app = express();

function delay(duration) {
	const startTime = Date.now();
	while (Date.now() - startTime < duration) {
		//event loop is blocked...
	}
}
// JSON.stringify({}) => "{}"
// JSON.parse("{}") => {}
// [5,1,3,2,4].sort()
// crypto.

app.get('/', (req, res) => {
	res.send(`Performance example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
	//delay the response
	delay(4000);
	res.send(`Beep beep beep! ${process.pid}`);
});


console.log('Running the server...');
console.log('Worker process started.');
app.listen(3000);

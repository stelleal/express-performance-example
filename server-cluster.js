// CLUSTERING

const express = require('express');
const cluster = require('cluster');
const os = require('os');

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
	delay(9000);
	res.send(`Ding ding ding!: ${process.pid}`);
});

const numCPUs = os.cpus().length;
console.log('Running the server...');

if (cluster.isPrimary) {
	console.log(`Master has been started... using logical cores: ${numCPUs}`);

	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	console.log('Worker process started.');
	app.listen(3000);
}

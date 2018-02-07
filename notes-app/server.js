const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

const notes = [
	{
		title: 'Sample Note Title #1',
		body: 'Description #1'
	},
	{
		title: 'Sample Note Title #2',
		body: 'Description #2'
	},
	{
		title: 'Sample Note Title #3',
		body: 'Description #3'
	}
];

app.use(bodyParser.json());

app.use(cors());

app.get('/api/notes/get', (req, res) => {
	res.send(notes);
});

app.post('/api/notes/create', (req, res) => {
	notes.push(req.body);
	res.send(notes);
});

app.put('/api/notes/update', (req, res) => {
	const index = req.body.index;
	notes[index] = req.body.update;
	res.send(notes);
});

app.delete('/api/notes/delete', (req, res) => {
	const indes = req.body.index;
	notes.splice(index, 1);
	res.send(notes);
});

app.listen(port, () => {
	console.log(`server listening on port ${port}`);
});
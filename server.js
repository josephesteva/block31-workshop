// store data from DB in a variable using require
// use app.get with res.send and the variable to create an endpoint for displaying the pet data


// pass parameter into a method that loops through the array and returns an object where the name matches the parameter

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Test'));

const petsData = require('./data.js');

app.get('/api/v1/pets', (req, res) => {
	res.send(petsData)
});

app.get('/api/v1/pets/:name', (req, res) => {
	const petName = req.params.name;
	const singlePet = petsData.find((pet) => {
		if (pet.name === petName) {
			return true;
		}
	})
	res.send(singlePet);
});

app.get('api/v1/pets/owner-query', (req, res) => {
	const ownerName = req.query.name;
	// res.send(ownerPets);
	res.send(ownerName);
});

const PORT = 8080;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
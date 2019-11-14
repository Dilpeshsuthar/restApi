const express = require('express');

const app = express();
const joi = require('joi');
app.use(express.json());

const movies = [{
        id: 1,
        name: "Harry Potter and the Order of the Phoenix",
        Imageurl: "https: //bit.ly/2IcnSwz",
        Summery: "Harry Potter and Dumbledores warning about the return of Lord Voldemort is not heeded by the wizard authorities who, in turn, look to undermine Dumbledores authority at Hogwarts and discredit Harry"
    },
    {
        id: 2,
        name: 'The Lord of the Rings: The Fellowship of the Ring',
        Imageurl: "https://bit.ly/2tC1Lcg",
        Summery: 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.nd the universe'
    }
];
//Get Request
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/movies', (req, res) => {
    res.send(movies);
});
//Post Request
app.post('/api/movies', (req, res) => {
    const schema = {
        name: joi.string().min(3).required()
    };
    const result = joi.validate(req.body, schema);

    if (result.error) {
        //404Bad
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const movies = {
        id: movies.length + 1,
        name: req.body.name
    };
    movies.push(movie);
    res.send(movie);
});

app.put('/api/movies/:id', (req, res) => {
    //Put code ..
})
//Get Request By Id
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(c => c.id === parseInt(req.params.id));
    if (!movie) res.status(404).send('This Id is was Not Found')
    res.send(res.movies);
});


app.delete('/api/movies/:id', (req, res) => {
    //Delete Code..
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}..`));
import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 23
    }
]

// GET Method
router.get('/', (req, res) => {
    console.log(users);

    res.send(users);
});

// Post Method
router.post('/', (req, res) => {
   
    // New User Object data
    const user = req.body;

    // creates and adds new user to List
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
});


// Get Specific User Method
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((users) => user.id === id);

    res.send(foundUser);

});

// Delete Method
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database.`);
});

// Update Method
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName , age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated.`);
});

export default router;
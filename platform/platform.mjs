const fsPromises = require('fs').promises;
const path = require('path');
const express = require('express');

const { PORT = 3000, BASE_PATH } = process.env;
const app = express();

app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;

    fsPromises.readFile(path.join(__dirname, 'users.json'))
        .then((data) => {
            const users = JSON.parse(data);
            const user = users.find(item => item.userId === userId);

            if (user) {
                res.send(user);
                return;
            } else {
                res.status(404).send({
                    "message": "There is no such user"
                });
            }
        })

    .catch(() => {
        res.status(500).send({
            "message": "An error occurred on the server"
        });
    });

});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log('Link to the server');
    console.log(BASE_PATH);
});
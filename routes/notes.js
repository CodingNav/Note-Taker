const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        let parsedData = JSON.parse(data);
        parsedData = parsedData.map((val, index) => {
            return {
                id: index + 1,
                title: val.title,
                text: val.text
            };
        });
        res.json(parsedData);
    });
});

router.post('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        const parsedData = JSON.parse(data);
        parsedData.push(req.body);
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(parsedData), (err) => {
            res.json(parsedData);
        });
    });
});


module.exports = router;
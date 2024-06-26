const express = require('express');
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});


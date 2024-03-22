//Dale Martin
//CMSC 100

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

//This parses json files
app.use(express.json());

//This method is a POST method to add book
app.post('/add-book', (req, res) => {
    const { bookName, isbn, author, yearPublished } = req.body;

    // checker for all fields
    if (!bookName || !isbn || !author || !yearPublished) {
        return res.json({ success: false });
    }

    // this function creates strings for the requested book details
    const bookDetails = `${bookName},${isbn},${author},${yearPublished}\n`;

    // Append book details to books.txt
    fs.appendFile('books.txt', bookDetails, (err) => {
        if (err) {
            console.error(err);
            return res.json({ success: false });
        }
        console.log('Book added successfully:', bookDetails);
        return res.json({ success: true });
    });
});
//app.get('/find-by-author', (req, res) => {
    //const { author } = req.query;
   //fs.readFile('books.txt', 'utf8', (err, data) => {
       // if (err) {
           // console.error(err);
           // return res.json({ success: false });
       // }
       // const lines = data.split('\n');
       // const booksByAuthor = [];
       // for (let line of lines) {
       //     const [bookName, isbn, bookAuthor, yearPublished] = line.split(',');
       //     if (bookAuthor === author) {
       //         booksByAuthor.push({ bookName, isbn, author: bookAuthor, yearPublished });
       //     }
      //  }

// GET method to find book details by ISBN and Author
app.get('/find-by-isbn-author', (req, res) => {
    const { isbn, author } = req.query;
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ success: false });
        }
        const lines = data.split('\n');
        for (let line of lines) {
            const [bookName, bookIsbn, bookAuthor, yearPublished] = line.split(',');
            if (bookIsbn === isbn && bookAuthor === author) {
                return res.json({ bookName, isbn, author, yearPublished, success: true });
            }
        }
        return res.json({ success: false });
    });
});

// GET method to find book details by Author
app.get('/find-by-author', (req, res) => {
    const { author } = req.query;
    fs.readFile('books.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.json({ success: false });
        }
        const lines = data.split('\n');
        const booksByAuthor = [];
        for (let line of lines) {
            const [bookName, isbn, bookAuthor, yearPublished] = line.split(',');
            if (bookAuthor === author) {
                booksByAuthor.push({ bookName, isbn, author: bookAuthor, yearPublished });
            }
        }
        if (booksByAuthor.length === 0) {
            return res.json({ success: false });
        }
        return res.json({ booksByAuthor, success: true });
    });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

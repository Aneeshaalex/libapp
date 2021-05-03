const express =  require('express');
const booksRouter = express.Router();
const bodyParser = require('body-parser');

function router(navv){
    var books = [
        {
            title: 'Tom and Jerry',
            author: 'Joseph Barbera',
            genre: 'Cartoon',
            img: 'tom.jpg'
        },
        {
            title: 'Turbulence And Triumph The Modi Years',
            author: 'Rahul Agarwal, Bharathi S Pradhan',
            genre: 'Biography',
            img: 'modi.jpg'
        },
        {
            title: 'The Namesake',
            author: 'Jhumpa Lahiri',
            genre: 'Drama',
            img: 'namesake.jpg'
        },
        {
            title: 'The Girl in Room 105',
            author: 'Chetan Bhagat',
            genre: 'Mystery, Thriller',
            img: 'girl.jpg'
        }
    ]

    booksRouter.use(bodyParser.urlencoded({ extended: true }));
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            navv,
             title: 'Library',
            books
            });
    });
    booksRouter.post('/', function(req,res){
        var book = { title : req.body.title, author : req.body.author, genre : req.body.genre, img : req.body.img};
        books.push(book);
        res.render("books", 
        {
            navv,
            title: 'Library App',
            books
        });
    })
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render("book",{
            navv,
            title: 'Library',
            book: books[id]
    
    
        })
    })
    return booksRouter;

}


module.exports = router;
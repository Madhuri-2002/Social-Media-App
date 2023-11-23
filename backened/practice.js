const obj = {
    "library": {
      "name": "City Library",
      "location": "123 Main Street, Cityville",
      "books": [
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "publication_year": 1925,
          "genre": "Classic"
        },
        {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "publication_year": 1960,
          "genre": "Fiction"
        },
        {
          "title": "1984",
          "author": "George Orwell",
          "publication_year": 1949,
          "genre": "Dystopian"
        },
        {
          "title": "The Hobbit",
          "author": "J.R.R. Tolkien",
          "publication_year": 1937,
          "genre": "Fantasy"
        },
        {
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "publication_year": 1951,
          "genre": "Coming of Age"
        }
      ]
    }
  }

const v = obj.library.books
console.log("cfvgh");
const l=v.map(({genre,title})=>{
 return {title}
})
console.log(l);
  
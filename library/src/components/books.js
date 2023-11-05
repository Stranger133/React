import Book from "./Book";
import data from "../resources/booksData.json";

const Books = (props) => {
    return (
        <>
            <section id="books">
                <h1>My Books</h1>
                <div id="container-books">
                    {data.map(book => {
                        return(
                            <div className="book" key={book.isbn}>
                                <Book  title={book.title} isbn={book.isbn} author={book.author}/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
};

export default Books;
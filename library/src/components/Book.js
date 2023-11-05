const Book = (props) => {
    return(
        <>
            <div><img src={props.isbn === null? "https://www.theacademicpapers.co.uk/wp-content/uploads/2022/11/icon27.png" : "https://covers.openlibrary.org/b/isbn/" + props.isbn + "-L.jpg"} alt={props.title} className="cover animate"/></div>
            <div className="title"><a href={"https://www.goodreads.com/search?utf8=%E2%9C%93&q="+ props.title +"&search_type=books"} target="_blank" rel="noreferrer">{props.title}</a></div>
            <div className="author">{props.author}</div>
        </>
    )
}

export default Book;
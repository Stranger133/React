const currentlyReading = (props) => {
    return (
        <>
            <section id="current">
                <h1>Currently Reading</h1>
                <div id="container-current" >
                    <div id="current-img"><img src={props.isbn === null? "https://www.theacademicpapers.co.uk/wp-content/uploads/2022/11/icon27.png" : "https://covers.openlibrary.org/b/isbn/" + props.isbn + "-L.jpg" } alt="Cover" className="cover animate"/></div>
                    <div id="contain-description">
                        <div>
                            <div>Title:</div>
                            <div className="title"><a href={"https://www.goodreads.com/search?utf8=%E2%9C%93&q="+ props.title +"&search_type=books"} target="_blank" rel="noreferrer">{props.title}</a></div>
                        </div>
                        <div>
                            <div>Author:</div>
                            <div>{props.author}</div>
                        </div>
                        <div>
                            <div>Progress:</div>
                            <div>{props.prog}%</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default currentlyReading;
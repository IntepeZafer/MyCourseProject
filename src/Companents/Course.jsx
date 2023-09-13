function Course({id , content , title , price , removoOneCourse}) {
    return ( 
        <div className="cardContainer">
            <div className="cardTitlePrice">
                <h2 className="cardTitle">{title}</h2>
                <h4 className="cardPrice">{price} TL</h4>
            </div>
            <div className="text">
                <p>{content}</p>
            </div>
            <div className="button">
                <button className="cardDeleteBtn" onClick={() => {
                    removoOneCourse(id)
                }}>Sil</button>
            </div>
        </div>
     );
}

export default Course;
function Card(){
    return(
        <div>
            <div style={{
                "border":"3px solid black",
                "height":"200px",
                "width":"200px",
                "borderRadius":"10px",
                "marginLeft":"30px",
                "background":"red"
            }}>
                <h1>PHONES</h1>
                <p>This is a modern phone</p>
                <img src="https://res.cloudinary.com/dir0f6ufp/image/upload/v1767470137/media_user/1/post_1_1767470135381_og.jpg.jpg" style={{"height":"50px","width":"100px"}} alt="Modern smartphone device displayed against a clean background"/>
            </div>
        </div>
    );
}

export default Card;
import logo from "../logo.svg"
function Images(){
 return(
    <div>
        {/* online images */}
        <img src="https://img.freepik.com/premium-psd/luxury-car-transparent-background_574412-4171.jpg?semt=ais_rp_progressive&w=740&q=80"/>
        <img src="https://res.cloudinary.com/dir0f6ufp/image/upload/v1767470137/media_user/1/post_1_1767470135381_og.jpg.jpg"/>

        {/* public */}
       <img src="/public/one.png"/>
       {/* src */}
        <img src={logo}/>
    </div>
 );
}
export default Images;
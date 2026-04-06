import "./forms.css"
import { useState } from "react";
function Forms(){
    //step 1
    const [secondform,setSecondForm]=useState({
        user_name:"",
        rollnumber:""
    });

    //step 2
    const handleChange = (e) => {
    const { name, value } = e.target;
    setSecondForm(prevState => ({
        ...prevState,
        [name]: value
    }));
};

    //step 3
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(secondform);

        //API INTEGRATION
        fetch("http://localhost:3000/api/post/Posts?action=post4",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(secondform)
        }).then(response=>response.json())
        .then(data=>console.log("Success:",data),
    alert("Form submitted successfully")
    )
        .catch(error=>console.error("Error:",error));
    }
    return(
    <div className="formdiv">
        <form className="formtag">
            <label className="forml">FIRST NAME</label>
            <input type="text" className="formi"/>
            <label className="forml">Last Name</label>
            <input type="text"  className="formi"/>
            <label className="forml">Password</label>
            <input type="password"  className="formi"/>
            <label className="forml">email</label>
            <input type="email"  className="formi"/>
            <input type="submit" className="submitbutton"/>
        </form>
        <br/>
        <div className="formdiv">
            <form className="formtag">
                <label className="forml">User Name</label>
                <input type="text" className="formi" name="user_name" value={secondform.user_name} onChange={handleChange}/>
                <label className="forml">Roll Number</label>
                <input type="Number"  className="formi" name="rollnumber" value={secondform.rollnumber} onChange={handleChange}/>
                <input type="submit" className="submitbutton" onClick={handleSubmit}/>
            </form>
        </div>
        
    </div>
    )
} export default Forms;
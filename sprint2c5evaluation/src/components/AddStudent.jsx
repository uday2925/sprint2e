import { useState} from "react";

export const AddStudent = () => {

    const [formdata,setFormdata]=useState({
        id: "",
        first_name:"" ,
        last_name:"" ,
        email:"",
        gender:"",
        age:"",
        tenth_score:"",
        twelth_score:"" ,
        preferred_branch:"",
    })
    function onchanges(e){
        setFormdata({...formdata,[e.target.name]:e.target.value});
        console.log(e.target.name,e.target.value)
    }
    

    const handlesubmit=(e)=>{
        e.preventDefault();        
        fetch('http://localhost:8080/students', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        
    }

    return (
      <form className="addstudent" onSubmit={handlesubmit}>
        <div>
          Firstname:{" "}
          <input
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
            onChange={(e)=>{onchanges(e)}}
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
            onChange={(e)=>{onchanges(e)}}
          />
        </div>
        <div>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
            onChange={(e)=>{onchanges(e)}}
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
              name="gender"
              className="male"
              type="radio"
              value={"male"}
              onChange={(e)=>{onchanges(e)}}
              required
            />{" "}
            Female{" "}
            <input
              name="gender"
              className="female"
              type="radio"
              value={"female"}
              onChange={(e)=>{onchanges(e)}}
              required
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
            onChange={(e)=>{onchanges(e)}}
            required
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
            onChange={(e)=>{onchanges(e)}}
            required
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
            onChange={(e)=>{onchanges(e)}}
            required
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
            onChange={(e)=>{onchanges(e)}}
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };
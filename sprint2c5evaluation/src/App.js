import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{setShow(!show)}}>{show?"Add a new student":"ShowStudents"}</button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {show?<ShowStudents/>:<AddStudent/>}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
import "../Mstyles/markslist.css";

function Updatemarks() {

  const [groupID, setGroupID] = useState("");
  const [Marks, setMarks] = useState("");
  const [Comments, setComments] = useState("");

const [listofmarks, setListofmarks] = useState([]);

const UpdatelistofMarks = (id) => {

  const newMark = prompt("Enter New Mark:");
  
  axios.put("http://localhost:5001/marks/update", {newMark: newMark, id: id}).then(() =>{
    setListofmarks(listofmarks.map((value) =>{
      return value._id == id ? {_id: id, groupID: value.groupID, Marks: newMark, Comments: value.Comments} : value
    }))
  })
};

const DeletelistofMarks = (id) => {
  axios.delete(`http://localhost:5001/marks/delete/${id}`).then(() =>{
    setListofmarks(listofmarks.filter((value) => {
      return value._id != id;
    }))
  })
}

useEffect(() => {

    function  getMarks(){
        axios.get("http://localhost:5001/marks").then((res) =>{
            setListofmarks(res.data);
        }).catch((err) =>{
            alert(err.message);
        })
    }
    getMarks();

}, [])


  return (
    
    <div className="listofMarks">
      <h1>Update Marks</h1>
      {listofmarks.map((value) =>{
        return(
          <div className="markContainer">
        <div key={value.id} className="mark">
          <h3>Group ID:{value.groupID}</h3>
          <h3>Grade:{value.Marks} </h3>
          <h3>Feedback:{value.Comments} </h3>
          </div>
          <button onClick={() => {
            UpdatelistofMarks(value._id)
            }}>Update</button>
          <button onClick={() => {
            DeletelistofMarks(value._id)
            }}>Delete</button>
          </div>
        );
      })}
    </div>
  )
}

export default Updatemarks
import { useEffect, useState } from "react";

export const CardVolunteer = () => {
   const [volunteers, setVolunteers]= useState([]);

   async function getVolunteers() {
    
    const response = await fetch('https://femcodersclub-project.onrender.com/volunteer');
    const data = await response.json();
    setVolunteers(data.volunteers);
   }
   useEffect(()=>{
    getVolunteers()
   },[])

  return (
    <>
    <div>
        <div>
            <h4>name</h4>
            <h4>email</h4>
            <button>editar</button>
            <button>borrar</button>
        </div>
    </div>
    </>
  )
}

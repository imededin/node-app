import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState([]);
  

   function fetchData(){
    
    
 return   fetch("/api")
// chain methods on our promise
          .then (data => data.json()) 
          .then (data => {
              setUser(data)
              console.log(data)
              })
          .catch(   (error) => {
            console.error(error)
     
             })
    }
  useEffect(() => {
     fetchData();
   },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj) => (
            <li >{userObj.email}</li>
          ))}

         
      </ul>
    </main>
  );
}

export default App;

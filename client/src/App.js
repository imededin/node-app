import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState([]);
  //alert(process.env.USER)

  //  async function fetchData(response){
  //  //https://api.github.com/users
   
  //   return  await fetch("http://localhost:5000")
  //             .then((response)=>console.log(response.json()))
  //             .then((data) => setUser(data))
  //             .catch(err=>{
  //               console.log(err)
  //             })
         
  // }

   function fetchData(){
    //console.log("/bla")
    //const API="/bla"
    const api=process.env.API
    const port=process.env.PORT1
 return   fetch("http://127.0.0.1:5000")
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
import { useEffect, useState } from 'react'
import Bootstrap from './Components/Bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function App() {
  const [currArr, updatedArr] = useState([]);
  useEffect(() => {
    getData();
  }, [])
  
  const getData = async () => {
    try {
      const data = await fetch('https://api.github.com/users');
      if (!data.ok) {
        throw new Error("Failed to fetch the data");
      }
      const jsonData = await data.json();
      updatedArr(jsonData);
    }
    catch(e){
      console.log(e);
    }
  
  }
  return (
    <>
   {/* {
    currArr.map((item)=><Bootstrap item={item}/>)
   } */}
   <Bootstrap currArr={currArr}/>
    
  </>

  )
}
export default App;
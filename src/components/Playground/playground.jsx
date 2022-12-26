import { useState, useEffect } from "react";

function Playground() {
 // const [data, setData] = useState(null);
  const [componentInput, setComponentInput] = useState("");
  const [result, setResult] = useState({
    theme: "",
    component: [{}],
  })

  async function onSubmit(event){
        event.preventDefault();
        const response = await fetch("http://localhost:3001/api", {
            headers: {
                "Content-Type": "application/json",
            }
        
        });
        const data = await response.json();
        const objResult = JSON.parse(data.result);
        setResult({
            ...result,
            theme: objResult.theme,
            component: objResult.component,
        });

        setComponentInput("");
    }

//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .then((data) => {
//         const objResult = JSON.parse(data.result); //to convert string to JSON object
//         setResult({
//             ...result,
//            theme: objResult.theme,
//            component: objResult.component,
//         });
//         console.log(result);
//     });
//   };
//   async function onSubmit(event) {
//     event.preventDefault();
//     const response = await fetch("/api/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ animal: animalInput }),
//     });
//     const data = await response.json();
//     //console.log(typeof(data.result)); // string
//     const objResult = JSON.parse(data.result); //to convert string to JSON object
//     setResult({
//         ...result,
//         slideNum: objResult.slideNum,
//         slides: objResult.slides,
//     });
//     //console.log(data.result); 
    
    
//     console.log(objResult);
//     console.log(typeof(objResult));
//     console.log(objResult.slides);
//     setAnimalInput("");
//   }
  
  return (
    <div className="Playground">
      <header className="Playground-header">
        {/* <p>{!result ? "Loading..." : result.theme}</p> */}
        Placeholder
        {/* {console.log(JSON.parse(data.result))} */}
      </header>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="component"
            placeholder="Enter the prompt for a component"
            value={componentInput}
            onChange={(e) => console.log(e.target.value)}
          />
          <input type="submit" value="Generate response" />
   
        </form>
        <div>{result.theme}</div>
    </div>
  );
}

export default Playground;
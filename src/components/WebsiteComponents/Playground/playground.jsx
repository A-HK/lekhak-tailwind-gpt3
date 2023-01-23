import { useState, useEffect } from "react";

import {
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

import { Helmet, HelmetProvider } from 'react-helmet-async';

import ModalForm from "./playgroundModalForm";
import PlaygroundEditor from "./playgroundEditor";

import './playground.css';

function Playground() {
 // const [data, setData] = useState(null);
  const [showModalForm, setShowModalForm] = useState(false);
  const [componentInput, setComponentInput] = useState("");
  const [result, setResult] = useState({
    theme: "",
    component: [{}],
  })
  const [componentRequested, setComponentRequested] = useState(false);

  async function onSubmit(event){
        event.preventDefault();
        setComponentRequested(true);
        console.log(componentInput);
        const response = await fetch("http://localhost:3001/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ component: componentInput }),
        });
        const data = await response.json();
        console.log(data.result)
        const objResult = JSON.parse(data.result+'}}');
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
    <>
    <HelmetProvider>
     <Helmet>
        <title>Lekhak | Playground</title>
      </Helmet>
    <div className="playground h-screen px-10 isolate bg-white grid grid-rows-7">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5eead4" />
              <stop offset={1} stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* <AltNavBar /> */}
      <header className="playground-header font-bold text-2xl py-4 px-6 flex items-center justify-between row-span-1">
        <div className="flex items-center justify-start">
          {/* <img className="h-12 w-12 inline-block p-2" src="/lekhak-icon.png" alt=""/> */}
          <h1 className="inline-block p-2 text-3xl font-black tracking-wide">Playground <sup className="font-semibold bg-teal-400 text-xs px-2 text-white rounded-lg">beta</sup></h1>
        </div>
        <div className="flex flex-row items-center justify-end">
          <div>
            <button
              type="button"
              className="inline-block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-white bg-gray-800 shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              onClick={()=>{setShowModalForm(true)}}
            >
                Create new component
          
              <PlusCircleIcon className="h-5 w-5 ml-1.5 mb-0.5 inline-block text-white font-bold"/>
        
            </button>
            </div>
            <div>
            <a
              href="/"
              className="inline-block px-6 py-2 text-sm font-semibold leading-6 underline underline-offset-4 decoration-1"
            >
              Back to Home
              {/* <span className="px-1 font-bold" aria-hidden="true">
                &rarr;
              </span> */}
            </a>
            </div>
          </div>
      </header>
      <div className="row-span-6 flex items-center justify-center">
        <ModalForm 
          showModalForm={showModalForm}
          setShowModalForm={setShowModalForm}
        />
          {/* <div id="left-side-panel" className="absolute p-6 w-full">
          <PlaygroundForm />
          </div> */}
          <div id="right-side-panel" className="p-6 w-full h-full">

              <PlaygroundEditor />
            {/* <CodeBracketIcon className="h-8 w-8 text-white bg-gray-800 p-2 my-3 rounded-lg font-bold"/> */}
            {/* <div id="output" className="w-full h-full rounded-xl flex items-center justify-center border-2 border-gray-300 border-dashed hover:border-teal-400">
              {
                !componentRequested
                ? (
                    <EmptyState className="h-full"/>
                )
                :(
                    <ModalTemplate />
                )
              }
              
              {console.log(componentRequested)}
            </div> */}
          </div>
          {/* <p>{!result ? "Loading..." : result.theme}</p> */}
          <div>{result.theme}</div>
          <div>{result.component && result.component.type}</div>
          {(result.component && result.component.content && result.component.content[0]) ? <div>result.component.content[0].title</div> : <div></div>}
      </div>
    </div>
    </HelmetProvider>
    </>
  );
}

export default Playground;
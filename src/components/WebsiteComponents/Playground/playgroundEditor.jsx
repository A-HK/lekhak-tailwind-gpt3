import { useState,  useEffect, useCallback } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { cobalt2 } from "@codesandbox/sandpack-themes";
import './playgroundEditor.css';
import { EyeIcon, EyeSlashIcon, PlusCircleIcon } from "@heroicons/react/20/solid";

import ModalTemplateCode from "../../LekhakComponentTemplates/ModalComponent/modalTemplate";
import SingleHorizontalCardTemplateCode from "../../LekhakComponentTemplates/SingleHorizontalCardComponent/singleHorizontalCardTemplate";
import SingleVerticalCardTemplateCode from "../../LekhakComponentTemplates/SingleVerticalCardComponent/singleVerticalCardTemplate";
import HeroSectionTemplateCode from "../../LekhakComponentTemplates/HeroSectionComponent/heroSectionTemplate";
import FeaturesTemplateCode from "../../LekhakComponentTemplates/FeaturesComponent/featuresTemplate";
import DashboardTemplateCode from "../../LekhakComponentTemplates/DashboardComponent/dashboardTemplate";
import TestimonialTemplateCode from "../../LekhakComponentTemplates/TestimonialComponent/testimonialComponentTemplate";

//import { imageUrls } from "./playgroundModalForm";
//import dataFake from './dataFake.json';
import fetchUnsplashImages from "./fetchUnsplashImages";
import ValidIllustrationCode from "../../../assets/externalImageUrlList";
import Banner from "./bannerTemplate";


//import getGPTCompletion from "../../../utils/getGPTCompletion";
//import { pickValidImgUrl1, validColours } from "../../../assets/externalImageUrlList";

//import setupReact from './setUpReactEditor'
//import files from './files'

// TODO : move using tailwindcss from cdn to custom setup with setUpReactEditor.jsx and files.jsx

export const dataJson2 = `{"theme":"travel destination","colorScheme":"orange","component":{"type":"VerticalCardComponent","image":true,"content":[{"title":"Tokyo, Japan","body":"Tokyo is the capital of Japan and is one of the largest cities in the world. It is home to a multitude of attractions, from ancient temples to modern skyscrapers, and is a great place to explore the culture and history of Japan.","callsToAction":["View Attractions","Learn More"]},{"title":"Sydney, Australia","body":"Sydney is the largest city in Australia and is known for its iconic harbor, Opera House and Bridge. It is a great place to explore the outdoors, with many beaches, parks and nature reserves in the area.","callsToAction":["View Attractions","Learn More"]},{"title":"Paris, France","body":"Paris is the capital of France and one of the world's most romantic cities. It is home to iconic landmarks such as the Eiffel Tower and the Louvre, and is a great place to explore the culture, art, and history of the country.","callsToAction":["View Attractions","Learn More"]}]}}`
let dataFake = JSON.parse(dataJson2)

const AppCode = `
import EmptyState from './EmptyState'; 
import React, { useState } from 'react';
import Template from './Template';
import data from './data.json';

export default function App() {
  const [showTemplate, setShowTemplate] = useState(true);
  let selectedColor = data.colorScheme ? data.colorScheme : "#2dd4bf";

  return (
    <>
    <div 
    style={{
      backgroundColor: selectedColor
    }}
    className="absolute p-6 min-w-full min-h-full flex items-center justify-center bg-gradient-to-r from-emerald-200 to-teal-400"
    >
      {showTemplate
      ? 
      <>
      <Template />
      </>
      : <EmptyState />
      }
    </div>
    </>
    )
}`;

const EmptyStateCode = `import{
  BoltIcon,
  SquaresPlusIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline';

import './EmptyState.css';

export default function EmptyState() {
  return (
      <>
    <div
      id="output" 
      type="button"
      className="flex flex-col block items-center justify-center w-3/4 h-1/2 rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
      <SquaresPlusIcon className="h-16 w-16 text-white inline-block text-light"/>
      <span className="mt-2 inline-block text-lg font-medium text-gray-900 tracking-wider">No component to display yet</span>
      <span className="mt-2 inline-block text-md tracking-wider font-medium text-white tracking-wider">Get started - Create a new component to witness the magic </span>
   
    </div>
    
    </>
  )
}`

const EmptyStateCss =`#output{
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #e2e8f0 1.5px, rgba(0, 0, 0, 0) 1px);
}`


const GPTResponse = ``
export default function PlaygroundEditor({
  imageUrls1,
  setImageUrls1, 
  imageUrls2, 
  setImageUrls2,
  imageUrls3, 
  setImageUrls3,
  dataJson,
  result,
  setResult,
  componentRequested,
  setComponentRequested,
  showModalForm,
  setShowModalForm,
})
{
  const [openCodeEditor, setOpenCodeEditor] = useState(false);
  const [templateCode, setTemplateCode] = useState(EmptyStateCode);
  const [showIllustrationUrlsFile, setShowIllustrationUrlsFile] = useState(false);
  const [response, setResponse] = useState(``);
  const [isReady, setIsReady] = useState(false);
  const imageUrlsJson1 = JSON.stringify(imageUrls1);
  const imageUrlsJson2 = JSON.stringify(imageUrls2);
  const imageUrlsJson3 = JSON.stringify(imageUrls3);
  const temp = `{"theme":"","colorScheme":"","component":""}`;
  
  //console.log(imageUrlsJson);
  useEffect(()=>{
    //console.log(dataJson);
   // setResponse(`\`${dataJson}\``);
    //setResponse(`{"data": ${dataJson}}`);
    
    
    /* `{"theme":${result.theme},"colorScheme":${result.colorScheme},"component":{"type":"VerticalCardComponent","image":true,"content":[{"title":"Tokyo, Japan","body":"Tokyo is the capital of Japan and is one of the largest cities in the world. It is home to a multitude of attractions, from ancient temples to modern skyscrapers, and is a great place to explore the culture and history of Japan.","callsToAction":["View Attractions","Learn More"]},{"title":"Sydney, Australia","body":"Sydney is the largest city in Australia and is known for its iconic harbor, Opera House and Bridge. It is a great place to explore the outdoors, with many beaches, parks and nature reserves in the area.","callsToAction":["View Attractions","Learn More"]},{"title":"Paris, France","body":"Paris is the capital of France and one of the world's most romantic cities. It is home to iconic landmarks such as the Eiffel Tower and the Louvre, and is a great place to explore the culture, art, and history of the country.","callsToAction":["View Attractions","Learn More"]}]}}` */
    
    if(componentRequested)
    {
      console.log(result);
      setResponse(`{"theme": "${result.theme}","colorScheme":"${result.colorScheme}","component":${JSON.stringify(result.component)}}`);
    }
    else
    {
      setResponse(temp);
    }
    // console.log(response)
    // console.log(typeof(response))
    setIsReady(true);
  }, [result, componentRequested])

  useEffect(()=>{
    const getInitialMessage = async () => {
    let componentType = "emptyState";
  
    result.component.type
      ? componentType = result.component.type 
      : componentType = "emptyState";
    
    
    switch(componentType) {
        case "HorizontalCardComponent":
          setTemplateCode(SingleHorizontalCardTemplateCode)
          break;
        case "VerticalCardComponent":
          setTemplateCode(SingleVerticalCardTemplateCode)
          break;
        case "HeroSectionComponent":
          setTemplateCode(HeroSectionTemplateCode)
          break;
        case "ModalComponent":
          setTemplateCode(ModalTemplateCode)
          setShowIllustrationUrlsFile(true)
          break;
        case "FeaturesSectionComponent":
          setTemplateCode(FeaturesTemplateCode)
          setShowIllustrationUrlsFile(true)
          break;
        case "DashboardComponent":
          setTemplateCode(DashboardTemplateCode)
          break;
        case "TestimonialComponent":
          setTemplateCode(TestimonialTemplateCode)
          break;
        default:
          setTemplateCode(EmptyStateCode)
    }
    

    }
    getInitialMessage();
  
  }, [result, result.component.type])


    return(
        <>
        <div className="h-full" id="playground-editor">
          {/* <img src={validImgUrl} className="h-52"/> */}
          {/* {console.log(dataJson)} */}
          <div>
          <button
              type="button"
              className="inline-block mr-4 rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-white bg-gray-800 shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              onClick={()=>{setShowModalForm(true)}}
          >
                Create New Component
          
              <PlusCircleIcon className="h-5 w-5 ml-1.5 mb-0.5 inline-block text-white font-bold"/>
        
          </button>
          <button 
            type="button"
            onClick={()=>{setOpenCodeEditor(!openCodeEditor);}}
            className="my-4 inline-block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-white bg-gray-800 shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            {openCodeEditor 
            ? <span><p className="align-middle inline-block">Close Code Editor</p><EyeSlashIcon className="h-4 w-4 ml-2 inline-block"/></span>
            : <span><p className="align-middle inline-block">Open Code Editor</p><EyeIcon className="h-4 w-4 ml-2 inline-block"/></span>
            }
          </button>
          </div>
          <Banner />
            <SandpackProvider 
            template="react"
            files={{
              "/App.js": {
                code: AppCode,
                hidden: true,
              },
              "/EmptyState.js": {
                code: EmptyStateCode,
                hidden: true,
              },
              "/EmptyState.css": {
                code: EmptyStateCss,
                hidden: true,
              },
              "/Template.jsx": {
                code: templateCode,
                active: true,
              },
              "/data.json": response,
              "/imageUrlsOne.json": {
                code: imageUrlsJson1,
                hidden: true,
              },
              "/imageUrlsTwo.json": {
                code: imageUrlsJson2,
                hidden: true,
              },
              "/imageUrlsThree.json": {
                code: imageUrlsJson3,
                hidden: true,
              },
              "/illustrations.js": {
                code: ValidIllustrationCode,
                hidden: !showIllustrationUrlsFile,
              },
            }}
            customSetup={{
              dependencies: {
                "@headlessui/react": "^1.7.7",
                "@heroicons/react": "^2.0.13",
              },
              entry: "/index.js",
            }}
            options={{
              externalResources: [
                  "https://cdn.tailwindcss.com/",
              ],
            }}
            style={{borderStyle: "none"}}
          >
             
            <SandpackThemeProvider 
              theme={cobalt2}
             >
              <SandpackLayout style={{borderStyle: "none"}}>
                
                <SandpackCodeEditor
                style={{minHeight: 850, maxWidth: 600, display: `${openCodeEditor ? "flex" : "none"}`}}/> {/* display: none */}
                <SandpackPreview
                  showOpenInCodeSandbox={false}
                  showRefreshButton={true}
                  style={{minHeight: 850}}/>
              </SandpackLayout>
              </SandpackThemeProvider>
            </SandpackProvider>   
        </div>
        </>
    )
}
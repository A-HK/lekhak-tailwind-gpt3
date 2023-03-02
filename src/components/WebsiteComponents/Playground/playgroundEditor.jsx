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
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";

import ModalTemplateCode from "../../LekhakComponentTemplates/ModalComponent/modalTemplate";
import SingleHorizontalCardTemplateCode from "../../LekhakComponentTemplates/SingleHorizontalCardComponent/singleHorizontalCardTemplate";
import SingleVerticalCardTemplateCode from "../../LekhakComponentTemplates/SingleVerticalCardComponent/singleVerticalCardTemplate";
import HeroSectionTemplateCode from "../../LekhakComponentTemplates/HeroSectionComponent/heroSectionTemplate";
import FeaturesTemplateCode from "../../LekhakComponentTemplates/FeaturesComponent/featuresTemplate";
import DashboardTemplateCode from "../../LekhakComponentTemplates/DashboardComponent/dashboardTemplate";
import TestimonialTemplateCode from "../../LekhakComponentTemplates/TestimonialComponent/testimonialComponentTemplate";

//import { imageUrls } from "./playgroundModalForm";
import dataFake from './dataFake.json';
import fetchUnsplashImages from "./fetchUnsplashImages";
import ValidIllustrationCode from "../../../assets/externalImageUrlList";
//import { pickValidImgUrl1, validColours } from "../../../assets/externalImageUrlList";

//import setupReact from './setUpReactEditor'
//import files from './files'

// TODO : move using tailwindcss from cdn to custom setup with setUpReactEditor.jsx and files.jsx

const AppCode = `
import EmptyState from './EmptyState'; 
import React, { useState } from 'react';
import Template from './Template';
import data from './data.json';

export default function App() {
  const [showTemplate, setShowTemplate] = useState(true);
  let selectedColor = data.colorScheme ? data.colorScheme : "#2dd4bf";

  return (
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
    )
}`;

const TestCode = `import ReactMarkdown from 'react-markdown' 

export default function Test() {
  return <ReactMarkdown># Hello, *world*!</ReactMarkdown>
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


const dataJson =  `{"theme": "clothes", "colorScheme": "orange", "component": {"type": "HorizontalCardComponent", "image": true, "content":[{"title":"Jeans", "body":"Jeans are a type of trousers, typically made from denim or dungaree cloth. They are a popular fashion item, often paired with a variety of tops, and suitable for any occasion.", "callsToAction" : ["Shop Now", "Learn More"]}, {"title":"Sweater", "body":"A sweater is a knitted garment that is typically worn over the upper body for warmth. It can be made of a variety of different fabrics, including wool, cotton, and synthetic materials.", "callsToAction" : ["Shop Now", "Learn More"]}, {"title":"Shirt", "body":"A shirt is a garment for the upper body made of lightweight fabric. It is typically worn with trousers or jeans, and can come in a variety of different styles.", "callsToAction" : ["Shop Now", "Learn More"]}]}}`
export default function PlaygroundEditor({imageUrls1, imageUrls2, imageUrls3}){
  const [openCodeEditor, setOpenCodeEditor] = useState(false);
  const [templateCode, setTemplateCode] = useState(EmptyStateCode);
  // const [validImgUrl, setValidImgUrl] = useState("");
  const [showIllustrationUrlsFile, setShowIllustrationUrlsFile] = useState(false);

  const imageUrlsJson1 = JSON.stringify(imageUrls1);
  const imageUrlsJson2 = JSON.stringify(imageUrls2);
  const imageUrlsJson3 = JSON.stringify(imageUrls3);

  //console.log(imageUrlsJson);


  useEffect(()=>{
    // validColours.includes(dataFake.colorScheme)
    // ? setValidImgUrl(`https://illustrations.popsy.co/` + dataFake.colorScheme + pickValidImgUrl1)
    // : setValidImgUrl(`https://illustrations.popsy.co/white` + pickValidImgUrl1)

    let componentType = "emptyState";
  
    dataFake.component.type
      ? componentType = dataFake.component.type 
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
  
  })


    return(
        <>
        <div className="h-full" id="playground-editor">
          {/* <img src={validImgUrl} className="h-52"/> */}
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
            "/data.json": dataJson,
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
            }
          }}
          customSetup={{
            dependencies: {
              "react-markdown": "latest",
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
            <SandpackLayout style={{borderStyle: "none", borderRadius: "8px"}}>
              
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
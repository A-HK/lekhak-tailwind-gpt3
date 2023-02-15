import { useState,  useEffect } from "react";
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

import dataFake from './dataFake.json';
//import setupReact from './setUpReactEditor'
//import files from './files'

// TODO : move using tailwindcss from cdn to custom setup with setUpReactEditor.jsx and files.jsx

const AppCode = `
import EmptyState from './EmptyState'; 
import React, { useState } from 'react';
import Template from './Template';

export default function App() {
  const [showTemplate, setShowTemplate] = useState(true);
  return (
    <div className="absolute p-6 min-w-full min-h-full flex items-center justify-center bg-gradient-to-r from-emerald-200 to-teal-400">
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



const dataJson = `{"theme": "travel", "colorScheme": "teal", "component": {"type": "HeroSectionComponent", "image": "true", "content": [{"title": "Discover the world with us", "body":  "Embark on a journey filled with unforgettable experiences and make memories that will last a lifetime. Our team of travel experts is here to guide you every step of the way.", "topTag": "Your Adventure Awaits", "nav": ["Book a Trip", "Top Destinations", "Explore Offers", "About Us"], "callsToAction": ["Get Started", "Know More"]}]}}`

export default function PlaygroundEditor(){
  const [openCodeEditor, setOpenCodeEditor] = useState(false);
  const [templateCode, setTemplateCode] = useState(EmptyStateCode);

  useEffect(()=>{
    let componentType = "emptyState";
  
    dataFake.component.type
      ? componentType = dataFake.component.type 
      : componentType = "emptyState";
  
    switch(componentType) {
        case "SingleHorizontalCardComponent":
          setTemplateCode(SingleHorizontalCardTemplateCode)
          break;
        case "SingleVerticalCardComponent":
          setTemplateCode(SingleVerticalCardTemplateCode)
          break;
        case "HeroSectionComponent":
          setTemplateCode(HeroSectionTemplateCode)
          break;
        case "ModalComponent":
          setTemplateCode(ModalTemplateCode)
          break;
        case "FeaturesSectionComponent":
          setTemplateCode(FeaturesTemplateCode)
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
              style={{minHeight: 800, maxWidth: 600, display: `${openCodeEditor ? "flex" : "none"}`}}/> {/* display: none */}
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton={true}
                style={{minHeight: 800}}/>
            </SandpackLayout>
            </SandpackThemeProvider>
          </SandpackProvider>
        </div>
        </>
    )
}
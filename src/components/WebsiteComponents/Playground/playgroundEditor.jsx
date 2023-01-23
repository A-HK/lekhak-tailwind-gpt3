import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackThemeProvider,
} from "@codesandbox/sandpack-react";
import { cobalt2 } from "@codesandbox/sandpack-themes";
import './playgroundEditor.css';

import ModalTemplateCode from "../../LekhakComponentTemplates/ModalComponent/modalTemplate";
import SingleHorizontalCardTemplateCode from "../../LekhakComponentTemplates/SingleHorizontalCardComponent/singleHorizontalCardTemplate";

//import setupReact from './setUpReactEditor'
//import files from './files'

// TODO : move using tailwindcss from cdn to custom setup with setUpReactEditor.jsx and files.jsx

const AppCode = `
import EmptyState from './EmptyState'; 
import SingleHorizontalCardTemplate from './SingleHorizontalCardTemplate';
import React, { useState } from 'react';

const Template = () => {
  return(
    <SingleHorizontalCardTemplate />
  )
}

export default function App() {
  const [showTemplate, setShowTemplate] = useState(true);
  return (
    <div className="absolute w-full h-full flex items-center justify-center bg-gradient-to-r from-emerald-200 to-teal-400">
      {showTemplate
      ? <Template />
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

const dataJson = `{
  "theme": "travel destination", 
  "component" : {
      "type": "HorizontalSingleCard",  
      "image": "true", 
      "content":[
          {
              "title":"Udaipur", 
              "body":"The city of lakes, Udaipur is a lovely land around the azure water lakes, hemmed in by the lush hills of the Aravalis.",
              "callsToAction" : ["View", "See Ratings"]
          }
      ]
  }
}`

export default function PlaygroundEditor(){

    return(
        <>
        <div className="h-full" id="playground-editor">
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
            "/SingleHorizontalCardTemplate.jsx": {
              code: SingleHorizontalCardTemplateCode,
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
              style={{minHeight: 600, maxWidth: 600}}/> {/* display: none */}
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton={true}
                style={{minHeight: 600}}/>
            </SandpackLayout>
            </SandpackThemeProvider>
          </SandpackProvider>
        </div>
        </>
    )
}
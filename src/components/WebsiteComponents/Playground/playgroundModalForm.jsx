import { Fragment, useRef, useState, useEffect, useCallback } from 'react'
import { RadioGroup, Dialog, Transition, Listbox } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon, CheckIcon, BoltIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline'
import fetchUnsplashImages from './fetchUnsplashImages'
//import dataFake from './dataFake.json'
import { dataJson2 } from './playgroundEditor'

//import GetGPTCompletion from "../../../utils/getGPTCompletion";

const availableComponents = [
  {label: 'Hero Section', value: 'HeroSectionComponent'},
  {label: 'Dashboard', value: 'DashboardComponent'},
  {label: 'Features Section', value: 'FeaturesSectionComponent'},
  {label: 'Modal', value: 'ModalComponent'},
  {label: 'Vertical Card Grid', value: 'VerticalCardComponent'},
  {label: 'Horizontal Card Grid', value: 'HorizontalCardComponent'},
  {label: 'Testimonials', value: 'TestimonialComponent'},
]

const promptExamples = {
  'HeroSectionComponent' : 'Create a hero section for a travel agency in turquoise',
  'DashboardComponent' : 'Create a dashboard component for a tech company, black',
  'FeaturesSectionComponent' : 'Create a features section for a food delivery startup, orange',
  'ModalComponent' : 'Create a modal for confirmation of deleting account, red',
  'VerticalCardComponent' : 'Create a grid of vertical cards for travel destinations, black',
  'HorizontalCardComponent' : 'Create a grid of horizontal cards for food items',
  'TestimonialComponent' : 'Generate a testimonial component for a fitness company, blue'
}


export default function ModalForm({
  showModalForm, 
  setShowModalForm, 
  imageUrls1, 
  setImageUrls1, 
  imageUrls2, 
  setImageUrls2,
  imageUrls3, 
  setImageUrls3,
  dataJson,
  setDataJson,
  result,
  setResult,
  componentRequested,
  setComponentRequested,
}) {
  //const term = data?.theme;
  //const [imageUrls, setImageUrls] = useState({images: []});
  

  //pass imageurls to playground editor which will in turn append to dataJson or append here to gpt response
  
  const [componentInput, setComponentInput] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(availableComponents[0]);
  
  const fetchImages = useCallback(() => {
    if (result.component?.type === "HeroSectionComponent") {
      fetchUnsplashImages({ searchTerm: result.theme })
        .then((response) => setImageUrls1({ images: response.data.results }))
        .catch((error) => console.error(error));
    } else if (
      result.component?.type === "VerticalCardComponent" ||
      result.component?.type === "HorizontalCardComponent"
    ) {
      fetchUnsplashImages({
        searchTerm: result.component?.content?.[0]?.title,
      })
        .then((response) => setImageUrls1({ images: response.data.results }))
        .catch((error) => console.error(error));
      fetchUnsplashImages({
        searchTerm: result.component?.content?.[1]?.title,
      })
        .then((response) => setImageUrls2({ images: response.data.results }))
        .catch((error) => console.error(error));
      fetchUnsplashImages({
        searchTerm: result.component?.content?.[2]?.title,
      })
        .then((response) => setImageUrls3({ images: response.data.results }))
        .catch((error) => console.error(error));
    }
  }, [result, setImageUrls1, setImageUrls2, setImageUrls3]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  async function onSubmit(event){
    event.preventDefault();
    console.log(componentInput);
    const response = await fetch(`${import.meta.env.VITE_LEKHAK_BACKEND_URL}/api`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ component: componentInput, componentType: selectedComponent }),
    });
    const data = await response.json();
    const objResult = JSON.parse(data.result)
    setDataJson(objResult);
    const cleanedComponent = JSON.parse(JSON.stringify(objResult.component));
   // setResult({"theme": "Indian dances", "colorScheme": "purple", "component": {"type": "VerticalCardComponent", "image": true, "content":[{"title":"Bharatnatyam", "body":"Bharatanatyam is one of the oldest and most popular classical dance styles of India. It originated in the temples of Tamil Nadu and is known for its graceful movements, intricate footwork, and expressive hand gestures. Bharatanatyam is typically performed by women and is often accompanied by classical music and singing.", "callsToAction" : ["Watch Performance", "Learn More"]}, {"title":"Kathak", "body":"Kathak is a classical dance style from North India, known for its intricate footwork, rhythmic complexity, and expressive storytelling. It originated in the Mughal courts and combines elements of Indian and Persian dance traditions. Kathak is typically performed by both men and women and is often accompanied by live music and singing.", "callsToAction" : ["Watch Performance", "Learn More"]}, {"title":"Kuchipudi", "body":"Kuchipudi is a classical dance style from Andhra Pradesh, known for its dynamic movements, graceful poses, and intricate footwork. It originated in the temples of South India and combines elements of dance, music, and theatre. Kuchipudi is typically performed by both men and women and is often accompanied by classical music and singing.", "callsToAction" : ["Watch Performance", "Learn More"]}]}})
   setResult({
    ...result,
    theme: objResult.theme,
    colorScheme: objResult.colorScheme,
    component: cleanedComponent,
  })
    setComponentRequested(true);
    setComponentInput("");
 //   fetchImages();

    // useEffect(() => {
    //   if(result.component.type == "HeroSectionComponent")
    //   {
    //     fetchUnsplashImages({imageUrls: imageUrls1, setImageUrls: setImageUrls1, searchTerm: result?.theme});
    //   }
    //   else if(result.component.type == "VerticalCardComponent" || result.component.type == "HorizontalCardComponent")
    //   {
    //     fetchUnsplashImages({imageUrls: imageUrls1, setImageUrls: setImageUrls1, searchTerm: result?.component?.content?.[0]?.title});
    //     fetchUnsplashImages({imageUrls: imageUrls2, setImageUrls: setImageUrls2, searchTerm: result?.component?.content?.[1]?.title});
    //     fetchUnsplashImages({imageUrls: imageUrls3, setImageUrls: setImageUrls3, searchTerm: result?.component?.content?.[2]?.title});
    //   }
    // }, [result.component.type, result.theme, result.component.content]);
  
}

  const cancelButtonRef = useRef(null)
  let dataFake = JSON.parse(dataJson2);
  
  return (
    <Transition.Root show={showModalForm} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setShowModalForm}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-sm sm:w-full sm:p-6">
            <div className="">
      <div className="max-w-2xl mx-auto py-2 px-6 lg:max-w-7xl">
        <h2 className="sr-only">Add prompt</h2>

        <form className="lg:grid lg:grid-cols-1" onSubmit={onSubmit}>
          <div>

            <div>
              <div className="pb-2">
                <span className="flex flex-row">
                    <BoltIcon className="basis-1/4 h-8 w-7"/>
                    <span className="">
                        <h2 className="text-xl font-bold text-gray-900 px-2">Create your component</h2>
                        <p className="text-sm py-2 px-2 font-medium text-gray-500">
                            Enter a prompt describing the component you want Lekhak to generate. Make sure to include your preferred colour scheme and the theme of the component (eg. e-commerce, food, finance) for best results.
                        </p>
                    </span>
                </span>
               
              </div>
            

              <div className="mt-2 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {/* <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Project name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="project-name"
                      id="project-name"
                      placeholder="my-components"
                      className="placeholder:text-gray-400 block w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                    />
                  </div>
                </div> */}
          <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 py-1">
                    Choose your component
                  </label>
                <Listbox value={selectedComponent} onChange={setSelectedComponent} >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full h-12 cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border-2 border-gray-100 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedComponent.label}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {availableComponents.map((availableComponent, availableComponentIdx) => (
                <Listbox.Option
                  key={availableComponentIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-100 text-gray-900 font-semibold' : 'text-gray-700'
                    }`
                  }
                  value={availableComponent}
                >
                  {({ selectedComponent }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selectedComponent ? 'font-semibold' : 'font-normal'
                        }`}
                      >
                    
                        {availableComponent.label}
                      </span>
                      {selectedComponent ? (
                        <span className="text-teal-600">
                          <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      </div>
                <div className="sm:col-span-2 pb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your prompt here
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="prompt"
                      id="prompt"
                      className="placeholder:text-gray-400 block w-full px-2 h-24 border-2 border-gray-200 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                      placeholder={`Example:  ${promptExamples[selectedComponent.value]}`}
                      onChange={(e)=>{
                        setComponentInput(e.target.value);
                      }}
                    />
                  </div>
                </div>
                
                {/* <select className="w-full col-span-2">
                  <>
                {
                  availableComponents.map((availableComponent)=>{
                    <option value={availableComponent.value}>{availableComponent.label}</option>
                  })
                }
                </>
                </select> */}
                
                

                <div className="sm:col-span-2">

                    <fieldset className="border-t border-slate-300">
                        <legend className="mx-auto px-4 block text-sm text-center font-medium text-gray-700">OR</legend>
                    </fieldset>

                  <label className="block text-sm font-medium text-gray-700 pt-4 pb-2 ">
                    Copy one of the below prompts
                  </label>
                  <div className="mt-2 grid grid-rows-2 gap-y-4">
                    <div className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a hero section for a food delivery website, orange in colour
                    </div>
                    <div className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a feature section for an edtech startup
                    </div>
                    <div className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a dashboard component for a financial company, teal
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-400 text-base font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 sm:col-start-2 sm:text-sm"
                  onClick={() => {
                    setShowModalForm(false);
                  }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => setShowModalForm(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
            </div>
        </form>
      </div>
    </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
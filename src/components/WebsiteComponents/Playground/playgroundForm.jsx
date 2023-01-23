import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function PlaygroundForm() {
  const [open, setOpen] = useState(true)

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

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 left-0 pr-10 max-w-full flex sm:pr-16">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
            >
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  <div className="py-6 px-4 bg-gradient-to-r from-emerald-200 to-teal-400 sm:px-6">
                    <div className="flex items-center justify-center">
                      <Dialog.Title className="text-2xl w-full font-medium text-white text-center">Playground Prompt</Dialog.Title>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="rounded-md text-teal-200 hover:text-white focus:outline-none"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="absolute inset-0 px-4 sm:px-6">
                      <div className="h-full" aria-hidden="true" >
                        <form onSubmit={onSubmit} className="w-full">
                            <h2 className="py-3 font-semibold text-gray-800">Enter your prompt here</h2>
                            <textarea
                                type="text"
                                name="component"
                                placeholder="Create a grid of vertical cards for multiple food items with images, orange colour scheme..."
                                className="p-4 h-48 w-full border border-2 border-gray-200 rounded-lg"
                                onChange={(e)=>{setComponentInput(e.target.value)}}
                            />
                            <input type="submit" value="Generate Component &rarr;" className="inline-block rounded-lg px-3 py-2 my-4 max-auto font-semibold leading-6 text-white bg-teal-400 shadow-md ring-1 ring-teal-900/10 hover:ring-gray-900/20" />
                    
                        </form>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
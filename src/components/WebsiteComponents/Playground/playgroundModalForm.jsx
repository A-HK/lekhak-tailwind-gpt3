import { Fragment, useRef, useState } from 'react'
import { RadioGroup, Dialog, Transition } from '@headlessui/react'
import { CheckCircleIcon, TrashIcon, CheckIcon, BoltIcon } from '@heroicons/react/24/outline'


const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]
const deliveryMethods = [
  { id: 1, title: 'Standard', turnaround: '4–10 business days', price: '$5.00' },
  { id: 2, title: 'Express', turnaround: '2–5 business days', price: '$16.00' },
]
const paymentMethods = [
  { id: 'credit-card', title: 'Credit card' },
  { id: 'paypal', title: 'PayPal' },
  { id: 'etransfer', title: 'eTransfer' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ModalForm({showModalForm, setShowModalForm}) {
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
   // console.log("response.body" + response.body);
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

  const cancelButtonRef = useRef(null)

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
                <div className="sm:col-span-2">
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
                </div>

                <div className="sm:col-span-2 pb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Enter your prompt here
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="prompt"
                      id="prompt"
                      className="placeholder:text-gray-400 block w-full px-2 h-24 border-gray-300 rounded-md shadow-sm focus:ring-teal-300 focus:border-teal-300 sm:text-sm"
                      placeholder="Create a grid of vertical cards for multiple food items with images, orange colour scheme..."
                      onChange={(e)=>{
                        setComponentInput(e.target.value);
                      }}
                    />
                  </div>
                </div>

                

                <div className="sm:col-span-2">

                    <fieldset className="border-t border-slate-300">
                        <legend className="mx-auto px-4 block text-sm text-center font-medium text-gray-700">OR</legend>
                    </fieldset>

                  <label className="block text-sm font-medium text-gray-700 pt-4 pb-2 ">
                    Try one of the below prompts
                  </label>
                  <div className="mt-2 grid grid-rows-2 gap-y-4">
                    <button type="button" className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a hero section for a food delivery website, orange in colour
                    </button>
                    <button type="button" className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a feature section for an edtech startup
                    </button>
                    <button type="button" className="bg-slate-100 rounded-sm text-sm text-center text-gray-600 font-semibold px-2 py-3 w-full">
                        Create a dashboard component for a financial company, teal
                    </button>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <div className="mt-8 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-teal-400 text-base font-medium text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300 sm:col-start-2 sm:text-sm"
                  onClick={() => setShowModalForm(false)}
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
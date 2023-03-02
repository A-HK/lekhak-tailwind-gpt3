const ModalTemplateCode = `import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import { validColours, pickValidImgUrl1 } from './illustrations.js';
import data from './data.json';

export default function ModalTemplate() {
  const [open, setOpen] = useState(false);
  const [validImgUrl, setValidImgUrl] = useState("");

  let selectedColor = data.colorScheme ? data.colorScheme : "#2dd4bf";

  useEffect(()=>{

      if(validColours.includes(data.colorScheme))
      {
            setValidImgUrl('https://illustrations.popsy.co/' + data.colorScheme + pickValidImgUrl1);
      }
      else
      {
            setValidImgUrl('https://illustrations.popsy.co/white' + pickValidImgUrl1);
      }

      console.log('Image URL sourced from:' + validImgUrl);
    }, [])

  return (
    <div className="p-12 my-12">
    <button onClick={() => setOpen(true)}  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-lg px-4 py-2 bg-gray-800 text-md font-medium text-white sm:ml-3 sm:w-auto">Open Modal</button>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
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
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="text-center w-full">
                <div className="w-full flex items-center justify-center">
                {data?.component?.image &&
                  <img 
                  src={validImgUrl}
                  className='h-80 w-80'
                  />
                }
              </div>
                {/* <div className="mx-auto my-2 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div> */}
                

                <div className="mt-3 text-center sm:ml-4">
                  <Dialog.Title as="h3" className="py-1 text-lg leading-6 font-semibold text-gray-900">
                  {data?.component?.content?.[0].title &&
                    <span className="inline-block p-1 align-middle">{data.component.content[0].title}</span>
                  }
                  </Dialog.Title>

                  <div className="mt-2">
                  {data?.component?.content?.[0].body &&
                    <p className="text-sm text-gray-500">
                      {data.component.content[0].body}
                    </p>
                  }
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:flex justify-items-stretch gap-x-4">
              
                <button
                  type="button"
                  className="flex-1 text-center w-full rounded-md border border-transparent bg-gray-800 shadow-sm px-4 py-2 font-medium text-white focus:outline-none hover:opacity-75"
                  style={{
                    backgroundColor: selectedColor
                  }}
                  onClick={() => setOpen(false)}
                >
                  {data?.component?.content?.[0]?.options?.[0]
                    && <>{data.component.content[0].options[0]}</>
                  }
                </button>
                <button
                  type="button"
                  className="flex-1 text-center mt-3 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 font-medium text-white focus:outline-none hover:opacity-75 sm:mt-0"
                  onClick={() => setOpen(false)}
                >
                {data?.component?.content?.[0]?.options?.[1]
                  && <>{data.component.content[0].options[1]}</>
                }
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
    </div>
  )
}

`
export default ModalTemplateCode;
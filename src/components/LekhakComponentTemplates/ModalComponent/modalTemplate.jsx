const ModalTemplateCode = `import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon, XMarkIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export default function ModalTemplate() {
  const [open, setOpen] = useState(false)

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
                <div className="mx-auto my-2 flex items-center justify-center h-12 w-12 rounded-full bg-emerald-100">
                  <CheckCircleIcon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:ml-4">
                  <Dialog.Title as="h3" className="py-1 text-lg leading-6 font-medium text-gray-900">
                    Payment Successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Thank you for your payment. Your transaction is complete.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 sm:flex justify-items-stretch gap-x-4">
                <button
                  type="button"
                  className="flex-1 text-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-emerald-400 font-medium text-white hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300"
                  onClick={() => setOpen(false)}
                >
                  View details
                </button>
                <button
                  type="button"
                  className="flex-1 text-center mt-3 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-800 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:mt-0"
                  onClick={() => setOpen(false)}
                >
                  Return to homepage
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
import { useState, Fragment } from "react";
import { Bars3BottomRightIcon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Dialog, Popover, Transition } from '@headlessui/react';

const navigation = [
    { name: 'Components', href: '#' },
    { name: 'Playground', href: '/playground' },
    { name: 'How it works', href: '#' },
]

export default function NavBar(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return(
        <div className="sticky inset-x-0 overflow-hidden top-0 z-50 px-6 py-6 lg:px-8 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-auto" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                {/* <img src='lekhak-inverted.png' className='h-6 w-6 rounded-sm inline-block mr-4 mb-1'/> */}
                <span className="font-black text-2xl tracking-wide inline-block">Lekhak.</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3BottomRightIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-center lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-900 hover:underline hover:underline-offset-8 hover:decoration-teal-300 hover:decoration-2">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-auto lg:justify-end">
              <a
                href="/playground"
                className="inline-block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-white bg-black shadow-md ring-1 ring-gray-900/10 hover:ring-gray-900/20"
              >
                Try It Now
                <span className="px-1 text-white font-bold" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Lekhak.</span>
                    <img
                      className="h-8"
                      src="/lekhak-inverted.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-300/10 hover:text-teal-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="/playground"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-300/10 hover:text-teal-400"
                    >
                       Try It Now 
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    )
}
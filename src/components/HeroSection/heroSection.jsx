import { useState, useEffect} from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3BottomRightIcon, BoltIcon, XMarkIcon, ArrowTopRightOnSquareIcon,RocketLaunchIcon, PlayCircleIcon, ArrowRightCircleIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three';

import Typewriter from "typewriter-effect";

import './heroSection.css';

const navigation = [
  { name: 'Features', href: '#' },
  { name: 'Playground', href: '#' },
  { name: 'How it works', href: '#' },
  { name: 'Updates', href: '#' },
]


const Model = () => {
  const gltf = useLoader(GLTFLoader, "./plant.glb");

  return (
    <>
      <primitive object={gltf.scene} scale={4} position={[0,-0.9,0]} rotation-y={-0.2}/>   
    </>
  );
};


const Loading = () => {
  const [finished, setFinished] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const url = './plant.glb';
    THREE.DefaultLoadingManager.onLoad = () => setFinished(true);
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200);
  }, [])

  return (
    !finished &&(
      <div className='flex items-center justify-center w-full h-full'>
        <div className="w-[200px] mx-auto mt-0 justify-center px-6 py-2 bg-white text-teal-400 border-2 border-teal-400 font-bold text-md leading-tight rounded-lg shadow-md"><p className="inline-block px-2 py-1">Generating </p><BoltIcon className="h-6 w-6 inline-block"/></div> 
      </div>
      
    )
  )
}

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5eead4" />
              <stop offset={1} stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="sticky inset-x-0 overflow-hidden top-0 z-50 px-6 py-6 lg:px-8 bg-opacity-30 backdrop-filter backdrop-blur-lg">
        <div>
          <nav className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-auto" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="font-black text-lg">Lekhak.</span>
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
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-2">
            <div>

              <div className="pointer-card absolute right-0 top-0 hidden lg:inline">
                <div className="content">
                  <div className="arrow">
                    <div className="curve"></div>
                    <div className="point"></div>
                  </div>
                </div>  
              </div>

              <div className='flex items-center'>
                <div className='px-6'>
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10">
                        <span className="text-gray-600">
                            Uhh.. can't I just use ChatGPT? {' '}
                            <a href="/why-though" className="font-semibold text-teal-400 hover:text-teal-500">
                            <span className="ml-2" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </span>
                        </div>
                    </div>             
                    <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                   Creating Tailwind UI components has never been <span className='underline decoration-teal-400 underline-offset-8'>easier</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Lekhak generates and previews tailwind-styled components for you, all from a simple text prompt. Harnesses the power of GPT-3 and OpenAI Codex.
                    </p>
                    <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <a
                        href="/playground"
                        className="inline-block rounded-lg bg-teal-400 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-md ring-1 ring-teal-400 hover:bg-teal-500 hover:ring-teal-500"
                    >
                        Get started
                        <span className="text-white px-1 font-bold" aria-hidden="true">
                        &rarr;
                        </span>
                    </a>
                    <a
                        href="#"
                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                        Watch video demo
                        <span className="text-gray-400 font-bold px-1" aria-hidden="true">
                        <PlayCircleIcon className='h-5 w-5 inline-block text-gray-900 text-bold'/>
                        </span>
                    </a>
                    </div>
                    <div className="pointer-cta hidden">
                <div className="content">
                  <div className="arrow">
                    <div className="curve"></div>
                    <div className="point"></div>
                  </div>
                  <div className="content-text">
                    <h1>Psst.. All you need is an OpenAI API key !</h1>
                  </div>
                </div>  
              </div>
                </div>
                <div className='mt-12 w-full flex flex-col justify-center hidden md:flex'>
                  <div className="flex justify-center shadow-lg rounded-lg max-w-xs m-auto">
                    <div>
                    
                    <div className="w-full h-[400px]">
                      <Loading />
                      <Canvas>
                        <Suspense fallback={null}>
                            <Model />
                            <OrbitControls
                               autoRotate
                               enablePan={false}
                               enableZoom={false}
                               enableDamping
                               dampingFactor={0.5}
                               rotateSpeed={1} />
                            <Environment preset="sunset" />
                        </Suspense>
                      </Canvas>
                      </div>
                      <div className="pt-2 px-6">
                        <h5 className="text-gray-900 text-xl font-semibold mb-2">Monstera Plant</h5>
                        <p className="text-gray-700 text-base mb-4">
                        Native to Central and South America, the Monstera is a tropical perennial that's typically grown indoors.
                        </p>
                      </div>
                      <button type="button" className="inline-block px-6 py-2 w-full bg-teal-400 text-white font-medium text-sm leading-tight rounded-b-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-400 active:shadow-lg transition duration-150 ease-in-out">Shop now →</button>
                    </div>
                  </div>
                </div>
                <div className='bg-white rounded-md py-6 px-8 w-[250px] h-[170px] drop-shadow-lg mt-4 absolute bottom-40 -right-20 hidden lg:block'>
                    <Typewriter
                        onInit={(typewriter)=> {
                        typewriter  
                        .typeString("Create a Tailwind card for a potted plant with title, body and CTA button")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Add a 3D model of a green plant above the title")
                        .pauseFor(1000)
                        .start();
                        }}
                        options={{
                            autoStart: true,
                            loop: true
                        }
                        }
                        />
                        <button type="button" className="inline-block w-[150px] absolute inset-x-0 bottom-4 mx-auto justify-center px-6 py-2.5 bg-black text-white font-medium text-sm leading-tight rounded-lg shadow-sm hover:drop-shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">Generate <span className='px-1'>✓</span></button> 
                  </div>     
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#5eead4" />
                      <stop offset={1} stopColor="#5eead4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

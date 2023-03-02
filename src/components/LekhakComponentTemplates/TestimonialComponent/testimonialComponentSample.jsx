/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, MapIcon } from '@heroicons/react/24/outline';
import AltNavBar from '../../WebsiteComponents/NavBar/altNavBar';

function TestimonialTemplate() {
    return (
      <section className="rounded-lg h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-sky-500">
        <div className="max-w-7xl h-full mx-auto md:grid md:grid-cols-2 md:px-6 lg:p-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-sky-500 lg:pl-8">
            <div className="md:flex-shrink-0">
                {/* <MapIcon className="h-10 w-10 text-white inline-block" /> */}
                <article className="prose lg:prose-md mb-8">
                <blockquote className="md:flex-grow md:flex md:flex-col">
                    <p className="font-bold text-lg uppercase align-middle tracking-widest inline-block p-2">FitNow made me healthier than ever before</p>
                </blockquote>
                </article>
            </div>
          
              <div className="relative text-lg font-medium md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative font-normal">
                I had been struggling to get into shape, but after using FitNow's services, I am in the best shape of my life. The trainers are friendly and knowledgeable, and I can't recommend them enough for anyone looking to get fit.
                </p>
                <svg
                  className="absolute bottom-0 right-0 transform rotate-180 -translate-x-12 h-8 w-8 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium ">Judith Black</div>
                    <div className="text-base font-medium text-sky-800">CEO, Tuple</div>
                  </div>
                </div>
              </footer>
          
          </div>
          
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-8 lg:pl-10">
            <div className="md:flex-shrink-0">
                {/* <MapIcon className="h-10 w-10 text-white inline-block" /> */}
                <article className="prose lg:prose-md mb-8">
                <blockquote className="md:flex-grow md:flex md:flex-col">
                    <p className="font-bold text-lg uppercase align-middle tracking-widest inline-block p-2">FitNow made me healthier than ever before</p>
                </blockquote>
                </article>
            </div>
          
              <div className="relative text-lg font-medium md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative font-normal">
                I had been struggling to get into shape, but after using FitNow's services, I am in the best shape of my life. The trainers are friendly and knowledgeable, and I can't recommend them enough for anyone looking to get fit.
                </p>
                <svg
                  className="absolute bottom-0 right-0 transform rotate-180 -translate-x-12 h-8 w-8 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium">Joseph Rodriguez</div>
                    <div className="text-base font-medium text-sky-800">CEO, Workcation</div>
                  </div>
                </div>
              </footer>
          </div>
        </div>
      </section>
    )
  }

  export default function TestimonialComponentSample() {
  
    return (
      <>
      <AltNavBar />
      <div className="px-6">
      <div className="mt-2 p-6 grid grid-cols-1 lg:grid-cols-5 gap-x-6 bg-gray-800 rounded-md">
      <>
      <div className="col-span-3 mx-auto p-6 flex justify-center items-center bg-gradient-to-r from-emerald-200 to-teal-400">
        <TestimonialTemplate />
      </div>
      </>
      <div className="bg-gray-800 col-span-2 align-middle flex w-full h-full text-center">
          <div className="mt-24 py-24">
              <p className="mx-auto w-fit bg-gray-900 rounded-2xl py-1.5 px-4 text-sm text-white font-semibold">Prompt Example</p>
              <h1
              className="px-2 pt-3 pb-6 uppercase font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400"
              >
              Testimonial Component
              </h1>
              <div
              className="shadow-sm px-4 py-3 bg-gray-800"
              >
                  <article className="prose lg:prose-md prose-invert">
                      <div className="">
                      <blockquote>
                          <p>Testimonial component, blue, for fitness company called 'FitNow'</p>
                      </blockquote>
                      </div>
                      
                  </article>
              </div>
              <a href='/playground'>
              <button
              type="button"
              className="my-4 mx-auto rounded-lg px-3 py-2 text-sm font-semibold leading-6 bg-white shadow-md"
              >
                  Try your own prompt &rarr;
              </button>
              </a>
          </div>
      </div>
      </div>
      </div>
      </>
    )
  }
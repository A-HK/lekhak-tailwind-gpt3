const TestimonialTemplateCode = `/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, MapIcon } from '@heroicons/react/24/outline';
import data from './data.json';


export default function TestimonialTemplate() {
  let selectedColor = data.colorScheme ? data.colorScheme : "#2dd4bf";

    return (
      <section className="rounded-lg h-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-neutral-100">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 lg:pr-16">
            <div className="md:flex-shrink-0">
                <MapIcon className="h-9 w-9 inline-block"  />
                {data?.component?.content?.[0]?.company &&
                <p 
                className="font-bold text-lg uppercase align-middle tracking-widest inline-block px-3 py-2">
                {data.component.content[0].company}
                </p>
                }
            </div>
            {data?.component?.content?.[0].title &&
              ( 
                <p 
                className="mt-6 font-semibold text-lg align-left inline-block">
                  {data.component.content[0].title}
                </p>
              )
            }
            <blockquote className="mt-2 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 opacity-50"
                  style={{
                    color:selectedColor
                  }}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                {data?.component?.content?.[0]?.body &&
                <p className="relative">
                  {data.component.content[0].body}
                </p>
                }
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                  {data?.component?.content?.[0]?.womanSource &&
                    <div className="text-base font-semibold">{data.component.content[0].womanSource}</div>
                  }
                  {data?.component?.content?.[0]?.womanSourcePosition &&
                    <div className="text-base font-medium"
                     style={{
                       color: selectedColor
                     }}
                     >{data.component.content[0].womanSourcePosition}
                     </div>
                  }
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16"
          style={{
            borderColor: selectedColor
          }}>
            <div className="md:flex-shrink-0">
              <GlobeAltIcon className="h-9 w-9 inline-block" />
              {data?.component?.content?.[1]?.company &&
                <p 
                className="font-bold text-lg uppercase align-middle tracking-widest inline-block px-3 py-2">
                {data.component.content[1].company}
                </p>
                }
            </div>
            {data?.component?.content?.[1].title &&
              ( 
                <p 
                className="mt-6 font-semibold text-lg align-left inline-block">
                  {data.component.content[1].title}
                </p>
              )
            }
            <blockquote className="mt-2 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium md:flex-grow">
                <svg
                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 opacity-50"
                  style={{
                    color:selectedColor
                  }}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                {data?.component?.content?.[1]?.body &&
                <p className="relative">
                {data.component.content[1].body}
                </p>
                }
              </div>
              <footer className="mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 inline-flex rounded-full">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                  {data?.component?.content?.[1]?.manSource &&
                    <div className="text-base font-semibold">{data.component.content[1].manSource}</div>
                  }
                  {data?.component?.content?.[1]?.manSourcePosition &&
                    <div 
                    className="text-base font-medium"
                    style={{
                      color: selectedColor
                    }}
                    >
                    {data.component.content[1].manSourcePosition}
                    </div>
                  }
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    )
  }
  `

  export default TestimonialTemplateCode;
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  RocketLaunchIcon,
  FlagIcon,
  CheckCircleIcon,
  PuzzlePieceIcon,
  BugAntIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


const components = [
  {
    name: 'Hero Section',
    description: 'Make the first impression of your website count by tailoring the hero section to your needs.',
    href: '/examples/hero-section',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Dashboard',
    description: 'Present daily statistics, updates and tools in a more impactful manner.',
    href: '/examples/dashboard-component',
    icon: ChartBarIcon,
  },
  {
    name: 'Modal',
    description: 'Bring important information front and center with modals and popups.',
    href: '/examples/modal-component',
    icon: ArrowPathIcon,
  },
  {
    name: 'Cards',
    description: "Showcase your content and actions with the building blocks of user interfaces.",
    href: '/examples/card-component',
    icon: Squares2X2Icon,
  },
  { 
    name: 'Features Section', 
    description: "Highlight the standout characteristics and capabilities of your creation.", 
    href: '/examples/features-section', 
    icon: PuzzlePieceIcon ,
  },
  {
    name: 'Testimonials',
    description: 'Establish trust and satisfaction by displaying what users have to say about your work.',
    href: '/examples/testimonial-component',
    icon: CheckCircleIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayCircleIcon, description: `Learn how to navigate Lekhak to get the most out of it.` },
  { name: 'Request Feature', href: 'https://github.com/A-HK/lekhak-tailwind-gpt3/issues/new?assignees=&labels=&template=%F0%9F%9A%80-feature-request.md&title=%F0%9F%9A%80+Feature+request+%3A+%5B+FEATURE+NAME+%5D', icon: FlagIcon, description: `Want to see a specific type of component that's not already here? Ask and you shall receive.`  },
  { name: 'Report Bug', href: 'https://github.com/A-HK/lekhak-tailwind-gpt3/issues/new?assignees=&labels=&template=%F0%9F%90%9B-bug-report.md&title=%F0%9F%90%9B+Bug+report+%3A+%5B+BUG+%5D', icon: BugAntIcon, description: `Complaints, compliments or suggestions? Feel free to leave your feedback here.` },
]

const recentPosts = [
  { id: 1, name: 'How to set up Lekhak on your local dev environment', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function AltNavBar() {
  return (
    <Popover className="text-left sticky inset-x-0 top-0 z-50 px-6 py-4 lg:px-8 bg-opacity-30 backdrop-filter backdrop-blur-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Lekhak.</span>
              <span className="font-black text-2xl tracking-wide inline-block">Lekhak.</span>
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
         
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-black' : 'text-gray-900',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-black focus:outline-none'
                    )}
                  >
                    <span>Templates</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-600',
                        'ml-1 mt-1 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-xl transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {components.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-teal-400" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-900">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {/* {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 flex items-center rounded-md p-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
                              >
                                <item.icon className="h-6 w-6 flex-shrink-0 text-gray-500" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))} */}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
{/* 
            <a href="/playground" className="text-base font-medium text-gray-900 hover:text-black">
              Playground
            </a> */}
            <a href="#" className="text-base font-medium text-gray-900 hover:text-black">
              How it works
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-black' : 'text-black',
                      'group inline-flex items-center rounded-md text-base font-medium hover:text-black focus:outline-none'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-600',
                        'ml-1 mt-1 h-5 w-5 group-hover:text-gray-900'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {callsToAction.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-teal-400" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-black">{item.name}</p>
                                <p className="mt-1 text-sm text-black">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-base font-medium text-black">Recent Posts</h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li key={post.id} className="text-base">
                                  <a href={post.href} className="font-medium text-black hover:text-gray-700">
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-teal-400 hover:text-teal-500">
                              View all posts
                              <span aria-hidden="true"> &rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
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
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src='/lekhak-inverted.png'
                    alt="Lekhak"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 hover:text-black focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {components.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-teal-400" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="/playground" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Playground
                </a>

                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                  How it works
                </a>
                {/* {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-black hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))} */}
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
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

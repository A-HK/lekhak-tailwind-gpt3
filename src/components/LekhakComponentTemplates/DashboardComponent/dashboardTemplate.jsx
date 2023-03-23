const DashboardTemplateCode = `import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
  BellIcon,
  ChartBarIcon,
  FlagIcon,
  ArrowTrendingUpIcon,
  ScaleIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'
import data from './data.json';

const cards = [
  { name: 'New Users', href: '#', icon: ChartBarIcon, amount: '54' },
  { name: 'Bugs Reported', href: '#', icon: FlagIcon, amount: '6' },
  { name: 'Average Response Time', href: '#', icon: ArrowTrendingUpIcon, amount: '10 seconds' },
]

const CardIcons = [ChartBarIcon, FlagIcon, ArrowTrendingUpIcon]

const actions = [
  {
    id: 1,
    name: 'Docker Pipeline Deployment',
    href: '#',
    status: 'success',
    date: 'Jan 11, 2023',
    datetime: '2023-01-11',
  },
  {
    id: 2,
    name: 'GitHub Actions',
    href: '#',
    status: 'failure',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
  },
  {
    id: 3,
    name: 'Vercel Frontend Deployment',
    href: '#',
    status: 'failure',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
  },
  
]
const statusStyles = {
  completed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  deadline: 'bg-red-200 text-red-900',
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardTemplate() {
  let selectedColor = data.colorScheme ? data.colorScheme : "#2dd4bf";

  return (
    <>
      
      <div className="bg-white w-full h-full">
        

        <div className="p-2 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
           
            {/* Search bar */}
            <div className="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none" aria-hidden="true">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search for something.."
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0"
                        alt=""
                      />
                      <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>Account Details
                      </span>
                      <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main className="flex-1 pb-8">
            {/* Page header */}
            <div>
              <div className="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div 
                  className="flex-1 min-w-0 p-6 rounded-lg"
                  style={{
                    backgroundColor: selectedColor
                  }}>
                    {/* Profile */}
                    <div className="flex items-center">
                      <img
                        className="hidden h-16 w-16 rounded-full sm:block"
                        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0"
                        alt=""
                      />
                      <div>
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 p-2 rounded-full sm:hidden"
                            src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0"
                            alt=""
                          />
                          {data?.component?.content?.[0].header
                          ? (
                            <h1 className="px-2 ml-3 text-2xl font-bold leading-7 text-white sm:leading-9 sm:truncate">
                              {data.component.content[0].header}
                            </h1>
                          )
                          : (
                            <h1 className="px-2 ml-3 text-2xl font-bold leading-7 text-white sm:leading-9 sm:truncate">
                              Good morning, Alice
                            </h1>
                          )
                          }
                        </div>
                        <dl className="px-2 mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                         
                          <dt className="sr-only">Account status</dt>
                          <dd className="mt-3 flex items-center text-sm font-medium sm:mr-6 sm:mt-0 capitalize text-white">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                            Verified account
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            </div>

            <div>
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              {data?.component?.content?.[0].statsTitle
                ? (
                  <h2 className="p-2 text-lg leading-6 font-semibold text-gray-900">{data?.component?.content?.[0].statsTitle}</h2>
                  )
                : (
                  <h2 className="p-2 text-lg leading-6 font-semibold text-gray-900">Your Statistics</h2>
                  )
              }
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Card */}
                  {data?.component?.content?.[0].stats 
                    ? (data.component.content[0].stats.map((statistic, i) => (
                    <div key={statistic.title} className="bg-white overflow-hidden shadow-lg rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                          {(i==0)
                            ? <ChartBarIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                            : (i==1)
                              ? <FlagIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                              : <ArrowTrendingUpIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                          }
                            
                          </div>
                        
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              {statistic.title &&
                                (
                                  <dt className="text-md font-medium text-gray-500">{statistic.title}</dt>
                                )
                              }
                              <dd>
                              {statistic.data &&
                                (
                                  <div className="text-lg font-medium text-gray-900">{statistic.data}</div>
                                )
                              }
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-2"
                      style={{
                        backgroundColor: selectedColor
                      }}>
                        <div className="text-sm">
                          <a href="#" className="font-medium text-white">
                            View details &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  )))
                  : (cards.map((card) => (
                    <div key={card.name} className="bg-white overflow-hidden shadow-lg rounded-lg">
                      <div className="p-5">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                          </div>
                          <div className="ml-5 w-0 flex-1">
                            <dl>
                              <dt className="text-md font-medium text-gray-500">{card.name}</dt>
                              <dd>
                                <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 py-2"
                      style={{
                        backgroundColor: selectedColor
                      }}>
                        <div className="text-sm">
                          <a href={card.href} className="font-medium text-white">
                            View details &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  )))
                }
                </div>
              </div>
              {data?.component?.content?.[0].tableTitle
              ? (
                <h2 className="max-w-6xl mx-auto mt-8 px-4 py-2 text-lg leading-6 font-semibold text-gray-900 sm:px-6 lg:px-8">
                  {data.component.content[0].tableTitle}
                </h2>
              )
              : (
                <h2 className="max-w-6xl mx-auto mt-8 px-4 py-2 text-lg leading-6 font-semibold text-gray-900 sm:px-6 lg:px-8">
                  Actions Table
                </h2>
              )
              }
              

              {/* Activity list (smallest breakpoint only) */}
              <div className="shadow sm:hidden">
                <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                  {data?.component?.content?.[0].actions && data.component.content[0].actions.map((action) => (
                    <li key={action.id}>
                      <a href="#" className="block px-4 py-4 bg-white hover:bg-gray-50">
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <PencilSquareIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="flex flex-col text-gray-500 text-sm truncate">
                              <span className="truncate">{action.name}</span>
                              <time>{action.date}</time>
                            </span>
                          </span>
                          <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activity table (small breakpoint and up) */}
              <div className="hidden sm:block">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col mt-2">
                    <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                      <table className="shadow-lg min-w-full divide-y divide-gray-200"
                      style={{
                        backgroundColor: selectedColor
                      }}>
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                              Action
                            </th>
                            <th className="hidden px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider md:block">
                              Status
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-white uppercase tracking-wider">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {data?.component?.content?.[0].actions && data.component.content[0].actions.map((action) => (
                            <tr key={action.id} className="bg-white">
                              <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div className="flex">
                                  <a href="#" className="group inline-flex space-x-2 truncate text-sm">
                                    <PencilSquareIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="text-gray-500 truncate group-hover:text-gray-900">
                                      {action.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                <span
                                  className={classNames(
                                    statusStyles[action.status],
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                  )}
                                >
                                  {action.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <time>{action.date}</time>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
               
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
`

export default DashboardTemplateCode;

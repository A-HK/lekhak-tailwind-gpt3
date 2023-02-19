import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  BuildingOffice2Icon,
  MagnifyingGlassIcon,
  BellIcon,
  ScaleIcon,
  QueueListIcon,
  WrenchIcon, 
  PencilSquareIcon
} from '@heroicons/react/24/outline'
import AltNavBar from '../../WebsiteComponents/NavBar/altNavBar'

const cards = [
  { name: 'New Users', href: '#', icon: ScaleIcon, amount: '54' },
  { name: 'Bugs Reported', href: '#', icon: ScaleIcon, amount: '6' },
  { name: 'Average Response Time', href: '#', icon: ScaleIcon, amount: '10 seconds' },
]
const transactions = [
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
    status: 'failed',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
  },
  {
    id: 3,
    name: 'Vercel Frontend Deployment',
    href: '#',
    status: 'failed',
    date: 'Jan 10, 2023',
    datetime: '2023-01-10',
  },
  // More transactions...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-red-200 text-gray-800',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DashboardTemplate() {

  return (
    <>
      
      <div className="bg-white w-full h-full rounded-lg">
        

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
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0"
                        alt=""
                      />
                      <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>Alice Doe
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
                  <div className="flex-1 min-w-0 bg-gray-800 p-6 rounded-lg">
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
                          <h1 className="ml-3 text-2xl font-bold leading-7 text-white sm:leading-9 sm:truncate">
                            Good morning, Alice Doe
                          </h1>
                        </div>
                        <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                         
                          <dt className="sr-only">Account status</dt>
                          <dd className="mt-3 flex items-center text-sm text-gray-100 font-medium sm:mr-6 sm:mt-0 capitalize">
                            <CheckCircleIcon
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
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
                <h2 className="p-2 text-lg leading-6 font-semibold text-gray-900">Your tech updates</h2>
                <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Card */}
                  {cards.map((card) => (
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
                      <div className="bg-gray-900 px-5 py-2.5">
                        <div className="text-sm">
                          <a href={card.href} className="font-medium text-white">
                            View details &rarr;
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="max-w-6xl mx-auto mt-8 px-4 py-2 text-lg leading-6 font-semibold text-gray-900 sm:px-6 lg:px-8">
                Recent activity
              </h2>

              {/* Activity list (smallest breakpoint only) */}
              <div className="shadow sm:hidden">
                <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                  {transactions.map((transaction) => (
                    <li key={transaction.id}>
                      <a href={transaction.href} className="block px-4 py-4 bg-white hover:bg-gray-50">
                        <span className="flex items-center space-x-4">
                          <span className="flex-1 flex space-x-2 truncate">
                            <PencilSquareIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                            <span className="flex flex-col text-gray-500 px-2 text-sm truncate">
                              <span className="truncate">{transaction.name}</span>
                              {/* <span>
                                <span className="text-gray-900 font-medium">{transaction.amount}</span>{' '}
                                {transaction.currency}
                              </span> */}
                              <time dateTime={transaction.datetime}>{transaction.date}</time>
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
                    <div className="align-middle min-w-full overflow-x-auto shadow-lg overflow-hidden sm:rounded-lg">
                      <table className="shadow-lg min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 bg-gray-800 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
                              Action
                            </th>
                            {/* <th className="px-6 py-3 bg-gray-800 text-right text-xs font-medium text-gray-50 uppercase tracking-wider">
                              Amount
                            </th> */}
                            <th className="hidden px-6 py-3 bg-gray-800 text-left text-xs font-medium text-gray-50 uppercase tracking-wider md:block">
                              Status
                            </th>
                            <th className="px-6 py-3 bg-gray-800 text-right text-xs font-medium text-gray-50 uppercase tracking-wider">
                              Date
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {transactions.map((transaction) => (
                            <tr key={transaction.id} className="bg-white">
                              <td className="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                <div className="flex">
                                  <a href={transaction.href} className="group inline-flex space-x-2 truncate text-sm">
                                    <PencilSquareIcon
                                      className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true"
                                    />
                                    <p className="text-gray-500 px-2 truncate group-hover:text-gray-900">
                                      {transaction.name}
                                    </p>
                                  </a>
                                </div>
                              </td>
                              {/* <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <span className="text-gray-900 font-medium">{transaction.amount} </span>
                                {transaction.currency}
                              </td> */}
                              <td className="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block">
                                <span
                                  className={classNames(
                                    statusStyles[transaction.status],
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize'
                                  )}
                                >
                                  {transaction.status}
                                </span>
                              </td>
                              <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
                                <time dateTime={transaction.datetime}>{transaction.date}</time>
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

export default function DashboardComponentSample() {
  
    return (
      <>
      <AltNavBar />
      <div className="px-6">
      <div className="mt-2 p-6 grid grid-cols-1 lg:grid-cols-4 gap-x-6 bg-gray-800 rounded-md">
      <>
      <div className="p-4 col-span-3 flex justify-center items-center bg-gradient-to-r from-emerald-200 to-teal-400">
        <DashboardTemplate />
      </div>
      </>
      <div className="bg-gray-800 col-span-1 align-middle flex w-full h-full max-w-md text-center">
        <div className="m-auto -translate-y-6">
            <p className="mx-auto w-fit bg-gray-900 text-white rounded-2xl py-1.5 px-4 text-sm font-semibold">Prompt Example</p>
            <h1
            className="px-2 pt-3 pb-6 uppercase font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-400"
            >
            Dashboard Component
            </h1>
            <div
            className="shadow-sm px-4 py-3 bg-gray-800"
            >
                <article className="prose lg:prose-md prose-invert">
                    <div className="">
                    <blockquote>
                        <p>Dashboard section for a tech company, black</p>
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
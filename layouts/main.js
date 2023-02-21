export default function MainLayout({ children }) {
  return (
    <>
      <main>

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://cf-tech.dev/" className="flex items-center">
              <img src="/images/Logo.png" className="h-8 mr-3 sm:h-9" alt="CF Technologies logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-yellow-300">CF Technologies</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-yellow-500 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="/" className="block py-2 pl-3 pr-4 text-white bg-yellow-300 rounded md:bg-transparent md:text-gray-700 md:p-0 md:hover:text-yellow-200 dark:text-gray-400" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="/about" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-200 dark:hover:bg-gray-700 dark:hover:text-yellow-200 md:dark:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="/testimonials" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Clients</a>
                </li>
                <li>
                  <a href="/contact" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-200 md:p-0 dark:text-gray-400 md:dark:hover:text-yellow-200 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}

        <footer className="p-1 bg-gray-900 rounded-md shadow md:px-6 md:py-1 dark:bg-gray-900">
          <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="container  items-center text-center justify-between mx-auto">
            <span className="block text-sm text-yellow-200 sm:text-center dark:text-yellow-200"><img className="h-8 max-w-lg mx-auto" src="/images/Logo.png" alt="CF Technologies Logo" />©
              <a href="https://cf-tech.dev/" className="hover:underline object-right items-center"> CF Technologies</a> 2023. All Rights Reserved.
            </span>
          </div>
        </footer>
      </main>
    </>
  )
}
import React from "react";
import { Link} from 'react-router-dom'

export default function Contact(){
  return(
      <div>
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
              <Link to="/" className="flex">
                  <svg className="mr-3 h-10" viewBox="0 0 52 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z" fill="#76A9FA"></path><path d="M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z" fill="#A4CAFE"></path><path d="M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z" fill="#1C64F2"></path></svg>
                  <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Frivacy</span>
              </Link>
              <div class="flex md:order-2">
                  <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                  <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                      <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </button>
              </div>
              <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                  <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                          <Link to="/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</Link>
                      </li>
                      <li>
                          <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                      </li>
                      <li>
                          <Link to="/services" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</Link>
                      </li>
                      <li>
                          <Link to="/contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:text-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Contact</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
      <div class="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
      <div class="bg-white shadow rounded-lg lg:flex items-center justify-center md:mt-0 w-full lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0">
	<div class="hidden lg:flex w-2/3">
		<img class="rounded-l-lg" src="https://flowbite.com/application-ui/demo/images/authentication/login.jpg" alt="Login"/>
	</div>
	<div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
    <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
   Sign in to platform
</h2>
<form class="mt-8 space-y-6" action="#">
   <div>
      <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Your email</label>
      <input type="email" name="email" id="email"
         class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         placeholder="name@company.com" required />
   </div>
   <div>
      <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Your password</label>
      <input type="password" name="password" id="password" placeholder=""
         class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         required />
   </div>
   <div class="flex items-start">
      <div class="flex items-center h-5">
         <input id="remember" aria-describedby="remember" name="remember" type="checkbox"
            class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" required  />
      </div>
      <div class="text-sm ml-3">
         <label for="remember" class="font-medium text-gray-900">Remember me</label>
      </div>
      <a href="index.html" class="text-sm text-blue-700 hover:underline ml-auto">Lost Password?</a>
   </div>
   <button type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">Login
   to your account</button>
   <div class="text-sm font-medium text-gray-500">
      Not registered? <a class="text-blue-700 hover:underline">Create account</a>
   </div>
</form>
	</div>
    </div>
       </div>
      </div>
  );
}
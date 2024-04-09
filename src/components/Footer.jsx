import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
<footer class="bg-white dark:bg-dark">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="Hiideout Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Hideout</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Resources</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <p  class="hover:underline"><Link to={"https://reactjs.com/"}>React JS</Link></p>
                      </li>
                      <li>
                          <p  class="hover:underline" ><Link to={"https://tailwindcss.com/"}>Tailwind CSS</Link></p>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Follow us</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <p  class="hover:underline "><Link to={"https://github.com"}>Github</Link></p>
                      </li>
                      {/* <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li> */}
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-dark uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <p  class="hover:underline"><Link to={"/"}>Privacy Policy</Link></p>
                      </li>
                      <li>
                          <p  class="hover:underline"><Link to={"/"}>Terms &amp; Conditions</Link></p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">Hideout™</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer
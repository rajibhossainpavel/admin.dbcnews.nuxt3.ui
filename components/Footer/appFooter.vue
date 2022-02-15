<template>
  <footer class="pb-1 bg-gray-100 font-poppins shadow-top">
    <section
      class="px-2 mx-auto text-sm leading-normal tracking-wide text-gray-800  max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="py-6">
        <div class="leading-normal tracking-wide">
          <div class="flex justify-center">
            <a href="/">
              <img src="https://dbcnews.tv/img/dbc.png" class="w-auto h-16" />
            </a>
          </div>
          <div class="flex flex-wrap justify-between">
            <div class="w-6/12 mt-6 sm:w-4/12">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block w-5 h-5 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="ml-1 text-base font-semibold">Authority</span>
              </div>
              <div class="ml-6">
                <div class="">
                  <span class=""> Chairman :</span>
                  <span class="">Iqbal Sobhan Chowdhury</span>
                </div>
                <div class="">
                  <span class=""> Managing Director :</span>
                  <span class="">Shahidul Ahsan</span>
                </div>
                <div class="">
                  <span class=""> Editor-in-Chief :</span>
                  <span class="">M. Manjurul Islam</span>
                </div>
              </div>
            </div>
            <div class="w-6/12 mt-6 sm:w-4/12">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 text-red-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="ml-1 text-base font-semibold">Address</span>
              </div>
              <div class="ml-6">
                <div class="inline-block">
                  Ahsan Tower,<br />
                  76 Bir Uttam AK Khandaker Road, <br />
                  Mohakhali Commercial Area, Dhaka - 1213, Bangladesh
                </div>
              </div>
            </div>
            <div class="w-6/12 mt-6 sm:w-4/12">
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 text-red-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <span class="ml-1 text-base font-semibold">Contact</span>
              </div>
              <div class="ml-6">
                <div class="inline-block">
                  Phone: <span>+8096 777322</span> or
                  <span>+802 9852431-5</span>
                </div>
                <div class="">Fax: +802 9852360</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="px-2">
        <div class="flex items-center justify-center w-full my-2">
          <div>
            <div class="mb-2 text-base font-semibold text-center">
              Download Mobile App
            </div>
            <a href="" target="_blank">
              <img src="@/assets/images/app.png" alt="" class="inline-block" />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-3 leading-normal tracking-wide">
        <div class="px-2">
          <div
            class="flex items-center justify-between w-full py-3 border-t border-b "
          >
            <div class="flex flex-wrap">
              <nuxt-link to="/privacy" class="px-1 whitespace-nowrap"
                >Privacy Policy
              </nuxt-link>
              <nuxt-link
                to="/privacy"
                class="px-1 border-l border-gray-500 whitespace-nowrap"
                >Usage Terms
              </nuxt-link>
            </div>
            <ElementsSocialLink />
          </div>
          <div class="my-3 text-sm text-center">
            <!-- &copy; {{ date('Y') }}  -->
            All rights reserved Dhaka Bangla Media
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>
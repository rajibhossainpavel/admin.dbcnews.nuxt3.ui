<template>
  <div
    class="order-3 col-span-12 overflow-hidden bg-white rounded-md shadow  md:order-2 row-span-10 sm:col-span-6 md:col-span-4 lg:col-span-3"
  >
    <aside class="h-full pb-3">
      <div class="relative w-full">
        <img
          src="https://www.gard.no/Content/29112072/cache=20203101143212/Coronavirus_people.jpg"
          class="w-full h-auto"
          alt="covid"
        />
        <div class="absolute p-5 text-xl font-bold text-gray-100 top-2 left-2">
          #COVID19
        </div>

        <div
          class="absolute bottom-0 w-full h-16  bg-gradient-to-t from-gray-100 to-transparent"
        ></div>
      </div>
      <div class="h-full">
        <ul class="w-full px-2 mt-3 space-y-3 list-none divide-y">
          <li
            class="
              flex
              items-center
              p-3
              delay-150
              transition
              bg-white
              rounded-md
              hover:shadow-md
              z-[9999]
            "
            v-for="n in 4"
            :key="n"
          >
            <a href="#" class="flex-grow">
              <h5 class="mb-2 text-base tracking-tight text-red-500 underline">
                বাংলাদেশে করোনার ওষুধ
              </h5>
              <p
                class="mb-2 text-sm tracking-tight text-gray-500"
                style="
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                "
              >
                বাংলাদেশে করোনার ওষুধ 'মলনুপিরাভির' ব্যবহারের অনুমোদন বাংলাদেশে
                করোনার
              </p>
            </a>
            <a href="#" class="">
              <img
                src="https://bing.com/th?id=ABTEC4218F97543D8D70CCCB2BE0E33E7B228AEDC3A56475572700A168A5E2B17B6"
                alt=""
              />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</template>

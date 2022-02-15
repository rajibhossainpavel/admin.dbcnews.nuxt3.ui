<template>
  <div class="flex h-full">
    <nav class="w-full shadow bg-gradient-to-r from-white to-gray-200">
      <div class="px-4 py-2 mx-auto md:py-4 max-w-7xl sm:px-6 lg:px-8">
        <div class="grid w-full grid-cols-5">
          <div class="hidden col-span-2 md:block"></div>
          <div class="col-span-2 md:col-auto">
            <div class="flex items-center h-full md:justify-center">
              <!-- <nuxt-link to="/">
                <img
                  src="https://dbcnews.tv/img/dbc.png"
                  class="w-16 md:w-32"
                  alt="DBC News"
                />
              </nuxt-link> -->
            </div>
          </div>

          <div class="flex items-center justify-end col-span-3 md:col-span-2">
            <div class="relative">
              <span
                class="absolute left-0 flex items-center justify-center w-10 h-8 text-gray-500 pointer-events-none  group-focus-within:text-primary-500"
              >
                <SearchIcon class="w-5 h-5" />
              </span>

              <input
                placeholder="Search"
                type="search"
                autocomplete="off"
                class="block w-full h-8 pl-10 placeholder-gray-500 transition duration-75 border-transparent rounded-md  lg:text-sm bg-gray-400/10 focus:bg-white focus:placeholder-gray-400 focus:border-indigo-300 focus:ring focus:ring-opacity-50 focus:ring-indigo-200"
              />
            </div>
            <button>
              <SearchIcon class="inline-block w-6 h-6 text-gray-700" />
            </button>
            <button>
              <XIcon class="inline-block w-6 h-6 text-gray-700" />
            </button>

            <button
              type="button"
              class="inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md  hover:text-gray-900"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div
        class="hidden w-full text-white bg-red-700 border-t border-gray-200 shadow-md  shadow-red-200 lg:block"
      >
        <div
          class="flex items-center h-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div class="px-6" v-for="n in 10" :key="n">
            <nuxt-link :to="link('politics')" class="cursor-pointer"
              >রাজনীতি</nuxt-link
            >
          </div>
        </div>
      </div>
    </nav>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 overflow-hidden"
        @close="sidebarOpen = false"
      >
        <div class="absolute inset-0 overflow-hidden">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-500"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75 "
            />
          </TransitionChild>
          <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div class="relative w-screen max-w-md">
                <TransitionChild
                  as="template"
                  enter="ease-in-out duration-500"
                  enter-from="opacity-0"
                  enter-to="opacity-100"
                  leave="ease-in-out duration-500"
                  leave-from="opacity-100"
                  leave-to="opacity-0"
                >
                  <div
                    class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8  sm:-ml-10 sm:pr-4"
                  >
                    <button
                      type="button"
                      class="text-gray-300 rounded-md  hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="sidebarOpen = false"
                    >
                      <span class="sr-only">Close panel</span>
                      <XIcon class="w-6 h-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div
                  class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl "
                >
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-lg font-medium text-gray-900">
                      Panel title
                    </DialogTitle>

                    <div class="flex-1 mt-5 overflow-y-auto">
                      <nav class="px-2 space-y-1">
                        <a
                          v-for="item in 30"
                          :key="item.name"
                          :class="[
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                          ]"
                        >
                          <component
                            :is="item"
                            :class="[
                              item.current
                                ? 'text-gray-500'
                                : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6',
                            ]"
                            aria-hidden="true"
                          />
                          {{ item }}
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div class="relative flex-1 px-4 mt-6 sm:px-6">
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div
                        class="h-full border-2 border-gray-200 border-dashed"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
      <div class="">
        <div
          class="
            flex
            items-center
            justify-between
            bg-gray-50
            border-b border-gray-200
            px-4
            py-1.5
          "
        >
          <div>
            <img
              class="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <div>
            <button
              type="button"
              class="inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md hover:text-gray-900"
              @click="sidebarOpen = true"
            >
              <span class="sr-only">Open sidebar</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <div class="relative z-0 flex flex-1 overflow-hidden">
        <main
          class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
        >
          <div class="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
            <div
              class="h-full border-2 border-gray-200 border-dashed rounded-lg"
            />
          </div>
        </main>
        <aside
          class="relative flex-shrink-0 hidden overflow-y-auto border-r border-gray-200 xl:order-first xl:flex xl:flex-col w-96"
        >
          <div class="absolute inset-0 px-4 py-6 sm:px-6 lg:px-8">
            <div
              class="h-full border-2 border-gray-200 border-dashed rounded-lg"
            />
          </div>
        </aside>
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { MenuIcon, XIcon, SearchIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
    SearchIcon,
  },
  setup() {
    const sidebarOpen = ref(false);
    const searchBox = useNavbar(false);

    return {
      sidebarOpen,
      searchBox,
    };
  },
  methods: {
    link(slug) {
      return {
        name: "articles",
        query: { categories: slug },
      };
    },
  },
};
</script>

<template>
  <div class="hidden lg:flex lg:w-36 lg:flex-col lg:fixed lg:inset-y-0">
    <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-cyan-700">
      <div class="flex items-center flex-shrink-0 px-4">
        <img
          class="w-auto h-8"
          src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
          alt="Easywire logo"
        />
      </div>
      <nav
        class="flex flex-col flex-1 mt-5 overflow-y-auto divide-y  divide-cyan-800"
        aria-label="Sidebar"
      >
        <div class="px-2 space-y-1">
          <a
            v-for="item in navigation"
            :key="item.name"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-cyan-800 text-white'
                : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
              'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            <component
              :is="item.icon"
              class="flex-shrink-0 w-6 h-6 mr-4 text-cyan-200"
              aria-hidden="true"
            />
            {{ item.name }}
          </a>
        </div>
        <div class="pt-6 mt-6">
          <div class="px-2 space-y-1">
            <a
              v-for="item in secondaryNavigation"
              :key="item.name"
              :href="item.href"
              class="flex items-center px-2 py-2 text-sm font-medium leading-6 rounded-md  group text-cyan-100 hover:text-white hover:bg-cyan-600"
            >
              <component
                :is="item.icon"
                class="w-6 h-6 mr-4 text-cyan-200"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/vue/solid";

const navigation = [
  { name: "Articles", href: "/", icon: HomeIcon, current: true },
  { name: "History", href: "#", icon: ClockIcon, current: false },
  { name: "Balances", href: "#", icon: ScaleIcon, current: false },
  { name: "Cards", href: "#", icon: CreditCardIcon, current: false },
  { name: "Recipients", href: "#", icon: UserGroupIcon, current: false },
  { name: "Reports", href: "#", icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: "Settings", href: "#", icon: CogIcon },
  { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MenuAlt1Icon,
    OfficeBuildingIcon,
    SearchIcon,
    XIcon,
  },
  setup() {
    const sidebarOpen = ref(false);

    return {
      navigation,
      secondaryNavigation,
    };
  },
};
</script>



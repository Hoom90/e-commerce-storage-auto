<script setup>
import timerIcon from "../assets/svg/timer.svg"
import coinIcon from "../assets/svg/coin.svg"
import desktopIcon from "@/assets/svg/desktop.svg"
import tagIcon from "../assets/svg/tag.svg"
import settingIcon from "@/assets/svg/setting.svg"
import rightIcon from "@/assets/svg/right.svg"
import right_disabledIcon from "@/assets/svg/right_disabled.svg"
import setting2Icon from "@/assets/svg/setting2.svg"
import setting2_disabledIcon from "@/assets/svg/setting2_disabled.svg"

import { appStore } from '../store/app.js'
import store from '../store';

// import moment from 'jalali-moment';

const breadCrumb = appStore()
const options = appStore()
const router = useRouter()
const sidebar = ref()
const optionsBar = ref()
const links = [
  { title: 'آمار', url: '/account/history', img: timerIcon },
  { title: 'صندوق', url: '/account/cashier', img: coinIcon },
  { title: 'داشبورد', url: '/account', img: desktopIcon },
  { title: 'انبارداری', url: '/account/warehouse', img: tagIcon },
  { title: 'تنظیمات', url: '/account/user', img: settingIcon },
]

const state = reactive({
  sidebar: false,
  options: false,
  todayDate: null
})

const loggedIn = computed(() => {
  return store.state.auth.status.loggedIn;
})

onMounted(() => {
  // state.todayDate = moment().locale('fa').format('YYYY/M/D')
  // if (loggedIn) router.push('/')
})

const handleOptions = () => {
  optionsBar.value.classList.toggle('hidden')
  state.options = !state.options
}

const handleDropdown = () => {
  if (state.sidebar) sidebar.value.classList.replace('right-0', '-right-[100vw]')
  else sidebar.value.classList.replace('-right-[100vw]', 'right-0')
  state.sidebar = !state.sidebar
}

const handleLogout = () => {
  store.dispatch('auth/logout')
  router.push('/login');
}

</script>
<template>
  <div class="fixed top-0 bg-main w-full shadow-md z-10">

    <div class="grid grid-flow-col grid-cols-3 text-center items-center gap-3 p-3 px-5">
      <button :disabled="breadCrumb.getBreadCrumbs.length != 0 ? false : true"
        :class="breadCrumb.getBreadCrumbs.length != 0 ? 'visible' : 'invisible'">
        <img :src="rightIcon" alt="rightIcon">
      </button>

      <!-- <button @click="handleDropdown" class="p-2 border rounded hover:border-blue-500 hidden md:block">
        <svg v-if="!state.sidebar" width="20" height="20" viewBox="0 0 24 24" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <svg v-else width="20" height="20" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 21.32L21 3.32001" stroke="currentcolor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3 3.32001L21 21.32" stroke="currentcolor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </button> -->
      <p class="font-bold">{{ breadCrumb.getPageTitle.title }}</p>
      <button dir="ltr" :disabled="options.getOptions.length != 0 ? false : true"
        :class="options.getOptions.length != 0 ? 'visible' : 'invisible'">
        <img :src="setting2Icon" @click="handleOptions" alt="setting2Icon">
        <div ref="optionsBar" class="absolute hidden top-20 left-0 bg-transparent w-full h-[calc(100vh-150px)]"
          @click="handleOptions">
          <div class="bg-main p-3 shadow-md">
            <button v-for="(item, index) in options.getOptions" :key="index" class="w-full rounded p-3"
              :class="item.style" @click="item.method">{{
                item.title
              }}</button>
          </div>
        </div>
      </button>
    </div>

    <!-- <div
      class="absolute top-20 -right-[100vw] hidden md:block w-full h-[calc(100vh-80px)] md:w-[300px] transition-all ease-in-out duration-300"
      ref="sidebar" @click="handleDropdown">
      <div class="flex flex-col w-full h-full shadow-[0px_3px_5px_#c9c9c9]">
        <div class="flex bg-slate-50 h-full w-full flex-col">
          <div class="my-5 mx-8 p-3 border rounded">
            <p class="flex gap-3">
              <img :src="userIcon" alt="userIcon" class="max-w-[20px]">
              <span>محمد مهدوی</span>
            </p>
            <p class="flex items-center gap-4 mt-3">
              <img :src="timeIcon" alt="timeIcon" class="max-w-[20px]">
              <span>{{ state.todayDate }}</span>
            </p>
          </div>
          <RouterLink :to="item.url" exact-active-class="bg-blue-500"
            class="border-b hover:bg-blue-600 w-full flex justify-start items-center gap-3 transition-all px-8"
            :class="state.sidebar ? 'px-3' : 'px-0'" v-for="item in links" :title="item.title">
            <img :src="item.img" :alt="item.img">
            <span class="font-bold">{{ item.title }}</span>
          </RouterLink>
          <button
            class="flex items-center justify-center md:justify-start hover:bg-red-600 bg-red-500 text-white px-8 py-1 border rounded border-red-500 m-3 mt-auto"
            :class="state.sidebar ? 'px-3' : 'px-0'" @click="handleLogout" title="خروج">
            <img :src="lockIcon" alt="logout">
            <span>خروج</span>
          </button>
        </div>
      </div>
    </div> -->
  </div>



  <div class="h-[calc(100vh-104px)] overflow-auto mt-12 p-5 relative">
    <RouterView />

    <!-- <div class=" w-full h-full">
      <RouterView />
    </div> -->
  </div>

  <div class="fixed bottom-0 bg-background w-full z-10 shadow-md">
    <div class="grid grid-flow-col items-center">
      <button type="button" v-for="item in links" class="flex justify-center items-center">
        <RouterLink :to="item.url" :title="item.title" class="w-full py-1" exact-active-class="bg-main">
          <img :src="item.img" :alt="item.img" class="mx-auto">
          <span class="font-bold"><small>{{ item.title }}</small></span>
        </RouterLink>
      </button>
    </div>
  </div>
</template>
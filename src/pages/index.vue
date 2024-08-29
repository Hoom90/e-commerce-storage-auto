<script setup>
const usernameError = ref(false)
const passwordError = ref(false)
const usernameIsEmpty = ref(true)
const passwordIsEmpty = ref(true)

const loading = ref(false)
const message = ref(null)
const IsError = ref(false)
const router = useRouter()
const state = reactive({
  username: '',
  password: ''
})

const loggedIn = computed(() => {
  return store.state.auth.status.loggedIn;
})

onMounted(() => {
  if (loggedIn) {
    router.push('/');
  }
})

const login = () => {
  debugger
  //   if (!username.value) {
  //     usernameError.value = true
  //     document.querySelector("input[name=username]").classList.add("border-red-500")
  //   }
  //   if(!password.value) {
  //     passwordError.value = true
  //     document.querySelector("input[name=password]").classList.add("border-red-500")
  //   }
  //   else {
  //     loading.value = true;
  //     if (username.value && password.value) {
  //       store.dispatch('auth/login', {'username':username.value, 'password':password.value}).then(
  //         () => {
  //           loading.value = false;
  //           router.push('/');
  //         },
  //         error => {
  //           message.value = error.toString().split(":")[1]
  //           IsError.value = true
  //           loading.value = false;
  //         }
  //       )
  //     }
  //   }
}

const authorizeInput = () => {
  if (password.value) {
    passwordIsEmpty.value = false
  }
  if (!password.value) {
    passwordIsEmpty.value = true
  }
  if (username.value) {
    usernameIsEmpty.value = false
  }
  if (!username.value) {
    usernameIsEmpty.value = true
  }
  if (document.querySelector("input[name=username]").classList.contains("border-red-500") && username.value) {
    document.querySelector("input[name=username]").classList.remove("border-red-500")
    usernameError.value = false
  }
  if (document.querySelector("input[name=password]").classList.contains("border-red-500") && password.value) {
    document.querySelector("input[name=password]").classList.remove("border-red-500")
    passwordError.value = false
  }
}
</script>

<template>
  <form @submit.prevent="login">
    <div class="flex flex-col gap-5 p-[20px] h-screen justify-center items-center">
      <div class="flex flex-col gap-5 w-full justify-center items-center">
        <p class="font-bold text-[24px]">خوش آمدید</p>
        <div class="flex flex-col gap-2 max-w-[300px] w-full">
          <div class="relative">
            <input type="text" v-model="state.username"
              class="w-full border rounded px-2 p-2 focus:border-[#49b779] focus:outline-none" @keydown.prevent="login">
            <span class="floating-label">نام کاربری</span>
          </div>
          <div class="relative">
            <input type="password" v-model="state.password"
              class="w-full border rounded px-2 p-2 focus:border-[#49b779] focus:outline-none" dir="ltr"
              @keydown.prevent="login">
            <span class="floating-label">رمز عبور</span>
          </div>
        </div>
        <button type="submit"
          class="bg-[#49B779] font-bold rounded text-white max-w-[100px] w-full px-2 p-2">ورود</button>
      </div>
    </div>
  </form>

  <Loading v-if="loading" />
  <error v-if="IsError" :message="message" @update:IsError="() => { IsError = false }" />
</template>
<style scoped>
.floating-label {
  font-size: 16px;
  color: #cccccc;
  position: absolute;
  pointer-events: none;
  top: 10px;
  right: 10px;
  transition: all 0.1s ease;
}

input:focus~.floating-label {
  top: -8px;
  right: 5px;
  font-size: 11px;
  opacity: 1;
  color: #49b779;
  background: white
}
</style>
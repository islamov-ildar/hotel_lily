<script lang="ts">
import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from '@/firebase';
import {useRouter} from "vue-router";

export default {
  setup() {

    const password = ref<string>('');
    const email = ref<string>('');
    const showPassword = ref<boolean>(false);
    const authLoginPasswordError = ref(false);


    const router = useRouter();

    console.log(app)
    async function sendData() {

      const auth = getAuth();

      authLoginPasswordError.value = false;

      signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('userCredential', userCredential, user);
            router.push({name: 'admin'})
          })
          .catch((error) => {
            if(error.code === 'auth/invalid-email') authLoginPasswordError.value = true
          });
    }

    return {
      showPassword,
      password,
      email,
      sendData,
      authLoginPasswordError,
    }
  }
}


</script>
<template>
  <div class="flex flex-col h-[100vh]">
    <div class="bg-blueMain">
      <div class="font-helveticaLight header-grid pt-[26px] text-[17px] h-[170px]">
        <div>
          <div class="header-container pb-[30px] pt-[25px]">
            <div class="ml-[20%] flex items-center gap-[10px]">
            </div>
          </div>
        </div>
        <div class="mx-auto">
          <img src="@/assets/images/logo.svg" width="145px" alt="logo">
        </div>
        <div class="">
          <div class="header-container pb-[30px] pt-[25px]">
            <div class="text-right mr-[20%] text-[#FBF6ED] flex justify-end gap-[60px]">
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center pb-[40px]">
        <div class="font-ralewayRegular uppercase text-yellowMain text-[40px]">
          Админ-панель
        </div>
      </div>
    </div>
    <div class="bg-whiteMain h-full">
      <div class="mt-[100px]">
        <div class="h-full flex items-center justify-center">
          <div class="border-2 border-blueMain text-blueMain font-montserratMedium text-[18px] bg-whiteMain p-[50px]">
            <div class="border border-blueMain">
              <div class="bg-whiteMain px-[20px] mt-[-32px] mx-[210px] mb-[50px] text-[40px] font-cormorant">
                Авторизация
              </div>
              <div class="flex justify-center items-center">
                <div
                    class="flex flex-col justify-between items-center h-full gap-[15px] mb-[30px] font-montserratSemiBold">
                  <div class="flex border border-blueMain text-[20px]">
                    <div class="w-[143px] h-[65px] bg-blueMain text-whiteMain flex items-center justify-center">
                      <div>Логин</div>
                    </div>
                    <input v-model="email" class="bg-whiteMain w-[300px] text-center" type="text">
                  </div>
                  <div class="flex border border-blueMain text-[20px] relative">
                    <div class="w-[143px] h-[65px] bg-blueMain text-whiteMain flex items-center justify-center">
                      <div>Пароль</div>
                    </div>
                    <input v-if="showPassword" v-model="password" class="bg-whiteMain w-[300px] text-center"
                           type="text">
                    <input v-else v-model="password" class="bg-whiteMain w-[300px] text-center text-[#999999]"
                           type="password">
                    <button @click="showPassword = !showPassword" class="absolute right-[15px] h-[65px]">
                      <svg v-if="showPassword" width="30" height="23" viewBox="0 0 30 23" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4511 15.3798C17.5939 15.3798 19.331 13.6428 19.331 11.5C19.331 9.35721 17.5939 7.62015 15.4511 7.62015C13.3084 7.62015 11.5713 9.35721 11.5713 11.5C11.5713 13.6428 13.3084 15.3798 15.4511 15.3798Z"
                            fill="#2A657E"/>
                        <path
                            d="M29.9425 11.1702C28.8017 8.21926 26.8212 5.66726 24.2458 3.82964C21.6703 1.99202 18.6129 0.949335 15.4513 0.830444C12.2898 0.949335 9.23232 1.99202 6.6569 3.82964C4.08147 5.66726 2.10096 8.21926 0.960129 11.1702C0.883082 11.3833 0.883082 11.6167 0.960129 11.8298C2.10096 14.7807 4.08147 17.3327 6.6569 19.1704C9.23232 21.008 12.2898 22.0507 15.4513 22.1696C18.6129 22.0507 21.6703 21.008 24.2458 19.1704C26.8212 17.3327 28.8017 14.7807 29.9425 11.8298C30.0196 11.6167 30.0196 11.3833 29.9425 11.1702ZM15.4513 17.8047C14.2044 17.8047 12.9854 17.435 11.9486 16.7422C10.9118 16.0494 10.1037 15.0648 9.62651 13.9127C9.14932 12.7607 9.02446 11.493 9.26773 10.27C9.511 9.04701 10.1115 7.92361 10.9932 7.04188C11.8749 6.16014 12.9983 5.55968 14.2213 5.31641C15.4443 5.07314 16.712 5.19799 17.864 5.67518C19.0161 6.15237 20.0007 6.96047 20.6935 7.99728C21.3863 9.03409 21.7561 10.253 21.7561 11.5C21.7535 13.1713 21.0884 14.7735 19.9066 15.9553C18.7248 17.1371 17.1227 17.8022 15.4513 17.8047Z"
                            fill="#2A657E"/>
                      </svg>
                      <svg v-else width="30" height="23" viewBox="0 0 30 23" fill="none"
                           xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.4511 15.3798C17.5939 15.3798 19.331 13.6427 19.331 11.5C19.331 9.35718 17.5939 7.62012 15.4511 7.62012C13.3084 7.62012 11.5713 9.35718 11.5713 11.5C11.5713 13.6427 13.3084 15.3798 15.4511 15.3798Z"
                            fill="#999999"/>
                        <path
                            d="M29.9425 11.1702C28.8017 8.21926 26.8212 5.66726 24.2458 3.82964C21.6703 1.99202 18.6129 0.949335 15.4513 0.830444C12.2898 0.949335 9.23232 1.99202 6.6569 3.82964C4.08147 5.66726 2.10096 8.21926 0.960129 11.1702C0.883082 11.3833 0.883082 11.6167 0.960129 11.8298C2.10096 14.7807 4.08147 17.3327 6.6569 19.1704C9.23232 21.008 12.2898 22.0507 15.4513 22.1696C18.6129 22.0507 21.6703 21.008 24.2458 19.1704C26.8212 17.3327 28.8017 14.7807 29.9425 11.8298C30.0196 11.6167 30.0196 11.3833 29.9425 11.1702ZM15.4513 17.8047C14.2044 17.8047 12.9854 17.435 11.9486 16.7422C10.9118 16.0494 10.1037 15.0648 9.62651 13.9127C9.14932 12.7607 9.02446 11.493 9.26773 10.27C9.511 9.04701 10.1115 7.92361 10.9932 7.04188C11.8749 6.16014 12.9983 5.55968 14.2213 5.31641C15.4443 5.07314 16.712 5.19799 17.864 5.67518C19.0161 6.15237 20.0007 6.96047 20.6935 7.99728C21.3863 9.03409 21.7561 10.253 21.7561 11.5C21.7535 13.1713 21.0884 14.7735 19.9066 15.9553C18.7248 17.1371 17.1227 17.8022 15.4513 17.8047Z"
                            fill="#999999"/>
                      </svg>
                    </button>
                  </div>
                  <div class="w-full flex justify-end mt-[19px]">
                    <div class="relative">
                      <div v-if="authLoginPasswordError"
                           class="absolute top-[-30px] left-[5px] text-mainPink text-[18px] font-montserratMedium text-center w-full">
                        Неверный логин или пароль
                      </div>
                      <button @click="sendData"
                              class="text-whiteMain text-[20px] font-montserratSemiBold bg-yellowMain px-[123px] py-[20px]">
                        Войти
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.header-grid {
  display: grid;
  grid-template-columns: 1fr 200px 1fr;
}

.header-container {
  border-bottom: 2px solid var(--main-yellow-color);
  background-color: var(--main-blue-color);
}
</style>

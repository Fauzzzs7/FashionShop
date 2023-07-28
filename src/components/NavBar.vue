<script>
var csrfToken = "{{ csrf_token() }}";
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;
import axios from "axios";
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    // const parts = token.split('|');
    // const newtoken = parts[1];
    // console.log(token);
    localStorage.setItem('token', token);
    window.history.replaceState(null, null, window.location.pathname);
export default {  
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    
    if (token) {
      this.isLoggedIn = true;
    }
    if (!token){
      this.isLoggedIn = false;
   }
  },
  methods: {
  logout() {
    axios.post('http://127.0.0.1:8000/api/logout', null, {
    headers: {
    Authorization: `Bearer ${token}`,
    },
  })
      .then(response => {
        this.$router.push('/');
        localStorage.removeItem("token");
        this.isLoggedIn = false;
        console.log(response.data.message);
      })
      .catch(error => {
        console.error(error.response.data);
      });
  }
}
};
</script>

<template>
  <nav v-if="{'logged-in': isLoggedIn, 'not-logged-in': !isLoggedIn}">
    <div class="container flex justify-center w-full">
      <RouterLink to="/">
      <img
        src="../assets/navBarAssets/logo_web.svg"
        alt="logo"
        width="80"
        class="mt-2 justify-items-start ms-4"
      />
    </RouterLink>
      <div class="flex items-center justify-center search">
        <div
          class="icon_search flex items-center justify-center bg-white rounded-[1.5rem] px-[0.75rem] ms-24"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 32 32"
          >
            <path
              fill="#8d8d8d"
              d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"
            />
          </svg>
          <input
            type="text"
            class="search p-1.5 text-gray-800 bg-white flex justify-center outline-none w-[150px] h-[3rem] rounded-[1.5rem] text-base font-desc lg:w-[855px] lg:h-[3.5rem] "
            placeholder="Search"
          />
        </div>

        <router-link to="/AddFav">
         <button v-if="isLoggedIn">
          <img
            src="../assets/navBarAssets/Bookmark.svg"
            alt="bookmark"
            class="p-10"
          />
        </button> 
        </router-link>
        
        <router-link to="/login">
          <button v-if="!isLoggedIn"
          class="btn_login text-white bg-dark font-display pt-2 me-4 py-1.5 px-3 w-[90px] h-9 flex justify-center rounded-lg lg:py-3 lg:px-3 lg:w-[170px] lg:h-11"
        >
          Log In
        </button>
          
        </router-link>
        <button @click="logout"
          v-if="isLoggedIn"
          class="btn_login text-white bg-dark font-display pt-2 me-4 py-1.5 px-3 w-[90px] h-9 flex justify-center rounded-lg lg:py-3 lg:px-3 lg:w-[170px] lg:h-11"
        >
          Log out </button>
      </div>
    </div>
  </nav>
</template>

<style>
  .logged-in{
    position: relative;
    top: 10px;
  }
  .logged-in .logo{
    position: relative;
    top: 2.5rem;
  }

  .not-logged-in{
    margin-top: 2rem;
  }
  .not-logged-in .icon_search{
    position: relative;
    right: 3.6rem;
  }
  
  .not-logged-in .logo{
    position: relative;
    right: 3.7rem;
    top: 0.6rem;
  }
  
</style>

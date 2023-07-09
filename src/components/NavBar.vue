<script>
export default {  
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<template>
  <nav :class="{'logged-in': isLoggedIn, 'not-logged-in': !isLoggedIn}">
    <div class="container flex justify-center w-full">
      <RouterLink to="/">
      <img
        src="../assets/navBarAssets/logo_web.svg"
        alt="logo"
        width="80"
        class="relative logo top-1"
      />
    </RouterLink>
      <div class="flex items-center justify-center search">
        <div
          class="icon_search flex items-center justify-center bg-white rounded-[1.5rem] px-[0.75rem] ms-20"
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
            class="search p-1.5 text-gray-800 bg-white outline-none w-[855px] h-[3.5rem] rounded-[1.5rem] text-base font-desc"
            placeholder="Search"
          />
        </div>

        <button v-if="isLoggedIn">
          <img
            src="../assets/navBarAssets/Bookmark.svg"
            alt="bookmark"
            class="p-10"
          />
        </button>
        <router-link to="/login">
          <button
          class="btn_login text-white bg-dark font-display py-3 px-3 w-[170px] h-11 flex justify-center rounded-lg ms-5"
        >
          Log In
        </button>
        </router-link>
        
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

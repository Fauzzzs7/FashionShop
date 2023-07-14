<template>
  <!-- component -->
  <!-- Container -->
  <div class="flex flex-wrap">
    <!-- Login component -->
    <div class="flex" style="width: 100vw; height: 100%">
      <!-- Background form -->
      <div
        class="flex content-center justify-center bg-white"
        style="width: 100vw; height: 100vh"
      >
        <img src="../assets/logo_web.svg" style="width: 40px; height: 40px; margin-top: 20px;"/>
        <!-- login form -->
        <div
          class="flex flex-wrap content-center justify-center rounded-lg bg-gray-200 mt-56 font-desc bg-secondGrey"
          style="width: 24rem; height: 32rem"
        >
          <div class="w-72">
            <!-- Heading -->
            <h1 class="text-xxl font-bold text-center">Welcome Back</h1>
            <p class="text-gray-400 text-center">
              Let's find your fashion style
            </p>

            <!-- Form -->
            <form class="mt-4" @submit.prevent="submitForm">
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  v-model="email"
                  placeholder="Enter your email" required
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  v-model="password"
                  placeholder="*****" required
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3 flex content-center">
                <input
                  id="remember"
                  type="checkbox"
                  class="mr-1 checked:bg-purple-700"
                />
                <label for="remember" class="mr-auto text-xs font-semibold"
                  >Remember password</label
                >
                <a href="#" class="text-xs font-semibold text-black"
                  >Forgot password?</a
                >
              </div>

              <div class="mb-3">
                <button
                  type="submit"
                  class="mb-1.5 block w-full text-center text-white bg-dark hover:bg-gray-600 px-2 py-1.5 rounded-md"
                >
                  Login
                </button>
              </div>
            </form>

            <!-- Footer -->
            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold"
                >Don't have account?</span
              >
              <router-link to="/signup">
                <a href="#" class="text-xs font-semibold text-black">Sign up</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Login banner -->
      <div
        class="flex flex-wrap rounded-r-md"
        style="width: 100%; height: 100vh"
      >
        <img
          class="w-full h-full bg-no-repeat bg-cover mr-0"
          style="width: 100vw; height: 100vh"
          src="../assets/images/AW22 1.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      const userData = {
      email: this.email,
      password: this.password,
    };
      axios.post('http://127.0.0.1:8000/api/login', userData)
      .then(response => {
        const { user, token } = response.data;
        // Store the user details in local storage or Vuex store for authentication
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // Handle success, e.g., redirect to the home page
        this.$router.push('/dashboard');
      })
      .catch(error => {
        console.error(error.response.data);
        // Handle error, e.g., display error messages
      });
    }
  }
}
</script>

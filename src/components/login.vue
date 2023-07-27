<template>
  <!-- component -->
  <!-- Container -->
  <!-- Login component -->
  <div class="flex" style="width: 100vw; height: 100%">
    <!-- Background form -->
    <div class="flex content-center justify-center bg-white" style="width: 100vw; height: 100vh">
      <!-- login form -->
      <div class="flex flex-wrap content-center justify-center mt-56 bg-gray-200 rounded-lg font-desc bg-secondGrey"
        style="width: 24rem; height: 32rem">
        <div class="w-72">
          <!-- Heading -->
          <h1 class="font-bold text-center text-xxl">Welcome Back</h1>
          <p class="text-center text-gray-400">
            Let's find your fashion style
          </p>

          <!-- Form -->
          <form class="mt-4">
            <div class="mb-3">
              <label class="block mb-2 text-xs font-semibold">Email</label>
              <input type="email" placeholder="Enter your email"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div class="mb-3">
              <label class="block mb-2 text-xs font-semibold">Password</label>
              <input type="password" placeholder="*****"
                class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500" />
            </div>

            <div class="flex content-center mb-3">
              <input id="remember" type="checkbox" class="mr-1 checked:bg-purple-700" />
              <label for="remember" class="mr-auto text-xs font-semibold">Remember password</label>
              <a href="#" class="text-xs font-semibold text-black">Forgot password?</a>
            </div>

            <div class="mb-3">
              <button class="mb-1.5 block w-full text-center text-white bg-dark hover:bg-gray-600 px-2 py-1.5 rounded-md">
                Login
              </button>
              <button
                class="flex flex-wrap justify-center w-full border border-grey hover:border-gray-500 px-2 py-1.5 rounded-md bg-white">
                <img class="w-5 mr-2"
                  src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" />
                Log in with Google
              </button>
            </div>
          </form>

          <!-- Footer -->
          <div class="text-center">
            <span class="text-xs font-semibold text-gray-400">Don't have account?</span>
            <router-link to="/signup">
              <a href="#" class="text-xs font-semibold text-black">Sign up</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Login banner -->
    <div class="flex flex-wrap rounded-r-md" style="width: 100%; height: 100vh">
      <img class="object-cover w-full h-full mr-0 bg-no-repeat bg-cover" style="width: 100vw; height: 100vh"
        src="../assets/images/AW22 1.jpg" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { GAuth } from 'vue-google-signin-button';

export default {
  data() {
    return {
      googleConfig: {
        client_id: '41905635144-052aqqsufdobn2ba3vabpmok0etluqls.apps.googleusercontent.com',
      },
      isLoggedIn: false,
      email: '',
      password: ''
    };
  },
  components: {
    GoogleSigninButton: GAuth,
  },
  methods: {
    handleGoogleSignInSuccess(googleUser) {
      // Handle the successful Google sign-in
      console.log(googleUser);
    },
    handleGoogleSignInFailure(error) {
      // Handle the Google sign-in failure
      console.error(error);
    },
    submitForm() {
      const userData = {
        email: this.email,
        password: this.password,
      };
      axios.post('http://127.0.0.1:8000/api/login', userData)
        .then(response => {
          const { user, token } = response.data;
          localStorage.setItem('token', token);
          this.isLoggedIn = true;
          this.$router.push('/');

        })
        .catch(error => {
          console.error(error.response.data);
        });
    }
  }
}
</script>


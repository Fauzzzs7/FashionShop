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
        <!-- login form -->
        <img src="../assets/logo_web.svg" style="width: 40px; height: 40px; margin-top: 20px"/>
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
            <form class="mt-4">
              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                />
              </div>

              <div class="mb-3">
                <label class="mb-2 block text-xs font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="*****"
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
                  class="mb-1.5 block w-full text-center text-white bg-dark hover:bg-gray-600 px-2 py-1.5 rounded-md"
                >
                  Sign up
                </button>
                <button
                  class="flex flex-wrap justify-center w-full border border-grey hover:border-gray-500 px-2 py-1.5 rounded-md bg-white"
                >
                  <img
                    class="w-5 mr-2"
                    src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                  />
                  Sign Up with Google
                </button>
              </div>
            </form>

            <!-- Footer -->
            <div class="text-center">
              <span class="text-xs text-gray-400 font-semibold"
                >Don't have account?</span
              >
              <router-link to="/login">
                <a href="#" class="text-xs font-semibold text-black">Login</a>
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

<script setup></script>

<style lang="scss" scoped></style>

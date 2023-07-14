<script>
import { VueGoogleSigninButton } from 'vue-google-signin-button';
import axios from "axios";
export default {
    data(){
        return
    },
    components: {
    VueGoogleSigninButton,
  },
    methods: {
  signup() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    axios.post('http://127.0.0.1:8000/api/signup', userData)
      .then(response => {
        // Handle the successful response (e.g., show a success message, redirect, etc.)
        console.log(response.data.message);
      })
      .catch(error => {
        // Handle the error response (e.g., display validation errors, show an error message, etc.)
        console.error(error.response.data);
      });
    },
    onGoogleSignUpSuccess(googleUser) {
      // Retrieve the necessary user details from the googleUser object
      const { id, name, email, imageUrl } = googleUser.getBasicProfile();

      // Create a new user using the retrieved data
      const userData = {
        googleId: id,
        name,
        email,
        imageUrl,
      };
      axios.post('http://127.0.0.1:8000/api/signup/google', userData)
        .then(response => {
          // Handle the successful response (e.g., show a success message, redirect, etc.)
        })
        .catch(error => {
          // Handle the error response (e.g., display validation errors, show an error message, etc.)
        });
    },onGoogleSignUpError(error) {
      // Handle the Google sign-up error
      console.error(error);
    },
  },
};


</script>

<template>
    <div class="flex flex-wrap">
     <div class="flex" style="width: 100vw; height: 100%">
        
       
       <div
         class="flex flex-wrap content-center justify-center bg-white"
         style="width: 100vw; height: 100%"
       ><router-link to="/">
            <button>
                <img src="../assets/images/LOGO WEB 1.jpg" class="h-10 mt-10 mr-10" />
            </button>
            
        </router-link>
         <div
           class="flex flex-wrap content-center justify-center mt-32 mb-20 bg-gray-200 rounded-lg font-desc"
           style="width: 24rem; height: 34.5rem"
         >
           <div class="w-72">
             <h1 class="text-2xl font-bold text-center">Welcome back</h1>
             <p class="text-center text-gray-400">
               Let's find your fashion style
             </p>
 
             <form class="mt-4"  @submit="register">

                
               <div class="mb-3">
                 <label class="block mb-2 text-xs font-semibold">Username</label>
                 <input
                   type="Username"
                   placeholder="Enter your username"
                   v-model="name"
                   class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                 />
               </div>


               <div class="mb-3">
                 <label class="block mb-2 text-xs font-semibold">Email</label>
                 <input
                   type="email"
                   placeholder="Enter your email"
                   v-model="email"
                   class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                 />
               </div>
 
               <div class="mb-3">
                 <label class="block mb-2 text-xs font-semibold">Password</label>
                 <input
                   type="password"
                   placeholder="*****"
                   v-model="password"
                   class="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                 />
               </div>
 
               <div class="mb-3 ">
                    <div>
                        <button class="mb-1.5 block w-full text-center text-black bg-black hover:bg-gray-600 px-2 py-1.5 rounded-md">
                            <u>Sign up</u>
                        </button>
                    </div>
               </div> 
               <vue-google-signin-button @success="onGoogleSignInSuccess" @error="onGoogleSignInError" />
             </form>
            
 
             <div class="text-center">
               <span class="text-xs font-semibold text-gray-400"
                 >Already have account? </span
               >
               <router-link to="/login">
                 <a href="#" class="text-xs font-semibold text-black">Login</a>
               </router-link>
             </div>
           </div>
         </div>
       </div>
 
       <div
         class="flex flex-wrap rounded-r-md"
         style="width: 100%; height: 100vh"
       >
         <img
           class="w-full h-full bg-no-repeat bg-cover"
           style="width: 1000px; height: 100vh"
           src="../assets/images/AW22 1.jpg"
         />
       </div>
     </div>
   </div>
 </template>
 

 
 <style lang="scss" scoped></style>

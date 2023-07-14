<script setup>
import axios from 'axios';
</script>

<template>
    <div class="flex justify-between ">
        <div class="shadow-lg rounded-lg overflow-hidden w-2/3 mx-2 h-full">

            <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 px-6 py-3 ">Add Style</h2>
            <div class="overflow-y-auto h-">
                <div>
                    <form @submit.prevent="saveStyle" enctype="multipart/form-data">
                        <div class="my-3 p-3 bg-body ">
                            <div class="flex mb-3">
                                <label for="color" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Color</label>
                                <div class="w-5/6 ml-2">
                                    <input type="text" id="color" name="style_color" v-model="color" placeholder="Input Warna"
                                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                                </div>
                            </div>
                            <div class="flex mb-3">
                                <label for="color" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">category</label>
                                <div class="w-5/6 ml-2">
                                    <select id="category" name="category" v-model="category"
                                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                                        <option value="">Select a category</option>
                                        <option value="Casual">Casual</option>
                                        <option value="Formal">Formal</option>
                                        <option value="Street Style">Street Style</option>
                                        <option value="Vintage Style">Vintage Style</option>
                                        <option value="Islamic Style">Islamic Style</option>
                                        <!-- Add more category options as needed -->
                                    </select>
                                </div>
                            </div>
                            <div class="flex mb-3">
                                <label for="gender" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Gender</label>
                                <div class="w-1/4 ml-1">
                                    <div class="flex items-center">
                                        <input type="radio" id="male" name="gender" value="male" v-model="gender"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        <label for="male" class="ml-2 block text-sm text-gray-900">Male</label>
                                    </div>
                                    <div class="flex items-center mt-2">
                                        <input type="radio" id="female" name="gender" value="female" v-model="gender"
                                            class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        <label for="female" class="ml-2 block text-sm text-gray-900">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div class="flex mb-3">
                                <label for="image_style" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Gambar
                                    file</label>
                                <div class="w-1/4 ml-1">
                                    <input type="file" name="image_style" ref="imageStyleInput"
                                        class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                        @change="previewImage">
                                </div>
                            </div>
                            <div class="flex mb-3">
                                <button type="submit"
                                    class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tambah
                                    Component</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <div class="shadow-lg rounded-lg overflow-hidden w-1/2 ">
            <h2 class="text-xl font-semibold text-center text-gray-800 bg-gray-200 px-6 py-3 ">Preview Image</h2>
            <div class="overflow-y-auto">
                <div v-if="imagePreview" class="mt-2 px-5 pb-5">
                    <img :src="imagePreview" alt="Preview" class="object-contain">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            color: '',
            gender: '',
            category: '',
            image: null,
            imagePreview: null,
        };
    },
    methods: {
        previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imagePreview = e.target.result;
                };
                reader.readAsDataURL(file);
            } else {
                this.imagePreview = null;
            }
        },
        saveStyle() {
            // Perform data validation and submit the form data to the server
            const formData = new FormData();
            formData.append('style_color', this.color);
            formData.append('gender', this.gender);
            formData.append('category', this.category);
            formData.append('image_style', this.$refs.imageStyleInput.files[0]);

            // Make an AJAX request to the Laravel API to save the data
            axios.post('http://127.0.0.1:8000/api/style', formData)
                .then(response => {
                    // Handle success response
                    const newStyleId = response.data.id;
                    this.$router.push({ name: 'AddComponent', params: { id: newStyleId } });
                })
                .catch(error => {
                    // Handle error response
                    console.error('Failed to save style:', error);
                });
        },
    },
};
</script>
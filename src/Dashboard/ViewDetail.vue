<script setup>
import axios from 'axios';
import { fetchDataById } from './ApiId.js';
</script>

<template>
    <div class="flex justify-between ">
        <div class="shadow-lg rounded-lg overflow-hidden w-1/2 ">
            <h2 class="text-xl font-semibold text-center text-gray-800 bg-gray-200 px-6 py-3 ">Preview Image</h2>
            <div class="overflow-y-auto">
                <img :src="getImageUrl()" alt="style_image" class="object-contain">
            </div>
        </div>
        <div class="shadow-lg rounded-lg overflow-hidden w-2/3 mx-2 h-full">
            <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 px-6 py-3 ">Add Style</h2>
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
            fetchedData: null,
        };
    },

    mounted() {
        const id = this.$route.params.id;
        this.fetchData(id);
    },
    methods: {
        async fetchData(id) {
            try {
                const data = await fetchDataById(id);
                this.fetchedData = data;
                console.log('Data:', this.fetchedData);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        },
        getImageUrl() {
            if (this.fetchedData && this.fetchedData.length > 0) {
                return this.fetchedData[0].gambar_url;
            }
            return '';
        },
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
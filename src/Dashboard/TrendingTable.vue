<script setup>
import axios from 'axios';
import logoURL from '../assets/Add.svg';
</script>

<template>
    <transition name="dropdown">
        <div v-if="notification" class="notification absolute top-5 right-8 bg-grenn py-2 pl-4 w-1/5 rounded-md shadow">
            {{ notification }}
        </div>
    </transition>
    <div class="flex items-center justify-center ">
        <div class="shadow-lg rounded-lg w-5/6 overflow-hidden flex flex-col items-center justify-center">
            <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 py-3 ">Style Trend</h2>
            <div class="flex flex-wrap items-center justify-center pb-6">
                <div v-for="(item, index) in data" :key="item.id" class=" p-8 mx-4 my-3 bg-white1 ">
                    <div class="h-[350px] w-[230px] overflow-hidden flex justify-center items-center">
                        <img :src="item.gambar_url" alt="style_image" class="object-contain max-h-[340px] max-w-[290px]">
                    </div>
                    <h2 class="text-xl font-semibold text-center bg-gray-200 py-3">Style {{ index + 1 }}</h2>
                    <div class="text-center ">
                    <button @click="confirmDelete(index, item.id)"
                        class="px-20 py-2 text-red bg-white rounded-lg mr-2 hover:bg-grey ">Delete</button>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script>
const API_URL = 'http://127.0.0.1:8000/api';

export default {
    data() {
        return {
            data: null,
            notification: null
        };
    },
    created() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            axios
                .get(`${API_URL}/trends`)
                .then(response => {
                    this.data = response.data;
                    console.log('Data for ID :', this.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        confirmDelete(index, ide) {
            if (confirm('Are you sure you want to delete this item?')) {
                // Perform delete operation
                const id = ide;
                this.deleteItem(id);
                this.showNotification('Data berhasil hapus.');
                this.dataProduct.splice(index, 1);
            } else {
                // Cancelled delete operation
                console.log('Cancel Delete');
            }
        },
        deleteItem(id) {
            axios.delete(`http://127.0.0.1:8000/api/product/delete/${id}`)
                .then(response => {
                    console.log('Product delete successfully');
                })
                .catch(error => {
                    console.error('Error deleting product :', error);
                });
        },
        showNotification(message) {
            this.notification = message;

            // Setelah beberapa detik, hapus notifikasi
            setTimeout(() => {
                this.notification = null;
            }, 2000); // Ubah 5000 menjadi waktu yang diinginkan (dalam milidetik)
        },
        confirmDelete(index, ide) {
            if (confirm('Are you sure you want to delete this item?')) {
                // Perform delete operation
                const id = ide;
                this.deleteItem(id);
                this.showNotification('Data berhasil hapus.');
                this.data.splice(index, 1);
            } else {
                // Cancelled delete operation
                console.log('Cancel Delete');
            }
        },
        deleteItem(id) {
            axios.delete(`http://127.0.0.1:8000/api/trend/delete/${id}`)
                .then(response => {
                    console.log('Product delete successfully');
                })
                .catch(error => {
                    console.error('Error deleting product :', error);
                });
        },

    },
};
</script>

<style>
.dropdown-enter-active,
.dropdown-leave-active {
    transition: all 0.5s ease;
}

.dropdown-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.dropdown-enter-to {
    opacity: 100;
    transform: translateY(0);
}
</style>
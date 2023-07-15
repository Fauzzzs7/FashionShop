<template>
  <transition name="dropdown">
    <div v-if="notification" class="notification absolute top-5 right-8 bg-grenn py-2 pl-4 w-1/5 rounded-md shadow">
      {{ notification }}
    </div>
  </transition>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <div class="flex justify-between items-center px-6 py-3">
      <h2 class="text-xl font-semibold text-gray-800 bg-gray-200">Table Name</h2>
      <button class="px-4 py-2 text-black bg-gray-500 rounded-lg hover:bg-gray-600 mr-2" @click="AddStyle">Add
        Item</button>
    </div>

    <div class="overflow-y-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b border-gray-200">
              <div class="flex justify-start items-center ">
                <span>Image</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 w-1/6">
              <div class="flex justify-start items-center">
                <span>Color</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>Gender</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>Category</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>Component</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td class="px-6 py-4 border-b border-gray-200 w-2/6">
              <div class="image-container justify-center ">
                <img :src="item.gambar_url" alt="gambar" class="cropped-image">
              </div>
            </td>
            <td class="px-6 py-4 border-b border-gray-200 text-center">
              <div class="flex justify-start items-center w-1/6">
                <span>{{ item.color }}</span>
              </div>
            </td>
            <td class="px-6 py-4 border-b border-gray-200">{{ item.gender }}</td>
            <td class="px-6 py-4 border-b border-gray-200">{{ item.category }}</td>
            <td class="px-6 py-4 border-b border-gray-200">
              <product :id="item.id" />
            </td>

            <td class="px-6 py-4 border-b border-gray-200">
              <div class="flex flex-col items-center justify-center">
                <button class="px-4 py-2 text-green bg-white2 mb-1 rounded-lg hover:bg-grey "
                  @click="ViewComponent(item.id)">View Component</button>
                <button class="px-4 py-2 text-blue bg-white2 mb-1 rounded-lg mr-2 hover:bg-grey"
                  @click="AddTrend(item.id, item.gambar_url)"> Add to Trend</button>
                <button class="px-4 py-2 text-red bg-white2  rounded-lg mr-2 hover:bg-grey ">Delete</button>


              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="p-4">

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { fetchData } from './api.js';
import product from './TableProduct.vue';


const items = ref([]);

onMounted(async () => {
  try {
    items.value = await fetchData();
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
});
</script>

<script>
export default {
  data() {
    return {
      notification: null
    };
  },
  methods: {
    AddStyle() {
      this.$router.push('/dashboard/add');
    },
    ViewComponent(id) {
      this.$router.push({ name: 'ViewComponent', params: { id: id } });
    },
    AddTrend(id ,url) {
      const style = id;
      const gambar_url = url;
      const formData = new FormData();
      formData.append('style_id', style);
      formData.append('gambar_url', gambar_url);

      axios.post(`http://127.0.0.1:8000/api/trend`, formData)
        .then(response => {
          this.showNotification('Data berhasil Diedit.');
          console.log('Trend Add successfully');
        })
        .catch(error => {
          console.error('Error adding trend:', error);
        });
    },
    showNotification(message) {
      this.notification = message;

      // Setelah beberapa detik, hapus notifikasi
      setTimeout(() => {
        this.notification = null;
      }, 2000); // Ubah 5000 menjadi waktu yang diinginkan (dalam milidetik)
    }
  }
}
</script>

<style>
.bg {
  background-color: black;
}

.image-container {
  width: 150px;
  height: 200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cropped-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin: auto;
}

table {
  table-layout: fixed;
  width: 100%;
}

td {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

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


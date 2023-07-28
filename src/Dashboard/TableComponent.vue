<template>
  <transition name="dropdown">
    <div v-if="notification" class="notification absolute top-5 right-8 bg-grenn py-2 pl-4 w-1/5 rounded-md shadow">
      {{ notification }}
    </div>
  </transition>
  <div class="shadow-lg rounded-lg overflow-hidden">
    <div class="flex justify-between items-center px-6 py-3">
      <h2 class="text-xl font-semibold text-gray-800 bg-gray-200">Component Table</h2>
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
                <span>From Style_id</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>Category</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>Link Toko</span>
              </div>
            </th>

            <th class="px-6 py-3 border-b border-gray-200 ">
              <div class="flex justify-start items-center">
                <span>deskripsi</span>
              </div>
            </th>
            <th class="px-6 py-3 border-b border-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in item" :key="item.id">
            <td class="px-6 py-4 border-b border-gray-200 w-2/6">
              <div class="image-container justify-center ">
                <img :src="item.link_gambar" alt="gambar" class="cropped-image">
              </div>
            </td>
            <td class="px-6 py-4 border-b border-gray-200 text-center">
              <div class="flex justify-start items-center w-1/6">
                <span>{{ item.style_id }}</span>
              </div>
            </td>
            <td class="px-6 py-4 border-b border-gray-200">{{ item.category }}</td>
            <td class="px-6 py-4 border-b border-gray-200">
              <a :href="item.link_toko" target="_blank" class="text-bluelink hover:underline">{{ item.link_toko }}</a>
            </td>
            <td class="px-6 py-4 border-b border-gray-200">{{ item.deskripsi }} </td>

            <td class="px-6 py-4 border-b border-gray-200">
              <div class="flex flex-col items-center justify-center">
                <button class="px-4 py-2 text-green bg-white2 mb-1 rounded-lg hover:bg-grey "
                  @click="ViewComponent(item.style_id)">Edit</button>
                <button class="px-4 py-2 text-red bg-white2  rounded-lg mr-2 hover:bg-grey "
                  @click="confirmDelete(index, item.id)"> Delete</button>


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
import axios from 'axios';
</script>

<script>
export default {
  data() {
    return {
      item: null,
      notification: null,
    };
  },
  // mounted() {
  //   // Loop through your list of items and call the getStyleImage method for each item
  //   for (const items of this.item) {
  //     this.getStyleImage(items.style_id);
  //   }
  // },

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(`http://127.0.0.1:8000/api/product/index`)
        .then(response => {
          this.item = response.data;
          // Call the function to fetch the style images for each item
          this.fetchStyleImages();
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    ViewComponent(id) {
      this.$router.push({ name: 'ViewComponent', params: { id: id } });
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
        this.deleteProductToo(id);
        this.showNotification('Data berhasil hapus.');
        this.item.splice(index, 1);
      } else {
        // Cancelled delete operation
        console.log('Cancel Delete');
      }
    },
    deleteProductToo(id) {
      axios.delete(`http://127.0.0.1:8000/api/product/delete/${id}`)
        .then(response => {
          console.log('Product delete successfully');
        })
        .catch(error => {
          console.error('Error deleting product :', error);
        });
    },
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


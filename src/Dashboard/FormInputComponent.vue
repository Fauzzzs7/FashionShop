<script setup>
import axios from 'axios';
import { fetchDataById } from './ApiId.js';


</script>

<template>
  <div class="flex justify-between">
    <div class="shadow-lg rounded-lg overflow-hidden w-1/4 h-full">
      <h2 class="text-xl font-semibold text-center text-gray-800 bg-gray-200 px-6 py-3">Style preview</h2>
      <div class="overflow-y-auto px-1 pb-1">
        <img :src="getImageUrl()" alt="style_image" class="object-contain">
      </div>
    </div>
    <div class="overflow-hidden w-3/4 mx-2 h-full">
      <input type="hidden" v-model="hiddenValue">
      <div class="flex justify-between shadow-lg rounded-lg " v-for="(form, index) in forms" :key="index">

        <div class="overflow-y-auto w-3/4">
          <div>
            <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 px-6 py-3">Add Component</h2>

            <div class="my-3 px-3 pb-1 bg-body">
              <div class="flex mb-3">
                <label for="category"
                  class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Category</label>
                <div class="w-5/6 ml-2">
                  <select id="category" name="category" v-model="form.category"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                    <option value="">Select a category</option>
                    <option value="baju">Baju</option>
                    <option value="celana">Celana</option>
                    <option value="aksesoris">Aksesoris</option>
                    <option value="alas kaki">Alas kaki</option>
                  </select>
                </div>
              </div>
              <div class="flex mb-3">
                <label for="link_toko" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Link
                  Toko</label>
                <div class="w-5/6 ml-2">
                  <input type="text" id="link_toko" name="link_toko" v-model="form.link_toko"
                    placeholder="Input link_toko"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                </div>
              </div>

              <div class="flex mb-3">
                <label for="deskripsi"
                  class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">Deskripsi</label>
                <div class="w-5/6 ml-2">
                  <input type="text" id="deskripsi" name="deskripsi" v-model="form.deskripsi"
                    placeholder="Input Deskripsi"
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                </div>
              </div>
              <div class="flex mb-3">
                <label for="image_product" class="block text-sm font-medium text-gray-700 w-1/5 flex items-center pr-4">
                  Gambar file
                </label>
                <div class="w-1/4 ml-1">
                  <input type="file" name="image_product" ref="imageProductInput"
                    class="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    @change="event => previewImage(event, index)">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-y-auto w-1/4">
          <h2 class="text-xl text-center font-semibold text-gray-800 bg-gray-200 px-6 py-3">Preview</h2>
          <div class="flex justify-center items-center h-40">
            <img v-if="form.imagePreview" :src="form.imagePreview" alt="View" class="object-contain h-40 ">
          </div>
        </div>
      </div>
      <div class="flex py-2">
        <div class="pr-2 " @click="addForm">
          <button class="bg-grey hover:bg-dark text-white font-bold py-2 px-4 border rounded-lg shadow-lg">
            Tambah Component
          </button>
        </div>
        <button @click="submitForms"
          class="bg-white2 hover:bg-white1 text-white font-bold py-2 px-4 border rounded-lg shadow-lg">
          Simpan
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [],
      // link_toko: '',
      // deskripsi: '',
      // category: '',
      // imageFile: null,
      // imagePreview: null,
      fetchedData: null,
    };
  },

  mounted() {
    const id = this.$route.params.id;
    this.fetchData(id);
  },

  computed: {
    hiddenValue() {
      return this.$route.params.id;
    }
  },

  created() {
    this.addForm(); // Call addForm method to add at least one form
  },

  methods: {
    async fetchData(id) {
      try {
        const data = await fetchDataById(id);
        this.fetchedData = data;
        console.log('Data:', this.fetchedData);

        const color = this.fetchedData[0].color;
        console.log('Color:', color);

        if (this.fetchedData && this.fetchedData[0].category) {
          const category = this.fetchedData[0].category;
          console.log('Category:', category);
        } else {
          console.log('Category not found in fetched data');
        }

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
    previewImage(event, formIndex) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.forms[formIndex].imageFile = file;
        this.forms[formIndex].imagePreview = reader.result;
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    },
    submitForms() {
      const formsData = this.forms.map(form => {
        const formData = new FormData();
        formData.append('style_id', this.hiddenValue);
        formData.append('category', form.category);
        formData.append('link_toko', form.link_toko);
        formData.append('deskripsi', form.deskripsi);
        formData.append('image_file', form.imageFile);
        return Object.fromEntries(formData);
      });

      // Send the forms data to the Laravel controller
      axios.post('http://127.0.0.1:8000/api/product', { forms: formsData }, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(response => {
          this.$router.push({ name: 'Dashboard'});
          console.log('success');
          // Continue with the rest of your logic

        })
        .catch(error => {
          // Handle the error if necessary
          console.error('Failed to fetch debug data:', error);
        });
    },
    getFormStyleId(index) {
      return this.forms[index].category;
    },

    // Send the forms data to the Laravel controller
    //   axios.post('http://127.0.0.1:8000/api/produk', requestData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //     .then(response => {
    //       // Handle the response if necessary
    //       console.log('Success');
    //     })
    //     .catch(error => {
    //       // Handle the error if necessary
    //       console.error('Failed to save data:', error);
    //     });
    // },
    addForm() {
      const form = {
        style_id: this.hiddenValue, // Add properties for each field in the form
        category: '',
        link_toko: '',
        deskripsi: '',
        imageFile: null,
      };
      this.forms.push(form);
    },
  },

  // 
};
</script>
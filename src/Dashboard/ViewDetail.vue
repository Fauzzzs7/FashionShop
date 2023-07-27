<script setup>
import axios from 'axios';
import { fetchDataById } from './ApiId.js';
import logoURL from '../assets/Add.svg';
</script>

<template>
    <transition name="dropdown">
        <div v-if="notification" class="notification absolute top-5 right-8 bg-grenn py-2 pl-4 w-1/5 rounded-md shadow">
            {{ notification }}
        </div>
    </transition>
    <div class="flex justify-between ">
        <div class="shadow-lg rounded-lg overflow-hidden w-2/5 h-full">
            <h2 class="text-xl font-semibold text-center text-gray-800 bg-gray-200 px-6 py-3">Style preview</h2>
            <div class="overflow-y-auto px-1 pb-1">
                <img :src="getImageUrl()" alt="style_image" class="object-contain">
            </div>
        </div>
        <a v-if="!dataProduct" @click="tambahcomponent"
            class="shadow-lg rounded-lg w-3/5 overflow-hidden flex flex-col items-center justify-center hover:cursor-pointer hover:bg-white2">

            <img :src="logoURL" alt="style_image" class="object-contain">
            <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 py-3 mt-3">Tambah Component</h2>

        </a>
        <div v-else class="w-2/3 mx-2 h-full">
            <div v-for="(item, index) in dataProduct" :key="item.id">
                <div class="shadow-lg rounded-lg overflow-hidden w-4/5 mx-2 h-full">
                    <h2 class="text-xl font-semibold text-gray-800 bg-gray-200 px-6 py-3">
                        Component {{ index + 1 }}
                    </h2>
                    <div class="overflow-y-auto">
                        <div class="flex">
                            <img v-if="!imagePreview[index]" :src="item.link_gambar" alt="style_image"
                                class="object-contain px-2 pb-2 w-60">
                            <img v-else="imagePreview[index]" :src="imagePreview[index]" alt="style_image"
                                class="object-contain px-2 pb-2 w-60">
                            <div class="flex justify-between w-4/5">
                                <div class="flex flex-col w-4/5">
                                    <div class="flex w-full ml-4 items-center">
                                        <div class="w-4/5">
                                            <p class="font-bold mb-7">{{ item.category }}</p>
                                        </div>
                                    </div>
                                    <div class="flex w-full pb-5  ml-2 items-center">
                                        <label for="link_toko"
                                            class="block font-medium text-gray-700 pr-3">Deskripsi</label>
                                        <div class="mr-3">
                                            <p>:</p>
                                        </div>
                                        <div class="w-5/6">
                                            <p v-if="!isEdit[index]">{{ item.deskripsi }}</p>
                                            <div v-else>
                                                <input type="text" id="deskripsi" name="deskripsi" v-model="item.deskripsi"
                                                    class="border-2 rounded py-1 px-4">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex w-full pt-2 ml-2 items-center">
                                        <label for="link_toko" class="block font-medium text-gray-700 pr-3">Link
                                            Toko</label>
                                        <div class="">
                                            <p>:</p>
                                        </div>
                                        <div class="ml-2 w-5/6">
                                            <a v-if="!isEdit[index]" :href="item.link_toko" target="_blank"
                                                class="text-bluelink hover:underline">{{ item.link_toko }}</a>
                                            <div v-else class="text-right">
                                                <textarea v-model="item.link_toko" class="w-full border-2 rounded py-1 px-4"
                                                    rows="2"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="isEdit[index]" class="flex w-full pb-5 pt-2 ml-2 items-center">
                                        <label for="link_toko" class="block font-medium text-gray-700">Ganti
                                            Gambar</label>
                                        <div class="">
                                            <p>:</p>
                                        </div>
                                        <div class="ml-2 w-5/6">
                                            <div class="w-1/4 ml-1">
                                                <input type="file" name="image_product" ref="imageProductInput"
                                                    class="block  rounded-md" @change="event => previewImage(event, index)">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col items-center justify-center mx-4 mb-10 w-1/5">
                                    <button v-if="!isEdit[index]" @click="toggleEdit(index)"
                                        class="px-4 py-2 text-blue bg-white2 mb-1 rounded-lg mr-2 hover:bg-grey">Edit</button>
                                    <button v-if="!isEdit[index]" @click="confirmDelete(index, item.id)"
                                        class="px-4 py-2 text-red bg-white2 rounded-lg mr-2 hover:bg-grey">Delete</button>
                                    <button v-else
                                        @click="updateItem(index, item.deskripsi, item.link_toko, item.id, item.style_id)"
                                        class="px-4 py-2 text-red bg-white2 rounded-lg mr-2 hover:bg-grey">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="my-3 mx-3 " @click="tambahcomponent">
                    <button class="bg-grey hover:bg-dark text-white font-bold py-2 px-4 border rounded-lg shadow-lg">
                        Tambah Component
                    </button>
                </div>
        </div>

    </div>
</template>
  
<script>
export default {
    data() {
        return {
            dataProduct: [],
            fetchedData: null,
            isEdit: [],
            des: [],
            imageFile: [],
            imagePreview: [],
            toko: [],
            id: [],
            notification: null
        };
    },

    mounted() {
        const id = this.$route.params.id;
        this.fetchData(id);
    },

    computed: {
        id_style() {
            return this.$route.params.id;
        },
        filteredDataProduct() {
            return this.dataProduct.filter(item => item.style_id === this.id_style);
        },
    },

    created() {
        this.fetchDataProduct();
        this.isEdit = new Array(this.dataProduct.length).fill(false);
        // this.imageFile = new Array(this.dataProduct.length).fill(null);
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
        hasMatchingId(item) {
            return item === this.id_style;
        },
        fetchDataProduct() {
            axios
                .get(`http://127.0.0.1:8000/api/product/${this.id_style}`)
                .then(response => {
                    this.dataProduct = response.data[0];
                    console.log('Data for ID ' + this.id_style + ':', this.dataProduct);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        toggleEdit(index) {
            this.isEdit[index] = true;

        },
        previewImage(event, formIndex) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onload = () => {
                this.imageFile[formIndex] = file;
                this.imagePreview[formIndex] = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        },
        updateItem(index, des, toko, id, style_id) {
            if (this.imageFile[index]) {
                this.sendimage(index, id, style_id);


            }
            this.id[index] = id;
            const deskrip = des;
            const link_toko = toko;

            axios.put(`http://127.0.0.1:8000/api/updateproduct/${id}`, { deskrip, link_toko })
                .then(response => {
                    console.log('Update successful');
                    this.showNotification('Data berhasil Diedit.');
                    this.isEdit[index] = false;
                })
                .catch(error => {
                    console.error('Error updating item:', error);
                });
        },
        sendimage(index, id, style_id) {
            const style = style_id;
            const formData = new FormData();
            formData.append('imageFile', this.imageFile[index]);
            formData.append('style_id', style);

            axios.post(`http://127.0.0.1:8000/api/perbarui/gambar/${id}`, formData)
                .then(response => {

                    console.log('Product image updated successfully');
                })
                .catch(error => {
                    console.error('Error updating product image:', error);
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
        tambahcomponent() {

            const newStyleId = this.style_id
            this.$router.push({ name: 'AddComponent', params: { id: newStyleId } });
        },
        showNotification(message) {
            this.notification = message;

            // Setelah beberapa detik, hapus notifikasi
            setTimeout(() => {
                this.notification = null;
            }, 2000); // Ubah 5000 menjadi waktu yang diinginkan (dalam milidetik)
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
<template>
    <div v-for="item in data" :key="item.id">
        <div v-if="hasMatchingId(item)">
            {{ item.category }} : {{  item.deskripsi }}
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            data: null
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        hasMatchingId(item) {
            return item.style_id === this.id;
        },
        fetchData() {
            axios
                .get(`${API_URL}/product`)
                .then(response => {
                    this.data = response.data;
                    console.log('Data for ID ' + this.id + ':', this.data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
};
</script>
  
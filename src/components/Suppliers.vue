<template>
    <div>
        <h1>Suppliers</h1>
        <!-- Get the suppliers from here -->
        <div v-for="supplier in data" :key="supplier.id">
            <h2>{{ supplier.name }}</h2>
            <p>{{ supplier.address }}</p>
            <p>{{ supplier.phone }}</p>
            <p>{{ supplier.email }}</p>
        </div>

    </div>
</template>
<script>
//connect to api using axios
const axios = require("axios");
export default({
    name: "SuppliersVue",
    setup() {

    },
    mounted() {
        axios.get("http://localhost:3000/suppliers").then(response => {
            this.data = response.data
        }).catch(error => {
            console.log("Something bad happened: " + error)
        })
    }
    , data() {
        return {
            data: {}
        }
    }

});
</script>


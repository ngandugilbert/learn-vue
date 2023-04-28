<template>
    <div>
        <h1>Pulling data from an API</h1>
        <API />
    </div>
</template>
  
<script>
import API from '@/components/Suppliers.vue';
export default {
    name: 'APIView',
    components: {
        API
    }

}
</script>
  
<style></style>
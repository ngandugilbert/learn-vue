<template>
  <div>
    <h4>This is about {{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "AboutVue",
  props:{
    title: String,
  },
};
</script>
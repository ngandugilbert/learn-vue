<template>
  <div class="about">
    <AboutVue :title="user_title_value" />
    <!-- Add a v-model directive to add a propertu to catch user input -->
    <input type="text" v-model="user_title" />
    <button id="toggle" @click="update()">Update title</button>
    <!-- Notice the styling of the button, it's coming from Condition.vue which has no scoped css -->
    <p>Type what you think this is about and update.</p>
  </div>
</template>
<script>
import AboutVue from "@/components/About.vue";

export default {
  components: {
    AboutVue,
  },
  data() {
    return {
      user_title_value: "Programmers",
    };
  },
  methods: {
    update() {
      this.user_title_value = this.user_title;
      this.user_title = "";
    },
  },
};
</script>


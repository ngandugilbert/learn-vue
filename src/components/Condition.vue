<template>
  <!-- We create a simple toggle that sets either true or false -->
  <!-- The title should be shown and not shown -->
  <div>
    <!-- The paagraph below shows if the user wants to see -->
    <p v-if="!isVisible">I have a secret for you, click view to see it.</p>
    <p v-if="isVisible">Here is the secret below.</p>
    <!-- Based on the value of isVisible, the secret will be visible to the user -->
    <div id="secret" v-if="isVisible">
      <h4>Secret</h4>
      <p>{{ secret }}</p>
    </div>
    <!-- Create a toggle button, this also shows how to make methods in the script section -->
    <button id="toggle" @click="toggle()">
        <span v-show="isVisible">Hide Secret</span>
        <span v-show="!isVisible">View Secret</span>
        <!-- Notice the v-show used here. -->
        <!-- v-show simply toggles the display property to none if it is false -->
        <!-- v-if does not place the object as part of the DOM if set to false -->
    </button>
  </div>
</template>

<script>
export default {
  name: "CondionVue",
  data() {
    return {
      isVisible: false,
      secret: "You are becoming good at this.",
    };
  },
//  methods hook is used to create methods used in the app
methods:{
    toggle(){
        this.isVisible = !this.isVisible;
    }
}
};
</script>

<style>
#toggle{
    border: none;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
    margin: 5px;
}
</style>
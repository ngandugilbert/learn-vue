<template>
  <div id="container">
    <!-- Show basics of list rendering -->
    <h1>List rendering</h1>
    <p>This is the list of programmers</p>
    <table>
      <th>Name</th>
      <th>Programming Language</th>
      <tbody>
        <!-- The v-for directive is what is used to render lists -->
        <!-- More can be required to render them properly but this should help -->
        <tr v-for="programmer in programmers" :key="programmer.name">
          <td>{{ programmer.name }}</td>
          <td>{{ programmer.language }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "HomeVue",
  data() {
    return {
      programmers: [
        { name: "Joseph", language: "C#" },
        { name: "Kundananji", language: "Object C" },
        { name: "Frank", language: "Java" },
        { name: "John", language: "PHP" },
        { name: "Gilbert", language: "Kotlin" },
      ],
    };
  },
};
</script>
<style scoped>
#container {
  display: flex;
  align-items: center;
  flex-direction: column;
}
table {
  width: 80%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid grey;
}
</style>

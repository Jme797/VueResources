<template>
  <ul>
    <TheContainer>
      <li>
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <a :href="link">View Resource</a>
      </li>
      <button class="del" @click="this.$emit('delete-element', id)">
        Delete
      </button>
    </TheContainer>
  </ul>
</template>

<script>
export default {
  props: ['id', 'name', 'description', 'link']
};
</script>

<style scoped>
.del {
  position: absolute;
  top: 20px;
  right: 20px;
  border-radius: 10px;
  background-color: rgb(228, 99, 99);
  color: white;
}
</style>

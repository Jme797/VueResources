<template>
  <TheContainer>
    <button @click="this.$emit('toggleShowResources')" class="coloredButton">
      Stored Resources
    </button>
    <button @click="this.$emit('toggleAddResource')" class="clearButton">
      Add Resource
    </button>
  </TheContainer>
</template>

<script>
export default {};
</script>

<style scoped></style>

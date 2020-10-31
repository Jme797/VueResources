<template>
  <ul>
    <TheContainer>
      <li>
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
        <a :href="link">View Resource</a>
      </li>
    </TheContainer>
  </ul>
</template>

<script>
export default {
  props: ['id', 'name', 'description', 'link']
};
</script>

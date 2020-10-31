<template>
  <teleport to="body">
    <div class="greyBack">
      <section>
        <h2>There was an issue</h2>
        <div class="cont">
          <h3>The following problems we're found</h3>
          <ul>
            <li v-for="i in errors" :key="i.indexOf()">{{ i }}</li>
          </ul>
        </div>
        <div class="rightAlignButton">
          <button class="coloredButton" @click="this.$emit('confirm-errors')">
            Close
          </button>
        </div>
      </section>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ['errors']
};
</script>

<style scoped>
section {
  width: 65%;
  position: fixed;
  top: 20vh;
  margin: 0 17.5%;
  background-color: white;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: 8px 12px 8px grey;
  padding-bottom: 20px;
  z-index: 1;
}
.cont {
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
}
h2 {
  background-color: rgb(153, 107, 153);
  padding: 20px 40px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
li {
  list-style: outside;
  margin: 15px 25px;
  color: rgb(206, 124, 124);
}
.greyBack {
  background-color: rgba(0, 0, 0, 0.247);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>

<template>
  <TheContainer>
    <form @submit="addNewResource">
      <label>Name of Resource:</label>
      <input type="text" v-model="name" />

      <label>Link:</label>
      <input type="text" v-model="link" />

      <label>Description:</label>

      <textarea v-model="description"></textarea>

      <div class="rightAlignButton">
        <button class="coloredButton">Add</button>
      </div>
    </form>
  </TheContainer>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      link: '',
      description: '',
      formValid: false,
      errors: []
    };
  },
  methods: {
    addNewResource(e) {
      e.preventDefault();
      this.validateForm();
      if (this.formValid) {
        this.$emit(
          'submit-new-resource-form',
          this.name,
          this.description,
          this.link
        );
        this.name = '';
        this.description = '';
        this.link = '';
      } else {
        this.$emit('error-alert', this.errors);
      }
    },
    validateName() {
      if (this.name.length == 0) {
        this.errors.push('The name input is empty');
      }
    },
    validateLink() {
      if (this.link.length == 0) {
        this.errors.push('The link input is empty');
      }
      if (this.link.includes('http://') || this.link.includes('https://')) {
        return null;
      } else {
        this.errors.push('The URL must include "http://" or "https://"');
      }
    },
    validateDesc() {
      if (this.description.length < 1) {
        this.errors.push('The description field cannot be empty');
      }
    },
    validateForm() {
      this.errors = [];
      this.validateName();
      this.validateLink();
      this.validateDesc();

      if (this.errors.length == 0) {
        this.formValid = true;
      } else {
        this.formValid = false;
      }
    }
  }
};
</script>

<style scoped>
input,
textarea {
  display: block;
  padding: 10px 10px;
  font-size: 22px;
  margin: 10px;
  width: 400px;
  margin: 10px auto;
  border-radius: 4px;
  border: 1px solid rgb(112, 112, 112);
  resize: none;
  margin-bottom: 20px;
}
label {
  display: block;
  margin: 0 auto;
  width: 425px;
  font-size: 25px;
  margin-bottom: 10px;
}
textarea {
  height: 100px;
}
input:focus {
  box-shadow: 1px 1px 8px rgb(70, 70, 100);
  outline: none;
  border: 0.1px solid black;
}
button {
  margin: 10px 0;
}
</style>

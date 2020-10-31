<template>
  <TheHeader />
  <PageSelector
    @toggleShowResources="toggleShowResourcesDisplay"
    @toggleAddResource="toggleAddResourceDisplay"
  />
  <div v-if="showStoredResources">
    <StoredResources
      v-for="i in storedResources"
      :key="i.id"
      :id="i.id"
      :name="i.title"
      :description="i.description"
      :link="i.link"
    >
    </StoredResources>
  </div>
  <div v-if="showAddResource">
    <AddResourceForm @submitNewResourceForm="submitNewResourceForm" />
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

import PageSelector from './components/pages/PageSelector.vue';
import StoredResources from './components/pages/StoredResources.vue';
import AddResourceForm from './components/pages/AddResourceForm.vue';

export default {
  components: {
    TheHeader,
    PageSelector,
    StoredResources,
    AddResourceForm
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The officail VueJS documentation',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google.co.uk',
          link: 'https://google.co.uk/'
        }
      ],
      showStoredResources: true,
      showAddResource: false
    };
  },
  methods: {
    toggleShowResourcesDisplay() {
      this.showStoredResources = true;
      this.showAddResource = false;
    },
    toggleAddResourceDisplay() {
      this.showAddResource = true;
      this.showStoredResources = false;
    },
    submitNewResourceForm(n, d, l) {
      let resource = {
        id: new Date().toISOString(),
        title: n,
        description: d,
        link: l
      };
      this.storedResources.push(resource);
      this.toggleShowResourcesDisplay();
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-family: 'Raleway', sans-serif;
}
li {
  list-style: none;
}
h2 {
  margin-bottom: 10px;
}
p {
  margin: 10px 0;
  padding-left: 5px;
}
.coloredButton {
  background-color: rgb(70, 70, 100);
  color: rgb(236, 236, 236);
}
.coloredButton:hover {
  background-color: rgb(70, 70, 100, 0.8);
}
.clearButton {
  background-color: rgba(70, 70, 100, 0);
}
.clearButton:hover {
  color: rgb(111, 111, 138);
}
button {
  padding: 10px 30px;
  border: none;
  cursor: pointer;
  outline: none;
  min-width: 170px;
}
.rightAlignButton {
  display: block;
  width: 90%;
  text-align: right;
}
</style>

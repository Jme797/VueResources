import { createApp } from 'vue';
import App from './App.vue';
import TheContainer from './components/layout/TheContainer.vue';
import AlertDialog from './components/alerts/AlertDialog.vue';

const app = createApp(App);

app.component('TheContainer', TheContainer);
app.component('AlertDialog', AlertDialog);

app.mount('#app');

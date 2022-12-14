import { createApp } from 'vue';
import App from './App.vue';

import 'vue-fullpage.js/dist/style.css';
import VueFullPage from 'vue-fullpage.js';

import('./assets/theme/normalize.css');
import('./assets/theme/default/index.scss');
//import("./assets/theme/style.css");

const app = createApp(App);
app.use(VueFullPage);
app.mount('#app');

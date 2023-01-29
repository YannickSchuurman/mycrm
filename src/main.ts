import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/lara-light-teal/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                          //icons
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import Card from "primevue/card";
import Knob from "primevue/knob";
import Avatar from "primevue/avatar";
import Chart from "primevue/chart";
import Dropdown from "primevue/dropdown";
import Badge from "primevue/badge";
import Tooltip from 'primevue/tooltip';

import router from './routes/index.js'


const pinia = createPinia();



const app = createApp(App);
app.use(PrimeVue);
app.use(pinia);
app.use(router);

app.component('Dialog', Dialog);
app.component('PrimeButton', Button);
app.component('InputText', InputText);
app.component('Password', Password);
app.component('PrimeDivider', Divider);
app.component('Checkbox', Checkbox);
app.component('Card', Card);
app.component('Knob', Knob);
app.component('PrimeAvatar', Avatar);
app.component('Chart', Chart);
app.component("PrimeDropDown", Dropdown)
app.component("PrimeBadge", Badge)
app.directive("tooltip", Tooltip)



app.mount("#app");

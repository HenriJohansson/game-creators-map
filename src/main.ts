import "@/assets/css/index.css";
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from "./App.vue";
import router from "./router";
import { apolloClient } from './apolloclient';

createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },

  render: () => h(App),
}).use(router).mount("#app");

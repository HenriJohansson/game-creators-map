<template>
  <div class="home">
    <Map />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Map from "@/components/Map.vue";
export default defineComponent({
  name: "Home",
  components: {
    Map,
    HelloWorld,
  },
});
</script>

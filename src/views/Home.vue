<template>
  <div class="home">
    <CreateMarker />
    <div class="map">
      <Map />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Map from "@/components/Map.vue";
import CreateMarker from "@/components/CreateMarker.vue";
export default defineComponent({
  name: "Home",
  components: {
    CreateMarker,
    Map,
  },
});
</script>

<style scoped>
div .home {
  display: flex;
  flex-direction: row;
}
div .map {
  width: 66%;
}
</style>

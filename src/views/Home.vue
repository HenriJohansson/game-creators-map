<template>
  <div class="home">
    <Login></Login>
    <CreateMarker :key="reloadMap"/>
    <div class="map">
      <Map @reload="creatingAnotherMarker()" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import Map from "@/components/Map.vue";
import Login from "@/components/Login.vue"
import CreateMarker from "@/components/CreateMarker.vue";
import { orderedMarkerFactorySingleton } from "@/classes/OrderedMarkFactory";
export default defineComponent({
  name: "Home",
  components: {
    Map,
    CreateMarker,
    Login,
  },
  data() {
    return {
      defaultMark: ref(orderedMarkerFactorySingleton.createDefaultOrderedMarker()),
      reloadMap: 0,
    };
  },
  methods: {
    creatingAnotherMarker() {
      this.reloadMap += 1;
    },
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

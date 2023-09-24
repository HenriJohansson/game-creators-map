<template>
  <div class="home">
    <CreateMarker @updateNewMarkerText="updateNewMarkerText" />
    <div class="map">
      <Map :newMarkerText="newMarkerText" @updateNewMarkerText="updateNewMarkerText" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Map from "@/components/Map.vue";
import CreateMarker from "@/components/CreateMarker.vue";
export default defineComponent({
  name: "Home",
  components: {
    Map,
    CreateMarker,
  },
  data() {
    return {
      newMarkerText: "",
    };
  },
  methods: {
    updateNewMarkerText(newText) {
      this.newMarkerText = newText;
    },
  },
};
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

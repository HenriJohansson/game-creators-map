<template>
  <div class="home">
    <CreateMarker @updateNewMarkerText="updateNewMarkerText" />
    <div class="map">
      <Map :newMarkerText="newMarkerText" @updateNewMarkerText="updateNewMarkerText" />
    </div>
  </div>
</template>

<script>

import { defineComponent } from "vue";
import Map from "../components/Map.vue";
import CreateMarker from "../components/CreateMarker.vue";

export default {
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

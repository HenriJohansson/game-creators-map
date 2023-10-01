<template>
    <div style="height: 75vh; width: 50vw;">
        <l-map v-model="zoom" v-model:zoom="zoom" :center="[47.41322, -1.219482]" @move="log('move')">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :key="index" v-for="(marker, index) in markers" :lat-lng="marker.position" draggable
                @moveend="log('moveend')">
                <l-popup>{{ marker.text }}</l-popup>
            </l-marker>
        </l-map>
        <button @click="placeMarker">Place Marker</button>
    </div>
</template>

<script lang="ts">
import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css"
import { defineComponent } from "vue";

export default defineComponent({
    props: {
      newMarkerText: String,
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup,
    },
    data(): { zoom: number; markers: { position: [number, number]; text: string; }[]; } {
      return {
        zoom: 2,
        markers: [],
      };
    },
    methods: {
        log(a: string): void {
          console.log(a);
        },
        placeMarker(): void {
          let text = "";
          if(this.newMarkerText){
            text = this.newMarkerText.trim();
          }

          if (text !== "") {
            this.markers.push({
              position: [51, 51],
              text: text,
            });
            this.$emit("updateNewMarkerText", "");
          }
        },
    },
});
</script>
<style></style>

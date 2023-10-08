<template>
    <div style="height: 75vh; width: 50vw;">
        <l-map v-model="zoom" v-model:zoom="zoom" v-model:center="centerRef" @move="log('move')" @click=placeOnClick(centerRef)>
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
            <l-marker :key="index" v-for="(marker, index) in markers" :lat-lng="marker.location.coordinates" draggable
                @moveend="log('moveend')">
                <l-popup>{{ marker.marker_name }}</l-popup>
            </l-marker>
        </l-map>
    </div>
</template>

<script setup lang="ts">
import { UUIDMark } from "@/interfaces/Mark";
import { MarkerStoreHooks } from "@/store/MarkerStore";
import {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css"
import { defineEmits, ref } from "vue";

const centerRef = ref<[number, number]>([47.41322, -1.219482])
const zoom = 2;
const markers: UUIDMark[] = [];
const emit = defineEmits(['reload'])

const log = (a: string): void => {
  console.log(a);
};

const placeOnClick = (coordinates: [number, number] | undefined): void => {
  const placedMarker = MarkerStoreHooks.getChosenMark()
  if (placedMarker
  && coordinates
  && MarkerStoreHooks.findIndexOfMark(placedMarker) === -1) {
    if (placedMarker.marker_name) {
      placedMarker.location.coordinates = coordinates;
      MarkerStoreHooks.marksArrayPush(placedMarker);
      markers.push(placedMarker);
      emit('reload')
    }
  }
};
</script>
<style>
 .leaflet-pane { z-index: 0 !important; }
</style>

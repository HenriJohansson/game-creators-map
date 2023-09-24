<template>
  <div id="createMarker">
    <h1>Create Marker</h1>
    <input placeholder="Marker name" />
    <textarea placeholder="Marker description"></textarea>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
h1 {
  font-size: 20px;
  color: white;
}
div {
  background-color: cadetblue;
  display: flex;
  flex: content;
  flex-direction: column;
  max-width: 300px;
}
#createMarker * {
  padding: 1rem;
  margin: 1rem;
}
</style>

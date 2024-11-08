<template>
  <q-page padding>
    <div id="map" style="height: 400px; width: 100%;"></div>
  </q-page>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'PageName',
  mounted() {
    // Initialize the map
    const map = L.map('map').setView([45.3378048, 14.41792], 13);

    // Add a tile layer (you can use any other tile layer provider)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at the coordinates
    L.marker([45.3378048, 14.41792]).addTo(map)
      .bindPopup('Location')
      .openPopup();
  }
}
</script>

<style scoped>
#map {
  height: 100%;
  width: 100%;
  min-height: 400px; /* Adjust the height as needed */
}
</style>

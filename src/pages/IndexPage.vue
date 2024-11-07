<template>
  <q-page class="flex flex-center">
    <!-- Dodavanje slike koristeći q-img komponentu -->
    <q-img
      src="@/assets/knjiznica.jpg"  <!-- Ispravno dodavanje komentara izvan atributa -->
      alt="Početna slika"
      class="q-mb-md"
      style="max-width: 100%; max-height: 300px;" 
    />
    <h3>Početna stranica</h3>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

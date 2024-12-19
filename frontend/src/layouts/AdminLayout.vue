<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text h2">
          Knjižnica admin
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'AdminLayout'
})

let title = computed(() => {
  return "Knjiznica (admin)"
})

const linksList = [
  {
    title: 'Početna',
    caption: 'Početna stranica',
    icon: 'home',
    link: '#/admin'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga u knjižnici',
    icon: 'book',
    link: '#/admin/popisknjiga'
  },
  {
    title: 'Popis knjiga baza',
    caption: 'Popis svih knjiga u knjižnici',
    icon: 'book',
    link: '#/admin/popisKnjiga1'
  },
  {
    title: 'Pretraživanje',
    caption: 'Pretraži knjigu',
    icon: 'chat',
    link: '#/admin/pretrazivanje'
  }, 
  {
    title: 'Popis korisnika',
    caption: 'Popis korisnika',
    icon: 'chat',
    link: '#/admin/popis_korisnika'
  },
  {
    title: 'Unos knjiga',
    caption: 'Unos knjiga',
    icon: 'record_voice_over',
    link: '#/admin/unos_knjiga'
  },
  {
    title: 'logout',
    caption: 'Logout',
    icon: 'public',
    link: '#/logout'
  }

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

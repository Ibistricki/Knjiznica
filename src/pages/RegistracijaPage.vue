<template>
  <q-page class="container">
    <h1>Registracija</h1>
    <p>Molimo popunite formu za registraciju.</p>

    <q-input v-model="username" label="Korisničko ime" outlined />
    <q-input v-model="email" label="Email" outlined type="email" />
    <q-input v-model="password" label="Lozinka" outlined type="password" />
    <q-btn label="Potvrdi" @click="register" color="primary" />
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const register = () => {
      console.log('Registracija:', username.value, email.value, password.value);
    };

    return {
      username,
      email,
      password,
      register
    };
  }
}
</script>
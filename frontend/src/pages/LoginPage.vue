<template>
  <q-page class="container">
    <h1>Login</h1>
    <p>Unesite korisničko ime i lozinku za prijavu.</p>

    <q-input v-model="username" label="Korisničko ime" outlined />
    <q-input v-model="password" label="Lozinka" outlined type="password" />
    <q-btn label="Potvrdi" @click="login" color="primary" />
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      console.log('Login:', username.value, password.value);
    };

    return {
      username,
      password,
      login
    };
  }
}
</script>

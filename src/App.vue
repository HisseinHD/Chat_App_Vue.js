<template>
  <div id="app">
    <Accueil/>
    <ProfileView />
    <Contacts />
  </div>
</template>

<script>
import Accueil from './views/Accueil.vue'
import ProfileView from './components/ProfileView.vue'
import Contacts from './components/Contacts.vue'
import Accueil from './views/Accueil.vue';

export default {
  name: 'App',
  components: {
    Accueil,
    ProfileView,
    Contacts
    // Pas de virgule après le dernier composant
  }
}
</script>

<style>
/* Styles globaux */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
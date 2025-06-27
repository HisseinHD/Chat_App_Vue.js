<template>
  <div id="app">
    <Accueil/>
    <ProfileView />
    <Contacts />
    <PhoneInput />
    <VerificationCode/>
  <!-- /*  <Message /> */ -->
  </div>
</template>

<script>

import ProfileView from './views/ProfileView.vue'
import Contacts from './views/Contacts.vue'
//import Message from './views/Message.vue';
import Accueil from './views/Accueil.vue';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import PhoneInput from './views/PhoneInput.vue';
import VerificationCode from './views/VerificationCode.vue';

export default {
  name: 'App',
  components: {
    Accueil,
    ProfileView,
    Contacts,
    PhoneInput,
    VerificationCode

   // Message
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

<template>
  <VerificationCode />
<contacts/>
  <ProfileView />
</template>


<script>
import VerificationCode from './components/VerificationCode.vue'

import ProfileView from './components/ProfileView.vue';
import contacts from './components/contacts.vue'; 

export default {
  name: 'ProfileView.vue',
  components: {
    VerificationCode
  }
    ProfileView,
    contacts
}
  };
</script>


<style>
body {
  margin: 0;
  padding: 0;
}
h1 {
  color: black;
}
</style>



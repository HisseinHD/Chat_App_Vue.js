<template>
  <div id="app">
    <ProfileView />
    <Contacts />
    <Navbar />
  <NavbarItem title="Home" icon="bi bi-chat-square-dots" />
  </div>
</template>

<script>
import ProfileView from './components/ProfileView.vue';
import Contacts from './components/contacts.vue';
import Navbar from './components/Navbar.vue';
// import NavbarItem from './components/NavbarItem.vue';

export default {
  name: 'App',
  components: {
    ProfileView,
    Contacts,
    Navbar
  },
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
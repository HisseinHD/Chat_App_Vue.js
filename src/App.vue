<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
    <FooterNav v-if="showFooter" :currentPage="currentPage" @navigate="handleNavigation" />
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue';

export default {
  name: 'App',
  components: { FooterNav },
  data() {
    return {
      currentPage: 'home',
    };
  },
  computed: {
    showFooter() {
      // On ne montre pas le footer sur la page Welcome
      return this.$route.name !== 'Welcome';
    }
  },
  watch: {
    // Met à jour la page actuelle lorsqu'on change de route
    $route(to) {
      this.currentPage = to.name.toLowerCase();
    }
  },
  methods: {
    handleNavigation(page) {
      this.currentPage = page;
      this.$router.push(`/${page}`);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-bottom: 70px; /* pour laisser de l'espace au footer */
}
</style>

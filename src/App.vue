<template>
  <div id="app">
    <!-- Affiche la vue actuelle selon la route -->
    <router-view />
    
    <!-- Affiche le FooterNav si la route n'est pas "Welcome" -->
    <FooterNav 
      v-if="showFooter" 
      :currentPage="currentPage" 
      @navigate="handleNavigation" 
    />
  </div>
</template>

<script>
import FooterNav from './components/FooterNav.vue';

export default {
  name: 'App',
  components: { FooterNav },
  data() {
    return {
      currentPage: '', // Page actuelle
    };
  },
  computed: {
    // Affiche ou masque le footer selon la route
    showFooter() {
      return this.$route.name !== 'Welcome';
    }
  },
  watch: {
    // Met à jour la page actuelle lorsque la route change
    $route(to) {
      this.currentPage = to.name?.toLowerCase() || '';
    }
  },
  mounted() {
    // Initialise la page actuelle lors du montage du composant
    this.currentPage = this.$route.name?.toLowerCase() || '';
  },
  methods: {
    // Gère la navigation via le FooterNav
    handleNavigation(page) {
      this.$router.push({ name: page });
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
  margin-bottom: 70px; /* Espace pour le FooterNav */
}
</style>
<template>
  <div id="app">
    <WelcomeScreen 
      v-if="currentScreen === 'welcome'" 
      @proceed="currentScreen = 'phoneInput'"
    />
    <PhoneInput 
      v-else-if="currentScreen === 'phoneInput'"
      @submit="handlePhoneSubmit"
      @back="currentScreen = 'welcome'"
    />
  </div>
</template>

<script>
import WelcomeScreen from './components/WelcomeScreen.vue'
import PhoneInput from './components/PhoneInput.vue'

export default {
  components: {
    WelcomeScreen,
    PhoneInput
  },
  data() {
    return {
      currentScreen: 'welcome'
    }
  },
  methods: {
    handlePhoneSubmit(data) {
      console.log('Numéro soumis:', data)
      // ici vous pouvez envoyer à une API ou sauvegarder en localStorage
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

#app {
  max-width: 100vw;
  min-height: 100vh;
  background-color: #f8f8f8;
}
</style>

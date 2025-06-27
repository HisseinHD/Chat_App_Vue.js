<template>
  <WelcomeScreen />
  
</template>

<script>
import WelcomeScreen from './components/MessageList.vue'
import PhoneInput from './components/PhoneInput.vue';

export default {
  components: {
    WelcomeScreen
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
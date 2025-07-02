<!-- filepath: /home/hisseinhd6627/Bureau/Chat_App_Vue.js/src/views/VerificationCode.vue -->
<template>
  <div class="HH">
  <div class="container">
    <h2>Enter code</h2>
    <p>We've sent the code via SMS to +235 66 62 88 54 </p>
    <div class="code-inputs">
      <input
        v-for="(digit, index) in code"
        :key="index"
        v-model="code[index]"
        ref="codeInputs"
        type="text"
        maxlength="1"
        inputmode="numeric"
        pattern="[0-9]*"
        class="code-input"
        @input="onInput(index)"
        @keydown.backspace="onBackspace(index, $event)"
      />
    </div>
   <p class="resend">
  Didn't get the code?
  <a href="#" @click.prevent="goToUsernamePage">Resend code</a>
</p>
  </div>
  </div>
</template>

<script setup>

import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router'; // ← 👈 à ajouter

const router = useRouter(); // ← 👈 obligatoire pour utiliser router.push

// Fonction de redirection
const goToUsernamePage = () => {
  router.push('/nom-utilisateur');
};

// Tableau des chiffres
const code = ref(['', '', '', '']);

// Refs vers les champs
const codeInputs = ref([]);

// Fonction pour passer au champ suivant
const onInput = (index) => {
  if (code.value[index] && index < codeInputs.value.length - 1) {
    nextTick(() => {
      codeInputs.value[index + 1].focus();
    });
  }
};

// Gestion du retour arrière
const onBackspace = (index, event) => {
  if (event.key === 'Backspace' && !code.value[index] && index > 0) {
    nextTick(() => {
      codeInputs.value[index - 1].focus();
    });
  }
};

</script>

<style scoped>
.HH {
  background-color: rgba(253, 243, 243, 0.5);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
  text-align: center;
  background-color: #f8f5f5;
  padding: 20px;
  box-sizing: border-box;
  width: auto;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

}

h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #e60a0a;
}

p {
  font-size: 1rem;
  color: #1c0fd8;
  margin-bottom: 20px;
}

.code-inputs {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}

.code-input {
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #4d4545;
  border-radius: 8px;
  outline: none;
}

.code-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.resend {
  color: #2c2727;
  font-size: 14px;
}

.resend a {
  color: #007bff;
  text-decoration: none;
}

.resend a:hover {
  text-decoration: underline;
}
</style>
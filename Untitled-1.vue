<!-- filepath: /home/hisseinhd6627/Bureau/Chat_App_Vue.js/src/views/VerificationCode.vue -->
<template>
  <div class="container">
    <h2>Enter code</h2>
    <p>We've sent the code via SMS to +62 999 9999 000</p>
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
    <p class="resend">Didn't get the code? <a href="#">Resend code</a></p>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const code = ref(['', '', '', '']);
const codeInputs = ref([]);

const onInput = (index) => {
  if (code.value[index] && index < codeInputs.value.length - 1) {
    nextTick(() => {
      codeInputs.value[index + 1].focus();
    });
  }
};

const onBackspace = (index, event) => {
  if (event.key === 'Backspace' && !code.value[index] && index > 0) {
    nextTick(() => {
      codeInputs.value[index - 1].focus();
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: sans-serif;
  text-align: center;
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
  border: 1px solid #ccc;
  border-radius: 8px;
}
.resend {
  color: #666;
  font-size: 14px;
}
</style>
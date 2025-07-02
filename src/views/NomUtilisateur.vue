<template>
  <div class="container">
    <h1 class="title">Create your name</h1>
    <p class="subtitle">Get more people to know your name</p>

    <div class="input-wrapper">
      <span class="icon">👤</span>
      <input
        type="text"
        placeholder="Enter your name"
        v-model="username"
        class="name-input"
      />
    </div>

    <button class="next-button" @click="goNext">Next</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const router = useRouter();

const goNext = () => {
  // Redirection vers la page "/Discution" sans condition
  router.push('/Discussion');
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
  padding: 20px;
}

.title {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  text-align: center;
}

.input-wrapper {
  position: relative;
  width: 90%;
  max-width: 320px;
  margin-bottom: 20px;
}

.icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: #aaa;
}

.name-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 28px;
  outline: none;
}

.next-button {
  background-color: #000;
  color: white;
  border: none;
  padding: 14px 0;
  width: 90%;
  max-width: 320px;
  border-radius: 32px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.next-button:hover {
  background-color: #333;
}
</style>
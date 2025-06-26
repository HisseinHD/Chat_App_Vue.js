<template>
  <div class="welcome-screen">
    <div class="content">
      <h1 class="title">What's up</h1>
      <img class="hero-image" src="/src/assets/imgs/ima1.png" alt="Welcome Image">
      <p class="message">
        Let's take advantage of the role and family<br>
        advances in our business.
      </p>
      <button class="continue-button" @click="$emit('proceed')">
        Continue with phone
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeScreen'
}
</script>

<style scoped>
.welcome-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #fcf9f9;
  font-family: 'Arial', sans-serif;
}

.content {
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1.5rem;
}

.hero-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 8px;
}

.message {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.continue-button {
  background-color: #313438;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  transition: background-color 0.3s ease;
}

.continue-button:hover {
  background-color: #3367d6;
}

@media (max-width: 600px) {
  .title {
    font-size: 1.5rem;
  }

  .message {
    font-size: 0.9rem;
  }

  .continue-button {
    font-size: 0.95rem;
    padding: 0.9rem 1.5rem;
  }
}
.continue-btn {
  width: 100%;
  padding: 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  margin-bottom: 30px;
  cursor: pointer;
}

.continue-btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>

<!-- src/views/PhoneLogin.vue -->
<template>
  <div class="phone-input-container">
    <div class="header">
      <h2>Enter your phone number</h2>
      <p>Please confirm your region and enter your phone number</p>
    </div>

    <!-- Input avec vue-tel-input -->
    <div class="input-wrapper">
      <vue-tel-input
        v-model="phone"
        mode="international"
        :preferred-countries="['td', 'fr']"
        :input-options="{ showDialCode: true }"
        placeholder="Enter your phone number"
      >
        <template #icon-left>
          <i class="fas fa-globe"></i>
        </template>
      </vue-tel-input>
    </div>

    <!-- Champ texte classique (optionnel ou à supprimer) -->
    <div class="input-container">
      <i class="fas fa-phone phone-icon"></i>
      <input type="text" class="input-field" placeholder="Other field (optional)" />
    </div>

    <!-- Bouton -->
    <button class="continue-button" @click="submit">
      Continue
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
  name: 'PhoneLogin',
  components: {
    VueTelInput,
  },
  setup() {
    const phone = ref('');

    const submit = () => {
      if (phone.value.length >= 8) {
        alert(`Phone submitted: ${phone.value}`);
        // Tu peux rediriger ou envoyer une requête ici
      } else {
        alert('Please enter a valid phone number');
      }
    };

    return {
      phone,
      submit,
    };
  },
};
</script>

<style scoped>
.phone-input-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.header h2 {
  font-size: 1.8rem;
  margin-bottom: 8px;
  color: #333;
}

.header p {
  color: #666;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

.input-wrapper {
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.input-field {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-left: 10px;
  background: transparent;
}

.input-field::placeholder {
  color: #aaa;
}

.phone-icon {
  color: #888;
  font-size: 1.2rem;
}

.continue-button {
  background-color: #313438;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  max-width: 300px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.continue-button:hover {
  background-color: #3367d6;
}
</style>

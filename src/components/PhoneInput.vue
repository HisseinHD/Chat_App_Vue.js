<template>
  <div class="phone-input-container">
    <div class="header">
      <h2>Enter your phone number</h2>
      <p>Please confirm your region and enter your phone number</p>
    </div>

    <div class="input-wrapper">
      <vue-tel-input
        v-model="phone"
        mode="international"
        :preferred-countries="['id']"
        :input-options="{ showDialCode: true }"
        placeholder="Enter your phone number"
      >
        <template #icon-left>
          <i class="fas "></i>
        </template>
      </vue-tel-input>
    </div>
   <div class="input-container">
    <i class="fa-thin fa-phone"></i>
    <input type="text" class="input-field" placeholder="" >
    
  </div>
 
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
  components: {
    VueTelInput
  },
  setup(_, { emit }) {
    const phone = ref('');

    const submit = () => {
      if (phone.value.length >= 8) {
        emit('submit', { phone: phone.value });
      } else {
        alert('Please enter a valid phone number');
      }
    };

    return {
      phone,
      submit
    };
  }
};
</script>

<style scoped>
.phone-input-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

.header h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.header p {
  color: #666;
  margin-bottom: 30px;
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
}

.phone-icon {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  font-size: 1.2rem;
}

.vue-tel-input input {
  padding-left: 40px !important; /* space for the icon */
}

.continue-button {
  background-color: #000;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.3s ease;
}

.tel_vue i {
  font-size: 24px;
  color: #888;
  margin-right: 150px;
}

.tel_vue input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 5px;
  background-color: transparent;
}

.tel_vue input::placeholder {
  color: #aaa;
}


</style>


<template>
  <footer class="footer-nav">
    <button :class="{ active: currentPage === 'Discussion' }" @click="$emit('navigate', 'Discussion')">
      <i class="bi bi-chat-square-dots"></i>
      <span>Messages</span>
    </button>
    <button :class="{ active: currentPage === 'contacts' }" @click="$emit('navigate', 'contacts')">
      <i class="bi bi-people"></i>
      <span>Contacts</span>
    </button>
    <button :class="{ active: currentPage === 'calls' }" @click="$emit('navigate', 'calls')">
      <i class="bi bi-telephone"></i>
      <span>Calls</span>
    </button>
    <button :class="{ active: currentPage === 'profile' }" @click="$emit('navigate', 'profile')">
      <i class="bi bi-person"></i>
      <span>Profile</span>
    </button>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav',
  props: {
    currentPage: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.footer-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  z-index: 100;
}

.footer-nav button {
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.9rem;
  color: #555;
  cursor: pointer;
}

.footer-nav button i {
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
}

.footer-nav button.active {
  color: #007bff;
}
</style>
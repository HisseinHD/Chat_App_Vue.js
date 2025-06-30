<template>
  <footer class="footer-nav">
    <button :class="{ active: currentPage === 'home' }" @click="$emit('navigate', 'home')">
      <i class="fas fa-home"></i>
      <span>Home</span>
    </button>
    <button :class="{ active: currentPage === 'profile' }" @click="$emit('navigate', 'profile')">
      <i class="fas fa-user"></i>
      <span>Profile</span>
    </button>
    <button :class="{ active: currentPage === 'messages' }" @click="$emit('navigate', 'messages')">
      <i class="fas fa-comment"></i>
      <span>Messages</span>
    </button>
    <button :class="{ active: currentPage === 'settings' }" @click="$emit('navigate', 'settings')">
      <i class="fas fa-cog"></i>
      <span>Settings</span>
    </button>
    <button :class="{ active: currentPage === 'contacts' }" @click="$emit('navigate', 'contacts')">
      <i class="fas fa-address-book"></i>
      <span>Contacts</span>
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
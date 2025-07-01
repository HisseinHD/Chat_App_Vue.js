<template>
  <div class="contacts-container">
    <header>
      <h2>Contacts</h2>
      <i class="search-icon">🔍</i>
    </header>

    <div class="actions">
      <div class="action-item">
        <i>👥</i> <span>Invite friends</span>
      </div>
      <div class="action-item">
        <i>📍</i> <span>Find people nearby</span>
      </div>
    </div>

    <div class="contact-list">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="contact-item"
      >
        <div class="avatar">{{ contact.initials }}</div>
        <div class="info">
          <div class="name">{{ contact.name }}</div>
          <div
            class="status"
            :class="{ online: contact.status === 'Online' }"
          >
            {{ contact.status }}
          </div>
        </div>
      </div>
    </div>

    <FooterNav :currentPage="currentPage" @navigate="handleNavigation" />
  </div>
</template>

<script>
import FooterNav from '../components/FooterNav.vue';

export default {
  name: 'Contacts',
  components: {
    FooterNav,
  },
  data() {
    return {
      currentPage: 'home',
      contacts: [
        { initials: 'AB', name: 'Antonio Banderas', status: 'Online' },
        { initials: 'BC', name: 'Bessie Cooper', status: 'Last seen today at 8:40' },
        { initials: 'LA', name: 'Leslie Alexander', status: 'Last seen today at 8:40' },
        { initials: 'JJ', name: 'Jacob Jones', status: 'Last seen today at 8:40' },
        { initials: 'FM', name: 'Floyd Miles', status: 'Last seen long time ago' },
      ],
    };
  },
  methods: {
    handleNavigation(page) {
      this.currentPage = page;
      console.log('Navigating to:', page);
      // Uncomment the line below if you want to enable routing
      // this.$router.push({ name: page });
    },
  },
};
</script>

<style>
.contacts-container {
  font-family: sans-serif;
  max-width: 100%; /* Utilisation de toute la largeur de l'écran */
  margin: 0 auto;
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box; /* Inclure les bordures et padding dans la largeur totale */
}

header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.search-icon {
  font-size: 18px;
}

.actions {
  border-bottom: 8px solid #f0f0f0;
}

.action-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: 14px;
  color: #555;
}

.contact-list {
  flex: 1;
  overflow-y: auto;
}

.contact-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 12px;
}

.info .name {
  font-weight: 600;
}

.status {
  font-size: 12px;
  color: #888;
}

.status.online {
  color: green;
}

footer {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #ddd;
  width: 100%; /* S'assurer que le footer occupe toute la largeur */
  box-sizing: border-box;
}

.tab {
  font-size: 13px;
  color: #777;
}

.tab.active {
  color: black;
  font-weight: bold;
}
</style>
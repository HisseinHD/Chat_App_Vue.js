<template>
  <div class="messages-app">
    <!-- En-tête -->
    <div class="header">
      <div class="time">9:41</div>
      <h1>Messages</h1>
    </div>
    <!-- Liste des messages -->
    <div class="message-list">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message-item"
        :class="{ unread: message.unread }"
        @click="openDiscussion(message)"
      >
        <div class="avatar">{{ message.initials }}</div>
        <div class="content">
          <div class="name">{{ message.name }}</div>
          <div class="text">{{ message.text }}</div>
        </div>
        <div class="time">{{ message.time }}</div>
        <div v-if="message.unread" class="notification-dot"></div>
      </div>
    </div>

    <!-- Barre de navigation -->
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
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'MessagesApp',
  setup() {
    const router = useRouter();

    const messages = [
      {
        initials: 'AB ',
        name: 'Antonio Banderas',
        text: "You're welcome",
        time: '9:23',
        unread: true,
      },
      {
        initials: 'AB',
        name: 'Annette Black',
        text: 'Hello there?',
        time: '9:23',
        unread: true,
      },
      {
        initials: 'BC',
        name: 'Bessie Cooper',
        text: 'Thanks ray!',
        time: '8:45',
        unread: false,
      },
      {
        initials: 'DR',
        name: 'Darlene Robertson',
        text: 'Okay thank you robbert',
        time: '9:23',
        unread: true,
        },
      {
        initials: 'AB',
        name: 'Antonio Banderas',
        text: "You're welcome",
        time: '9:23',
        unread: true,
      },
      {
        initials: 'AB',
        name: 'Annette Black',
        text: 'Hello there?',
        time: '9:23',
        unread: true,
      },
      {
        initials: 'BC',
        name: 'Bessie Cooper',
        text: 'Thanks ray!',
        time: '8:45',
        unread: false,
      },
      {
        initials: 'DR',
        name: 'Darlene Robertson',
        text: 'Okay thank you robbert',
        time: '9:23',
        unread: true,
      },
      {
        initials: 'AB',
        name: 'Antonio Banderas',
        text: "You're welcome",
        time: '9:23',
        unread: true,
      },
      {
        initials: 'AB',
        name: 'Annette Black',
        text: 'Hello there?',
        time: '9:23',
        unread: true,
      },
      {
        initials: 'BC',
        name: 'Bessie Cooper',
        text: 'Thanks ray!',
        time: '8:45',
        unread: false,
      },
      {
        initials: 'DR',
        name: 'Darlene Robertson',
        text: 'Okay thank you robbert',
        time: '9:23',
        unread: true,
      },
    ];

    const openDiscussion = (message) => {
      router.push({
        name: 'messages',
        params: { name: message.name },
      });
    };

    return {
      messages,
      openDiscussion,
    };
  },
};
</script>

<style scoped>
/* Conteneur principal */
.messages-app {
  font-family: Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden; /* Empêche le défilement global */
}

/* En-tête */
.header {
  padding: 15px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eee;
  flex-shrink: 0; /* Empêche le redimensionnement */
}

.header .time {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 12px;
  color: #666;
}

.header h1 {
  font-size: 18px;
  margin: 0;
}

/* Liste des messages */
.message-list {
  flex: 1; /* Prend tout l'espace disponible */
  overflow-y: auto; /* Permet le défilement vertical uniquement */
  padding: 10px 0;
}

/* Élément de message */
.message-item {
  display: flex;
  padding: 12px 15px;
  align-items: center;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background-color 0.3s;
}

.message-item:hover {
  background-color: #f5f5f5;
}

.message-item.unread {
  background-color: #f9f9f9;
}

.avatar {
  width: 40px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: bold;
  color: #555;
}

.content {
  flex: 1;
}

.name {
  font-weight: bold;
  margin-bottom: 3px;
}

.text {
  font-size: 14px;
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

.time {
  font-size: 12px;
  color: #999;
  margin-left: 10px;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background-color: #007aff;
  border-radius: 50%;
  margin-left: 10px;
}

/* Barre de navigation */
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

/* Responsive Design */
@media (max-width: 600px) {
  .header h1 {
    font-size: 16px;
  }

  .avatar {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }

  .text {
    font-size: 12px;
  }

  .time {
    font-size: 10px;
  }

  .footer-nav button {
    font-size: 0.8rem;
  }

  .footer-nav button i {
    font-size: 1rem;
  }
}
</style>
<template>
  <div class="messages-app">
    <div class="header">
      <div class="time">9:41</div>
      <h1>Messages  </h1>
      
    </div>

    <div class="message-list">
      <!-- Messages interactifs -->
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
  </div>
</template>

<script>
import { unicode } from '@fortawesome/free-regular-svg-icons/faAddressBook';
import { useRouter } from 'vue-router';

export default {
  name: 'messages',
  setup() {
    const router = useRouter();

    const messages = [
     {
      initials: 'AB',
       name: 'Antonio Banderas',
        text: "You're welcome",
        time: '9:23',
       unread: true,
      },
    //   {
    //     initials: 'AB',
    //     name: 'Annette Black',
    //     text: 'Hello there?',
    //     time: '9:23',
    //     unread: true,
    //   },
    //   {
    //     initials: 'BC',
    //     name: 'Bessie Cooper',
    //     text: 'Thanks ray!',
    //     time: '8:45',
    //     unread: false,
    //   },
    //   {
    //     initials: 'DR',
    //     name: 'Darlene Robertson',
    //     text: 'Okay thank you robbert',
    //     time: '9:23',
    //     unread: true,
    //   },
    ];

    const openDiscussion = (message) => {
      // Navigue vers une page de discussion avec les détails du message
      router.push({
        name: 'messages',
        params: { name: messages.name },
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
.messages-app {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  background: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 15px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #eee;
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

.message-list {
  flex: 1;
  overflow-y: auto;
}

.message-item {
  display: flex;
  padding: 12px 15px;
  align-items: center;
  border-bottom: 1px solid #eee;
  position: relative;
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

.tab-bar {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-top: 1px solid #eee;
}

.tab {
  font-size: 14px;
  color: #666;
}

.tab.active {
  color: #007aff;
  font-weight: bold;
}

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
  }
</style>
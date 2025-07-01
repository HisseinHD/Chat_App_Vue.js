<template>
  <div class="chat-container">
    <!-- Header -->
    <div class="chat-header">
      <div class="header-left">
        <div class="avatar">AB</div>
        <div class="user-info">
          <div class="user-name">Assoulla</div>
          <div class="user-status">Online</div>
        </div>
      </div>
      <div class="menu-icon">⋮</div>
    </div>

    <!-- Messages -->
    <div class="chat-messages">
      <div class="chat-date">Today</div>

      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['message-wrapper', msg.fromMe ? 'from-me' : 'from-other']"
      >
        <div class="message-bubble">{{ msg.text }}</div>
        <div class="message-time">{{ msg.time }}</div>
      </div>
    </div>

    <!-- Input -->
    <form class="chat-input" @submit.prevent="send">
      <button type="button" class="icon">📎</button>
      <input
        type="text"
        v-model="newMessage"
        placeholder="Type a message"/>
      
      <button type="button" class="icon">😊</button>
    <button type="submit" class="icon">📩</button>

    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const messages = ref([
  { text: "salut ma belle comment tu va?", time: "9:23", fromMe: false },
  { text: "What tools do you use ?", time: "9:23", fromMe: false },
  { text: "Figma,for orototype i use principler", time: "9:23", fromMe: true },
  { text: "Cool ! Your design inspire me a lot", time: "9:23", fromMe: false },
  { text: "Thank u so much Antoan", time: "9:23", fromMe: true },
  { text: "you’re welcome", time: "9:23", fromMe: false },
])

const newMessage = ref('')

const send = () => {
  if (newMessage.value.trim()) {
    messages.value.push({
      text: newMessage.value.trim(),
      time: "9:24",
      fromMe: true
    })
    newMessage.value = ''
  }
}
</script>

<style scoped>
.chat-container {
  max-width: 375px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: sans-serif;
  box-shadow: 0 2px 5px rgba(16, 108, 230, 0.1);
}

/* Header */
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 40px;
  height: 40px;
  background: #ccc;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info .user-name {
  font-weight: bold;
}

.user-status {
  font-size: 12px;
  color: green;
}

.menu-icon {
  font-size: 20px;
  color: #555;
}

/* Messages */
.chat-messages {
  flex: 1;
  padding: 10px 16px;
  overflow-y: auto;
  background-color:rgba(182, 149, 39, 0.664);
}

.chat-date {
  text-align: center;
  font-size: 12px;
  color: #d81a1a;
  margin-bottom: 10px;
}

.message-wrapper {
  margin-bottom: 10px;
  max-width: 80%;

}

.from-other {
  text-align: left;
}

.from-me {
  text-align: right;
  margin-left: auto;
}

.message-bubble {
  display: inline-block;
  padding: 8px 12px;
  border-radius: 12px;
  background-color: #e5e5ea;
  color: #000;
  font-size: 14px;
}

.from-other .message-bubble {
  background-color: #ebf7f6;
  border: 1px solid #f5ebeb;
}

.message-time {
  font-size: 11px;
  color: #471616;
  margin-top: 3px;
}

/* Input */
.chat-input {
  display: flex;
  align-items: center;
  padding: 15px 12px;
  border-top: 1px solid #eee;
  background-color:rgb(250, 245, 245);
  gap: 8px;
}

.chat-input input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 11px;
  padding: 8px;
  border-radius: 8px;
  background-color:#fde8bb;
}

.icon {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>

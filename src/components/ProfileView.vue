<template>
  <div class="profile-container">
    <!-- Header -->
    <div class="header">
      <h2>My profiles</h2>

      <div style="display: flex;">
        <div class="avatar">AB</div>
        <div>
          <p class="name">Antonio banderas</p>
          <p class="status">Online</p>
        </div>
      </div>

      <!-- Settings -->
      <div class="section">
        <h3>Settings</h3>
      </div>
      <SettingItem title="Notification" icon="🔔" />
      <SettingItem title="privacy and security" icon="🔒" />
      <SettingItem title="Chats" icon="💬" />
      <SettingItem title="Storage and date" icon="📊" />
      <!-- Help -->
      <div class="section">
        <h3>Help</h3>
      </div>
      <SettingItem title="What’s up FAQ" icon="❓" />
      <SettingItem title="Privacy policy" icon="🛡️" />
      <SettingItem title="Ask a question" icon=" 💬" />
    </div>
  
    <footer>
        <div class="tab">Messages <br><i class="bi bi-chat-square-dots"></i></div>
        <div class="tab active">Contacts <br><i class="bi bi-people"></i></div>
        <div class="tab">Calls <br><i class="bi bi-telephone"></i></div>
        <div class="tab">Profile <br><i class="bi bi-person"></i></div>
      </footer>
    </div>
 
</template>
<script>
import SettingItem from './SettingItem.vue';

export default {
  name: 'ProfileView',
  components: {
    SettingItem
  }
};
</script>

<!-- Ajoute ceci si tu veux un style scoped -->
<!-- <style src="./ProfileView.vue" scoped></style> -->
<style>
.profile-container {
  font-family: 'Arial', sans-serif;
  background-color: #fff;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
}

.header {
  border-bottom: 1px solid #ddd;
  padding-bottom: 16px;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
}

.name {
  font-weight: bold;
  margin: 0;
}

.status {
  color: green;
  font-size: 14px;
  margin: 0;
}

.section {
  margin-top: 24px;
  border-top: 1px solid #eee;
  padding-top: 16px;
}

.section h3 {
  font-size: 16px;
  color: #666;
  margin-bottom: 12px;
}

.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 12px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #333;
  border-bottom: 1px solid #eee;
}

.icon {
  margin-right: 10px;
  font-size: 18px;
}

.footer-nav {
  margin-top: auto;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding-top: 10px;
}

.nav-item {
  color: #888;
  font-size: 14px;
}

.nav-item.active {
  color: black;
  font-weight: bold;
}



body {
  width: 100%;
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
}

.profile-container {
  max-width: 100%;
  margin: auto;
  background: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.avatar {
  width: 50px;
  height: 50px;
  background-color: #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 18px;
  margin-right: 15px;
}

.profile-info h3 {
  margin: 0;
  font-size: 18px;
}

.online {
  font-size: 14px;
  color: green;
}

.section {
  padding: 15px 20px;
}

.section h4 {
  margin-bottom: 10px;
  color: #666;
  font-size: 16px;
}

.section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.section li {
  padding: 12px 0;
  display: flex;
  align-items: center;
  gap: 12px;
  color: #333;
  font-size: 15px;
  border-bottom: 1px solid #eee;
}

.bottom-nav {
  display: flex;
  justify-content: space-around;
  padding: 12px;
  border-top: 1px solid #ddd;
  background-color: #fff;
}

.bottom-nav i {
  font-size: 20px;
  color: #999;
}

.bottom-nav .selected {
  color: #000;
}
</style>
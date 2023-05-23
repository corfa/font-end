<template>
    <div>
      <h1>Это твой профиль :)</h1>
      <ChatForm @chat-created="refreshUserChats" />
  
      <UserChatList :chats="userChats" ref="userChatList" />
      <button class="logout-button" @click="logout">Выход</button>
    </div>
  </template>
  
  
  <script>
  import ChatForm from '../components/ChatForm.vue';
  import UserChatList from '../components/UserChatList.vue';
  
  export default {
    components: {
      ChatForm,
      UserChatList,
    },
    data() {
      return {
        userChats: [], 
      };
    },
    methods: {
      async refreshUserChats() {
        await this.$refs.userChatList.getUserChats();
        this.userChats = this.$refs.userChatList.chats;
      },
      logout() {
      localStorage.removeItem('token');
      this.$router.push('/');
    },
    },
  };
  </script>
  
  <style>
.profile {
  position: relative;
}

.logout-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #f44336;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
}

</style>
  
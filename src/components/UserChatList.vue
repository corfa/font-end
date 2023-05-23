<UserChatList :chats="chats" ref="userChatList" />
<template>
    <div>
      <h2 class="user-chat-list__title">Список чатов пользователя</h2>
  
      <ul class="user-chat-list__chats">
        <li v-for="chat in chats" :key="chat.id" class="user-chat-list__chat">{{ chat.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        chats: [],
      };
    },
    mounted() {
      this.getUserChats();
    },
    methods: {
      async getUserChats() {
        try {
          const url = 'http://127.0.0.1:8000/user/chat-list/';
          const token = localStorage.getItem('token');
          
          const response = await axios.get(url, {
            headers: {
              'X-Token': token,
            },
          });
  
          this.chats = response.data.chats;
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .user-chat-list__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .user-chat-list__chats {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  .user-chat-list__chat {
    background-color: #f2f2f2;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
  }
  </style>
  
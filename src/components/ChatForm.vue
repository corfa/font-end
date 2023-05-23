<template>
  <div>
 
    <form @submit.prevent="createChat" class="chat-form">
 
      <input v-model="chatName" placeholder="Название чата" required class="chat-form__input" />
      <button type="submit" class="chat-form__button">Создать чат</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      chatName: '',
    };
  },
  methods: {
   async createChat() {
      const token = localStorage.getItem('token'); 
      const headers = {
        'X-Token': token, 
      };

      const url = 'http://127.0.0.1:8000/chat'; 
      const data = {
        name: this.chatName, 
      };

    
      axios.post(url, data, { headers })
        .then(response => {
          this.$emit('chat-created'); 
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.chat-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.chat-form__input {
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
}

.chat-form__button {
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  cursor: pointer;
}

/* Дополнительные стили по вашему усмотрению */
</style>

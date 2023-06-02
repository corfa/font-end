<template>
  <div class="chat-container">
    <div class="logout-button">
      <button @click="logout">Выйти из чата</button>
    </div>
    <div class="chat-messages">
      <h2>WebSocket Chat</h2>
      <div class="message-list">
        <div v-for="message in messages" :key="message.id" class="message-item">
          <div class="message-content">
            <strong>{{ message.user }}:</strong> {{ message.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" type="text" placeholder="Enter your message" />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null,
      messages: [],
      newMessage: "",
    };
  },
  created() {
    this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      const token = localStorage.getItem("token");
      const chatId = this.$route.params.chatId;
      const socketUrl = "ws://127.0.0.1:8000/chat/" + chatId;
      this.socket = new WebSocket(socketUrl, token);
      this.socket.onmessage = this.handleMessage;
      this.socket.onopen = () => {};
    },
    handleMessage(event) {
      const message = JSON.parse(event.data);
      this.messages.push({
        user: message.user,
        text: message.text,
      });
    },
    sendMessage() {
      if (this.newMessage.trim() === "") return;
      this.socket.send(this.newMessage);
      this.newMessage = "";
    },
    logout() {
      this.$router.push("/profile");
      this.socket.close()
    },
  },
  beforeUnmount() {
    this.socket.close();
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.logout-button {
  align-self: flex-start;
  padding: 10px;
}

.logout-button button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
}

.chat-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.message-list {
  overflow-y: scroll;
  max-height: calc(100% - 120px); /* Adjust the height based on your needs */
  padding: 10px;
}

.message-item {
  margin-bottom: 10px;
}

.message-content {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
}

.chat-input {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

input[type="text"] {
  flex: 1;
  padding: 5px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: white;
  cursor: pointer;
}

/* Additional styles for the chat-container */
.chat-container {
  padding: 20px;
  justify-content: space-between;
}

/* Additional styles for the chat-input */
.chat-input {
  margin-top: 20px;
}

/* Additional styles for the chat-messages */
.chat-messages {
  margin-top: 20px;
}

</style>
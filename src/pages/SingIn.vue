

<template>
    <div class="registration-form">
      <form>
        <div class="form-group">
          <label for="username">Имя пользователя:</label>
          <input type="text" id="username" class="form-control form-control-lg" v-model="username" />
        </div>
  
        <div class="form-group">
          <label for="password">Пароль:</label>
          <input type="password" id="password" class="form-control form-control-lg" v-model="password" />
        </div>
  
        <button type="button" class="btn btn-primary btn-lg" @click="register">Войти</button>
        <div class="form-group">
      </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import router from "../router/router"
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      register() {
        const userData = {
          username: this.username,
          password: this.password,
        };
  
        axios
          .post('http://localhost:8000/user/auth', userData)
          .then(response => {
            const token = response.data['X-token'];
            localStorage.setItem('token', token);
            localStorage.setItem('login', this.username);
            router.push({ name: 'profile' });
            
          })
          .catch(error => {
            alert(error)
            alert("такой пользователь не найден :(")
            console.error('Ошибка регистрации:', error);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .registration-form {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  form {
    max-width: 400px;
    padding: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-control {
    padding: 12px 20px;
    font-size: 18px;
  }
  
  .btn {
    display: block;
    width: 100%;
    font-size: 20px;
    padding: 12px 20px;
  }
  </style>
  
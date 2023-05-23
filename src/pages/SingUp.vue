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
  
        <button type="button" class="btn btn-primary btn-lg" @click="register">Зарегистрироваться</button>
          <div class="form-group">
        <router-link to="/singIn">Уже есть аккаунт?</router-link>
      </div>
      </form>
    </div>


   
  </template>
  
  <script>
  import axios from 'axios';
  
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
          .post('http://localhost:8000/user/', userData)
          .then(response => {
            // Обработка успешного ответа от API
            console.log('Успешно зарегистрирован:', response.data);
            // Сброс полей после регистрации
            this.username = '';
            this.password = '';
          })
          .catch(error => {
            alert("такой пользователь уже есть :(")
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
  
<template>
  <div class="container"> 
      <div class="form-wrapper">
        <input class="input-item" type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
        <br><br>
        <input class="input-item" type="password" v-model="loginForm.password" placeholder="请输入密码"/>
        <br><br>
        <button class="btn" v-on:click="login">登录</button>
      </div>
  </div>
</template>

<script>

  export default {
    name: 'Login',
    data () {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        responseResult: []
      }
    },
    methods: {
      login () {
        this.$axios
          .post('/login', {
            username: this.loginForm.username,
            password: this.loginForm.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {
          })
      }
    }
  }
</script>

<style>
  * {
      margin: 0;
      padding: 0;
  }
  .container {
      height: 340px;
      widows: 100%;
      margin-top: 20px;
  }
  .form-wrapper{
    width:350px;
    height:70%;
    margin: auto;
    padding: 30px;
    border-style:solid;
    border-width:2px;
    border-color:#41b883;
    border-radius: 25px;
    background-color: #fff;
    opacity:0.8;
  }
  .input-item {
      display: block;
      width: 100%;
      margin-bottom: 20px;
      border: 0;
      border-bottom: 1px solid rgb(128, 125, 125);
      font-size: 20px;
      outline: none;
  }
  .input-item:placeholder {
      text-transform: uppercase;
  }
  .btn {
      text-align: center;
      font-size: 16px;
      padding: 10px;
      width: 100%;
      margin-top: 20px;
      background-image: linear-gradient(to right, #41b883, #36495e);
      color: #fff;
      border-radius: 15px;
  }
</style>

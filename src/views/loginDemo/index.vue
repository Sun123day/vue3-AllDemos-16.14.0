<template>
  <table class="login-table" border="0" cellpadding="10">
    <tr>
      <td align="center">用户名</td>
      <td>
        <el-input 
            id='username' 
            type="text" 
            v-model="loginForm.username" 
            placeholder="请输入用户名"/>
      </td>
    </tr>
    <tr>
      <td align="center">密码</td>
      <td>
        <div class="password-input">
          <el-input 
              id="password"
              :type="passwordType"
              v-model="loginForm.password"
              placeholder="请输入密码"/>
          <div 
              class="icon-wrapper"
              @click="switchIcon" 
          >
              <el-icon :size="20">
                <View v-if="passwordType == 'password'" />
                <Hide v-else />
              </el-icon>
          </div>
        </div>
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <label class="remember-password">
          <input 
              type="checkbox" 
              v-model="rememberPassword"
              @click="handleRember"/> 记住密码
        </label>
      </td>
    </tr>
    <tr align="center">
      <td colspan="2">
        <button @click="handleLogin">登录</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  data(){
    return {
        loginForm: {
          username: '',
          password: ''
        },
        rememberPassword: false,
        showPassword: false,
        passwordType: 'password',
    }
  },
  created() {
    // 在页面创建时从本地存储中读取密码，并填充到密码框中
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (savedUsername && savedPassword) {
      this.loginForm.username = savedUsername;
      this.loginForm.password = savedPassword;
      this.rememberPassword = true;
    }
  },
  methods:{
    switchIcon(){
      console.log("Icon被改变了");
      this.showPassword = !this.showPassword;
      this.passwordType = this.showPassword ? 'text' : 'password';
    },
    handleRember(){
      if(this.rememberPassword){
        this.rememberPassword = false
      }
    },
    handleLogin(){
      console.log("登录被点击了");
      if (this.loginForm.username === 'admin' && this.loginForm.password === 'Admin123!') {
        // 登录成功，跳转至 /chess 界面
        // this.$router.replace({ path: '/chess' });
        this.$router.replace({ path: '/index' });
        if (this.rememberPassword) {
          localStorage.setItem('username', this.loginForm.username);
          localStorage.setItem('password', this.loginForm.password);
        }
      } else {
        // 登录失败，弹出提示
        alert('用户名或密码错误');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.password-input {
  position: relative;
}
.icon-wrapper {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.password-input .iconfont {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.remember-password {
  font-size: 14px;
  display: inline-block;
  margin-bottom: 10px;
}

.remember-password input[type="checkbox"] {
  vertical-align: middle;
  margin-right: 5px;
}
/* 重置table样式 */
.login-table {
  width: 100%;
  max-width: 300px;
  margin: 50px auto;
  border-collapse: collapse;
  border-spacing: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.login-table td {
  padding-bottom: 16px;
  padding-top: 16px;
  padding-right: 0px;
  padding-right: 8px;
  vertical-align: middle;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.login-table input[type="text"],
.login-table input[type="password"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
}

.login-table button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
}
</style>

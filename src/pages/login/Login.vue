<template>
  <div class="login-container">
  <div>
    <el-form autoComplete="on" :model="loginForm" ref="loginForm" label-position="left" label-width="0px"
             class="card-box login-form">
      <h3 class="title">vue-element-admin</h3>

      <el-form-item>
        <el-input name="username" type="text" v-model="loginForm.username" autoComplete="on" placeholder="username" />
      </el-form-item>

      <el-form-item>
        <el-input name="password" type="password" v-model="loginForm.password" autoComplete="on" placeholder="password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" style="width:26%;" :loading="loading" @click.native.prevent="handleLogin">
          Sign in
        </el-button>
      </el-form-item>

      <div class="tips">
        <span style="margin-right:8px;">© 2018 author HJ</span>
      </div>

    </el-form>
  </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    handleLogin() {
      this.$http.post('/api/vue/user/login',this.loginForm)
        .then((res) => {
          console.log("请求成功，data:" + res.data)
          this.$router.push({ path: '/home'})
        }, (err) => {
          console.log("请求失败")
        })
    }
  }
}
</script>

<style>
  .login-container {
    position: fixed;
    height: 100%;
    width:100%;
    background-color: #2d3a4b;
  }

    input:-webkit-autofill {
       -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
       -webkit-text-fill-color: #fff !important;
    }

    input {
      background: transparent;
      border: 0px;
       -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #eee;
      height: 47px;
    }
    .el-input {
      /*display: inline-block;*/
      height: 47px;
      width: 70%;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #eee;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 120px auto;
    }
    .el-form-item {
      /*border: 1px solid rgba(255, 255, 255, 0.1);*/
      /*background: rgba(0, 0, 0, 0.1);*/
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: #889aa4;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
</style>

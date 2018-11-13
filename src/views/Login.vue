<template>
  <div class="login">
    <div class="form">
      <input type="text" placeholder="Access Token" spellcheck="false" v-model="token">
      <input type="submit" value="Login" @click="login" :disabled="loading">
    </div>
  </div>
</template>

<script>
  import router from '../router';
  import {mapActions} from 'vuex';

  export default {
    name: "login",
    data() {
      return {
        token: "",
        loading: false,
      }
    },
    methods: {
      ...mapActions({
        doLogin: "login"
      }),
      login() {
        this.loading = true;
        this.doLogin(this.token).then(data => {
          this.loading = false;
          console.log(data)
          router.push({name: 'home'})
        }, error => {
          this.loading = false;
          console.log(error)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .login {
    margin-top: 50px;
    .form {
      margin: 0 auto;
      min-width: 400px;
      max-width: 400px;
      padding: 30px;
      box-sizing: border-box;
      input {
        outline: none;
        display: block;
        width: 100%;
        box-sizing: border-box;
        &[type=text] {
          padding: 10px;
          margin-bottom: 20px;
          border: 1px solid #eceff1;
          background: #fff;
        }
        &[type=submit] {
          color: #fff;
          border: none;
          background: #212121;
          line-height: 36px;
          user-select: none;
        }
      }
    }
  }
</style>

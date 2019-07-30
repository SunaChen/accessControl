<template>
  <div id="login">
    <p>username:<input type="text" v-model="userName"></p>
    <p>password:<input type="password" v-model="passWord"></p>

    <button @click="login" title="登录">Logon</button>
  </div>
</template>

<script>
  import {mepActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      userName:'',
      passWord:''
    }
  },
  methods:{
    login(){

      if (this.userName === 'admin' && this.passWord === '123456' ){
        this.$store.commit('addRoles',{
          roles:'admin'
        })
        sessionStorage.setItem('roles','admin');
        this.$router.push('/home')
      }

      if (this.userName === 'guest' && this.passWord === '123456'){
        this.$store.commit('addRoles',{
          roles:'user'
        })
        sessionStorage.setItem('roles','user');
        this.$router.push('/home')


      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

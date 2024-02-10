<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <br>
    
    <button @click="gotToLogin" class="btn btn-primary">Login</button>


  </div>
</template>

<script>

export default {
  name: 'HomeView',
  
  methods:{
    gotToLogin(){
      this.$router.push({ name: 'no-login' })
    }
  }

}
</script>

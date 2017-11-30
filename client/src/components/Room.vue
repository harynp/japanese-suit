<template lang='html'>
  <div class='room'>
    <h1>Hello room</h1>
    <h2>Welcome {{ name }}</h2>
    <h2>{{ id }}</h2>
    <img :src='picture' alt='profile_picture'>
    <div class='button'>
      <button @click='doLogout' type='button' name='button'>Facebook Logout</button>

    </div>

  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        id: '',
        name: '',
        picture: '',
        cover: ''
      }
    },
    methods: {
      doLogout: function () {
        localStorage.removeItem('dataUser')
        localStorage.removeItem('fb_token')
        this.$router.push('/')
      }
    },
    mounted: function () {
      if (!localStorage.getItem('fb_token') && !localStorage.getItem('dataUser')) {
        console.log('--------------')
        // alert('Please Login')
        this.$router.push('/')
      } else {
        let dataUser = JSON.parse(localStorage.getItem('dataUser'))
        this.id = dataUser.id
        this.name = dataUser.name
        this.picture = dataUser.picture
        this.cover = dataUser.cover
      }
    }
  }
</script>

<style lang='css'>
  
</style>

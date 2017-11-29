<template lang="html">
  <button @click="login" type="button" name="button">Facebook Login</button>
</template>

<script>
export default {
  methods: {
    login: function(){
      fbLogin(response=>{
        let access_token = response.authResponse.accessToken        
        this.$http.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&access_token='+access_token)
        .then(({data})=>{
          let obj = {
            id: data.id,
            name: data.name,
            email: data.email,
            picture: data.picture.data.url,
            cover: data.cover.source
          }
          localStorage.setItem('dataUser', JSON.stringify(obj))
          this.$router.push('/room')
        })
        .catch(err=>{
          console.log(err)
        })
      })
    }
  },
  beforeCreate: function(){
    if(localStorage.getItem('fb_token')){
      this.$router.push('/room')
    }
  }
}
</script>

<style lang="css">
</style>

<template lang="html">
  <button @click="login" type="button" name="button">Facebook Login</button>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      room: 'TES',
      score: 0,
      status: false
    }
  },
  computed: {
    getRoom: function () {
      this.$db.ref(`${this.room}/player`).on('value', function(snapshot) {
      console.log(snapshot.val())
    })
    },
  },
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
          this.addRoom()
          this.$router.push('/room')
        })
        .catch(err=>{
          console.log(err)
        })
      })
    },
    addRoom: function () {
      let name = JSON.parse(localStorage.getItem('dataUser')).name
      this.$db.ref(`${this.room}/player`).push({
        name: name,
        score: this.score,
        status: this.status
      })
    },
    beforeCreate: function(){
      if(localStorage.getItem('fb_token')){
        this.$router.push('/room')
      }
    },
    created () {
      this.getRoom()
    }
  }
}
</script>

<style lang="css">
</style>

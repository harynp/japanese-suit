<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <navbar/>
    <room :Player="player"/>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <button @click="login" type="button" name="button">Facebook Login</button>

  </div>
</template>

<script>
import navbar from '@/components/Navbar'
import room from '@/components/Room'
export default {
  components:{
    navbar,
    room
    },
  data () {
    return {
      score: 0,
      status: false,
      player: ''
    }
  },
  computed: {

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
    getRoom: function () {
      this.$db.ref(`/JAPAN`).on('value', function(snapshot) {
      console.log('INI SNAPSHOT',snapshot.val())
      })
    },
    addRoom: function () {
      let name = JSON.parse(localStorage.getItem('dataUser')).name
      this.$db.ref(`/JAPAN/`).push({
        name: name,
        score: this.score,
        status: this.status
      })
      this.player = {
        name: name,
        score: this.score,
        status: this.status
      }
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

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>

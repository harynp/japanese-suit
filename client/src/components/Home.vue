<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <navbar/>
    <room/>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

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
  import axios from 'axios'
  import navbar from './Navbar'
  import room from './Room'
  export default {
    components: {
      navbar,
      room
    },
    methods: {
      login: function () {
        FB.login((response) => {
          localStorage.setItem('fb_token', response.authResponse.accessToken)
          // this.$router.push('/room')
          this.getUserId(response.authResponse.accessToken)
        }, {
          scope: 'public_profile, email, user_about_me'
        })
      },
      getUserId: function (token) {
        console.log('helooo', token)
        let AccessToken = token
        axios.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&access_token=' + AccessToken)
        // axios.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&AccessToken=' + token)
        .then(({data}) => {
          console.log('response', data)
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
        .catch(err => {
          console.log(err)
        })
      }
      // getUserId: function (response) {
      //   let AccessToken = response.authResponse.accessToken
      //   axios.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&AccessToken=' + AccessToken)
      //     .then(({data}) => {
      //       let obj = {
      //         id: data.id,
      //         name: data.name,
      //         email: data.email,
      //         picture: data.picture.data.url,
      //         cover: data.cover.source
      //       }
      //       localStorage.setItem('dataUser', JSON.stringify(obj))
      //       this.$router.push('/room')
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })
      //   }
        //   localStorage.setItem('fb_token', response.authResponse.accessToken)
        //   console.log(response)
        // }, {
        //   scope: 'public_profile, email, user_about_me'
        // })
        // console.log('MASUK LOGIN')
        // fbLogin(response => {
        //   console.log('MASUK FBLOGIN')
        //   let AccessToken = response.authResponse.accessToken
        //   this.$http.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&AccessToken=' + AccessToken)
        //     .then(({
        //       data
        //     }) => {
        //       let obj = {
        //         id: data.id,
        //         name: data.name,
        //         email: data.email,
        //         picture: data.picture.data.url,
        //         cover: data.cover.source
        //       }
        //       localStorage.setItem('dataUser', JSON.stringify(obj))
        //       this.$router.push('/room')
        //     })
        //     .catch(err => {
        //       console.log(err)
        //     })
        // })
    },
    beforeCreate: function () {
      if (localStorage.getItem('fb_token')) {
        this.$router.push('/room')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal
  }
  
  ul {
    list-style-type: none;
    padding: 0
  }
  
  li {
    display: inline-block;
    margin: 0 10px
  }
  
  a {
    color: #42b983
  }
</style>

<template>
  <div class="hello">
    <div class="wrapper">
        <div class="register-background">
            <div class="filter-black"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 ">
                            <div class="register-card">
                                <h3 class="title">
                                  <img src="http://howtowinrps.weebly.com/uploads/3/7/6/8/37685723/1393407_orig.png" alt="Icon">
                                </h3>
                                <div class="register-form">
                                    <button id="login" @click="login" class="btn btn-info btn-fill btn-block">
                                      <i class="fa fa-facebook-square"></i>
                                      Login with Facebook
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import navbar from './Navbar'
  import room from './Room2'
  export default {
    data () {
      return {
        score: 0,
        status: false
      }
    },
    components: {
      navbar,
      room
    },
    methods: {
      login: function () {
        FB.login((response) => {
          localStorage.setItem('fb_token', response.authResponse.accessToken)
          this.getUserId(response.authResponse.accessToken)
        }, {
          scope: 'public_profile, email, user_about_me'
        })
      },
      getUserId: function (token) {
        console.log('helooo', token)
        let AccessToken = token
        axios.get('https://graph.facebook.com/me?fields=email,id,name,picture.width(800).height(800),cover&access_token=' + AccessToken)
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
      // getRoom: function () {
      //   this.$db.ref(`/JAPAN`).on('value', function (snapshot) {
      //     console.log('INI SNAPSHOT', snapshot.val())
      //   })
      // }
    },
    beforeCreate: function () {
      if (localStorage.getItem('fb_token')) {
        this.$router.push('/room')
      }
    }
  }
</script>

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
  .register-background {
  background-image: url("http://p1.pichost.me/i/17/1396710.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.register-background .filter-black::after {
  background-color: rgba(0, 0, 0, 0.5);
  content: "";
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.register-background .container {
  margin-top: 11%;
  position: relative;
  z-index: 3;
}
img {
    max-width: 300px;
    display: block;
    margin: 0 auto;
    border-radius: 30px;
    opacity: 0.9;
    background-color: #68B3C8;
  }
.navbar .navbar-nav > li > a.btn-info.btn-fill, .btn-info.btn-fill {
    color: #000;
    opacity: 1;
    filter: alpha(opacity=100);
}
.navbar .navbar-nav > li > a.btn-info.btn-fill, .btn-info.btn-fill {
    color: #000;
    /* background-color: #68B3C8; */
    opacity: 1;
    filter: alpha(opacity=100);
}
.btn.btn-fill, .navbar .navbar-nav > li > a.btn.btn-fill {
    color: #FFFFFF;
    background-color: #000;
    opacity: 1;
    filter: alpha(opacity=100);
}
</style>

function statusChangeCallback(response) {
  console.log('statusChangeCallback')
  console.log(response)
  if (response.status === 'connected') {
    console.log('connected')
  } else {
    console.log('belum login')
  }
}

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  })
}

window.fbAsyncInit = function () {
  FB.init({
<<<<<<< HEAD
    appId      : '148416162550087',
    cookie     : true,  // enable cookies to allow the server to access
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11' // use graph api version 2.8
  });
  FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
};
=======
    appId: '148416162550087',
    cookie: true, // enable cookies to allow the server to access 
    // the session
    xfbml: true, // parse social plugins on this page
    version: 'v2.8' // use graph api version 2.8
  })
  window.FB = FB
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response)
  })
}
>>>>>>> 691d3b726ae7898bd9ad569bd5a4ab9636f99059

// Load the SDK asynchronously
(function init(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = "https://connect.facebook.net/en_US/sdk.js"
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

function fbLogin(cb) {
  FB.login(function (response) {
    localStorage.setItem('fb_token', response.authResponse.accessToken)
    cb(response)
<<<<<<< HEAD
  }, {scope : 'public_profile, email, user_about_me'})
=======
  }, {
    scope: 'public_profile, email, user_about_me'
  })
>>>>>>> 691d3b726ae7898bd9ad569bd5a4ab9636f99059

}

<template>
  <div>
    <!--Charts-->
    <div class='row'>
  
      <div class='col-md-6 col-xs-12'>
        <player-one @play1="getPlay1"/>
      </div>
  
      <div class='col-md-6 col-xs-12'>
        <player-two @play2="getPlay2"/>
      </div>
  
    </div>
    <div class='row'>
      <button @click='timing'>TIMER</button>
      <h3>{{ timer }}</h3>
      <h1>{{ Winner }}</h1>
    </div>
  
  </div>
</template>

<script>
  import PlayerOne from 'components/Players/PlayerOne.vue'
  import PlayerTwo from 'components/Players/PlayerTwo.vue'
  export default {
    components: {
      PlayerOne,
      PlayerTwo
    },
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        Winner: '',
        timer: 0,
        play2: '',
        play1: ''
      }
    },
    methods: {
      getPlay1 (data) {
        console.log(data)
        this.play1 = data.choose
      },
      getPlay2 (data) {
        console.log(data)
        this.play2 = data.choose
      },
      timing () {
        let timeleft = 5
        let downloadTimer = setInterval(() => {
          timeleft--
          if (timeleft <= -1) {
            clearInterval(downloadTimer)
          }
          this.checkTimeNow(timeleft)
        }, 1000)
      },
      checkTimeNow (timer) {
        console.log('----------check time', timer)
        this.timer = timer + 1
        if (timer <= -1) {
          this.gameStarted()
        }
      },
      gameStarted () {
        let choice1 = this.play1
        let choice2 = this.play2
        if (choice1 === '' && choice2 === '') {
          this.Winner = 'SERI'
        } else {
          if (choice1 === '') {
            this.Winner = 'Player 2 Win'
          } else
          if (choice2 === '') {
            this.Winner = 'Player 1 Win'
          } else {
            if (choice1 === 'KERTAS') {
              if (choice2 === 'BATU') {
                this.Winner = 'Player 1 Win'
                console.log('Player 1 Win')
              } else {
                if (choice2 === 'GUNTING') {
                  this.Winner = 'Player 2 Win'
                  console.log('Player 2 Win')
                } else if (choice2 === '') {
                  this.Winner = 'Player 1 Win'
                } else {
                  this.Winner = 'SERI'
                  console.log('SERI')
                }
              }
            }
            if (choice1 === 'GUNTING') {
              if (choice2 === 'BATU') {
                this.Winner = 'Player 2 Win'
                console.log('Player 2 Win')
              } else {
                if (choice2 === 'KERTAS') {
                  this.Winner = 'Player 1 Win'
                  console.log('Player 1 Win')
                } else {
                  this.Winner = 'SERI'
                  console.log('sama')
                }
              }
            }
            if (choice1 === 'BATU') {
              if (choice2 === 'GUNTING') {
                this.Winner = 'Player 1 Win'
                console.log('Player 1 Win')
              } else {
                if (choice2 === 'KERTAS') {
                  this.Winner = 'Player 2 Win'
                  console.log('Player 2 Win')
                } else {
                  this.Winner = 'SERI'
                  console.log('sama')
                }
              }
            }
          }
        }
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
   img {
    max-width: 100px;
    display: block;
    margin: 0 auto;
    border-radius: 30px;
  }
</style>

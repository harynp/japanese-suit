<template>
  <div>
    <!--Charts-->
    <div class='row'>

      <div class='col-md-6 col-xs-12'>
        <player-one/>
      </div>

      <div class='col-md-6 col-xs-12'>
        <player-two/>
      </div>

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
        Winner: ''
      }
    },
    methods: {
      gameStarted () {
        let choice1 = this.playerone.choose
        let choice2 = this.playertwo.choose
        if (choice1 === 'KERTAS') {
          if (choice2 === 'BATU') {
            console.log('Player 1 Win')
          } else {
            if (choice2 === 'GUNTING') {
              console.log('Player 2 Win')
            } else {
              console.log('SERI CUK')
            }
          }
        }
        if (choice1 === 'GUNTING') {
          if (choice2 === 'BATU') {
            console.log('Player 2 Win')
          } else {
            if (choice2 === 'KERTAS') {
              console.log('Player 1 Win')
            } else {
              console.log('sama')
            }
          }
        }
        if (choice1 === 'BATU') {
          if (choice2 === 'GUNTING') {
            console.log('Player 1 Win')
          } else {
            if (choice2 === 'KERTAS') {
              console.log('Player 2 Win')
            } else {
              console.log('sama')
            }
          }
        }
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

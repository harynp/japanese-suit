<template>
  <div>
    <!--Charts-->
    <div class='row'>
  
      <div class='col-md-6 col-xs-12'>
        <div class="card"> 
          <div class="content">
              <div class="ct-chart">
                <div class="logo-img">
                  <a @click="rock2"><img :style="ilang2.batu2" src="../assets/rock.png" alt="" /></a>
                  <a @click="paper2"><img :style="ilang2.kertas2" src="../assets/paper.png" alt="" /></a>
                  <a @click="scissors2"><img :style="ilang2.gunting2"src="../assets/scissors.png" alt="" /></a>
                </div>
              </div>
              <div class="footer">
              <div class="chart-legend">
                PILIHAN         
              </div>
              <hr>
              <div class="stats">
                <slot name="footer">PLAYER 2 NAME</slot>
              </div>
              <div class="pull-right">
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class='col-md-6 col-xs-12'>
        <div class="card">
          <div class="content">
              <div class="ct-chart">
                <div class="logo-img">
                  <a @click="rock"><img :style="ilang.batu" src="../assets/rock.png" alt="" /></a>
                  <a @click="paper"><img :style="ilang.kertas" src="../assets/paper.png" alt="" /></a>
                  <a @click="scissors"><img :style="ilang.gunting"src="../assets/scissors.png" alt="" /></a>
                </div>
              </div>
              <div class="footer">
              <div class="chart-legend">
                PILIHAN         
              </div>
              <hr>
              <div class="stats">
                <slot name="footer">PLAYER 1 NAME</slot>
              </div>
              <div class="pull-right">
              </div>
            </div>
          </div>
        </div>
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
        playerone: {
          choose: ''
        },
        playertwo: {
          choose: ''
        },
        ilang: {
          kertas: {
            display: 'hidden'
          },
          gunting: {
            display: 'hidden'
          },
          batu: {
            display: 'hidden'
          }
        },
        ilang2: {
          kertas2: {
            display: 'hidden'
          },
          gunting2: {
            display: 'hidden'
          },
          batu2: {
            display: 'hidden'
          }
        },
        Winner: ''
      }
    },
    methods: {
      rock () {
        console.log('BATU')
        this.playerone.choose = 'BATU'
        this.ilang.kertas = {
          display: 'none'
        }
        this.ilang.gunting = {
          display: 'none'
        }
      },
      paper () {
        console.log('KERTAS')
        this.playerone.choose = 'KERTAS'
        this.ilang.batu = {
          display: 'none'
        }
        this.ilang.gunting = {
          display: 'none'
        }
      },
      scissors () {
        console.log('GUNTING')
        this.playerone.choose = 'GUNTING'
        this.ilang.kertas = {
          display: 'none'
        }
        this.ilang.batu = {
          display: 'none'
        }
      },
      rock2 () {
        console.log('BATU')
        this.playertwo.choose = 'BATU'
        this.ilang2.kertas2 = {
          display: 'none'
        }
        this.ilang2.gunting2 = {
          display: 'none'
        }
      },
      paper2 () {
        console.log('KERTAS')
        this.playertwo.choose = 'KERTAS'
        this.ilang2.batu2 = {
          display: 'none'
        }
        this.ilang2.gunting2 = {
          display: 'none'
        }
      },
      scissors2 () {
        console.log('GUNTING')
        this.playertwo.choose = 'GUNTING'
        this.ilang2.kertas2 = {
          display: 'none'
        }
        this.ilang2.batu2 = {
          display: 'none'
        }
      },
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

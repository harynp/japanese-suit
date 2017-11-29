<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h1>Player 1</h1>
        <a @click="rock"><img :style="ilang.batu" src="../assets/rock.png" alt="" style="width:200px"/></a>
        <a @click="paper"><img :style="ilang.kertas" src="../assets/paper.png" alt="" style="width:200px"/></a>
        <a @click="scissors"><img :style="ilang.gunting"src="../assets/scissors.png" alt="" style="width:200px"/></a>
      </div>
      <div class="col-md-6">
        <h1>Player 2</h1>
        <a @click="rock2"><img :style="ilang2.batu2" src="../assets/rock.png" alt="" style="width:200px"/></a>
        <a @click="paper2"><img :style="ilang2.kertas2" src="../assets/paper.png" alt="" style="width:200px"/></a>
        <a @click="scissors2"><img :style="ilang2.gunting2"src="../assets/scissors.png" alt="" style="width:200px"/></a>
      </div>
      <button @click="gameStarted">HITUNG MULAI CUK</button>
      {{ playerone.choose }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerone: {
        choose: ''
      },
      playertwo: {
        choose: ''
      }, 
      ilang : {
        kertas: {
           display: 'hidden'
        },
        gunting: {
           display: 'hidden'
        },
        batu:{
          display: 'hidden'
        }
      },
      ilang2 : {
        kertas2: {
           display: 'hidden'
        },
        gunting2: {
           display: 'hidden'
        },
        batu2:{
          display: 'hidden'
        }
      },
      Winner: ''
    }
  },
  methods: {
    rock () {
      console.log('BATU');
      this.playerone.choose = 'BATU'
      this.ilang.kertas = {display: 'none'}
      this.ilang.gunting = {display: 'none'}
    },
    paper () {
      console.log('KERTAS');
      this.playerone.choose = 'KERTAS'
      this.ilang.batu = {display: 'none'}
      this.ilang.gunting = {display: 'none'}
    },
    scissors () {
      console.log('GUNTING');
      this.playerone.choose = 'GUNTING'
      this.ilang.kertas = {display: 'none'}
      this.ilang.batu = {display: 'none'}
    },
    rock2 () {
      console.log('BATU');
      this.playertwo.choose = 'BATU'
      this.ilang2.kertas2 = {display: 'none'}
      this.ilang2.gunting2 = {display: 'none'}
    },
    paper2 () {
      console.log('KERTAS');
      this.playertwo.choose = 'KERTAS'
      this.ilang2.batu2 = {display: 'none'}
      this.ilang2.gunting2 = {display: 'none'}
    },
    scissors2 () {
      console.log('GUNTING');
      this.playertwo.choose = 'GUNTING'
      this.ilang2.kertas2 = {display: 'none'}
      this.ilang2.batu2 = {display: 'none'}
    },
    gameStarted () {
      let choice1 = this.playerone.choose
      let choice2 = this.playertwo.choose
      if (choice1 === "KERTAS") {
          if (choice2 === "BATU") {
              console.log("Player 1 Win");
          } else {
              if (choice2 === "GUNTING") {
                  console.log("Player 2 Win");
              } else {
                console.log("SERI CUK");
              }
          }
      }
      if (choice1 === "GUNTING") {
          if (choice2 === "BATU") {
              console.log("Player 2 Win");
          } else {
              if (choice2 === "KERTAS") {
                  console.log("Player 1 Win");
              } else {
                console.log("sama");
              }
          }
      }
      if (choice1 === "BATU") {
          if (choice2 === "GUNTING") {
              console.log("Player 1 Win");
          } else {
              if (choice2 === "KERTAS") {
                  console.log("Player 2 Win");
              } else {
                console.log("sama");
              }
          }
      }
    }
  }
}
</script>

<style>

</style>

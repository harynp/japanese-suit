<template>
  <div class="card">
    <div class="content">
        <div class="ct-chart">
          <div class="logo-img">
            <a @click="rock"><img :style="ilang.batu" src="../../assets/rock.png" alt="" style="width:200px"/></a>
            <a @click="paper"><img :style="ilang.kertas" src="../../assets/paper.png" alt="" style="width:200px"/></a>
            <a @click="scissors"><img :style="ilang.gunting"src="../../assets/scissors.png" alt="" style="width:200px"/></a>
          </div>
        </div>
        <div class="footer">
        <div class="chart-legend">
           <h3 class="title">{{ playerone.choose }}   </h3>
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
</template>
<script>
  export default {
    props: [],

    name: 'player-one',
    data () {
      return {
        playerone: {
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
        }
      }
    },
    methods: {
      rock () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('BATU')
        this.playerone.choose = 'BATU'
        this.ilang.kertas = {
          display: 'none'
        }
        this.ilang.gunting = {
          display: 'none'
        }
        this.$db.ref(`/JAPAN/` + room + '/' + id).child('choose').set(this.playerone.choose)
      },
      paper () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('KERTAS')
        this.playerone.choose = 'KERTAS'
        this.ilang.batu = {
          display: 'none'
        }
        this.ilang.gunting = {
          display: 'none'
        }
        this.$db.ref(`/JAPAN/` + room + '/' + id).child('choose').set(this.playerone.choose)
      },
      scissors () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('GUNTING')
        this.playerone.choose = 'GUNTING'
        this.ilang.kertas = {
          display: 'none'
        }
        this.ilang.batu = {
          display: 'none'
        }
        this.$db.ref(`/JAPAN/` + room + '/' + id).child('choose').set(this.playerone.choose)
      }
    }
  }
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Macondo+Swash+Caps');
.title {
  font-family: 'Macondo Swash Caps', cursive;
}
img {
  max-width: 100px;
  display: block;
  margin: 0 auto;
  border-radius: 30px;
  transition: 1s;
}
img:hover {
  transform: scale(1.5) rotateZ(-6deg);
  -moz-transform: scale(1.5) rotateZ(-5deg);
  -webkit-transform: scale(1.5) rotateZ(-5deg);
  -o-transform: scale(1.5) rotateZ(-5deg);
  transition: 1s;
}
</style>

<template>
  <div class="card">
    <div class="content">
        <div class="ct-chart">
          <div class="logo-img">
            <a @click="rock2"><img :style="ilang2.batu2" src="../../assets/rock.png" alt="" style="width:200px"/></a>
            <a @click="paper2"><img :style="ilang2.kertas2" src="../../assets/paper.png" alt="" style="width:200px"/></a>
            <a @click="scissors2"><img :style="ilang2.gunting2"src="../../assets/scissors.png" alt="" style="width:200px"/></a>
          </div>
        </div>
        <div class="footer">
        <div class="chart-legend">
           <h3 class="title">{{ playertwo.choose}} </h3>
        </div>
        <hr>
        <div class="stats">
          <slot name="footer">PLAYER</slot>
        </div>
        <div class="pull-right">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'player-two',
    data () {
      return {
        playertwo: {
          choose: ''
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
        }
      }
    },
    methods: {
      rock2 () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('BATU')
        this.playertwo.choose = 'BATU'
        this.$emit('play2', {
          choose: 'BATU'
        })
        this.ilang2.batu2 = {
          width: '50%'
        }
        this.ilang2.kertas2 = {
          display: 'none'
        }
        this.ilang2.gunting2 = {
          display: 'none'
        }
        this.$db.ref(`/JAPAN/` + room + '/' + id).child('choose').set(this.playerone.choose)
      },
      paper2 () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('KERTAS')
        this.playertwo.choose = 'KERTAS'
        this.$emit('play2', {
          choose: 'KERTAS'
        })
        this.ilang2.batu2 = {
          display: 'none'
        }
        this.ilang2.gunting2 = {
          display: 'none'
        }
        this.$db.ref(`/JAPAN/` + room + '/' + id).child('choose').set(this.playerone.choose)
      },
      scissors2 () {
        let id = JSON.parse(localStorage.getItem('dataUser')).id
        let room = localStorage.getItem('room')
        console.log('GUNTING')
        this.playertwo.choose = 'GUNTING'
        this.$emit('play2', {
          choose: 'GUNTING'
        })
        this.ilang2.kertas2 = {
          display: 'none'
        }
        this.ilang2.batu2 = {
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

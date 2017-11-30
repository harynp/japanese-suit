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
</template>
<script>
  export default {
    name: 'player-two'
  }

</script>
<style scoped>
  .logo-img{
          border-radius: 40px;
  }
   img {
            max-width: 100px;
            display: block!important;
            margin: 0 auto;
            border-radius: 30px;
        }
</style>

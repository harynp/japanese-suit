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
</template>
<script>
  export default {
    name: 'player-one'
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

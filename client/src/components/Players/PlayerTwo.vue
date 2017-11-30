<template>
  <div class="card"> 
    <div class="content">
        <div class="ct-chart">
          <div class="logo-img">
            <img src="static/img/vue-logo.png" alt="">
            <img src="static/img/vue-logo.png" alt="">
            <img src="static/img/vue-logo.png" alt="">
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

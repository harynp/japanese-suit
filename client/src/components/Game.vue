<template>
  <div>
    <!--Charts-->
    <div class="row">

      <div class="col-md-6 col-xs-12">
        <player-one >
          
        </player-one>
      </div>

      <div class="col-md-6 col-xs-12">
        <player-two >
          
        </player-two>
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
      }
    }
  }

</script>
<style>

</style>

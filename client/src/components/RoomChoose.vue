<template lang="html">
  <form class="" action="index.html" method="post">
    <input v-model="room" type="text" name="" value="" placeholder="input room">
    <button @click="goRoom" type="button" name="button">Go Room</button>
  </form>
</template>

<script>
export default {
  data: function () {
    return {
      room: ''
    }
  },
  methods: {
    goRoom: function () {
      this.$router.push('/room/' + this.room)
    }
  }
}
</script>

<style lang="css">
</style>

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
      room: '',
      score: 0,
      status: false
    }
  },
  methods: {
    goRoom: function () {
      let id = JSON.parse(localStorage.getItem('dataUser')).id
      let name = JSON.parse(localStorage.getItem('dataUser')).name
      let ruang = this.room
      this.$db.ref(`/JAPAN/` + ruang + '/' + id).set({
        name: name,
        score: this.score,
        status: this.status
      })
      this.$router.push('/room/' + this.room)
    },
    created () {
      this.checkRoom()
    }
  }
}
</script>

<style lang="css">
</style>

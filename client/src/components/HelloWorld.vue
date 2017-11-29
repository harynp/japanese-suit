<template>
  <div class="test">
    <h1>TEST</h1>
  </ul>
  </div>
</template>

<script>
import store from 'vuex'
export default {
  name: 'test',
  data () {
    return {
      name: 'HARY',
      score: 0,
      status: false
    }
  },
  methods: {
    getRoom: function () {

    },
    addRoom: function () {
      this.$db.ref('/room').push({
        player: this.name,
        score: this.score,
        status: this.status
      })
    },
    removeRoom: function (playerId) {
      this.$db.ref('/room').child(playerId['.key']).remove()
    }
  },
  created () {
    this.addRoom()
    // this.removeRoom()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

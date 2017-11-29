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
      room: 'TES',
      name: 'HARY',
      score: 0,
      status: false
    }
  },
  methods: {
    addRoom: function () {
      this.$db.ref(`${this.room}/player`).push({
        name: this.name,
        score: this.score,
        status: this.status
      })
    }
  },
  created () {
    this.addRoom()
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

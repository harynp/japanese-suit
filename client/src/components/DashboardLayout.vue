<template>
  <div class="wrapper">
    <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar">
      </dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
 
</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    },
    created () {
      if (!localStorage.getItem('fb_token') && !localStorage.getItem('dataUser')) {
        console.log('--------------')
        alert('Please Login')
        this.$router.push('/')
      } else {
        let dataUser = JSON.parse(localStorage.getItem('dataUser'))
        this.id = dataUser.id
        this.name = dataUser.name
        this.picture = dataUser.picture
        this.cover = dataUser.cover
      }
    }
  }

</script>

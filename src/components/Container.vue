<template>
  <div>
    <Sidebar></Sidebar>
    <div class="center">
      <Navbar></Navbar>
      <div class="main-container">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import Navbar from './Navbar.vue'

  export default {
    name: 'app',
    components: {
      Sidebar,
      Navbar
    }
  }
</script>

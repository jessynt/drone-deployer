<template>
  <div class="sidebar">
    <div class="feed">
      <div class="brand">Deployer</div>
      <div class="list">
        <router-link :to="{name: 'home'}">
          <div class="item">
            root/example
          </div>
        </router-link>
        <router-link :to="{name: 'home'}">
          <div class="item">
            root/example
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sidebar',
  }
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    width: 300px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-right: 1px solid #cfd6db;
    box-sizing: border-box;
    .feed {
      .brand {
        height: 60px;
        padding: 0px 20px;
        box-sizing: border-box;
        border-bottom: 1px solid #eceff1;
        display: flex;
        align-items: center;
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        position: relative;
      }
      .list {
        a {
          display: block;
          border-top: 1px solid #eceff1;
          color: #212121;
          &:first-of-type {
            border-top-width: 0;
          }
          .item {
            display: flex;
            flex-direction: column;
            padding: 20px;
            text-decoration: none;
          }
        }
      }
    }
  }
</style>

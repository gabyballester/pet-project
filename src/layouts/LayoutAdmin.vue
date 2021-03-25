<template>
  <div>
    <!-- <h2>Menu Sider Admin</h2> -->
    <div class="layout-admin">
      <header class="layout-admin__header">
        <MenuTop/>
      </header>
      <div class="layout-admin__content">
      <router-view></router-view>
      </div>
      <Footer class="layout-admin__footer">Pets Project - Gabriel Ballester Morant</Footer>
    </div>
  </div>
</template>

<script>
import MenuTop from '../components/Admin/MenuTop'

export default {
  components: {
    MenuTop
  },
};
</script>

<style lang="scss" scoped>

.layout-admin{
  transition: margin-left 0.2s;

  &__header {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   display: flex;
   padding: 0;
   height: 65px;
  }

  &__content {
    min-height: calc(100vh - 85px);
    padding: 90px 25px 25px 25px
  }

  &__footer{
    padding: 20px;
  }
}

</style>
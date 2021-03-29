<template>
  <div v-if="!user">
    <AdminSignIn />
  </div>
  <div v-if="user" class="global-container">
    <div class="topmenu">
      <MenuTop />
    </div>
    <div class="main-container">
      <div class="side-menu">
        <MenuSider />
      </div>
      <div class="body-content">
        <div class="content">
          <router-view></router-view>
        </div>
        <div class="footer">
          <p>Footer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuTop from "../components/Admin/MenuTop";
import MenuSider from "../components/Admin/MenuSider";
import AdminSignIn from "../pages/Admin/SignIn/index";

export default {
  components: {
    MenuTop,
    MenuSider,
    AdminSignIn,
  },
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.userCheck();
  },
  methods: {
    userCheck() {
      if (!this.user) this.$router.push("/admin/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";

.global-container {
  .topmenu {
    display: flex;
    flex-wrap: wrap;
    height: 4rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
  .main-container {
    padding-top: 4rem;
    display: flex;
    flex-direction: row;

    .side-menu {
      display: flex;
      width: 15rem;
      position: fixed;
      height: 100vh;
      top: 4rem;
      left: 0;
    }
    .body-content {
      display: flex;
      flex-direction: column;
      width: 100vw;
      margin-left: 15rem;
      .content {
        padding: 1rem;
        width: 100%;
        min-height: calc(100vh - 114px);
      }
      .footer {
        padding: 1rem;
        height: 50px;
        position: sticky;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: calc(100vw - 15rem);
        background: $background-grey-dark2;
      }
    }
  }
}
</style>

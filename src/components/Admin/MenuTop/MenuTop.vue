<template>
  <div class="menu-top">
    <div class="left">
      <h1 class="logo">Logo</h1>
    </div>
    <div class="right">
      <button @click="logoutUser">
        <icon class="icon" icon="power-off" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {logout} from '../../../services/auth.service';

export default {
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
  },
  methods: {
    logoutUser() {
      logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index.scss";

// light mode
.menu-top {
  background: $background-light;
  width: 100%;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease-in-out;

  .left {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    color: $font-dark;
    border: 0;
    outline: none;
    &:hover {
      color: $primary-color;
    }
  }
}

// dark mode
.dark .menu-top {
  background-color: $font-dark;
  transition: background 0.3s ease-in-out;
  button {
    color: white;
    &:hover {
      color: $primary-color;
    }
  }
}
</style>

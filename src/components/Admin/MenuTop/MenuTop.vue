<template>
  <div class="menu-top">
    <div class="left">
      <h1 class="logo">Logo</h1>
      <button @click="menuAction">
        <!-- <icon class="icon" icon="arrow-right" /> -->
        <icon class="icon" icon="arrow-left" />
      </button>
    </div>
    <div class="right">
      <button @click="logout">
        <icon class="icon" icon="power-off" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
  },
  methods: {
    menuAction() {
      console.log("botón menú");
    },
    logout() {
      console.log("botón menú");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/index.scss";

// light mode
.menu-top {
  background: $menu-top-background-color;
  width: 100%;
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease-in-out;

  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      margin-left: 2rem;
    }
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

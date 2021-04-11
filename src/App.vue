<template>
  <div class="app" :class="{ dark: isDark }">
    <!-- <base-header /> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./utils/constants";
import "./assets/scss/index.scss";

export default {
  name: "app",
  components: {
    // BaseHeader,
  },
  created() {
    this.checkTokensOnLocalStorage();
    this.checkModeOnCreated();
  },
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
    ...mapGetters("authModule", ["getBothTokens"]),
    hasMode() {
      return JSON.parse(localStorage.getItem("darkMode"));
    },
  },
  methods: {
    ...mapActions("darkModeModule", ["setMode", "resetMode"]),
    ...mapActions("authModule", ["setTokensOnLocalStorage", "setTokensOnVuex"]),
    checkModeOnCreated() {
      if (this.hasMode === null) {
        this.resetMode();
      } else {
        this.setMode(this.hasMode);
      }
    },
    checkTokensOnLocalStorage() {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (accessToken && refreshToken) {
        const payload = { accessToken, refreshToken };
        this.setTokensOnVuex(payload);
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  width: 100vw;
  min-height: 100vh;
  background: #f3f3f3;
  transition: background 0.3s ease-in-out;
}

.dark {
  background-color: #192734;
  color: #f3f3f3;
}
</style>

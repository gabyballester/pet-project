<template>
  <div class="app" :class="{ dark: isDark }">
    <base-header />
  </div>
</template>

<script>
import BaseHeader from "@/components/Header";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    BaseHeader,
  },
  created() {
    if (this.hasMode === null) {
      this.setMode;
    } else {
      this.resetMode;
    }
  },
  computed: {
    ...mapGetters('darkModeModule', ["isDark"]),
    hasMode() {
      return JSON.parse(localStorage.getItem("darkMode"));
    },
  },
  methods: {
    ...mapActions('darkModeModule', ["setMode", "resetMode"]),
  },
};
</script>

<style>
* {
  margin: 0;
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

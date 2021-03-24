<template>
  <div class="app" :class="{ dark: isDark }">
    <base-header />
    <h1>Esto es App.vue</h1>
    <Admin/>
    <SignIn/>
    <Home/>
    <Contact/>
  </div>
</template>

<script>
import BaseHeader from "@/components/Header";
import { mapGetters, mapActions } from "vuex";
import Admin from './pages/Admin'
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contact from './pages/Contact';

export default {
  name: "app",
  components: {
    BaseHeader,
    Admin,
    SignIn,
    Home,
    Contact
  },
  created() {
    if (this.hasMode === null) {
      this.resetMode();
    } else {
      this.setMode(this.hasMode);
    }
  },
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
    hasMode() {
      return JSON.parse(localStorage.getItem("darkMode"));
    },
  },
  methods: {
    ...mapActions("darkModeModule", ["setMode", "resetMode"]),
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

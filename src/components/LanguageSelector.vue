<template>
  <div class="select-div" :class="{ dark: isDark }">
    <select>
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("darkModeModule", ["isDark"]),
    showMode() {
      return this.isDark;
    },
  },

};
</script>

<style lang="scss" scoped>
select {
  color: black;
  background: #ebebeb;
  transition: background 0.3s ease-in-out;
}

.dark select {
  color: white;
  background: #15202b;
  transition: background 0.3s ease-in-out;
}
</style>

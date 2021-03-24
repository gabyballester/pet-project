<template>
  <div class="select-div" :class="{ dark: isDark }">
    <select v-model="defaultLang" @change="changeLanguage">
      <option value="">Select</option>
      <option
        v-for="language in languages"
        :key="language.locale"
        :value="language.locale"
      >
        {{ language.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LanguageSelector",
  data: () => ({
    languages: [
      { locale: "es", title: "Español" },
      { locale: "en", title: "English" },
    ],
    defaultLang: "",
  }),
  created() {
    this.getLangFromLocalStorage();
  },
  methods: {
    changeLanguage() {
      this.$i18n.locale = this.defaultLang;
      localStorage.setItem("lang", this.defaultLang);
    },
    getLangFromLocalStorage() {
      const localStorageLang = localStorage.getItem("lang");
      if (localStorageLang === null) {
        const navLang = navigator.language || navigator.userLanguage;
        if (navLang !== null) {
          console.log("entra aqui");
          this.defaultLang = navLang.substring(0, 2);
          localStorage.setItem("lang", this.defaultLang);
          this.changeLanguage(this.defaultLang);
        } else {
          localStorage.setItem("lang", this.$i18n.locale);
        }
      } else {
        this.$i18n.locale = localStorageLang;
      }
    },
  },
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
  outline: none;
}

.dark select {
  color: white;
  background: #15202b;
  transition: background 0.3s ease-in-out;
}
</style>

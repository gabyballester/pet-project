<template>
  <div>
    <main>
      <Header />
      <router-view></router-view>
      <Footer/>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Footer
  },
};
</script>
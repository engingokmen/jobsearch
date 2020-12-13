<template>
  <div class="wrapper">
    <Header />
    <Nav />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/HeaderComponent.vue'


</script>

<template>


  <nav>
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/questions">Questions</RouterLink> -->
  </nav>
  <div class="wrapper">
    <Header class="header"></Header>
    <RouterView />
  </div>



</template>

<style scoped>
.header {
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
}
</style>

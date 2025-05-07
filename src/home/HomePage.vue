<script setup>

</script>

<template>
  <div class="home">
    <div class="img">
      <img class="robot" src="../assets/robot-home.png" alt="">
    </div>
    <div class="src">
      <router-link to="/build">Start</router-link> build a robot
    </div>
  </div>
</template>

<style scoped>
.home{
  text-align: center;
}
.robot{
  height: 500px;
}
</style>

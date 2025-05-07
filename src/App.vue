<script setup>

</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <img class="logo" src="./assets/build-a-bot-logo.png" alt="">
        </li>
        <li class="nav-item">

          <router-link class="nav-link" to="/">Main</router-link>
         
        </li>
        <li class="nav-item">
<router-link class="nav-link" to="/build">Build</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<style scoped>
body{
  padding-left: 40px;
  background-color: rgb(100, 100, 100);
  background-attachment: fixed;

}
#app{
  font-family: Arial, Helvetica, sans-serif;
}
main{
  margin: 0 auto;
  margin-top: 50px;
  padding: 30px;
  width: 1024px;
  min-height: 300px;
}
header{
  position: absolute;
  background-color: #3b3b3bc4;
  width: 1024px;
  margin: 0 auto;
}
ul{
  padding: 3px;
  display: flex;
  
}
.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  border-right:1px solid --green;
}
.logo{
  vertical-align: auto;
  height: 30px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
  padding: 3px;
  border: 1px solid ;
}
.router-link-active{
  color: rgb(147, 89, 255);
}
</style>

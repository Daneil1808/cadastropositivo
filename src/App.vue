<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pecuarista">Pecuarista</router-link> |
      <router-link to="/frigorifico">Frigorífico</router-link> |
      <router-link to="/administrador">Administrador</router-link>
    </div> 
    <navbar/>
    <router-view/>
  </div>
</template>
<script>

export default {
}
</script>

<style>
</style>
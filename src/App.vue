<template>
  <div id="app">
    <h2>Lista de campeones</h2>
    
    <Lista></Lista>
<hr>
<h4>Agregar un nuevo campeón</h4>
<br>
    <Formulario></Formulario>
  </div>
</template>
<script>
import Lista from "./components/Lista.vue";
import Formulario from "./components/Formulario";

export default {
  name: "App",
  components: {
    Lista,
    Formulario,
  }
};
</script>

<style lang="scss">
#app {
  width: 90vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bolder;

}
body {
  background-color: rgb(240, 240, 240);
  display: flex;
  justify-content: space-around;
}
</style>

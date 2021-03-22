<template>
<div>
    <b-form class= "mb-5">
      <b-form-group 
      id="input-group-1" 
      label="Nombre:" 
      label-for="input-1"
      label-cols-sm="2">
      
        <b-form-input
          id="input-1"
          v-model="producto.nombre"
          type="text"
          nombre="nombre"
          placeholder="Ingrese nombre del campeón"
          required>
        </b-form-input>
      </b-form-group>
     
      <b-form-group 
      id="input-group-2" 
      label="Categoría:" 
      label-for="input-2"
      label-cols-sm="2">
        <b-form-input
          id="input-2"
          v-model="producto.categoria"
          categoria= "categoria"
          placeholder="Ingrese la categoría del campéon"
          required>
        </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Tipo de daño:"
        label-for="input-1"
        label-cols-sm="2">
        <b-form-input
          id="input-3"
          v-model="producto.daño"
          daño="daño"
          type="text"
          placeholder="Ingrese el daño del campeón:"
          required>
        </b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-4"
        label="Skins:"
        label-for="input-1"
        label-cols-sm="2">
        <b-form-input
          id="input-4"
          v-model="producto.skin"
          skin="skin"
          type="number"
          placeholder="Ingrese la cantidad de skins disponibles:"
          required>
        </b-form-input>
      </b-form-group>

      <b-button 
      @click.prevent="agregarProducto()" 
      size="md"
      variant="success"
      class="px-3"
      >Agregar</b-button>
    </b-form>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "Formulario",
  data() {
      return {
        producto: {
          nombre: '',
          categoria: '',
          stock: null,
          peso: '',
        },
        show: true
      }
    },
    methods: {

      ...mapMutations(["ADD_PRODUCT"]),

      agregarProducto(){
      this.ADD_PRODUCT(this.producto);
    },
    }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

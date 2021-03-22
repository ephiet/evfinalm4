import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
        productos: [
          {nombre: "Ahri", categoria: "Asesino", skins: "9", daño: "AP", id: 20101},
          {nombre: "Qiyana", categoria: "Asesino", skins: "3", daño: "AD", id: 20102},
          {nombre: "Zed", categoria: "Asesino", skins: "7", daño: "AD", id: 20103},
          {nombre: "Fizz", categoria: "Asesino", skins: "10", daño: "AP", id: 20104},
          {nombre: "LeBlanc", categoria: "Asesino", skins: "12", daño: "AP", id: 20105},
          {nombre: "Pyke", categoria: "Asesino", skins: "4", daño: "AD", id: 20106},
          {nombre: "Illaoi", categoria: "Peleador", skins: "3", daño: "AD", id: 20107},
          {nombre: "Riven", categoria: "Peleador", skins: "12", daño: "AD", id: 20108},
          {nombre: "Singed", categoria: "Peleador", skins: "10", daño: "AP", id: 20109},
          {nombre: "Sett", categoria: "Peleador", skins: "3", daño: "AD", id: 20110},
          {nombre: "Sejuani", categoria: "Peleador", skins: "9", daño: "AP", id: 20111},
          {nombre: "Wukong", categoria: "Peleador", skins: "7", daño: "AD", id: 20112},
          {nombre: "Azir", categoria: "Mago", skins: "5", daño: "AP", id: 20113},
          {nombre: "Lux", categoria: "Mago", skins: "13", daño: "AP", id: 20114},
          {nombre: "Lillia", categoria: "Mago", skins: "1", daño: "AP", id: 20115},
          {nombre: "Swain", categoria: "Mago", skins: "7", daño: "AP", id: 20116},
          {nombre: "Veigar", categoria: "Mago", skins: "11", daño: "AP", id: 20117},
          {nombre: "Sylas", categoria: "Mago", skins: "6", daño: "AP", id: 20118},
          {nombre: "Teemo", categoria: "Tirador", skins: "12", daño: "AP", id: 20119},
          {nombre: "Jinx", categoria: "Tirador", skins: "8", daño: "AD", id: 20120},
          {nombre: "Draven", categoria: "Tirador", skins: "9", daño: "AD", id: 20121},
          {nombre: "Samira", categoria: "Tirador", skins: "1", daño: "AD", id: 20122},
          {nombre: "Lucian", categoria: "Tirador", skins: "9", daño: "AD", id: 20123},
          {nombre: "Senna", categoria: "Tirador", skins: "3", daño: "AD", id: 20124},
          {nombre: "Alistar", categoria: "Soporte", skins: "14", daño: "AP", id: 20125},
          {nombre: "Janna", categoria: "Soporte", skins: "11", daño: "AP", id: 20126},
          {nombre: "Seraphine", categoria: "Soporte", skins: "3", daño: "AP", id: 20127},
          {nombre: "Braum", categoria: "Soporte", skins: "6", daño: "AP", id: 20128},
          {nombre: "Leona", categoria: "Soporte", skins: "11", daño: "AP", id: 20129},
          {nombre: "Bardo", categoria: "Soporte", skins: "4", daño: "AP", id: 20130},
          {nombre: "Lulu", categoria: "Soporte", skins: "12", daño: "AP", id: 20131}
        ],
    idbase: 20132,
    index: "0",
  },
  mutations: {
    ADD_PRODUCT(state, producto) {
      state.productos.push({...producto, id: state.idbase++})
    },
    DELETE_PRODUCT(state,producto,index) {
      index = state.productos.findIndex(indice => indice.id === producto)
      state.productos.splice(index,1)
    },

    EDIT_PRODUCT(state, producto) {
      let index = state.productos.findIndex(indice => indice.id === producto.id);
      state.productos.splice(index, 1, producto)
    },
      
      
  },
  actions: {},
  modules: {},
});

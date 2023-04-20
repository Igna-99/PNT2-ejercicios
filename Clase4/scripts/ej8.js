
const app = Vue.createApp({
  data() {
    return {
      clickTotales: 0,
      personajesRAM: {}
    }
  },
  methods: {

    async getdata()
    {
      const resultado = await fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5');                
      this.personajesRAM = await resultado.json();
    },

    click(){
      this.clickTotales = this.clickTotales + 1;
    }

  },
  created: function () {
    this.getdata();
  }
});






app.component('personaje', {
  data(){
      return {
        clicksEnComponente: 0
      }
  },
  template: `<div class="card" style="width: 18rem;">
  <img class="card-img-top" v-bind:src="image" @click="sumarClick"> 
  <div class="card-body">
    <h5 class="card-title">{{this.name}}</h5>
    <p class="card-text">Status: {{this.status}}</p>
    <p class="card-text">Species: {{this.species}}</p>
    <p class="card-text">clicks: {{this.clicksEnComponente}}</p>
  </div>
</div>`,
  props:['name','image','status','species'],
  methods:{
    sumarClick(){
      this.clicksEnComponente = this.clicksEnComponente + 1;
      this.$emit('click-foto')
    }
  }
});
  


let appMontada = app.mount('#app');
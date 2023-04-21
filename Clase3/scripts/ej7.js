var app = new Vue({
  el: '#app',
  data: {
    test: "hola",
    criptomonedas: []
  },
  methods: {

    async fetchData () {
      let rawData = await fetch("https://api.coincap.io/v2/assets/")
      let rawCriptos = (await rawData.json()).data
  
      rawCriptos.forEach((element) => {
        let porcentaje24Hs = parseFloat(element.changePercent24Hr)
        if (porcentaje24Hs < 0){
          element.color = "negativo"
        }
        else if (porcentaje24Hs > 0){
          element.color = "positivo"
        }
        else{
          element.color = "neutro"
        }
         
      });
      
  
      this.criptomonedas = rawCriptos
    },

    OrdenarPorId() {
      this.criptomonedas.sort((a, b) => {
        return a.rank - b.rank
      })
    },

    OrdenarPorC24() {
      this.criptomonedas.sort((a, b) => {
        return b.changePercent24Hr - a.changePercent24Hr
      })
    },

    OrdenarPorPrecio() {
      this.criptomonedas.sort((a, b) => {
        return b.priceUsd - a.priceUsd
        
      })
    }



  },
  created: async function () {
    this.fetchData()
  }
})





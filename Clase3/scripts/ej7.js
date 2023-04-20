var app = new Vue({
  el: '#app',
  data: {
    test: "hola",
    criptomonedas: []
  },
  created: async function () {
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
  }
})


function OrdenarPorC24() {
  app.criptomonedas.sort((a, b) => {
    return b.changePercent24Hr - a.changePercent24Hr
  })
}

OrdenarPorC24()





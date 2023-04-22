const app = Vue.createApp({
    data() {
        return{
            enJuego: true,
            ronda : 1,
            jugadorA: {
                name: "Juan",
                stamina: 100,
                swap: true,
                estilo: ""
            },
            jugadorB: {
                name: "CPU",
                stamina: 100,
                swap: true,
                estilo: ""
            },
            jugando: {},
            noJugando: {}
        }
    },

    methods: {

        atacar(){
            if(this.enJuego){
                let num = this.generarNumeroRandom(10,50);
                this.noJugando.stamina -= num;
                alert(this.jugando.name + " a atacado a " + this.noJugando.name + " y le quita " + num);
                if(!this.hayGanador()){
                    this.cambiarTurno()
                }
                
            } else{
                alert("la partida a finalizado ya que " + this.jugando.name + " GANO")
            }

        },

        curar(){
            if(this.enJuego){

                let num = this.generarNumeroRandom(1,10);
                if ( (this.jugando.stamina+num) >= 100 ) {
                    this.jugando.stamina = 100;
                    alert(this.jugando.name + "  a restarurado su estamina al completo");
                } else {
                    this.jugando.stamina += num;
                    alert(this.jugando.name + "  a restarurado " + num + " puntos de stamina");
                }
                
                if(!this.hayGanador()){
                    this.cambiarTurno()
                }
                
            } else{
                alert("la partida a finalizado ya que " + this.jugando.name + " GANO")
            }

        },

        swap(){ 
            if(this.jugando.swap){
                this.jugando.swap = false;

                let aux = this.jugando.stamina;
                this.jugando.stamina = this.noJugando.stamina;
                this.noJugando.stamina = aux;
                
            }
        },

        cambiarTurno(){
            if(this.jugadorA == this.jugando){
                this.jugando = this.jugadorB;
                this.noJugando = this.jugadorA;
            } else {
                this.jugando = this.jugadorA;
                this.noJugando = this.jugadorB;
                this.ronda += 1;
            }
        },

        hayGanador(){
            let resultado = false;
            if(this.noJugando.stamina<0){
                alert(this.jugando.name + " es el ganador")
                this.enJuego = false;
                resultado = true;
            }
            return resultado;

        },

        
        generarNumeroRandom(min,max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
            
        }


    },

    computed: {
        swapHabilitado(){
            return this.jugando.swap
        }
    },

    created : function(){
        this.jugando = this.jugadorA
        this.noJugando = this.jugadorB  

    }
})


let appMontada = app.mount('#app');
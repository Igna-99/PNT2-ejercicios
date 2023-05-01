const app = Vue.createApp({
    data() {
        return{
            enJuego: true,
            ronda : 1,
            jugando: {},
            noJugando: {}
        }
    },

    methods: {
        atacar(){
            if(this.enJuego){
                let num = this.generarNumeroRandom(10,50);
                let aux = this.noJugando.getStamina()
                aux -= num;

                alert(this.jugando.name + " a atacado a " + this.noJugando.name + " y le quita " + num);
                this.noJugando.setStamina(aux)

                if(!this.hayGanador()){
                    this.cambiarTurno()
                }

            } else{
                alert("la partida a finalizado ya que " + this.jugando.name + " GANO")
            }

        },

        curar(){
            if(this.enJuego){
                let num = this.generarNumeroRandom(10,50);

                let aux = this.jugando.getStamina();
                this.jugando.setStamina((num + aux));

                if((num + aux) < 100){
                    alert(this.jugando.name + " a restarurado " + num + " puntos de stamina");
                } else {
                    alert(this.jugando.name + " a restarurado su estamina al completo");
                }

                if(!this.hayGanador()){
                    this.cambiarTurno()
                }

                


                
            } else{
                alert("la partida a finalizado ya que " + this.jugando.name + " GANO")
            }

        },

        swap(){ 
            if(this.jugando.tieneSwap()){
                this.jugando.swap = false;

                let aux = this.jugando.stamina;
                this.jugando.stamina = this.noJugando.stamina;
                this.noJugando.stamina = aux;
                
            }
        },

        cambiarTurno(){
            aux = this.noJugando
            this.noJugando = this.jugando
            this.jugando = aux
        },

        hayGanador(){
            let resultado = false;
            if(this.noJugando.getStamina() == 0){
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

    mounted : function(){
        this.jugando = this.$refs.jug1
        this.noJugando = this.$refs.jug2

    }
})


app.component("jugador",{
    data(){
        return{
            stamina: 100,
            swap: true,
            name: this.nombre
        }
    },
    template:`
    <div class="col-6  titulo">
        <p class="chico"> Jugador {{this.num}} </p>
        {{this.name}} <br>
        Stamina: {{this.stamina}}
    </div>`,    
    props:['num','nombre'],
    methods:{
        getStamina(){
            return this.stamina
        },

        setStamina(num){
            if(num>100){
                this.stamina = 100;
            } else if(num<0){
                this.stamina = 0;
            } else {
                this.stamina = num;
            }

            
            
        },

        tieneSwap(){
            return this.swap
        },
        
        setSwap(booleam){
            this.swap = booleam
        }

    }

})


let appMontada = app.mount('#app');
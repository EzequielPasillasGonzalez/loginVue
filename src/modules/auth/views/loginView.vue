<template>
    <div class="container">
        <h1> Hola {{ usuario.nombre }} </h1>               
        
        <div class="container">
            <h3>Selecciona el tipo de evento al que quieres ir </h3>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.tipoEvento" placeholder="Evento:">                
                <option value="Teatro">Teatro</option>
                <option value="Cine">Cine</option>
                <option value="Museo">Museo</option>
            </select>
        </div>

        <template>

        </template>

        <div class="container" v-if="Pedido.tipoEvento">
            <h3>¿A qué lugar desea ir?:</h3>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.lugarEvento" placeholder="Lugar:">   
                <template v-if="Pedido.tipoEvento === 'Teatro'">
                    <option value="Teatro Colon de Buenos Aires">Teatro Colon de Buenos Aires</option>
                    <option value="Teatro de la Scala Milan">Teatro de la Scala Milan</option>
                    <option value="Teatro Metropolitan, Ciudad de Mexico">Teatro Metropolitan, Ciudad de Mexico</option>
                </template>             
                <template v-else-if="Pedido.tipoEvento === 'Cine'">
                    <option value="Cinemark">Cinemark</option>
                    <option value="Cinepolis">Cinepolis</option>
                    <option value="Cinemex">Cinemex</option>
                    <option value="AMC">AMC</option>
                </template>             
                <template v-else-if="Pedido.tipoEvento === 'Museo'">
                    <option value="Museo de Historia Mexicana">Museo de Historia Mexicana</option>
                    <option value="Museo del Noreste">Museo del Noreste</option>
                    <option value="Museo del Palacio">Museo del Palacio</option>
                </template>             
                
            </select>
        </div>

        <div class="container" v-if="Pedido.lugarEvento">
            <h3>Selecciona el día que quieras ir:</h3>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.diaSemana" placeholder="Dia de la semana:">                
                <option value="Domingo">Domingo</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sabado">Sabado</option>
            </select>
        </div>

        <div class="container" v-if="Pedido.diaSemana">
            <template v-if="Pedido.tipoEvento === 'Museo' && Pedido.diaSemana === 'Domingo'">
                <h3 style="color: red;">No es posible elegir un dia no laboral</h3>
            </template>
            <template v-else>
                <template v-if="Pedido.tipoEvento === 'Museo'">

                </template>
                <template v-else>
                    <h3>Selecciona la funcion que quieres ir:</h3>
                    <select class="form-select" aria-label="Default select example" v-model="Pedido.funcion" placeholder="Funcion:">                
                        <template v-if="Pedido.tipoEvento === 'Teatro'">
                            <option value="Don Quijote de la Mancha">Don Quijote de la Mancha</option>
                            <option value="Macbeth">Macbeth</option>
                            <option value="La Celestina">La Celestina</option>
                        </template>             
                        <template v-else-if="Pedido.tipoEvento === 'Cine'">
                            <option value="Avengers Clasificacion PG-13">Avengers Clasificacion PG-13</option>
                            <option value="Jhon Wick Clasificacion R, mayores de 17">Jhon Wick Clasificacion R, mayores de 17</option>
                            <option value="Superman Clasificacion: A">Superman Clasificacion: A</option>                        
                        </template>             
                    </select>
                </template>                
            </template>            
        </div>

        <div class="container" v-if="Pedido.diaSemana">
            <template v-if="Pedido.tipoEvento === 'Museo' && Pedido.diaSemana === 'Domingo'">
                
            </template>
            <template v-else>
                <h3>Selecciona un horario:</h3>
                <select class="form-select" aria-label="Default select example" v-model="Pedido.horario" placeholder="Horario:">                
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                </select>
            </template>            
        </div>

        <div class="container" v-if="Pedido.horario && Pedido.tipoEvento !== 'Museo'">
            <h3>Elige tu lugar:</h3>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.tipoBoleto" placeholder="Lugar:">   
                <template v-if="Pedido.tipoEvento === 'Teatro'">
                    <option value="Luneta">Luneta $350</option>
                    <option value="Palco">Palco $250</option>
                    <option value="General">General $150</option>
                </template>             
                <template v-else-if="Pedido.tipoEvento === 'Cine'">
                    <option value="Tradicional">Tradicional: $35</option>
                    <option value="PLUUS">PLUUS: $70</option>
                    <option value="VIP">VIP: $120</option>
                    <option value="XE">Macro XE: $150</option>
                    <option value="Junior">Junior: $30</option>
                    <option value="4DX">4DX: $130</option>
                    <option value="IMAX">IMAX: $180</option>
                    <option value="VR">VR: $150</option>
                    <option value="Screen X">Screen X: $120</option>
                </template>                        
                
            </select>
        </div>

        <div class="container" v-if="Pedido.precio">
            <template v-if="Pedido.tipoEvento === 'Museo' && Pedido.diaSemana === 'Domingo'">
                <div>
                    
                </div>
            </template>
            <template v-else>                
                <h3>¿Cuantos boletos necesita?:</h3>
                <h4>El costo del bleto que eligio es: ${{ Pedido.precio }}</h4>
                <select class="form-select" aria-label="Default select example" v-model="Pedido.total" placeholder="Lugar:">                   
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>                
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>                
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>                
                        <option value="10">10</option>                
                </select>                
            </template>
            
        </div>

        <div class="container" v-if="Pedido.total">            
                <div>
                    
                        <h3>Selecciona tuu asiento:</h3>
                        <input type="text" class="form-control" id="exampleFormControlInput1" v-model="Pedido.asientos">
                        <h3>Asientos Disponibles:</h3>
                        <ul>
                            <button v-for="asiento in asientos" :key="asiento.numero" @click="seleccionarAsiento(asiento, Pedido.total)">
                                {{ asiento.numero }} ({{ asiento.disponible ? 'Disponible' : 'Ocupado' }})
                            </button>
                        </ul>                                                    
                    
                </div>            
        </div>



        <div class="container" v-if="Pedido.total">
            <h3>Seleccione el metodo de pago:</h3>
            <h4>El total de su compra es: {{ Pedido.total * Pedido.precio }}</h4>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.metodoPago.metodo" placeholder="Lugar:">                   
                    <option value="Tarjeta Debito">Tarjeta Debito</option>
                    <option value="Tarjeta Credito">Tarjeta Debito</option>
                    <option value="Paypal">Paypal</option>                                                
            </select>
        </div>

        <div class="container">
            <template v-if="Pedido.metodoPago.metodo && Pedido.metodoPago.metodo !== 'Paypal'">
                <h3>Ingrese los datos de su tarjeta:</h3>            
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Numero de tarjeta</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="Pedido.metodoPago.numeroTarjeta" min="16" max="16">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Nombre del propietario</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="Pedido.metodoPago.nombreTarjeta" max="8">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">CVV</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" v-model="Pedido.metodoPago.cvv" min="3" max="3">
                </div>    
                <button @click="confirmar('tarjeta')">Confirmar</button>
            </template>
            <template v-else-if="Pedido.metodoPago.metodo && Pedido.metodoPago.metodo === 'Paypal'">                
                <h3>Ingrese los datos de su cuenta:</h3>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Correo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" v-model="Pedido.metodoPago.numeroTarjeta" >
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" v-model="Pedido.metodoPago.nombreTarjeta">
                </div>

                <button @click="confirmar('paypal')">Confirmar</button>
            </template>
            
            
        </div>

        <div>
            <template v-if="mostrarMensaje === true">
                <p>Tipo de evento: {{Pedido.tipoEvento}}</p>
                <p>Lugar del evento: {{Pedido.lugarEvento}}</p>
                <p>Funcion: {{Pedido.funcion}}</p>
                <p>Dia: {{Pedido.diaSemana}}</p>
                <p>Horario: {{Pedido.horario}}</p>
                <p>Tipo de boleto: {{Pedido.tipoBoleto}}</p>
                <p>Precio: {{Pedido.precio}}</p>
                <p>Total: ${{Pedido.total * Pedido.precio}}</p>
                <p>Tipo de vestimenta: {{Pedido.tipoVestimenta}}</p>
                <template v-for="asiento in Pedido.asientos" :key="asiento.id">
                    <p>
                        Asiento: {{asiento}}
                    </p>
                </template>
                <template v-for="metodo in Pedido.metodoPago" :key="metodo.id">
                    <template v-if="metodo">
                        <p>
                            {{metodo}}
                        </p>
                    </template>
                    
                </template>

            </template>
            <template v-else-if="mostrarMensaje === false">
                <div>
                    <h2 style="color: red;">Falta algun dato</h2>
                </div>
            </template>
        </div>


    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {    

    data(){
        return {
            mostrarMensaje: null,
            numeroBoletos: 0,
            Pedido: {
                tipoEvento: '',
                lugarEvento: '',
                funcion: '',
                horario: '',                                
                tipoBoleto: '',
                precio: '',
                total: '',                
                tipoVestimenta: '',
                asientos: [],
                diaSemana: '',
                metodoPago: {
                    metodo:'',
                    numeroTarjeta: '',
                    nombreTarjeta: '',
                    cvv: '',
                }
            },
            asientos: [
                { numero: 1, disponible: true },
                { numero: 2, disponible: true },
                { numero: 3, disponible: true },
                { numero: 4, disponible: true },
                { numero: 5, disponible: true },
                { numero: 6, disponible: true },
                { numero: 7, disponible: true },
                { numero: 8, disponible: true },
                { numero: 9, disponible: true },
                { numero: 10, disponible: true },
                { numero: 11, disponible: true },
                { numero: 12, disponible: true },
                { numero: 13, disponible: true },
                { numero: 14, disponible: true },
                { numero: 15, disponible: true },
                { numero: 16, disponible: true },
                { numero: 17, disponible: true },
                { numero: 18, disponible: true },
                { numero: 19, disponible: true },
                { numero: 20, disponible: true }
            ],            
        }
    },
    props:{
        login: {
            required: true,
            type: Boolean
        }
    },
    computed:{
        ...mapState( 'authStore', {
            usuario: 'usuario'
        })
    },
    methods: {
        seleccionarAsiento(numeroAsiento, totalBoletos){
            if(this.numeroBoletos < totalBoletos){
                this.numeroBoletos++
                let index = this.asientos.findIndex((asiento) => asiento.numero === numeroAsiento.numero)                        
                this.asientos[index].disponible = !this.asientos[index].disponible
                this.Pedido.asientos.push(this.asientos[index].numero)            
            }else{
                return null
            }
            
        },
        confirmar(metodo){
            switch (metodo) {
                case 'tarjeta':
                    if(this.Pedido.metodoPago.nombreTarjeta && this.Pedido.metodoPago.numeroTarjeta && this.Pedido.metodoPago.cvv){
                        this.mostrarMensaje = true 
                    }else{
                        this.mostrarMensaje = false
                    }
                    break;
                case 'paypal':
                if(this.Pedido.metodoPago.nombreTarjeta && this.Pedido.metodoPago.numeroTarjeta){
                    this.mostrarMensaje = true
                    }else{
                        this.mostrarMensaje = false
                    }
                    break;
                default:
                    this.mostrarMensaje = false
                    break;
            }
        }
    },
    watch: {
        'asientos': function (){

        },
        'Pedido.total': function (){
            this.Pedido.total = parseInt(this.Pedido.total)
        },
        'Pedido.tipoEvento': function (vestimenta) {
            switch(vestimenta){
                case 'Teatro':
                    this.Pedido.tipoVestimenta = 'Elegante';
                    break;
                case 'Cine':
                    this.Pedido.tipoVestimenta = 'Casual';
                    break;
                case 'Museo':
                    this.Pedido.tipoVestimenta = 'Cómodo';
                    this.Pedido.precio = 50;
                    break;
                default:
                    this.Pedido.tipoVestimenta = '';
            }
        },
        'Pedido.tipoBoleto': function (boleto) {
            switch(boleto){
                case 'Luneta':
                    this.Pedido.precio = 350;
                    break;
                case 'Palco':
                    this.Pedido.precio = 250;
                    break;
                case 'General':
                    this.Pedido.precio = 150;
                    break;
                case 'Tradicional':
                    this.Pedido.precio = 35;
                    break;
                case 'PLUUS':
                    this.Pedido.precio = 70;
                    break;
                case 'VIP':
                    this.Pedido.precio = 120;
                    break;
                    case 'XE':
                    this.Pedido.precio = 150;
                    break;
                case 'Junior':
                    this.Pedido.precio = 30;
                    break;
                case '4DX':
                    this.Pedido.precio = 130;
                    break;
                    case 'IMAX':
                    this.Pedido.precio = 180;
                    break;
                case 'VR':
                    this.Pedido.precio = 150;
                    break;
                case 'Screen X':
                    this.Pedido.precio = 120;
                    break;                
                default:
                this.Pedido.precio = '';
            }
        }
    }    
}
</script>

<style lang='scss' scoped>
</style>
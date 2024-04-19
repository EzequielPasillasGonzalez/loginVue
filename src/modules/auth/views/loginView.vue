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
            <template v-if="Pedido.diaSemana === 'Domingo'">
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
            <template v-if="Pedido.diaSemana === 'Domingo'">
                
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

        <div class="container" v-if="Pedido.horario">
            <h3>Elige tu lugar:</h3>
            <select class="form-select" aria-label="Default select example" v-model="Pedido.tipoBoleto" placeholder="Lugar:">   
                <template v-if="Pedido.tipoEvento === 'Teatro'">
                    <option value="Luneta">Luneta $350</option>
                    <option value="Palco">Palco $250</option>
                    <option value="General">General $150</option>
                </template>             
                <template v-else-if="Pedido.tipoEvento === 'Cine'">
                    <option value="Tradicional:">Tradicional: $35</option>
                    <option value="PLUUS:">PLUUS: $70</option>
                    <option value="VIP:">VIP: $120</option>
                    <option value="XE:">Macro XE: $150</option>
                    <option value="Junior:">Junior: $30</option>
                    <option value="4DX:">4DX: $130</option>
                    <option value="IMAX:">IMAX: $180</option>
                    <option value="VR:">VR: $150</option>
                    <option value="Screen X:">Screen X: $120</option>
                </template>             
                <template v-else-if="Pedido.tipoEvento === 'Museo'">
                    <option value="Museo de Historia Mexicana">Museo de Historia Mexicana</option>
                    <option value="Museo del Noreste">Museo del Noreste</option>
                    <option value="Museo del Palacio">Museo del Palacio</option>
                </template>             
                
            </select>
        </div>

        

        


    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {    

    data(){
        return {
            Pedido: {
                tipoEvento: '',
                lugarEvento: '',
                funcion: '',
                horario: '',
                dia: '',
                diasFestivos: '',
                tipoBoleto: '',
                precio: '',
                total: '',
                boletosComprados: '', // Maximo 10
                tipoVestimenta: '',
                asientos: '',
                diaSemana: '',
                metodoPago: {
                    metodo:'',
                    numeroTarjeta: '',
                    nombreTarjeta: '',
                    tipoTarjeta: '',                    
                }
            }            
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
    watch: {
        'Pedido.tipoEvento': function (vestimenta) {
            switch(vestimenta){
                case 'Teatro':
                    this.Pedido.vestimenta = 'Elegante';
                    break;
                case 'Cine':
                    this.Pedido.vestimenta = 'Casual';
                    break;
                case 'Museo':
                    this.Pedido.vestimenta = 'Cómodo';
                    break;
                default:
                    this.Pedido.vestimenta = '';
            }
        },
        'Pedido.tipoBoleto': function (boleto) {
            switch(boleto){
                case 'Luneta':
                    this.Pedido.vestimenta = '350';
                    break;
                case 'Palco':
                    this.Pedido.vestimenta = '250';
                    break;
                case 'General':
                    this.Pedido.vestimenta = '150';
                    break;
                case 'Tradicional':
                    this.Pedido.vestimenta = '35';
                    break;
                case 'PLUUS':
                    this.Pedido.vestimenta = '70';
                    break;
                case 'VIP':
                    this.Pedido.vestimenta = '120';
                    break;
                    case 'XE':
                    this.Pedido.vestimenta = '150';
                    break;
                case 'Junior':
                    this.Pedido.vestimenta = '30';
                    break;
                case '4DX':
                    this.Pedido.vestimenta = '130';
                    break;
                    case 'IMAX':
                    this.Pedido.vestimenta = '180';
                    break;
                case 'VR':
                    this.Pedido.vestimenta = '150';
                    break;
                case 'Screen X':
                    this.Pedido.vestimenta = '120';
                    break;                
                default:
                this.Pedido.vestimenta = '';
            }
        }
    }    
}
</script>

<style lang='scss' scoped>
</style>
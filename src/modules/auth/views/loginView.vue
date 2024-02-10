<template>
    <div class="container">
        <h1> Hola {{ usuario.nombre }} </h1>               
        
        <div class="container">
            <h2>Selecciona el tipo de evento al que quieres ir </h2>
            <select class="form-select" aria-label="Default select example" v-model="evento" placeholder="Evento:">                
                <option value="1">Teatro</option>
                <option value="2">Cine</option>
                <option value="3">Museo</option>
            </select>
        </div>


        <div class="container" v-if="evento">
            <h3>Selecciona un horario:</h3>
            <select class="form-select" aria-label="Default select example" placeholder="Horario:">                
                <option value="1">17:00</option>
                <option value="2">18:00</option>
                <option value="3">19:00</option>
            </select>
        </div>


    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {    

    data(){
        return {
            evento: ''
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
    }    
}
</script>

<style lang='scss' scoped>
                    
</style>
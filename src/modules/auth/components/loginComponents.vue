<template>
    <div class="container">
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Correo</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputCorreo" autocomplete="off" v-model="correo">
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" autocomplete="off" v-model="password">
            </div>
        </div>

        <div class="container" v-if="!letrasMinusculas || !passwordMinusculas">
            <p style="color: red;"> Recuerda que en la contraseña:
                <span>
                    <ul>* El uso exclusivo de minúsculas</ul>
                    <ul>* No debe de contener números</ul>
                    <ul>* No debe de contener caracteres especiales solo al inicio y al final</ul>
                </span>
            </p>

            <p style="color: red;"> Recuerda que en el usuario:
                <span>
                    <ul>* Solo acepta de 4 a 10 caracteres alfanuméricos</ul>
                    <ul>* No acepta minúsculas al inicio</ul>
                    <ul>* No se permiten caracteres especiales al inicio</ul>
                    <ul>* No se permiten espacios</ul>
                </span>
            </p>
        </div>

        <button @click="gotToSingup" class="btn btn-primary">Inicia Sesión</button>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Swal from 'sweetalert2';
import { validarCadenaPersonalizada, validarCadena} from '../../../helpers/formValidator'


export default {
    
    data(){
        return {
            correo: null,
            password: null,
            user: Object,
        }        
    },
    methods: {

        ...mapActions( 'authStore', [
            'getLogin'
        ]),
        async gotToSingup(){

            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()
            
            // this.user.correo = this.correo
            // this.user.password = this.password

            // const ok = await this.getLogin(this.user)
            

            if (this.passwordMinusculas && this.letrasMinusculas){

                this.$router.push({ name: 'login', params: { isLogin: true } })
               Swal.fire('Loggin Exitoso', '', 'success')
               
            }else{
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Revisa tu correo o contraseña",                    
                });
            }
        }
    },
    computed:{
        ...mapState( 'authStore', {
            usuario: 'usuario'
        }),
        letrasMinusculas(){
            const validarMin = validarCadena(this.correo)

            return validarMin
        },
        passwordMinusculas(){
            const validarPasswordMin = validarCadenaPersonalizada(this.password)

            return validarPasswordMin
        }

        
        
    },
}
</script>

<style lang='scss' scoped>
                    
</style>

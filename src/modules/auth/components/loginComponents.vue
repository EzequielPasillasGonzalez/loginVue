<template>
    <div class="container">
        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" autocomplete="off" v-model="email">
            </div>
        </div>

        <div class="mb-3 row">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" autocomplete="off" v-model="password">
            </div>
        </div>

        <button @click="gotToSingup" class="btn btn-primary">Inicia Sesión</button>
    </div>
</template>

<script>
export default {


    data(){
        return {
            email: '',
            password: ''
        }        
    },
    methods: {
        gotToSingup(){
            
        }
    }
}
</script>

<style lang='scss' scoped>
                    
</style>
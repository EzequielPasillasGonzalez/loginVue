import authApi from "@/api/authApi"

// export const myAction = async ({comit}) => {

// }

export const getLogin = async ( { commit },  user) => { 
        
    try {
        
        const { data } = await authApi.post("/api/auth/login", {correo: user.correo, password: user.password}) //? Le hace un peticion get al api

        const { usuario, token, ok } = data

        let objUsuario = Object

        objUsuario.nombre = usuario.nombre

        objUsuario.role = usuario.role

        localStorage.setItem('token', token) // Poner el token de autorizacion en el local storage

        commit('setUsuario', {...objUsuario}) //? Se llama la mutacion setUsuario para guardar la respuesta de la api desde la bd


        return ok

    } catch (error) {
        
        return error

    }
        
    

    

}

export const getDataTicket = async ({ commit }, ticket) => { 
    commit('setTicket', { ticket })
}
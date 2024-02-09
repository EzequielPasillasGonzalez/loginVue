import authApi from "@/api/authApi"

// export const myAction = async ({comit}) => {

// }

export const loadEntries = async ( /* { commit } { email, password }*/) => {

    const { body } = await authApi.get("/entries.json") //? Le hace un peticion get al api

    console.log(body);
    

    //commit('setEntries', entries) //? Se llama la mutacion entries para guardar la respuesta de la api desde la bd

}
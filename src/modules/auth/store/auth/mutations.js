// export const myMutations = (state) => {

// }

export const setUsuario = (state, user) => {
    
        state.usuario = {
          nombre: user.nombre,
          correo: user.correo
        };

        
        state.isLoading = false
}

export const setTicket = (state, ticket) => {

  state.ticket = {
    datos: ticket,    
  };
  
}


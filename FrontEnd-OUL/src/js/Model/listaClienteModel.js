class Lista {
  constructor(){
    this.lista = []
  }

  adicionarCliente(cliente){
    this.lista.push(cliente); 
  }

  buscarCliente(idCliente){
    return this.lista[idCliente]
  }

  editarCliente(cliente, idCliente){
    this.lista[idCliente] = cliente;
  }
}

module.exports = { Lista }
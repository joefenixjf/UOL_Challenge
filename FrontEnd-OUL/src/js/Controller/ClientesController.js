const { Cliente } = require('../Model/clienteModel')
class ClientesController{
  constructor(model,view){
    this.model = model;
    this.view = view;
  }

  clicks(target){
    const id = target.getAttribute('id')
    switch(id){
      case "novo-cliente": 
        this.view.carregaViewForm();
        break;
      case "criar":
        this.adicionarEditarCliente()
        break;
      case "voltar":
        console.log(id);
        this.view.atualizaViewLista(this.model)
        break
      case "editar-cliente":
        const idCliente = target.parentNode.parentNode.getAttribute('id')
        this.buscarCliente(idCliente);
        break
      case "editar":
        const clienteId = target.getAttribute('cliente-id')
        this.adicionarEditarCliente(clienteId)
        break    
    }
  }

  buscarCliente(idCliente){
    const cliente =  this.model.buscarCliente(idCliente);    
    this.view.carregaViewForm(cliente);
  }

  adicionarEditarCliente(idCliente){
    
    const nome = document.querySelector('#nome').value
    const email = document.querySelector('#e-mail').value
    const cpf = document.querySelector('#cpf').value
    const tel = document.querySelector('#tel').value
    const status = document.querySelector('#status').value

    
    if(idCliente){
      const cliente = new Cliente(idCliente, nome, email, cpf, tel, status)
      this.model.editarCliente(cliente, idCliente);
      localStorage.setItem(`Cliente: ${idCliente}`, JSON.stringify(cliente))
    }else{
      let id = ClienteIdController++
      const cliente = new Cliente(id, nome, email, cpf, tel, status)
      localStorage.setItem(`Cliente: ${id}`, JSON.stringify(cliente))
      this.model.adicionarCliente(cliente);
    }
    this.view.atualizaViewLista(this.model);
  }
  
  iniciaPagina(){
    this.carregaClientes();
    this.view.atualizaViewLista(this.model);
  }

  carregaClientes(){    
    while(JSON.parse(localStorage.getItem(`Cliente: ${ClienteIdController}`))){
      let cliente = JSON.parse(localStorage.getItem(`Cliente: ${ClienteIdController}`))
      this.model.adicionarCliente(new Cliente(cliente.id, cliente.nome, cliente.email, cliente.cpf, cliente.tel, cliente.status));
      ClienteIdController++
    }
  }
}

module.exports = { ClientesController }
ClienteIdController = 0
class ListaView{
  constructor(seletor){
    this.seletor = seletor;
  }

  getTemplateLista(model){
    return model.lista.map(function(cliente){
      return ` 
        <li id="${cliente.id}" class="lista-container">
        <div class="container-item item-1"><h3>${cliente.nome}</h3><p>${cliente.email}</p></div>
        <div class="container-item item-2"><h3>${cliente.cpf}</h3><p>${cliente.tel}</p></div>
        <div class="container-item item-3">
        <div class="status"><div class="${cliente.status} status-icon"></div>
        <div class="status-msg">${cliente.status}</div></div></div>
        <div class="container-item item-4"><button id="editar-cliente">Editar</button></div>
        </li>`
      }).join('');
  }
  
  atualizaViewLista(model){
    this.seletor.innerHTML =     `
    <div class="cabecalho">
      <div class="titulos-cabecalho">
        <h2>Listagem de usuários</h2><p>Escolha um cliente para visualizar os detalhes</p>
      </div>
      <button id='novo-cliente' class="btn-novo-cliente">Novo cliente</button>
    </div>
    <ul id="lista-de-usuarios">  ${this.getTemplateLista(model)}  </ul>`
    
  }
  
  carregaViewForm(cliente){
    let nome = cliente? `value=${cliente.nome}` : `placeholder="Nome"`;
    let email = cliente? `value=${cliente.email}` : `placeholder="E-mail"`
    let cpf = cliente? `value=${cliente.cpf}` : `placeholder="CPF"`
    let tel = cliente? `value=${cliente.tel}` : `placeholder="Telefone"`
    let idButton = cliente? `id="editar" cliente-id="${cliente.id}"` : `id="criar"`;
    let buttonCriar = cliente? "Editar" : `Criar`;
    let options = cliente? this.editaOptions(cliente.status) : this.criaOptions()
    // if(cliente === undefined){

    // } 
    this.seletor.innerHTML = `
      <div class="cabecalho">
        <div class="titulos-cabecalho">
        <h2>Novo usuário</h2><p>Informe os campos a seguir para criar novo usuário:</p>
        </div>
      </div>
      <form id="form-cliente" action="">
        <input id='nome' ${nome} type="text" value="">
        <input id='e-mail' ${email} type="email">
        <input id='cpf' ${cpf} type="number">
        <input id='tel' ${tel} type="tel">
        <select id='status'>${options}
        </select>
        <div class="form-buttons">
          <button ${idButton} class="btn btn-laranja">${buttonCriar}</button>
          <button id="voltar" class="btn btn-branco">Voltar</button>
        </div>
      </form>`
  }

  editaOptions(atributo){
    const status = ['status', 'ativo', 'inativo', 'desativado', 'aguardando ativação']
    let attr
    const option = status.map(element => {
      if(element === atributo){
        attr = `value ="${element}" selected`
      }else{
        attr = `value ="${element}"`
      }
      if(element === 'status'){attr = attr + ' disabled'}
      return `<option ${attr}>${element}</option>`      
    });
    return option;
  }

  criaOptions(){
    return `
    <option disabled selected>status</option>
    <option value="ativo">ativo</option>
    <option value="inativo">inativo</option>
    <option value="aguardando ativação">aguardando ativação</option>
    <option value="desativado">desativado</option>
    `
  }
}

module.exports = { ListaView }
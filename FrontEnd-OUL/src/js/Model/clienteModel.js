class Cliente {
  constructor(id, nome, email, cpf, tel, status){
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
    this.tel = tel;
    this.status = status;
  }
}

module.exports = { Cliente }
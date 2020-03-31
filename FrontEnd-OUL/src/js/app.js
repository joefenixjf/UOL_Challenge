import { Lista } from './Model/listaClienteModel';
import { ClientesController } from './Controller/ClientesController';
import { ListaView } from './View/listaView';
const container = document.querySelector(".container");

const listaView = new ListaView(container)
const listaClientes = new Lista();
const clientesController = new ClientesController(listaClientes, listaView);

clientesController.iniciaPagina()

container.addEventListener('click', function(e){
	e.preventDefault();
	const target = e.target
	clientesController.clicks(target);
})

// console.log()














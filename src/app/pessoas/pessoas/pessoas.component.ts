import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.scss'
})
export class PessoasComponent {

  btnTable: boolean = true;

  //seleciona tabela
  tabela: boolean = true;

  //objeto cliente
  cliente = new Cliente();


  //JSON de pessoas
  clientes: Cliente[] = [];

  //novo cliente
  clienteSelecionado: Cliente = new Cliente();


  //metodo para editar cliente

  deletar(id: number): void {
    const confirmacao = confirm('Tem certeza que deseja deletar este cliente?');
    if (confirmacao) {
      this.servico.remover(id).subscribe({
        next: () => {
          // Atualizar a lista local após a exclusão no backend
          this.clientes = this.clientes.filter(c => c.id !== id);
          console.log('Cliente deletado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao deletar cliente', err);
        }
      });
    }
  }



  constructor(private servico: ClienteService, private router: Router) { }

  // metodo seleção pessoas
  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);
  }

  selecionarCliente(cliente: Cliente): void {
    this.clienteSelecionado = { ...cliente };
  }

  salvarAlteracoes(): void {
    this.servico.editar(this.clienteSelecionado).subscribe({
      next: () => {
        alert('Cliente atualizado com sucesso!');
         // Atualiza a lista de clientes
        this.selecionar();
      },
      error: err => {
        console.error('Erro ao atualizar cliente:', err);
      }
    });
  }

  ngOnInit() {
    this.selecionar();
  }

}

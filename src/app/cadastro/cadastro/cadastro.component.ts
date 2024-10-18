import { routes } from './../../app.routes';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; //

import { ViacepService } from './../../services/viacep.service';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/Cliente';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  btnCadastro: boolean = true;

  //objeto cliente
  cliente = new Cliente();

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private ViacepService: ViacepService, private servico: ClienteService, private router: Router) { }

  //JSON de pessoas
  clientes: Cliente[] = [];

  // metodo seleção pessoas
  selecionar(): void {
    this.servico.selecionar()
      .subscribe(retorno => this.clientes = retorno);
  }

  //metodo cadastro
  cadastrar(): void {
    this.servico.cadastrar(this.cliente)
      .subscribe({



        //cadastrar o cliente
        next: (retorno) => {
          this.clientes.push(retorno);
          //limpa form
          this.cliente = new Cliente();

          //mensagem
          alert('Cadastro realizado com sucesso!');

          this.router.navigate(['/sgp']);
        },
        error: (err) => {
          alert('Erro ao cadastrar cliente.' + err.message);
        }


      });
  }

  //metodo inicializacao
  ngOnInit(): void {
    this.initializeForm();
    this.observePreenchimentoCep();

  }

  initializeForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required]],
      data_nascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required, this.cpfValidador.bind(this)]],
      cep: ['', [Validators.required]],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      numero: [''],
      complemento: ['']

    })
  }

  observePreenchimentoCep() {
    this.form.get('cep')?.valueChanges.subscribe(value => {
      if (value?.length == 8) {
        this.buscaCep();
      }
    })
  }

  buscaCep() {
    var cep = this.form.get('cep')?.value
    this.ViacepService.getEnderecoByCep(cep).subscribe(
      {
        next: (response) => {
          this.form.patchValue({
            logradouro: response.logradouro,
            bairro: response.bairro,
            cidade: response.localidade,
            estado: response.uf,
          })
        },
        error: () => {
          alert('Erro ao buscar o CEP.');

        }

      })
  }


  cpfValidador(control: any): { [key: string]: any } | null {
    const cpfValue = control.value;
    if (!this.validaCPF(cpfValue)) {
      return { invalidCpf: true };
    }
    return null; //
  }

  validaCPF(value: string): boolean {
    if (typeof value !== 'string') {
      return false;
    }

    value = value.replace(/[^\d]+/g, '');

    if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
      return false;
    }

    const values = value.split('').map(el => parseInt(el, 10));

    const rest = (count: number): number => {
      const sum = values
        .slice(0, count - 1)
        .reduce((acc, el, index) => acc + el * (count - index), 0);

      const result = (sum * 10) % 11;
      return result === 10 || result === 11 ? 0 : result;
    };

    return rest(10) === values[9] && rest(11) === values[10];
  }



}

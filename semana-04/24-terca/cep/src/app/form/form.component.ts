import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Endereco {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  unidade: string,
  ibge: string,
  gia: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cep: string;
  resposta: Endereco;
  historico = [];

  constructor(private http: HttpClient) {
    let historicoString = localStorage.getItem('dados');

    if(historicoString){
      this.historico = JSON.parse(historicoString);
    }
  }

  ngOnInit() {
  }

  consultarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`)
      .subscribe((response) => {
        this.resposta = response as Endereco;
        this.historico.unshift(response);

        let historicoString = JSON.stringify(this.historico);
        localStorage.setItem('dados', historicoString);
      });
  }

}

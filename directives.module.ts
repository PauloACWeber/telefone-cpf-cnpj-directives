import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelefoneDirective } from './telefone.directive';
import { CPFCNPJDirective } from './cpf-cnpj.directive';

const directives = [
TelefoneDirective,
CPFCNPJDirective
]

@NgModule({
  declarations: [
    directives
  ],
  imports: [
    CommonModule
  ],
  exports: [
    directives
  ]
})
export class DirectivesModule { }

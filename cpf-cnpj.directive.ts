import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[cpf-cnpj]'
})
export class CPFCNPJDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }


  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (backspace) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 11) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1\.$2\.$3\-$4');
    } else if  (newVal.length > 11 && newVal.length <= 14 ) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/, '$1\.$2\.$3\/$4\-$5');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }

}

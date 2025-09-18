import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


type BtnVariants = "primary" | "secondary";

@Component({
  selector: 'app-btn-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-primary.html',
  styleUrl: './btn-primary.scss'
})
export class BtnPrimary {

  @Input("btn-text") btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: BtnVariants = "primary";

  @Output("submit") onSubmit = new EventEmitter();

  submit() {
    this.onSubmit.emit();
  }
}

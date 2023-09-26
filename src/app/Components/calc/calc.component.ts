import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  InputString: any;
  currentInput: any;
  title: string = 'Calculator'

  constructor() {
  }
  ngOnInit(): void {
    this.InputString = new FormGroup({
      text: new FormControl()
    })

  }


  btnClick(button: any) {
    this.currentInput = this.InputString.controls.text

    if (this.currentInput.value !== null) {

      this.currentInput.setValue(this.currentInput.value + button.textContent)
    }

    else {

      this.InputString.controls.text.setValue(button.textContent)

    }

  }


  clearInput() {

    this.InputString.controls.text.setValue('')
  }

  calculate(): void {

    const input = this.InputString.controls.text.value

    if (input) {

      try {

        const output = eval(input)
        this.InputString.controls.text.setValue(output)

      } catch (error) {

        this.InputString.controls.text.setValue("Error!")

      }


    }
  }
}

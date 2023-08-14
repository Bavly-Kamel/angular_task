import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  displayValue: string = '';

  appendToDisplay(value: string): void {
    this.displayValue += value;
  }

  calculate(): void {
    try {
      this.displayValue = eval(this.displayValue);
      this.displayValue = eval(this.displayValue);
    } catch (error) {
      this.displayValue = 'Error';
    }
  }

  clearDisplay(): void {
    this.displayValue = '';
  }
}

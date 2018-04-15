import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { CustomValidator } from '../custom/customValidator';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group(
      {
        firstName: new FormControl('Santosh', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
        lastName: new FormControl('', [Validators.required, , Validators.minLength(5), Validators.maxLength(10)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [Validators.required]),
        address: this.fb.group(
          {
            addressLine1: new FormControl('', [Validators.required]),
            addressLine2: new FormControl('', []),
            city: new FormControl('', [Validators.required]),
            pin: new FormControl('', [Validators.required]),
          }
        ),
        cards: this.fb.array(
          [
            this.buildForm()
          ]
        )
      }
    )
  }

  buildForm() {
    return this.fb.group(
      {
        cardNumber: new FormControl('', [Validators.required, CustomValidator.CardValidator]),
        expMonth: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
        expYear: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required, CustomValidator.cvvValidator])
      }
    )
  }

  addCard() {
    const card = this.orderForm.controls['cards'] as FormArray;
    card.push(this.buildForm());
  }

  removeCard(i: number) {
    const card = this.orderForm.controls['cards'] as FormArray;
    card.removeAt(i);
  }

  placeOrder() {
    console.log(this.orderForm.value);
  }

}

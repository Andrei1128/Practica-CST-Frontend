import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.scss'],
})
export class AddTripComponent implements OnInit {
  @Input() tripInfo: any;
  @Output() add = new EventEmitter<any>();

  addTripForm: FormGroup = new FormGroup({});
  isVisible = false;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addTripForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      country: [null, [Validators.required, Validators.minLength(4)]],
      rating: [null, [Validators.required, Validators.pattern(/^[1-5]$/)]],
      expenses: [null, [Validators.required, this.expensesValidator]],
      notes: [null, [Validators.required, Validators.minLength(16)]],
    });
  }
  expensesValidator(control: AbstractControl) {
    const expenses = control.value;
    if (!Number.isNaN(+expenses) && +expenses >= 0) {
      return null;
    }
    return { expenses: true };
  }
  showModal(): void {
    this.ngOnInit();
    this.isVisible = true;
  }
  modalCancel() {
    this.isVisible = false;
  }
  addTrip(): void {
    if (this.addTripForm.invalid) return;
    this.tripInfo = this.addTripForm.value;
    this.add.emit(this.tripInfo);
    this.isVisible = false;
  }
  get name(): FormControl {
    return this.addTripForm.get('name') as FormControl;
  }
  get country(): FormControl {
    return this.addTripForm.get('country') as FormControl;
  }
  get rating(): FormControl {
    return this.addTripForm.get('rating') as FormControl;
  }
  get expenses(): FormControl {
    return this.addTripForm.get('expenses') as FormControl;
  }
  get notes(): FormControl {
    return this.addTripForm.get('notes') as FormControl;
  }
}

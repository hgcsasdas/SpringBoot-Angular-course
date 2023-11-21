import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  name='Jhon'
  surename= 'Pepo'
  age = 33
  married = true
  address = {
    country: 'United States',
    city: 'California',
    street: 'Los Angeles'
  }

  private dni = '12312312A'
  public nationality = 'Louisiana'

}

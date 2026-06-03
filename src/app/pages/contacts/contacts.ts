import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contacts.html', 
  styleUrl: './contacts.css',
})
export class Contacts {

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendMessage() {
    alert('Message sent successfully!');
    console.log(this.form);
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = "Samuel Adeleke, I'd like to hire you!"
  message: string = '';

  sendEmail() {
    const emailBody = `Name: ${this.name}\nEmail: ${this.email}\nSubject: ${this.subject}\nMessage: ${this.message}`;
    const mailtoLink = `mailto:samueladeleke302@gmail.com` + `?subject=${encodeURIComponent(this.subject)}` + `&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    this.resetForm();
    alert('Your message has been sent! I will get back to you as soon as possible.');
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.subject = "Samuel Adeleke, I'd like to hire you!";
    this.message = '';
  }
}

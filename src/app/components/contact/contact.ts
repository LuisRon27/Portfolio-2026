import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollAnimationDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  // Datos del formulario
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  // Estado del formulario
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  // Método para manejar el envío del formulario
  async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/luisron39@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: this.formData.name,
          email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message,
          _captcha: 'false'
        })
      });

      if (response.ok) {
        this.submitSuccess = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      this.submitError = true;
      this.errorMessage = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
      setTimeout(() => {
        this.submitError = false;
      }, 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}
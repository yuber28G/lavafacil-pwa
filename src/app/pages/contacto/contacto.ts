import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class ContactoComponent {
  contacto = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  enviarFormulario(form: NgForm) {
    if (form.valid) {
      alert('Mensaje enviado correctamente.');
      // Limpiar campos
      this.contacto = {
        nombre: '',
        correo: '',
        mensaje: ''
      };
      form.resetForm(); // limpia el estado de validación
    }
  }
}

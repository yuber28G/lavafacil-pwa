import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
selector: 'app-seguimiento',
standalone: true,
imports: [CommonModule, FormsModule],
templateUrl: './seguimiento.html',
styleUrls: ['./seguimiento.css'],
})
export class SeguimientoComponent {
numeroPedido = '';
resultado: any = null;
error = '';

buscarPedido() {
const url = `http://localhost:3000/pedidos/${this.numeroPedido}`;

(window.fetch as typeof fetch)(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Pedido no encontrado');
    }
    return response.json();
  })
  .then(data => {
    this.resultado = data;
    this.error = '';
  })
  .catch(err => {
    this.resultado = null;
    this.error = err.message;
  });

}
}
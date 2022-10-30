import { MatSnackBar } from '@angular/material/snack-bar';
import { FornecedorService } from './../../../../services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/Fornecedor';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class FornecedorCadastrarComponent implements OnInit {

  empresa?: string;
  telefone?: string;
  email?: string;
  endereco?: string;
    
  constructor (private service: FornecedorService, private snack: MatSnackBar){}

  ngOnInit(): void {}

  cadastrar():void{
    let fornecedor = new Fornecedor()
    
    fornecedor.empresa = this.empresa
    fornecedor.telefone = this.telefone
    fornecedor.email = this.email
    fornecedor.endereco = this.endereco
    this.service.cadastrar(fornecedor).subscribe((fornecedor) => {
      this.snack.open("Fornecedor cadastrado", "fornecedor", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
    })
  })
}

} 



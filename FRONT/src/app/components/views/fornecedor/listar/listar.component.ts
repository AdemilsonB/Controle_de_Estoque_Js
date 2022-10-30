import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class FornecedorListarComponent implements OnInit {
  fornecedor!: MatTableDataSource<Fornecedor>
  
  listarColumns: string[] = ['id', 'empresa', 'email', 'telefone', 'endereco','createdAt', 'deletar'];

  constructor(private service: FornecedorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.fornecedor = new MatTableDataSource<Fornecedor>(lista)
    }) 
  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe((fornecedor) => {
        console.log(fornecedor);
        this.snack.open("Fornecedor deletado", "fornecedor", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate([""]);
      });

 
    }



}



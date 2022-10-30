import { Component, OnInit } from '@angular/core';
import { Saida } from 'src/app/models/Saida';
import { MatTableDataSource } from '@angular/material/table';
import { SaidaService } from 'src/app/services/saida.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class SaidaListarComponent implements OnInit {

  saida!: MatTableDataSource<Saida>
  
  saidas: string[] = ['_id','data_venda','produto','quantidade','valor_venda', 'deletar'];

  constructor(private service: SaidaService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.saida = new MatTableDataSource<Saida>(lista)
    }) 
  }

  delete(id: string) {
    this.service.delete(id)
      .subscribe((saida) => {
        console.log(saida);
        this.snack.open("Saída deletada", "saída", {
          duration: 3000,
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate([""]);
      });
  }
}


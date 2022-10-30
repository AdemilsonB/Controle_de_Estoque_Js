import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router} from '@angular/router'
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { Fornecedor } from 'src/app/models/Fornecedor';
import { FornecedorService } from 'src/app/services/fornecedor.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class FornecedorEditarComponent implements OnInit {
   
  fornecedor!: MatTableDataSource<Fornecedor>
  
  listarColumns: string[] = ['id', 'empresa', 'email', 'telefone', 'endereco','createdAt', 'deletar'];
  
  empresa?: string;
  telefone?: string;
  email?: string;
  endereco?: string;

  constructor(private service: FornecedorService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {}


}

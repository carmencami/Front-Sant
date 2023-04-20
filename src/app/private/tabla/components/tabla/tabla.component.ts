import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoInterface } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';
// import { ModalBuyComponent } from '../modalbuy/modalbuy.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {
  displayedColumns: string[] = [
    'crypto_name',
    'icon',
    'asset',
    'value',
    'stock',
    // 'actions',
    
    

  ];
  dataSource!: MatTableDataSource<CryptoInterface>;
  list!: CryptoInterface[];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  dialog: any;
  // dialog: any;

  constructor(private router: Router, private tablaService: CryptoService ) {}

  selectedFilters: string = 'Popular';

  filtersForm = new FormControl('');

  filters: string[] = ['Popular', 'Mayor', 'Menor', 'Metaverse'];

  ngOnInit(): void {
    this.tablaService.getAllCryptos().subscribe(
      (data) => {
        console.log(data);
        this.list = data;
        this.dataSource = new MatTableDataSource<CryptoInterface>(this.list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        this.handleError(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  handleError(error: any) {
    if (error.status === 500) {
    }
  }
  // openDialog(row:any) {
  //   this.dialog.open(ModalBuyComponent);
  // }

  
}
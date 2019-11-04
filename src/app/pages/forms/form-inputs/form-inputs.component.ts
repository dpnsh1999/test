import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
// import { ApiService } from '../../../api.service';
//import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      product_id: {
        title: 'Product Id',
        type: 'string',
      },
      product_name: {
        title: 'Product Name',
        type: 'string',
      },
      category_name: {
        title: 'Category Name',
        type: 'string',
      },
      brand_name: {
        title: 'Brand Name',
        type: 'string',
      },
      product_cost_price: {
        title: 'Cost Price',
        type: 'number',
      },
      product_max_sale_price: {
        title: 'Sale Price',
        type: 'number',
      },
      product_status: {
        title: 'Status',
        type: 'number',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor() {
  }
  // ngOnInit() {
  //   this.apiService.getUserData().subscribe((result)=>{
  //     console.log(result);
  //     if(result){
  //       console.log(result)
  //       //this.source.load(result.data)
  //     }else{

  //     }
  //   });
  // }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

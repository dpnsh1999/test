import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { MemberListComponent } from './member-ship/member-list/member-list.component';
// import { MemberCreateComponent } from './member-ship/member-create/member-create.component';



const routes: Routes = [
    {
      path: '',
      component: FormsComponent,
      children: [
          {
             path: 'inputs',
             component: FormInputsComponent, 
          },
          {
            path: 'membership',
            component: MemberShipComponent, 
            // children: [
            //     {
            //       path: 'memberlist',
            //       component: MemberListComponent,  
            //      },
            //     {
            //      path: 'Membercreate',
            //      component: MemberCreateComponent, 
            //      },
            //   ],
           },     
         ],
       },
    ];

@NgModule ({
    imports:[
        RouterModule.forChild(routes),
        Ng2SmartTableModule
    ],
    exports:[
        RouterModule,
    ]
})

export class FormsRoutingModule {

}




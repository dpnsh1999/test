import { NgModule } from '@angular/core';
import {
    NbActionsModule,
    NbCardModule,
    NbDatepickerModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule
} from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { FormInputsComponent } from './form-inputs/form-inputs.component';
import { MemberShipComponent } from './member-ship/member-ship.component';
import { MemberListComponent } from './member-ship/member-list/member-list.component';
import { MemberCreateComponent } from './member-ship/member-create/member-create.component';






@NgModule ({
     imports:[
        NbActionsModule,
        NbCardModule,
        NbDatepickerModule,
        NbButtonModule,
        NbInputModule,
        NbIconModule,
        NbCheckboxModule,
        NbRadioModule,
        NbSelectModule,
        NbUserModule,
        ThemeModule,
        FormsRoutingModule,
        Ng2SmartTableModule,
        ReactiveFormsModule
     ],
    declarations: [
        FormsComponent,
        FormInputsComponent,
        MemberShipComponent,
        MemberListComponent,
        MemberCreateComponent,
    ],
})

export class FormsModule {

}

import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../../../api.service';

@Component({
  selector: 'ngx-member-ship',
  templateUrl: './member-ship.component.html',
  styleUrls: ['./member-ship.component.scss']
})

export class MemberShipComponent {
  constructor(private fb: FormBuilder, private apiService: ApiService) { }
  
  memberShipForm = this.fb.group({
    id: ['0'],
    typeOfReg: ['AETISAN'],
    regNumber: [''],
    membershipNumber: [''],
    dateOfMembership: [new Date()],
    status: ['true'],
    staffNumber: [''],
    registrationNumber: [''],
    comment: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    memberName: [''],
    gender: ['Male'],
    category: ['1'],
    dob: [''],
    rtDate: [''],
    fatherName: [''],
    phoneNumber: [''],
    email: [''],
    currentAddress: [''],
    onlineAccess: [''],
    // thriftAmt200:[''],
    // guarantorEmi:[''],
    issued: [''],
    issueDate: [''],
    bank: this.fb.group({
      id: ['0'],
      bankName: [''],
      accountNo: [''],
      branchName: [''],
      branchCode: [''],
      ifscOrRtgsCode: [''],
      swiftCode: [''],
      bankAddress: [''],
      city: ['']
    }),
    address: this.fb.group({
      id: ['0'],
      officeAddress: [''],
      grossSalary: [''],
      division: [''],
      grade: [''],
      designation: [''],
      pinCode: [''],
      panNo: [''],
      billNo: ['']
    }),
    // nominee: this.fb.group({
    //   nomineeName: [''],
    //   relation: [''],
    //   membershipAmt: ['']
    // }),
  });

  

  updateProfile() {
    this.memberShipForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.memberShipForm.value);
    this.apiService.createMembershipData(this.memberShipForm.value).subscribe((result)=>{
      console.log(result);
      if(result){
        console.log(result)
        //this.source.load(result.data) 
      }else{

      }
    });
  }
}

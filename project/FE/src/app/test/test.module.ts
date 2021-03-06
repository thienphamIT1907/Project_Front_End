import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {TestService} from './test_service/test.service';


import {HttpClientModule} from '@angular/common/http';
import { AddTestComponent } from './add-test/add-test.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GetTestComponent } from './get-test/get-test.component';
import {TestListComponent} from './test-list/test-list.component';
import {RouterModule} from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';






@NgModule({
  declarations: [GetTestComponent, TestListComponent, AddTestComponent],

    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgxPaginationModule
    ],
  exports: [
    GetTestComponent,
    TestListComponent,
    AddTestComponent
  ],
  providers: [TestService, DatePipe]
})
export class TestModule { }

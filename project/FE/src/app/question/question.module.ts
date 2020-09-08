import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {AddQuestionComponent} from './add-question/add-question.component';

import {QuestionBankListComponent} from './question-bank-list/question-bank-list.component';
import {QuestionBankDeleteComponent} from './question-bank-delete/question-bank-delete.component';
import {QuestionRoutingModule} from './question-routing/question-routing.module';
import {QuestionService} from './question.service';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {QuestionListInTheExamComponent} from './question-list-in-the-exam/question-list-in-the-exam.component';




@NgModule({

  declarations: [QuestionBankListComponent, QuestionBankDeleteComponent,QuestionListInTheExamComponent],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    QuestionBankListComponent,
    QuestionListInTheExamComponent
    // AddQuestionComponent,
  ],
  providers: [
    QuestionService
  ]
})
export class QuestionModule {
}

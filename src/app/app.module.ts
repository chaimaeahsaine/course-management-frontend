import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { ProfessorComponent } from './professor/professor.component';
import { StudentComponent } from './student/student.component';
import { StoreModule } from '@ngrx/store';
import { courseReducer } from './state/course/course.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CourseEffects } from './state/course/course.effects';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ProfessorComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      course : courseReducer
    }),
    EffectsModule.forRoot([
      CourseEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

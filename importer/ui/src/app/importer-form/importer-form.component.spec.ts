import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterFormComponent } from './importer-form.component';

describe('ImporterFormComponent', () => {
  let component: ImporterFormComponent;
  let fixture: ComponentFixture<ImporterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImporterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

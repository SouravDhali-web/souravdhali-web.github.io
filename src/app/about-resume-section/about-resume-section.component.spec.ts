import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutResumeSectionComponent } from './about-resume-section.component';

describe('AboutResumeSectionComponent', () => {
  let component: AboutResumeSectionComponent;
  let fixture: ComponentFixture<AboutResumeSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutResumeSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutResumeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

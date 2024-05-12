import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyothercomponentComponent } from './myothercomponent.component';

describe('MyothercomponentComponent', () => {
  let component: MyothercomponentComponent;
  let fixture: ComponentFixture<MyothercomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyothercomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyothercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

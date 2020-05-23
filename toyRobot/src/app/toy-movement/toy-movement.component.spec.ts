import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToyMovementComponent } from './toy-movement.component';

describe('ToyMovementComponent', () => {
  let component: ToyMovementComponent;
  let fixture: ComponentFixture<ToyMovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToyMovementComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToyMovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

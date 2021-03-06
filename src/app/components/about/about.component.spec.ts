import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { AboutComponent } from './about.component';

describe('AboutComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [AboutComponent]
    });
  });

  it('should instantiate AboutComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AboutComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
    });
  }));
});

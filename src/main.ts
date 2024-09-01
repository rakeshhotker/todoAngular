import { bootstrapApplication } from '@angular/platform-browser';
import { Home } from './components/Home/home.component';


bootstrapApplication(Home)
  .catch((err) => console.error(err));

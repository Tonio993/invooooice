import { FormGroup, FormControl, Validators } from "@angular/forms";

export interface User {
  id?: number,
  username: string,
  password: string,
  name?: string,
  surname?: string,
  birthdate?: string,
  city?: string,
  telephone?: string
  
}
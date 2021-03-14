
import { AbstractControl, ValidationErrors } from "@angular/forms"  


export class UserNameValidators   {
  static   noSpace(control : AbstractControl) : ValidationErrors | null {
            if (( control.value as string).indexOf(" ") >= 0) {
                return { noSpace : true }
            }
            return null 
    } 
 static   mustBeUniqe(control : AbstractControl) : Promise<ValidationErrors | null> {
            return new Promise ((resolve, reject)  => {
                setTimeout(() => {
                  if ( control.value  === "piotr" ) {
                    resolve({mustBeUniqe : true })
                   } else {
                    resolve(null);
                   }
            }, 5000);  
        });
    }
}

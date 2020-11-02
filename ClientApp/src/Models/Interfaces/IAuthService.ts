import { ILoginCreditentials } from "./ILoginCreditentials";
import { IRegisterCreditentials } from "./IRegisterCreditentials";
import { Observable } from "rxjs";
export interface IAuthService {
  login(creditentials: ILoginCreditentials): Observable<Object>;
  register(creditentials: IRegisterCreditentials): Observable<Object>;
}

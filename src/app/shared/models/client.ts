import { StateClient } from 'app/shared/enums/state-client.enum';
import { ClientI } from 'app/shared/interfaces/client-i';

export class Client implements ClientI {
  id: number;
  name: string;
  email: string;
  state = StateClient.INACTIF;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}

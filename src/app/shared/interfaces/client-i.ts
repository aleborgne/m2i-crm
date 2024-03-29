import { StateClient } from './../enums/state-client.enum';

export interface ClientI {
  id: number;
  name: string;
  email: string;
  state: StateClient;
}

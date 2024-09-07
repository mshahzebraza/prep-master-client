export interface User {
    accessToken: string;
    name:string,
    email:string,
    picture?:string
    roles:string[]
    [key: string]: any;
    // Add other user properties here
  }
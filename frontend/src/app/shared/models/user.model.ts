export interface User {
 id: string;
 grupo: UserGroup;
 name: string;
 password: string;
 setorId: number;
}

export enum UserGroup {
 ADMIN = 1,
 SUPER = 2,
 OPER = 3
}
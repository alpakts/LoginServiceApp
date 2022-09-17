export class UserForListModel{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    status: boolean;
    createDate: Date;
    updateDate: Date;
    deleted: boolean
    role: {
      id: number,
      operationName: string
    }
}
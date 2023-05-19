export interface IUser {
    id: string;
    role: "student";
    password: string;
    name: {
      firstName: string;
      midleName?: string;
      lastName: string;
    };
    dateOfBirth?: string;
    gender: "male" | "female";
    email: string;
    contactNo: string;
    presentAddress: string;
    permanentAddress: string;
  }
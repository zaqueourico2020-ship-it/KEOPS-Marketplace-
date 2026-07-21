export type UserRole = "admin" | "seller" | "customer";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  role: UserRole;
  photoURL?: string;
  phone?: string;
  cpf?: string;
  createdAt: number;
}

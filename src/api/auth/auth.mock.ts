import { ILoginUserDto } from "src/api/auth/auth.dto";

export const mockUser: ILoginUserDto['response'] = {
    name: "test",
    email: "test@test.com",
    roles: ["teacher"]
}
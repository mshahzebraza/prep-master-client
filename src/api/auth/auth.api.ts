
import { extractErrorMessage } from "@utils/error.utils";
import { ILoginUserDto, ISignupUserDto } from "src/api/auth/auth.dto";
import { mockUser } from "src/api/auth/auth.mock";

class AuthApi {

    static createUser = async (payload: ISignupUserDto['payload']) => {
        try {
            console.log("Creating user:", payload)
            throw new Error("Not implemented")
        } catch (error) {
            console.log("Error creating user:", extractErrorMessage(error));
            return mockUser
            throw error
        }
    }

    static loginUser = async (payload: ILoginUserDto['payload']) => {
        try {
            console.log("Signing in user:", payload)
            throw new Error("Not implemented")
        } catch (error) {
            console.log("Error signing in user:", extractErrorMessage(error));
            return mockUser
            throw error
        }
    }

    static logoutUser = async () => {
        try {
            console.log("Signing out user")
            throw new Error("Not implemented")
        } catch (error) {
            return {
                success: true,
                message: "User signed out"
            }
            console.log("Error signing out user:", extractErrorMessage(error));
            throw error
        }
    }
}

export default AuthApi;
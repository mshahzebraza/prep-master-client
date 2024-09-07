
export type ISignupUserDto = {
    payload: {
        name: string;
        email: string;
        password: string;
    };
    response: {
        name: string;
        email: string;
        roles: ('admin' | 'student' | 'teacher')[]
    }
};



export type ILoginUserDto = {
    payload: {
        email: string;
        password: string;
    };
    response: {
        name: string;
        email: string;
        roles: ('admin' | 'student' | 'teacher')[]
    }
}
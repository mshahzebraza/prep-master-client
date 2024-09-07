import { atom, useAtom } from 'jotai'
import { ILoginUserDto } from 'src/api/auth/auth.dto'

export const authAtom = atom<{
    initAuthChecked: boolean,
    isAuth: boolean,
    user?: ILoginUserDto['response'] | null
}>({
    initAuthChecked: false,
    isAuth: false,
    user: null

})

const useAuthStore = () => {
    const stateAndSetters = useAtom(authAtom)

    return stateAndSetters
}

export default useAuthStore;
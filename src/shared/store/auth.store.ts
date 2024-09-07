import { atom, useAtom } from 'jotai'

export const authAtom = atom<{
    initAuthChecked: boolean,
    isAuth: boolean,
    user?: {
        name: string,
        role: 'admin' | 'user'
    }
}>({
    initAuthChecked: false,
    isAuth: true,
    user: {
        name: "Shahzeb",
        role: "admin"
    }
})

const useAuthStore = () => {
    const stateAndSetters = useAtom(authAtom)

    return stateAndSetters
}

export default useAuthStore;
import { atom } from 'jotai'

const authAtom = atom<{
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

export default authAtom;
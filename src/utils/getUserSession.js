import { getSession } from 'next-auth/react'

export const getUserSession = async () => {
    const authUserSession = await getSession()
    return authUserSession?.user
}

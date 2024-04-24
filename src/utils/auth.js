
import { getServerSession } from 'next-auth';
import GoogleProvider from "next-auth/providers/google"

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
            clientId: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET
        })
    ],
    callbacks: {
        jwt({ token, trigger, session }) {
            if (trigger === "update") token.name = session.user.name
            return token
        },
        async signIn({ account, profile }) {
            if (!profile?.email) {
                throw new Error('No Profile')
            }


            return true
        }
    }

}

export const getAuthSession = () => getServerSession(authOptions);
import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
    providers: [
        // OAuth authentication providers...

        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),

    ],
    secret:'KnTPO34SROqcpDWc2jncW2hcmhb63lYtQh3oAjUJr9w'
})
"use client";
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MessagesContext } from '@/context/MessagesContext'
import Header from '@/components/custom/Header'
import { UserDetailContext } from '@/context/UserDetailContext'
import { GoogleOAuthProvider } from '@react-oauth/google';

type Props = {
    clientId: string;
}

function Provider({children}: React.PropsWithChildren<Props>) {
    const {messages, setMessages} = React.useState<string | null>(null);
    const {userDetail, setUserDetail} = React.useState<string | null>(null);     
  return (
    <div>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY || ''}>
            <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
                <MessagesContext.Provider value={{messages, setMessages}}>
                    <NextThemesProvider  
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem
                        disableTransitionOnChange
                    >
                    <Header/>
                    {children}
                    </NextThemesProvider>
                </MessagesContext.Provider>
            </UserDetailContext.Provider>
        </GoogleOAuthProvider>
    </div>
  )
}

export default Provider
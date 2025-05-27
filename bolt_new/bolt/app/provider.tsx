"use client";
import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MessagesContext } from '@/context/MessagesContext'
import Header from '@/components/custom/Header'
import { UserDetailContext } from '@/context/UserDetailContext'

type Props = {}

function Provider({children}: React.PropsWithChildren<Props>) {
    const [messages, setMessages] = React.useState<string | null>(null);
    const [userDetail, setUserDetail] = React.useState<string | null>(null);     
  return (
    <div>
        <UserDetailContext.Provider value={[]}>
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
    </div>
  )
}

export default Provider
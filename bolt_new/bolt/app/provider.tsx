import React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { MessagesContext } from '@/context/MessagesContext'
import Header from '@/components/custom/Header'

type Props = {}

function Provider({children}: React.PropsWithChildren<Props>) {
    const [message, setMessage] = React.useState<string | null>(null);
  return (
    <div>
        <MessagesContext.Provider value={{message, setMessage}}>
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
    </div>
  )
}

export default Provider
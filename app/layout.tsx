import { SessionProvider } from '../components/SessionProvider'
import SideBar from '../components/SideBar'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../pages/api/auth/[...nextauth]';
import '../styles/globals.css'
import Login from '../components/Login';
import ClientProvider from '../components/ClientProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login/>
          ) : (
        <div className='flex'>
           <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
           <SideBar/>
           </div>

           {/* ClientProvider - Notification */}
           <ClientProvider />

           <div className='bg-[#343541] flex-1'>{children}</div>
          </div>
                    )}
          </SessionProvider>
      </body>
    </html>
  )
}

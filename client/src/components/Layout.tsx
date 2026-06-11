import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='flex h-screen bg-slate-200'>

      {/* Mobile overlay */}
      { isMobileMenuOpen && <div className='fixed inset-0 bg-slate-900/50 z-40 md:hidden' onClick={() => setIsMobileMenuOpen(false) }/>}


      
      <Sidebar isOpen={isMobileMenuOpen} setisOpen={setIsMobileMenuOpen}/> 

      <div>
        {/* top bar */}
        <header>


        </header>
        <main className='flex-1 overflow-auto p-4 sm:p-6 md:p-8 xl:p-12'>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default Layout
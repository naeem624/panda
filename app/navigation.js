import Link from 'next/link'
import React from 'react'

export default function Navigation() {
  return (
    <nav className='text-center relative bg-gray-800'>
        <ul>
            <li><Link href={'/'}>HOme</Link></li>
            <li><Link href={'/about'}>About</Link></li>
            <li><Link href={'/contact'}>Contact</Link></li>
        </ul>
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [activeTab, setActiveTab] = useState('/')
    const pathname = usePathname()

    useEffect(() => {
        setActiveTab(pathname)
    }, [pathname])

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Docs', path: '/docs' },
    ]

    return (
        <nav className="bg-black text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold hover:text-gray-300 transition-colors duration-300">
                    URLIB
                </Link>
                <div className="flex-grow flex justify-center">
                    <ul className="flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link href={item.path} className="relative py-2">
                                    <span className="hover:text-gray-300 transition-colors duration-300">{item.name}</span>
                                    {activeTab === item.path && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                                            layoutId="underline"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex space-x-4">
                    <Link href="/auth/login">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-[4px] bg-white text-black font-medium hover:bg-gray-200 transition-colors duration-300"
                        >
                            Login
                        </motion.button>
                    </Link>
                    <Link href="/auth/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-2 rounded-[4px] bg-transparent border border-white font-medium hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            Register
                        </motion.button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
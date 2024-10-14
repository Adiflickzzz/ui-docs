'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Book, CheckCircle, AlertCircle, ArrowLeft, Github, Twitter, Mail } from 'lucide-react'

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl w-full"
                >
                    <motion.div
                        className="flex items-center justify-center mb-6"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Book className="w-12 h-12 mr-4" />
                        <h1 className="text-4xl md:text-6xl font-bold">URLIB Docs</h1>
                    </motion.div>
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <p className="text-xl md:text-2xl">
                            Welcome to our documentation center.
                        </p>
                        <p className="text-lg md:text-xl">
                            We're currently in development mode, crafting comprehensive guides for you.
                        </p>
                    </motion.div>
                    <motion.div
                        className="mt-12 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <p className="text-lg font-semibold">While we're working:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                className="bg-white bg-opacity-10 p-6 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <CheckCircle className="w-8 h-8 mb-4 text-green-400" />
                                <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
                                <p>Check back regularly for the latest documentation updates.</p>
                            </motion.div>
                            <motion.div
                                className="bg-white bg-opacity-10 p-6 rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <AlertCircle className="w-8 h-8 mb-4 text-yellow-400" />
                                <h3 className="text-xl font-semibold mb-2">Get Notified</h3>
                                <p>Sign up for our newsletter to receive important announcements.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        <Link href="/" passHref>
                            <motion.button
                                className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors duration-300 flex items-center"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ArrowLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>
            <motion.footer
                className="w-full bg-white bg-opacity-5 py-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-center md:text-left mb-4 md:mb-0">
                            <p className="text-lg font-semibold mb-2">URLIB Documentation</p>
                            <p className="text-sm text-gray-400">
                                &copy; {new Date().getFullYear()} URLIB. All rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-6">
                            <motion.a
                                href="https://github.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white hover:text-gray-300 transition-colors duration-300"
                            >
                                <Github className="w-6 h-6" />
                                <span className="sr-only">GitHub</span>
                            </motion.a>
                            <motion.a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white hover:text-gray-300 transition-colors duration-300"
                            >
                                <Twitter className="w-6 h-6" />
                                <span className="sr-only">Twitter</span>
                            </motion.a>
                            <motion.a
                                href="mailto:support@urlib.com"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-white hover:text-gray-300 transition-colors duration-300"
                            >
                                <Mail className="w-6 h-6" />
                                <span className="sr-only">Email</span>
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    )
}
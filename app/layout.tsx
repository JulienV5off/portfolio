import type { Metadata } from 'next'

// These styles apply to every route in the application
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Mon Portfolio</title>
        </head>
        <body>{children}</body>
        </html>
    )
}
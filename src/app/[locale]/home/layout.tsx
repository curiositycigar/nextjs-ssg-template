'use client'
import React from 'react'

export default function HomeLayout({
  children,
  test,
}: {
  children: React.ReactNode
  test: React.ReactNode
}) {
  return (
    <section>
      <div className="min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Home Page</h1>
        {children}
        {test}
      </div>
    </section>
  )
}

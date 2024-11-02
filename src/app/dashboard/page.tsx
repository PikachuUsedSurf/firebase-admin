'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../AuthProvider'
import { Button } from "@/components/ui/button"
import LocationForm from '../location/page'
import { auth } from '../firebase.config'

export default function Dashboard() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!user) {
    return null // This will prevent a flash of the dashboard before redirecting
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <p>You are logged in as: {user.email}</p>
      <Button
        onClick={() => {
          auth.signOut()
          router.push('/login')
        }}
        className="mt-4"
      >
        Log Out
      </Button>
      <LocationForm />
    </div>
  )
}
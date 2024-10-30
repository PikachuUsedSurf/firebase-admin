'use client'

import { useEffect, useState } from 'react'
import { addDoc, collection, getDocs, query } from 'firebase/firestore'
import { db } from '../firebase.config' // Adjust the path if necessary
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2 } from 'lucide-react'

interface Location {
  id: string
  name: string
}

export default function LocationForm() {
  const [locations, setLocations] = useState<Location[]>([])
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    fetchLocations()
  }, [])

  const fetchLocations = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const locationsCollection = collection(db, 'country')
      const q = query(locationsCollection)
      const querySnapshot = await getDocs(q)
      const fetchedLocations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name as string,
      }))
      setLocations(fetchedLocations)
    } catch (error) {
      console.error('Error fetching locations: ', error)
      setError('Failed to fetch locations. Please try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      await addDoc(collection(db, 'country'), { name })
      setName('')
      fetchLocations() 
    } catch (error) {
      console.error('Error adding document: ', error)
      setError('Failed to add location. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Country</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Country Name</Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter country name"
              />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                'Add Country'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Countries List</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : locations.length > 0 ? (
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.id} className="text-lg">
                  {location.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-muted-foreground">No countries added yet.</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
"use client"

import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase.config'; // Adjust the path if necessary
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LocationForm() {


interface Location {
    id: string;
    name: string;
  }
  const [location, setLocation] = useState<Location[]>([]); // Type 'Location'

  useEffect(() => {
    const fetchData = async () => {
      const locationsCollection = collection(db, 'country');
      const q = query(locationsCollection);
      const querySnapshot = await getDocs(q);
      const fetchedLocations = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setLocation(fetchedLocations);
    };

    fetchData();
  }, []);

  const [name, setName] = useState(''); // Use lowercase 'name' for consistency

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'country'), {
        name, 
      });
      setName('');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error adding document');
    }
  };

  return (
    <div>
        <div className='h-96 w-96 p-12 flex'>
            <form onSubmit={handleSubmit} className='p-12 border rounded-lg space-y-4'>
            <Label htmlFor="terms">Country add</Label>
            <Input 
            type="next"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <Button type="submit">Add Location</Button>
            </form>
        </div>

      
      {location.length > 0 && ( 
        <div className=' text-center'>
          {location.map((location) => (
            <div key={location.id} className='text-xl'>{location.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
"use client"

import { useEffect, useState } from 'react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { db } from '../firebase.config'; // Adjust the path if necessary

export default function LocationForm() {
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
        name, // Use lowercase 'name' for consistency
      });
      setName('');
    } catch (error) {
      console.error('Error adding document: ', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Location Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Add Location</button>
      </form>

      {/* Ensure conditional rendering to avoid empty UI elements */}
      {location.length > 0 && ( // Check if there are locations to display
        <div>
          {location.map((location) => (
            <div key={location.id}>{location.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

// Interface for type safety (optional)
interface Location {
  id: string;
  name: string;
}
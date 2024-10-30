"use client"

import { db } from '../firebase.config'; // Assuming your firebase.config.ts is in the root
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const FirestoreData = () => {
    const [users, setUsers] = useState<any[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const usersCollection = collection(db, 'users');
        const q = query(usersCollection); // Example: Fetching users with name 'John Doe'
        const querySnapshot = await getDocs(q);
        const fetchedUsers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          age: doc.data().age,
        }));
        setUsers(fetchedUsers);
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h2>Firestore Data</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FirestoreData;
  
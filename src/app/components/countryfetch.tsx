"use client"

import { db } from "../firebase.config"
import { collection, getDocs, query } from "firebase/firestore"
import { useState, useEffect } from "react"

export default function LocationData() {
    const [locations, setLocations] = useState<any[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const locationsCollection = collection(db, 'Country');
            const q = query(locationsCollection);
            const querySnapshot = await getDocs(q);
            const fetcshedLocations = querySnapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    name: doc.data().name,
                    capitalCity: doc.data().capitalCity
                }
            ));
            setLocations(fetcshedLocations)
        }

        fetchData();
    }, [])

    return (
        <div>
            <h2>Location Data</h2>
            <ul>
                {locations.map((location) => (
                    <li key={location.id}>
                        {location.name}
                        {location.capitalCity}
                    </li>
                ))}
            </ul>
        </div>
    )
    
}
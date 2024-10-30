import LocationData from "./components/countryfetch";
import FirestoreData from "./components/firestore";

export default function Home() {
  return(
    <div>
      <h1>Data tests</h1>
      <FirestoreData />
      <LocationData />
    </div>

  )
}

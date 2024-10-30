import LocationData from "./components/countryfetch";
import FirestoreData from "./components/firestore";
import LocationForm from "./location/page";

export default function Home() {
  return(
    <div>
      {/* <h1>Data tests</h1>
      <FirestoreData />
      <LocationData /> */}
      <LocationForm />
    </div>

  )
}

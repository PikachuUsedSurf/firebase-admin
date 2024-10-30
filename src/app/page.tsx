import LocationData from "./components/countryfetch";
import FirestoreData from "./components/firestore";

export default function Home() {
  return <div>hey
    <FirestoreData />
    <LocationData />
  </div>;
}

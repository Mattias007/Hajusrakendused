import RadarMap from "@/components/map";
import Weather from "@/components/weather";

export default function Home() {

  return (
    <>
    <a className="p-2" href="/api/auth/logout">Logout</a>
    <Weather/>
    <RadarMap/>
    </>
  );
}

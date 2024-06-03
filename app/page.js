import RadarMap from "@/components/map";
import Weather from "@/components/weather";

export default function Home() {

  return (
    <>
    <div className="flex justify-around">
    <Weather/>
    </div>
    <RadarMap/>
    </>
  );
}

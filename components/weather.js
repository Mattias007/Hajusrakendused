import Image from 'next/image'

async function getWeather() {
    "use server"
    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=58.25&lon=22.48&appid=77ad28c1c79452236940f98c74247976&units=metric',{ next: { revalidate: 3600 } })
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   
  export default async function Weather() {
    const data = await getWeather()
    const weather = data.weather[0]
    const main = data.main
    return (
        <div className="p-2 shadow-lg w-fit rounded m-2">
            <h1 className='text-center text-lg'>Kuressaare</h1>
            <h1>Current weather:</h1>
            <Image src={"/weather/" + weather.icon + ".png"}
                  width={100}
                  height={100}
                  alt="">
            </Image>
            <h1>Status: {weather.main}</h1>
            <h1>Description: {weather.description}</h1>
            <h1>Temp: {main.temp}°C</h1>
            <h1>Hum: {main.humidity}%</h1>
        </div>
    )
  }
"use server"
export async function formhandle(formData){
    const apiroute = formData.get("api")
    console.log(apiroute)
    if (apiroute == "https://hajus.ta19heinsoo.itmajakas.ee/api/movies"){
        const data = await fetch(apiroute + `/${formData.get("limit")}`,{ cache: 'force-cache' })
        let json = await data.json()
        delete json.time
        return json
    }
    else if(apiroute == "https://mannicoon.com/api/cats"){
        const data = await fetch(apiroute + `?limit=${formData.get("limit")}`,{ cache: 'force-cache' })
        let json = await data.json()

        json.cats.forEach(element => {
            element.image = "https://mannicoon.com/storage/images/cats/" + element.image
        })
        return json
    }
    else if(apiroute == "https://hajusrakendused.tak21maasik.itmajakas.ee/api/subjects"){
        const data = await fetch(apiroute + `?limit=${formData.get("limit")}`,{ cache: 'force-cache' })
        let json = await data.json()

        json.forEach(element => {
            element.image = "https://hajusrakendused.tak21maasik.itmajakas.ee/pictures/" + element.image
        })
        return json
    }
}

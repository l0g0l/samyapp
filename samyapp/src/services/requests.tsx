import { URL_WEATHER, URL_FORECAST, API_KEY } from "../utils/constants";

export const getCurrentWeatherData = async (city: any) => {
    try {
        const weather_res = await fetch(
            `${URL_WEATHER}?units=metric&lang=es&lat=${city.latitud}&lon=${city.longitud}&appid=${API_KEY}`
        );

        const weather_json = await weather_res.json();

        return weather_json;
    } catch (error) {
        console.log(error);
    }
};
export const getForecastWeatherData = async (city: any) => {
    try {
        const forecast_res = await fetch(
            `${URL_FORECAST}?units=metric&lang=es&lat=${city.latitud}&lon=${city.longitud}&cnt=7&appid=${API_KEY}`
        );

        const forecast_json = await forecast_res.json();

        return forecast_json;
    } catch (error) {
        console.log(error);
    }
};

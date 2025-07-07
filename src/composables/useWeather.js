import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWeather.js";

export const useWeather = async () => {
    const weatherStore = useWeatherStore();
    const temperatura = await getTemperatura();
    weatherStore.temperatura = temperatura;
};
import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import NSVuexPersistent from 'nativescript-vuex-persistent';

import filters from '../util/filters';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isBusy: true,
        settings: {
            temperature: "C",  // F = fahrenheit, C = celsius
            distance: "km",    // m = miles, km = kilometers
            date: 1,           // 1 = 15 januaro 2019,  2 = 1/15/2019, 3 = 15/1/2019
            time: 12           // 12 = 12 hour, 24 = 24 hour
        },
        weather: {
            location: {
                name: ""
            },
            weather: {
                description: "",
                humidity: 0,
                precip_chance: 0,
                temperature: 0,
                wind_speed: 0,
                wind_bearing: 0,
                time: 0,
                forecast: [
                    {
                        description: "",
                        temperature_high: 0,
                        temperature_low: 0,
                        time: 0
                    }
                ]
            }
        }
    },
    mutations: {
        SET_IS_BUSY(state, value) {
            state.isBusy = value;
        },
        SET_SETTINGS(state, value) {
            state.settings = value;
        },
        SET_WEATHER(state, value) {
            state.weather = value;
        }
    },

    getters: {
        IS_BUSY(state) {
            return state.isBusy;
        },
        SETTINGS(state) {
            return state.settings;
        },
        LOCATION_NAME(state) {
            return state.weather.location.name;
        },
        WEATHER_DATE(state) {
            return filters.formatDate(state.weather.weather.time, state.settings);
        },
        WEATHER_TIME(state) {
            return filters.formatTime(state.weather.weather.time, state.settings);
        },
        WEATHER_ICON(state) {
            return filters.mapWeatherIcon(state.weather.weather.description);
        },
        WEATHER_DESCRIPTION(state) {
            return filters.translateWeatherDescription(state.weather.weather.description);
        },
        WEATHER_TEMPERATURE_CURRENT(state) {
            return filters.convertTemperature(state.weather.weather.temperature, state.settings);
        },
        WEATHER_TEMPERATURE_HIGH(state) {
            return filters.convertTemperature(state.weather.weather.forecast[0].temperature_high, state.settings);
        },
        WEATHER_TEMPERATURE_LOW(state) {
            return filters.convertTemperature(state.weather.weather.forecast[0].temperature_low, state.settings);
        },
        WEATHER_PRECIP_CHANCE(state) {
            return Math.round(state.weather.weather.precip_chance * 100);
        },
        WEATHER_WIND_SPEED(state) {
            return filters.convertDistance(state.weather.weather.wind_speed, state.settings);
        },
        WEATHER_WIND_BEARING(state) {
            return filters.mapBearing(state.weather.weather.wind_bearing);
        },
        WEATHER_FORECAST(state) {
            return state.weather.weather.forecast.slice(1).map(
                forecast => {
                    return {
                        icon: filters.mapWeatherIcon(forecast.description),
                        day: filters.formatDay(forecast.time),
                        temperature_high: filters.convertTemperature(forecast.temperature_high, state.settings),
                        temperature_low: filters.convertTemperature(forecast.temperature_low, state.settings)
                    };
                }
            );
        }
    },

    plugins: [
        NSVuexPersistent([
            'isBusy',
            'weather',
            'settings'
        ])
    ]
});

Vue.prototype.$store = store;

export default store;
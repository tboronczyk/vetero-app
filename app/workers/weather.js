const getWeather = _ => postMessage({
    "location": {
        "name": "Seneca Knolls",
        "region": "New York",
        "country": "US"
    },
    "weather": {
        "description": "rain",
        "humidity": 0.86,
        "precip_chance": 1,
        "temperature": 44,
        "wind_speed": 12,
        "wind_bearing": 181,
        "time": 1548305890,
        "forecast": [
            {
                "description": "rain",
                "temperature_high": 42,
                "temperature_low": 37,
                "time": 1548219600
            },
            {
                "description": "rain",
                "temperature_high": 40,
                "temperature_low": 24,
                "time": 1548306000
            },
            {
                "description": "snow",
                "temperature_high": 26,
                "temperature_low": 11,
                "time": 1548392400
            },
            {
                "description": "partly-cloudy-day",
                "temperature_high": 21,
                "temperature_low": 15,
                "time": 1548478800
            },
            {
                "description": "partly-cloudy-day",
                "temperature_high": 26,
                "temperature_low": 12,
                "time": 1548565200
            },
            {
                "description": "partly-cloudy-day",
                "temperature_high": 26,
                "temperature_low": 12,
                "time": 1548565200
            }
        ]
    }
});

onmessage = msg => {
    switch (msg.data) {
        case "get-weather":
            getWeather();
    }
};
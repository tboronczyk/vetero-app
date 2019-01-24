export default {
    convertTemperature(temp, settings) {
        if (settings.temperature == "C") {
            temp = Math.round((temp - 32) * 5 / 9);
        }
        return temp;
    },

    convertDistance(dist, settings) {
        if (settings.distance == "km") {
            dist = Math.round(dist / 0.62137);
        }
        return dist;
    },

    formatTime(timestamp, settings) {
        return timestamp;
    },

    formatDate(timestamp, settings) {
        return timestamp;
    },

    formatDay(timestamp) {
        return timestamp;
    },

    mapBearing(bearing) {
        if (bearing > 337 || bearing < 23) {
            return "norde";
        } else if (bearing > 22 && bearing < 68) {
            return "nord-oriente";
        } else if (bearing > 67 && bearing < 113) {
            return "oriente";
        } else if (bearing > 112 && bearing < 158) {
            return "sud-oriente";
        } else if (bearing > 157 && bearing < 203) {
            return "sude";
        } else if (bearing > 202 && bearing < 248) {
            return "sud-okcidente";
        } else if (bearing > 247 && bearing < 293) {
            return "okcidente";
        } else if (bearing > 292 && bearing < 338) {
            return "nord-okcidente";
        }
    },

    mapWeatherIcon(desc) {
        switch (desc) {
            case "clear-day": return "\uf00d";
            case "clear-night": return "\uf02e";
            case "rain": return "\uf019";
            case "snow": return "\uf01b";
            case "sleet": return "\uf0b5";
            case "wind": return "\uf050";
            case "fog": return "\uf014";
            case "cloudy": return "\uf013";
            case "partly-cloudy-day": return "\uf002";
            case "partly-cloudy-night": return "\uf086";
            default: return desc;
        }
    },
    translateWeatherDescription(desc) {
        switch (desc) {
            case "clear-day": return "klara ĉielo";
            case "clear-night": return "klara ĉielo";
            case "rain": return "pluvo";
            case "snow": return "neĝo";
            case "sleet": return "glaciumo";
            case "wind": return "vento";
            case "fog": return "nebulo";
            case "cloudy": return "nuboj";
            case "partly-cloudy-day": return "malmultaj nuboj";
            case "partly-cloudy-night": return "malmultaj nuboj";
            default: return desc;
        }
    }
};
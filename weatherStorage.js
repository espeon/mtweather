//use array size of 12
class hourlyWeather{
    constructor(number,startTime,endTime,isDaytime,
                temperature,temperatureUnit,probabilityOfPrecipitation,
                dewpoint,relativeHumidity,windSpeed,windDirection,
                icon,shortForecast,detailedForecast){


                    this.number = number;
                    this.startTime = startTime;
                    this.endTime = endTime;
                    this.isDaytime =isDaytime;
                    this.temperature = temperature;
                    this.temperatureUnit = temperatureUnit;
                    this.probabilityOfPrecipitation= probabilityOfPrecipitation;
                    this.dewpoint=dewpoint;
                    this.relativeHumidity=relativeHumidity;
                    this.windSpeed=windSpeed;
                    this.windDirection=windDirection;
                    this.icon = icon;
                    this.shortForecast=shortForecast;
                    this.detailedForecast=detailedForecast;
    }
}
//use array size of 14
class longPeriodWeather{
    constructor(number,name,startTime,endTime,isDaytime,
        temperature,temperatureUnit,probabilityOfPrecipitation,
        dewpoint,relativeHumidity,windSpeed,windDirection,
        icon,shortForecast,detailedForecast){


            this.number = number;
            this.name = name;
            this.startTime = startTime;
            this.endTime = endTime;
            this.isDaytime =isDaytime;
            this.temperature = temperature;
            this.temperatureUnit = temperatureUnit;
            this.probabilityOfPrecipitation= probabilityOfPrecipitation;
            this.dewpoint=dewpoint;
            this.relativeHumidity=relativeHumidity;
            this.windSpeed=windSpeed;
            this.windDirection=windDirection;
            this.icon = icon;
            this.shortForecast=shortForecast;
            this.detailedForecast=detailedForecast;
    }
}
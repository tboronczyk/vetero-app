<template>
 <Page class="page weather-page" actionBarHidden="true">
  <ActivityIndicator row="1" :busy="$store.getters.IS_LOADING" width="100" height="100"></ActivityIndicator>
  <ScrollView v-if="!$store.getters.IS_LOADING">
   <StackLayout horizontalAlignment="center" class="page weather-page">
    <Label class="weather-location" horizontalAlignment="center" :text="$store.getters.LOCATION_NAME" />
    <Label class="weather-time" horizontalAlignment="center" :text="$store.getters.WEATHER_DATE + '  ' + $store.getters.WEATHER_TIME" />
    <StackLayout orientation="horizontal" horizontalAlignment="center">
     <Label class="weather-image weather-icon" :text="$store.getters.WEATHER_ICON" />
     <Label class="weather-temperature" :text="$store.getters.WEATHER_TEMPERATURE_CURRENT + '°'" />
    </StackLayout>
    <Label class="weather-description"  horizontalAlignment="center" :text="$store.getters.WEATHER_DESCRIPTION"/>
    <GridLayout class="weather-summary" columns="2*,3*" rows="*,*,*">
     <Label row="0" col="0"  horizontalAlignment="right" text="Temperaturo " />
     <Label row="0" col="1" :text="$store.getters.WEATHER_TEMPERATURE_HIGH + '° alta / ' + $store.getters.WEATHER_TEMPERATURE_LOW + '° malalta'" />
     <Label row="1" col="0" horizontalAlignment="right" text="Precipitato " />
     <Label row="1" col="1" :text="$store.getters.WEATHER_PRECIP_CHANCE + '% ebleco'" />
     <Label row="2" col="0" horizontalAlignment="right" text="Vento "/>
     <Label row="2" col="1" :text="$store.getters.WEATHER_WIND_SPEED + ' ' + $store.getters.SETTINGS.distance + '/h ' + $store.getters.WEATHER_WIND_BEARING" />
    </GridLayout>
    <Label class="divider" horizontalAlignment="center" text="---------------------" />
    <GridLayout class="weather-forecast" rows="*" columns="*,*,*,*,*">
     <StackLayout v-for="(forecast, index) in $store.getters.WEATHER_FORECAST" row="0" :col="index">
      <Label class="weather-forecast-icon weather-icon" horizontalAlignment="center" :text="forecast.icon" />
      <Label class="weather-forecast-day" horizontalAlignment="center" :text="forecast.time" />
      <Label class="weather-forecast-temperature" horizontalAlignment="center" :text="forecast.temperature_high" />
      <Label class="weather-forecast-temperature" horizontalAlignment="center" :text="forecast.temperature_low" />
     </StackLayout>
    </GridLayout>
   </StackLayout>
  </ScrollView>
 </Page>
</template>

<script>
    export default {
        name: "weather-page",
        data() {
            return {}
        }
    };
</script>

<style lang="scss" scoped>
 $font-size: 20;

 Label {
  font-size: $font-size;
 }

 .weather-icon {
  font-family: 'Weather Icons';
  font-size: 40;
 }

 .weather-location,
 .weather-description,
 .weather-forecast-temperature {
  font-size: $font-size * 1.2;
 }

 .weather-image {
  font-size: 60;
 }

 .weather-temperature {
  font-size: $font-size * 4.8;
  font-weight: bold;
 }

 .weather-forecast-day {
  font-weight: bold;
 }
</style>
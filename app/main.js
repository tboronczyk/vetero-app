import Vue from 'nativescript-vue';
import store from './store';
import { setTimeout } from "tns-core-modules/timer";
import WeatherWorker from 'nativescript-worker-loader!./workers/weather.js';
import WeatherPage from './pages/Weather'

import "./styles.scss";

Vue.config.silent = false;

const worker = new WeatherWorker();

worker.onmessage = msg => {
    store.commit("SET_WEATHER", msg.data);
    store.commit("SET_IS_LOADING", false);
};

setTimeout(_ => {
    store.commit("SET_IS_LOADING", true);
    worker.postMessage("get-weather");
}, 500);

new Vue({
    store,
    render: h => h(WeatherPage),
}).$start();

import { MapView } from "./js/MapView.js";
// import { IpGeolocation } from "./js/IpGeolocation.js";
import { MainApplicationView } from "./js/MainApplication.js";

new MainApplicationView('#ip-address .card-ips')

const map = new MapView()
// const ip = new IpGeolocation()

// ip.fetchIpAddress('186.219.220.13')
map.loadMap(-20.4435, -54.6478)
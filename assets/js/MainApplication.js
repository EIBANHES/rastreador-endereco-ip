import { IpGeolocation } from "./IpGeolocation.js";
import { MapView } from "./MapView.js";

export class MainApplication {
  constructor() {
    this.load()
    this.ipAddressField = document.querySelector('.ipAddressField')
    this.locationInput = document.querySelector('.locationInput')
    this.timezoneInput = document.querySelector('.timezoneInput')
    this.ispInput = document.querySelector('.ispInput')
    this.map = new MapView()
  }

  async load() {
    const request = new IpGeolocation();
    try {
      const { ip, country, region, city, lat, lng, timezone, isp } = await request.fetchAddress('');
      this.ipAddressField.textContent = ip
      this.locationInput.textContent = `${city}, ${region}`
      this.timezoneInput.textContent = `UTC${timezone}`
      this.ispInput.textContent = `${isp}`
      this.map.loadMap(lat, lng)

      return { ip, country, region, city, lat, lng, timezone, isp };
    } catch (error) {
      console.error('Error updating card:', error);
    }
  }

  // getCardElements() {

  // }

}
import { IpGeolocation } from "./IpGeolocation.js";
import { MapView } from "./MapView.js";

export class MainApplication {
  constructor() {
    this.load()
  }

  async load() {
    const request = new IpGeolocation();
    try {
      const { ip, country, region, city, lat, lng, timezone, isp } = await request.fetchAddress('');
      const ipAddressField = document.querySelector('.ipAddressField')
      ipAddressField.textContent = ip
      const locationInput = document.querySelector('.locationInput')
      locationInput.textContent = `${city}, ${region}`
      const timezoneInput = document.querySelector('.timezoneInput')
      timezoneInput.textContent = `UTC${timezone}`
      const ispInput = document.querySelector('.ispInput')
      ispInput.textContent = `${isp}`

      const map = new MapView()
      map.loadMap(lat, lng)

      return { ip, country, region, city, lat, lng, timezone, isp };
    } catch (error) {
      console.error('Error updating card:', error);
    }
  }

  // getCardElements() {

  // }

}
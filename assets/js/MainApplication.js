import { IpGeolocation } from "./IpGeolocation.js";
import { MapView } from "./MapView.js";

export class MainApplication {
  constructor() {
    this.load()
    this.ipAddressField = document.querySelector('.ipAddressField')
    this.locationInput = document.querySelector('.locationInput')
    this.timezoneInput = document.querySelector('.timezoneInput')
    this.ispInput = document.querySelector('.ispInput')
    this.inputSearch = document.querySelector('.search-form input')
    console.log(this.inputSearch);
    this.btnInout = document.querySelector('.search-form button')
    this.map = new MapView()
  }

  async load() {
    await this.fetchIpGeolocation()
  }

  async fetchIpGeolocation() {
    try {
      const { ip, country, region, city, lat, lng, timezone, isp } = await this.fetchAddressDetails('');
      this.updateCards(ip, country, region, city, timezone, isp)
      this.map.loadMap(lat, lng)
    } catch (error) {
      console.error('Error updating card:', error);
    }
  }

  async fetchAddressDetails() {
    const request = new IpGeolocation()
    try {
      return await request.fetchAddress('')
    } catch (e) {
      alert('Algo está errado')
    }
  }

  updateCards(ip, city, region, timezone, isp) {
    this.ipAddressField.textContent = ip
    this.locationInput.textContent = `${city}, ${region}`
    this.timezoneInput.textContent = `UTC${timezone}`
    this.ispInput.textContent = `${isp}`
  }
}
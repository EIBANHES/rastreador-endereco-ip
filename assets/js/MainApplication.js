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
    this.map = new MapView()
  }

  async load() {
    await this.fetchIpGeolocation('')
  }

  async fetchIpGeolocation(ipContent) {
    try {
      this.searchIp()
      const methodGetIp = new IpGeolocation()
      const { ip, country, region, city, lat, lng, timezone, isp } = await methodGetIp.getGeoLocation(ipContent);
      this.updateCards(ip, country, region, city, timezone, isp)
      this.map.loadMap(lat, lng)
    } catch (error) {
      console.error('Error updating card:', error);
    }
  }

  updateCards(ip, city, region, timezone, isp) {
    this.ipAddressField.textContent = ip
    this.locationInput.textContent = `${city}, ${region}`
    this.timezoneInput.textContent = `UTC${timezone}`
    this.ispInput.textContent = `${isp}`
  }

  async searchIp() {
    const btnInput = document.querySelector('.submit-btn')
    btnInput.addEventListener('click', () => {
      const inputSearch = document.querySelector('.input-field')
      inputSearch = inputSearch.value ? this.fetchIpGeolocation(inputSearch.value) : this.fetchIpGeolocation('')
    })
  }

}
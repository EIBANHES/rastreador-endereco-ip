import { API_KEY } from './config.js'

export class IpGeolocation {
  async fetchAddress(ipContent) {
    try {
      const urlApi = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipContent}`;
      const response = await fetch(urlApi);
      const data = await response.json();
      const { ip, location: { country, region, city, lat, lng, timezone }, isp } = data
      return {
        ip, country, region, city, lat, lng, timezone, isp
      }
    } catch (error) {
      console.error('Error fetching IP address:', error);
      throw error;
    }
  }

  async getGeoLocation(ipContent) {
    const request = new IpGeolocation()
    try {
      return await request.fetchAddress(ipContent)
    } catch (e) {
      throw new Error('Erro! Tente novamente')
    }
  }
}

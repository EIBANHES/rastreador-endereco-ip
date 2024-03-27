export class IpGeolocation {
  static fetchIpAddress(ip) {
    const urlApi = `https://geo.ipify.org/api/v2/country?apiKey=at_09MB4eA9dKH3CWFsKDcDQtI8jtbU0&ipAddress=${ip}`;
    return fetch(urlApi)
      .then(data => data.json())
      .then(({ ip, isp, location: { country, region, timezone } }) => ({
        ip,
        isp,
        country,
        region,
        timezone
      }))
  }
}
export class MapView {
  constructor() {
    this.map = L.map('map')
  }

  loadMap(lt, lg) {
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    L.marker([lt, lg]).addTo(this.map)
    this.map = this.map.setView([lt, lg], 13)
  }
}
import { IpGeolocation } from "./IpGeolocation.js";

// Aqui conterá a lógica
export class MainApplication {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = localStorage.getItem('@location-ips:') || []
  }

  async add(ip) {
    try {
      const ipAddres = await IpGeolocation.fetchIpAddress(ip)
      if (ipAddres.ip === undefined) {
        throw new Error('Este endereço de IP não existe')
      }
      this.entries = [ipAddres, ...this.entries]
    } catch (e) {
      console.log(e);
    }
  }
}



//Aqui conterá toda parte de eventos e carregamento de conteudo
export class MainApplicationView extends MainApplication {
  constructor(root) {
    super(root)
    this.ipAdress = document.querySelector('#ip-address')
    this.addIpOnInput()
  }

  addIpOnInput() {
    const btnInput = this.ipAdress.querySelector('.input-content button')
    btnInput.onclick = () => {
      const { value } = this.ipAdress.querySelector('.input-content input')
      this.add(value)
    }
  }

}

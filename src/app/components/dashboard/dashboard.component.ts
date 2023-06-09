import {Component} from '@angular/core';
import {ClimaService} from "../../services/clima.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  urlImagen = 'https://e7.pngegg.com/pngimages/377/815/png-clipart-computer-icons-weather-weather-heart-weather-forecasting.png'
  ciudad = ''
  temperatura = 0
  humedad = 0
  clima = ''
  query = false
  loading = false
  mostrarError = false

  constructor(private _climaService: ClimaService) {
  }

  obtenerClima() {
    console.log(this.ciudad)
    this.loading = true
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.loading = false
      this.query = true
      this.temperatura = data.main.temp - 273
      this.humedad = data.main.humidity
      this.clima = data.weather[0].main
    }, error => {
      console.log(error)
      this.loading = false
      this.error()
    })
  }

  error() {
    this.mostrarError = true
    setTimeout(() => {
      this.mostrarError = false
      this.ciudad = ''
    }, 3000)
  }
}

import axios from 'axios'
import { API_URL } from '../config'
import { getVideo } from '../models/Daily'
import renderDailyCard from './VideoCard'

const $ = document.querySelector.bind(document)
const http = axios.create({
  baseURL: API_URL,
})

const renderSearchVideo = (container: HTMLElement) => {
  const htmlContent = `
    <form id="search-form">
        <input type="text" id="filter" name="filter" placeholder="Digite o título do vídeo">
        <button>Pesquisar</button>
        
    </form>
    `

  container.innerHTML = htmlContent

const searchDaily = async () => {
  const url = new URL(window.location.href)
  const filter = url.searchParams.get('filter')

  if (filter) {
    

    const response = await http.get('/videos', {
      params: {
        search: filter,
      },
    })

    if (response.status == 200) {
      const { data } = response
      const resultArea = <HTMLDivElement>$('#result-area')
      resultArea.innerHTML = ''
      data.list.forEach((jsonObj: any) => {
        const daily = getVideo(jsonObj)
        renderDailyCard(daily, resultArea)
      })
    }
  }
}

searchDaily()

}

export default renderSearchVideo

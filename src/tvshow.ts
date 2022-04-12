import { getTvShow } from './models/TVShow'
import axios from 'axios'

import renderTVShowDetails from './components/TVShowDetails'
import { SINGLE_SHOW_API_URL } from './config'
import './style.css'

const $ = document.querySelector.bind(document)
const loading = <HTMLImageElement>$('#loading')
const searchTVShow = async (id: string) => {
  loading.style.display = 'block';
  const http = axios.create({
    baseURL: SINGLE_SHOW_API_URL,
  })

  const response = await http.get(`/${id}`)

  if (response.status == 200) {
    const { data } = response
    const tvShow = getTvShow(data)
    const container = <HTMLDivElement>$('#container')
    loading.style.display = 'none';
    
    renderTVShowDetails(tvShow, container)
  }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if (id) {
  searchTVShow(id)
}

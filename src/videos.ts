import { getVideo } from './models/Daily'
import axios from 'axios'

import renderTVShowDetails from './components/TVShowDetails'
import { API_URL} from './config'
import './style.css'

const $ = document.querySelector.bind(document)

const searchTVShow = async (id: string) => {
  
  const http = axios.create({
    baseURL:API_URL ,
  })

  const response = await http.get(`/${id}`)

  if (response.status == 200) {
    const { data } = response
    const video = getVideo(data)
    const container = <HTMLDivElement>$('#container')
   
    
    renderTVShowDetails(video, container)
  }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if (id) {
  searchTVShow(id)
}
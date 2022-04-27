import Daily from '../models/Daily'

const imageNotFound = '/img/image_not_found.png'

const renderDailyCard = (daily: Daily, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
      <a class="modal-link" id="modal-${daily.id}" href="tvshow.html?id=${
    daily.id
  }">
        <div class="show-banner">
            <img src="https:/www.dailymotion.com/thumbnail/video/${daily.id}" alt="${daily.title}">
        </div>

        <h3>${daily.title}</h3>
      </a>
    </div>
    `
  container.innerHTML += htmlContent
}

export default renderDailyCard

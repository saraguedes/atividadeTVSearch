import renderDailyDetails from '../models/Daily'



const renderDailyDetails =  (daily: Daily, container: HTMLElement) => {
  const htmlContent = `
  <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;"> 

  <iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${}?autoplay=1" width="100%" height="100%" allowfullscreen allow="autoplay">
  
  </iframe>
  
  </div>
  `

  container.innerHTML = htmlContent
}

export default renderDailyDetails

type Video = {
  id: number
  title: string
  channel: string
  owner: string
}

export const getVideo = (objJson: any): Video => {
  const {
    id,
    title,
    channel,
    owner,
  } = objJson

  const videO: Video = {
    id,
    title,
    channel,
    owner,
    
  }

  return videO
}

export default Video

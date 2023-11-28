import axios from "axios"

// review
// getData 보다는 getPopularVideos 같은 이름이 명확할 것 같아요.
async function getData() {
  try {
    const response = await axios.get("/videos/popular.json")
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

export default getData

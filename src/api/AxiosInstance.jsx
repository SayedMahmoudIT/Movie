import axios from "axios"
const AxiosInstance=axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/",
    headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWEyM2I3Y2JkNjJhYmI2YTU4ZDYyZDBjNjRkNDVjNCIsIm5iZiI6MTc0MDUwNDYxMC41NjQ5OTk4LCJzdWIiOiI2N2JkZmUyMjEyOTQyZTU0ZDczZDJhYTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Rq5pb8YGWNCsxMezDEJssZPQKq03ESNY3sqJo8CVyj8",
        Accept: 'application/json'
    },
})

export default AxiosInstance;
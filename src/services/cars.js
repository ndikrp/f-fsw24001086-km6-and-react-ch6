import axios from "axios";

export const getCars = (callback) => {
    axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
        .then((res) => {
            callback(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}
import axios from "axios";

const url = 'https://trust-api.herokuapp.com'

export class TrustClient {
    fetchList() {
        return axios.get(url + "/dapps")
    }

    fetchDApp(id) {
        return axios.get(url + "/dapps/" + id)
    }
    fetchBootstrap() {
        return axios.get(url + "/dapps-bootstrap")
    }
}
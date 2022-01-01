import axios from "axios"

export const fetchPoolBlockCounterPerDay = async ({ queryKey }) => {
    // eslint-disable-next-line no-unused-vars
    const [ _, poolName ] = queryKey
    let today = new Date();
    let lastMonth = new Date();
    const prev = new Date(new Date().setDate(0)).toISOString();
    const [pyyyy, pmm, pdd] = prev.split(/T|:|-/)
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + mm + dd;
    lastMonth = pyyyy + pmm + pdd;
    try {
        const response = await axios.get(`https://btc.com/service/poolBlockCounterPerDay?start=${lastMonth}&end=${today}&pool=${poolName}`, {headers: {'Access-Control-Allow-Origin': "*"}})
        return response.data
    } catch (err) {
        console.log(err)
    }
}

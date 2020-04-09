export default {
    loadData(): Promise<any> {
        const url = 'https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats'

        return fetch(url, {
            method: 'POST',
            mode: 'no-cors',
        })
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}

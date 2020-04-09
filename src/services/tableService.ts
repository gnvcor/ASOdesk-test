export default {
    // Access to fetch at 'https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats' from
    // origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin'
    // header is present on the requested resource. If an opaque response serves your needs, set
    // the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    // loadData(): Promise<any> {
    //     const url = 'https://hq.asodesk.com/api/us/demo/keyword-analytics/data-stats'
    //
    //     return fetch(url, {
    //         method: 'POST',
    //     })
    //         .then(response => response.json())
    //         .catch(error => console.log(error))
    // },
    loadData(): Promise<any> {
        const url = '/data/mock.json'

        return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error))
    }
}

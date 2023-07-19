
interface FetchResponse {
    status: string,
    data: number[]
}

async function fetchData(url: string): Promise<FetchResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url == 'success')
                resolve({ status: 'success', data: [1, 2, 3, 4, 5] })
            if (url == 'error')
                reject(new Error(`URL param value is 'error'`))

            reject(new Error('Be sure to only use accepted values (success, error)'))
        }, 2000)
    })

}

async function processData(fetchedData: FetchResponse): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const newDataArray = fetchedData.data.map(num => num * 2)

            resolve(newDataArray)
        }, 1000)
    })
}

async function displayData(processedData: number[]): Promise<void> {
    return new Promise((resolve) => {
        console.log(processedData)
        resolve()
    })
}

async function fetchAndProcessData(url: string) {
    try {
        const fetchedData = await fetchData(url)
        const processedData = await processData(fetchedData)
        await displayData(processedData)
    } catch (e) {
        console.log(e)
    }
}

fetchAndProcessData('success')
fetchAndProcessData('error')
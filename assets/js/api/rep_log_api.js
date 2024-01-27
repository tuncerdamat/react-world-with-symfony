function fetchJson(url, options) {
    let headers = { 'Content-Type': 'application/json' }
    
    if(options && options.headers){
        headers = {
            ...options.headers,
            ...headers
        }
        
        delete options.headers;
    }
    
    return fetch(url, Object.assign({
        credentials: 'same-origin',
        headers: headers
    }, options))
        .then(checkStatus)
        .then(response => {
            return response.text()
                .then(text => text ? JSON.parse(text) : '')
        })
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 400) {
        return response
    }

    const error = new Error(response.statusText)
    error.response = response

    throw error
}

/**
 * Returns a Promise object with the rep logs data
 *
 * @returns {Promise<any>}
 */
export function getRepLogs() {
    return fetchJson('/reps')
        .then(data => data.items);
}

export function deleteReplog(id) {
    return fetchJson(`/reps/${id}`, {
        method: 'DELETE'
    })
}

export function createRepLog(repLog) {
    return fetchJson('/reps', {
        method: 'POST',
        body: JSON.stringify(repLog),
    })
}

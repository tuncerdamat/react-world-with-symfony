function fetchJson(url, options) {
    return fetch(url, Object.assign({
        credentials: 'same-origin'
    }, options))
        .then(response => {
            return response.json()
        })
}

/**
 * Returns a Promise object with the rep logs data
 * 
 * @returns {Promise<any>}
 */
export function getRepLogs () {
    return fetchJson('/reps')
        .then(data => data.items);
}

export function deleteReplog(id) {
    return fetchJson(`/reps/${id}`, {
        method: 'DELETE'
    })
}

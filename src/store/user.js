const fromLocalStorage = (key, opt = () => {}) => {
    let obj = localStorage.getItem(key)

    if (obj == null) {
        obj = opt()
        obj = (typeof obj == 'object') ? JSON.stringify(obj) : obj
        
        localStorage.setItem(key, obj)
    }

    return obj
}

export default {
    namespaced: true,
    state: () => ({
        ...JSON.parse(fromLocalStorage('user', () => ({
            id: Date.now(),
            name: 'Anonymous'
        })))
    }),
    mutations: {
        SET_USER(state, payload) {
            Object.assign(state, payload)

            localStorage.setItem('user', JSON.stringify(payload))
        }
    },

}
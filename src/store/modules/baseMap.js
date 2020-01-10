const baseMap = {
    namespaced: true,
    state: {
        map: '', // 地图对象
    },
    mutations: {
        changeMap: (state, map) => {
            state.map = map
        }
    }
}
export default baseMap
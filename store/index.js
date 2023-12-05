export const state = () => ({
    newUser: false
})

export const mutations = {
    setNewUser(state, newUser) {
        state.newUser = newUser
    }
}
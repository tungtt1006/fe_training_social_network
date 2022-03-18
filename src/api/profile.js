import { coreApi } from './api.js'

export const profileApi = {
    getProfile() {
        return coreApi.get('profile')
    },
    updateProfile(profile, avatar) {
        let k = {}
        k.firstname = profile.firstName
        k.lastname = profile.lastName
        k.phone = profile.phoneNumber
        k.address = profile.address
        k.gender = profile.gender
        k.birthday = profile.birthday
        if (avatar) {
            k.avatar = avatar
        }
        return coreApi.put('profile', k)
    }
}

import { coreApi } from './api.js'

export const profileApi = {
    getProfile() {
        return coreApi.get('profile')
    },
    updateProfile(profile, avatar) {
        let formData = new FormData()
        formData.append('_method', 'PUT')
        formData.append('firstname', profile.firstName)
        formData.append('lastname', profile.lastName)
        formData.append('phone', profile.phoneNumber)
        formData.append('address', profile.address)
        formData.append('gender', profile.gender)
        formData.append('birthday', profile.birthday)
        if (avatar) {
            formData.append('avatar', avatar)
        }
        return coreApi.post('profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

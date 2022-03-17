<template>
    <div>
        <div v-if="profile.avatar != ''">
            <img
                :src="profile.avatar"
                alt="Fail avatar"
                width="100px"
                height="100px"
            >
        </div>
        <b-form @submit.prevent="onSubmit" class="p-4">
            <b-form-group>
                <input
                    type="file"
                    size="lg"
                    name="avatar"
                    ref="avatar"
                >
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.firstName"
                    size="lg"
                    type="text"
                    placeholder="Enter first name"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.lastName"
                    type="text"
                    size="lg"
                    placeholder="Enter last name"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.phoneNumber"
                    type="text"
                    size="lg"
                    placeholder="Enter phone number"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.address"
                    type="text"
                    size="lg"
                    placeholder="Enter address"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.gender"
                    type="text"
                    size="lg"
                    placeholder="Enter gender"
                    required
                ></b-form-input>
            </b-form-group>
            <b-form-group>
                <b-form-input
                    v-model="profile.birthday"
                    type="datetime"
                    size="lg"
                    required
                ></b-form-input>
            </b-form-group>
            <b-row class="mt-5">
                <b-col cols="5"></b-col>
                <b-col cols="2">
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-col>
            </b-row>
        </b-form>
    </div>
</template>

<script>
import { profileApi } from '../api/profile.js'

export default {
    data() {
        return {
            profile: {
                birthday: '',
                firstName: '',
                gender: '',
                lastName: '',
                phoneNumber: '',
                address: '',
                avatar: ''
            }
        }
    },
    created() {
        profileApi
            .getProfile()
            .then(response => {
                let profile = response.data
                this.profile.firstName = profile.first_name
                this.profile.lastName = profile.last_name
                this.profile.phoneNumber = profile.phone_number
                this.profile.address = profile.address
                this.profile.gender = profile.gender
                this.profile.birthday = profile.birthday
                this.profile.avatar = 'http://localhost:8080/storage/images/' + profile.avatar
            })
            .catch(error => {
                console.log(error)
                alert("Fail")
            })
    },
    methods: {
        onSubmit() {
            profileApi
                .updateProfile(this.profile, this.$refs.avatar.files[0])
                .then(response => {
                    this.profile.avatar = 'http://localhost:8080/storage/images/' + response.data.avatar
                    this.$refs.avatar.value = null
                })
                .catch(error => {
                    console.log(error)
                    alert("Fail")
                })
        }
    }
}
</script>

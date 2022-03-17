<template>
    <b-row class="mt-5">
        <b-col cols="3"></b-col>
        <b-col cols="6" class="shadow">
            <h1 class="mt-4 text-center">Login</h1>
            <b-form @submit.prevent="onSubmit" class="p-4">
                <b-form-group>
                    <b-form-input
                        v-model="form.email"
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-input
                        v-model="form.password"
                        type="password"
                        size="lg"
                        placeholder="Enter password"
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
        </b-col>
        <b-col cols="3"></b-col>
    </b-row>
</template>

<script>
import { authApi } from '../api/auth.js'

export default {
    data() {
        return {
            form: {
                email: 'euna.abbott@example.org',
                password: '12345678',
            }
        }
    },
    methods: {
        onSubmit() {
            authApi
                .login({
                    email: this.form.email,
                    password: this.form.password
                })
                .then(response => {
                    localStorage.setItem('jwt', response.data.access_token)
                    this.$router.push({ name: 'home' })
                })
                .catch(error => {
                    console.log(error)
                    alert("Login fail")
                })
        }
    }
}
</script>

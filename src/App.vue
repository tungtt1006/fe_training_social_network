<template>
    <div id="app">
        <b-container fluid>
         <router-link to="/">Go to Home</router-link>
         <router-link to="/login" class="ms-3 fw-bold">Go to Login</router-link>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

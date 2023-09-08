<template>
    <v-card class="mx-auto my-12">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

        <v-card-item>
            <v-card-title>{{ title }}</v-card-title>

            <v-card-subtitle>
                <span class="me-1">{{ label }}</span>
                <v-icon color="error" icon="fa fa-fire" size="small">
                </v-icon>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <slot name="body"></slot>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-actions>
            <slot name="footer"></slot>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    props: {
        title: { type: String, required: true },
        label: { type: String, required: false },
    },
    methods: {
        goTo() {
        }
    }
})
</script>
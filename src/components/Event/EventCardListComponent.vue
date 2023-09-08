<template>
    <v-row>
        <v-col v-for="(d, i) in data" :key="i" cols="6">
            <event-card-component :title="d[titlePropName]" :label="labelPropName ? d[labelPropName] : ''">
                <template #body>{{ textPropName ? d[textPropName] : '' }}</template>
                <template #footer>
                    <router-link v-if="d?.id" :to="'/booking/' + d?.id" class="v-btn">Reserver de la place</router-link>
                </template>
            </event-card-component>
        </v-col>
    </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import EventCardComponent from './EventCardComponent.vue';


export default defineComponent({
    components: {
        EventCardComponent
    },
    props: {
        data: { type: Object, required: true },
        titlePropName: { type: String, required: true },
        labelPropName: { type: String, required: false },
        textPropName: { type: String, required: false },
    },
})
</script>
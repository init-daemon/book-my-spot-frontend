<template>
  <v-app>
    <v-container>
      <EventCardListComponent :data="data" label-prop-name="label" title-prop-name="title" text-prop-name="text" id="">
      </EventCardListComponent>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { ref } from 'vue';
import EventCardListComponent from '@/components/Event/EventCardListComponent.vue';

const data = ref([
  {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias optio voluptatem? Hic qui deleniti fuga beatae aliquid sit nemo laborum, molestias tenetur! Earum provident quam voluptatum minus asperiores dicta.',
    label: 'Un évènement',
    title: "Un titre",
    id: 1
  }
])
</script>

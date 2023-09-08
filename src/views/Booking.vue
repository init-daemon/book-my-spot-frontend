<template>
  <v-app>
    <v-container>
      <EventCardComponent :title="data.title" :lable="data.label">
        <template #body>
          {{ data.text }}
        </template>
        <template #footer>
          <v-container>
            <v-form>
              <v-row v-if="!isConctactSaved">
                <template v-for="(contact, i) in form.contacts" :key="i">
                  <v-col cols="12" md="10">
                    <v-text-field label="Adresse e-mail ou numéro de téléphone" required v-model="form.contacts[i]"
                      @keypress.enter="addContact"></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2">
                    <v-btn variant="plain" v-if="form.contacts.length > 1" icon="mdi-minus" danger align-center
                      elevation="2" @click="removeContact(i)"></v-btn>
                    <v-btn variant="plain" icon="mdi-plus" info align-center elevation="2" @click="addContact"></v-btn>
                  </v-col>
                </template>
                <v-col cols="12" md="12" v-if="canValidateContact" class="text-end">
                  <v-btn @click="isConctactSaved = true" variant="outlined" color="primary">Valider</v-btn>
                </v-col>
              </v-row>
              <v-row v-else-if="!isUserInfoSaved">
                <v-col cols="12" md="6">
                  <v-text-field label="First name" required v-model="form.firstname"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Last name" required v-model="form.lastname"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Company" required v-model="form.company_community"></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field label="Poste" required v-model="form.position_in"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-row justify-space-between>
                    <v-btn @click="isConctactSaved = false" variant="outlined" color="error">Revenir en arrière</v-btn>
                    <v-btn variant="outlined" color="primary" @click="isUserInfoSaved = true"
                      v-if="userInfoCompleted">Valider</v-btn>
                  </v-row>
                </v-col>
              </v-row>

              <template v-else>
                <template v-for="(ateliers, date) in eventParts" :key="date">
                  <v-item-group v-model="selection" multiple>

                    <h4>{{ date }}</h4>
                    <v-container v-for="(atelier, i) in ateliers" :key="i">
                      <label :for="'_' + atelier.time" :link="true">
                        <input :id="'_' + atelier.time" type="checkbox" :name="'atelier_' + atelier.id"
                          :value="atelier.id" v-model="selection">
                        à <strong>{{
                          atelier.time
                        }}</strong>: {{ atelier.atelier }}
                      </label>
                    </v-container>
                    <hr>
                  </v-item-group>
                </template>

                <v-row justify-space-between class="mt-2">
                  <v-btn @click="isUserInfoSaved = false" variant="outlined" color="error">Revenir en arrière</v-btn>
                  <!-- <v-btn variant="outlined" color="primary">Valider</v-btn> -->
                </v-row>

              </template>


            </v-form>
          </v-container>
        </template>
      </EventCardComponent>
    </v-container>
  </v-app>
</template>

<script lang="ts" setup>
// import HelloWorld from '@/components/HelloWorld.vue'
import { computed, ref } from "vue";
import EventCardComponent from "@/components/Event/EventCardComponent.vue";

const isConctactSaved = ref(false);
const isUserInfoSaved = ref(false);
const data = ref({
  text:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam molestias optio voluptatem? Hic qui deleniti fuga beatae aliquid sit nemo laborum, molestias tenetur! Earum provident quam voluptatum minus asperiores dicta.",
  label: "Un évènement",
  title: "Un titre",
});

const selection = ref([3, 2] as Array<number>);

const eventParts = ref({
  "mercredi 27 septembre": [
    {
      "id": 1,
      "time": "17H00-17h30",
      "atelier": "Conférence d’ouverture : enjeux et perspectives du co-développement économique et d’affaires Tamatave – Ile de la Réunion : président GEPAT, Secrétaire général de la Région Est, président du Club Export",
    },
    {
      "id": 2,
      "time": "17H30-18h30",
      "atelier": "Tournée des stands avec présentation de l’entreprise par chaque membre de la délégation "
    }
  ],
  "Jeudi 28 septembre": [
    {
      "id": 3,
      "time": "8H30-9h00",
      "atelier": "Présentation et mission de nos partenaires : GEPAT, CCIFM, CCIT, JPM"
    },
    {
      "id": 4,
      "time": "9H00-9H45",
      "atelier": "Pitch de présentation des entreprises de la délégation"
    }
  ]
});

const form = ref({
  contacts: [""] as Array<string>,
  firstname: "",
  lastname: "",
  company_community: "",
  position_in: "",
});


const canValidateContact = computed(() => {
  let contactIsNotEmpty = false;
  form.value.contacts.forEach(contact => {
    if (contact.length > 0) contactIsNotEmpty = true;
  });
  return contactIsNotEmpty
});

const userInfoCompleted = computed(() => {
  return form.value.firstname.length > 0;
});


const addContact = () => {
  form.value.contacts.push("");
};
const removeContact = (index: number) => {
  form.value.contacts.splice(index, 1);
};

const toggleSelect = (id: number) => {
  selection.value.push(id);
  console.log("selection de ", id)
}
</script>

<template>
    <div>
        <ion-label class="ion-margin-bottom">{{ message }}</ion-label> 
        <ion-searchbar v-if="tabName == 'commune'" v-model="query" autofocus show-cancel-button="never" color="light"></ion-searchbar>
        <ion-item v-else class="ion-margin-top">
            <ion-label>{{ tabName == 'departement' ? 'Département' : 'Région' }}</ion-label>
            <ion-select v-model="query" interface="action-sheet" placeholder="Sélectionner">
                <ion-select-option v-for="option in options" :key="option" :value="option.code">{{ option.code}} - {{ option.nom}}</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-button @click="handle_function_call" expand="block" :disabled="!query" >Rechercher</ion-button>    
    </div>
</template>

<script>
import { IonSearchbar, IonButton, IonLabel, IonSelect, IonSelectOption, IonItem, toastController } from '@ionic/vue';

    export default {
        name: 'Search',
        props:['message', 'tabName'], 
        components: {
            IonSearchbar, 
            IonButton,
            IonLabel,
            IonSelect,
            IonSelectOption,
            IonItem
        },
        data(){
            return {
                query: '',
                options: null,
            }
        },
        methods: {
            handle_function_call(){
                switch(this.tabName){
                    case 'commune':{
                        // Vérifier si code postal ou nom de commune (donc check si parseInt ok ou si c'est du texte pur)
                        let parsed = parseInt(this.query);
                        isNaN(parsed) ? this.fetchCommuneData(this.query, false) : this.fetchCommuneData(parsed, true);
                        break;
                    }

                    case 'departement': {
                        this.fetchDepartementData();
                        break;
                    }

                    case 'region': {
                        this.fetchRegionData();
                        break;
                    }

                    default:
                        break;
                }
            },
            fetchCommuneData(request, isNb){
                fetch(`https://geo.api.gouv.fr/communes?${ isNb ? 'codePostal=' + request : 'nom=' + request }&fields=code,nom,population,codesPostaux,surface,departement,region&boost=population`)
                .then(res => res.json())
                .then(json => {
                    if(!json[0]){
                        this.openToast("Erreur lors de la récupération des données...");
                        this.query ="";
                        return;
                    }
                    this.$emit('fetch', json);
                    this.query = '';
                })
            },
            fetchDepartementData(){
                fetch(`https://geo.api.gouv.fr/departements/${this.query}/communes`)
                .then(res => res.json())
                .then(json => {
                    if(!json[0]){
                        this.openToast("Erreur lors de la récupération des données...");
                        this.query ="";
                        return;
                    }
                    this.$emit('fetch', json);
                })
            },
            fetchRegionData(){
                fetch(`https://geo.api.gouv.fr/regions/${this.query}/departements`)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    if(!json[0]){
                        this.openToast("Erreur lors de la récupération des données...");
                        this.query ="";
                        return;
                    }
                    this.$emit('fetch', json);
                })
            },
            async openToast(msg) {
                const toast = await toastController
                    .create({
                    message: msg,
                    duration: 2000,
                    color: 'danger',
                    cssClass: 'ion-text-center'
                    })
                return toast.present();
            }
        },
        mounted(){
            switch (this.tabName) {
                case 'region':
                    fetch('https://geo.api.gouv.fr/regions')
                    .then(res => res.json())
                    .then(json => {
                        if(!json[0]){
                            this.openToast("Erreur lors de la récupération des données...");
                            this.query ="";
                            return;
                        }
                        this.options = json
                    })
                    break;

                case 'departement':
                    fetch('https://geo.api.gouv.fr/departements')
                    .then(res => res.json())
                    .then(json => {
                        if(!json[0]){
                            this.openToast("Erreur lors de la récupération des données...");
                            this.query ="";
                            return;
                        }
                        this.options = json
                    })
                    break;

                default:
                    break;
            }
        }
    }
</script>

<style scoped>
ion-button{
    margin: 0 12px;
}
</style>
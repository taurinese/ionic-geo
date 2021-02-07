<template>
    <div>
        <ion-text color="primary"> 
            <h2>{{ result.length }} résultat{{ result.length > 1 ? 's': ''}}</h2>
        </ion-text>
        <ion-card v-for="data in result" :key="data">
            <ion-card-header>
                <ion-card-subtitle>{{ data.code }}</ion-card-subtitle>
                <ion-card-title>{{ data.nom }}</ion-card-title>
            </ion-card-header>
            <ion-card-content v-if="data.population">
                <ion-list>
                    <ion-item>
                        <ion-label>Population</ion-label>
                        <ion-note color="medium" slot="end">{{ data.population }}</ion-note>
                    </ion-item>
                    <ion-item v-if="data.departement">
                        <ion-label>Département</ion-label>
                        <ion-note color="medium" slot="end">{{ data.departement.code }}</ion-note>
                    </ion-item>
                    <ion-item v-else>
                        <ion-label>Département</ion-label>
                        <ion-note color="medium" slot="end">{{ data.codeDepartement }}</ion-note>
                    </ion-item>
                    <ion-item v-if="data.region">
                        <ion-label>Région</ion-label>
                        <ion-note color="medium" slot="end">{{ data.region.code }}</ion-note>
                    </ion-item>
                    <ion-item v-else>
                        <ion-label>Région</ion-label>
                        <ion-note color="medium" slot="end">{{ data.codeRegion }}</ion-note>
                    </ion-item>
                    <ion-item lines="none" >
                        <ion-grid>
                            <ion-row>
                                <ion-label>Codes postaux</ion-label>
                            </ion-row>
                            <ion-row id="codes">
                                <span v-for="(codePostal, index) in data.codesPostaux" :key="index">
                                {{ codePostal }} {{ index != data.codesPostaux.length - 1? ', ':'' }} 
                            </span>
                            </ion-row>
                        </ion-grid>
                    </ion-item>
                </ion-list>
            </ion-card-content>
        </ion-card>
    </div>
</template>

<script>

import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonNote, IonText, IonGrid, IonRow } from '@ionic/vue';

    export default {
        data(){
            return{

            }
        },
        components: {
            IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonNote, IonText, IonGrid, IonRow
        },
        props: ['result'],
        mounted(){
            console.log(this.result);
        }
    }
</script>

<style scoped>
    #codes {
        /* margin-top: 16px; */
        margin-bottom: 16px;
        color: #92949c
    }
    ion-grid {
        padding:0;
    }
    ion-row > ion-label{
        margin: 10px 8px 10px 0;
    }
</style>
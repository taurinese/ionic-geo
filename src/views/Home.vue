<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large" class="ion-text-center">Ionic-Geo</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid>
                <ion-col class="ion-text-center">
                    <ion-row>
                        <h1>Bienvenue sur Ionic-Geo!</h1>
                    </ion-row>
                    <ion-row>
                        <p>Grâce à cette application, vous pourrez rechercher :</p>
                    </ion-row>
                    <ion-row>
                        <ul>
                            <li> Une commune par son code postal ou son nom</li>
                            <li> Des communes par département</li>
                            <li> Des départements par région</li>
                        </ul>
                    </ion-row>
                </ion-col>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script>
    import { IonPage, IonGrid, IonRow, IonCol, IonContent, IonHeader, IonToolbar, IonTitle } from '@ionic/vue';
    export default {
        name:"Home",
        components: {
            IonPage,
            IonGrid,
            IonRow,
            IonCol,
            IonContent,
            IonHeader,
            IonToolbar,
            IonTitle
        }
    }
</script>

<style scoped>
    h1{
        margin:auto;
    }
    ion-grid {
        text-align: center;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    ul{
        list-style: inside square;
        text-align:left;
    }

</style>
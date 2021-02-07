<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar>

        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="communes" href="/tabs/communes">
          <ion-icon :icon="locationOutline" />
          <ion-label>Communes</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="departements" href="/tabs/departements">
          <ion-icon :icon="locateOutline" />
          <ion-label>Départements</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="regions" href="/tabs/regions">
          <ion-icon :icon="flagOutline" />
          <ion-label>Régions</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { locateOutline, flagOutline, locationOutline, homeOutline } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      locateOutline, 
      flagOutline, 
      locationOutline,
      homeOutline
    }
  }
}
</script>
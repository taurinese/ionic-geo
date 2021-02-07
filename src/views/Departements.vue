<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" class="ion-text-center">Départements</ion-title>
        </ion-toolbar>
      </ion-header>
      <Search id="container" @fetch="sendToDisplay" :message="'Veuillez sélectionner un département..'" :tabName="'departement'"  v-if="!result"></Search>
      <div v-if="result" id="display">
        <ion-button @click="newSearch" color="primary">Nouvelle recherche</ion-button>
        <Display :result="result" ></Display>
      </div> 
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import Search from '@/components/Search.vue';
import Display from '@/components/Display.vue';

export default  {
  name: 'Departements',
  components: {  Search, Display, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButton },
  methods: {
    sendToDisplay(data){
      this.result = data;
    },
    newSearch(){
      this.result = null;
    }
  },
  data() {
    return {
      result: null
    }
  }
}
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#display{
  text-align: center;
  padding-top:16px;
}
</style>
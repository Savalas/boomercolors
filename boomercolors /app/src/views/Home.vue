<template>
  <div class="home">
  <Topbar 
    :selected-card="selectedCard"
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-12" style="padding-bottom: 100px;">
          <h3>Choose your favorite color: </h3>
          <span class="bottom-border"></span>
        </div>
      </div>
      <div class="row">
        <div class="session-card-section">
          <color-card v-for="(card, i) in cards"
                      :key="i"
                      :card="card"
                      @selectedCard ="handleCardSelection"
          />
        </div>
      </div>
    </div>
     <div class="footer">
        <p>Copyright ©2022 BoomerColor. All Rights Reserved</p>
     </div>
  </div>
</template>

<script>
import ColorCard from "@/components/home/ColorCard";
import Topbar from '@/components/topbar/Topbar';
import { getAllCards } from '../services/CardService';

export default {
  name: 'Home',
  data(){
    return {
      selectedCard: null,
      cards: []
    }
  },
  components: {
    ColorCard,
    Topbar
  },
  mounted () {
    this.getAllCards();
  },
  methods: {
    getAllCards() {
      getAllCards().then(response => {
        console.log(response);
        this.cards = response;
      })
    },
    handleCardSelection(card) {
      this.selectedCard = card;
    }
  },
}
</script>

<style lang="scss" scoped>
  .home{
    background: #F3F6F9;
    min-height: 100vh;

    .footer p{
      margin: 0;
    }
  }
</style>

<template>
    <div class="top-bar">
          <h3>
            BoomerColor
            <span v-if="selectedCard" class="small">
              <i>My favorite color is <span :style="{'color': selectedCard.bg}"> {{ selectedCard.name }} </span> </i>
            </span>
          </h3>
    </div>
</template>

<script>
    export default {
        name: "Topbar",
        props: {
        selectedCard: {
          type: Object,
          default: () => { return {} }
        }
      }
    }
</script>

<style lang="scss" scoped>
    .top-bar{
        height: 60px;
        padding: 20px;
        box-shadow: 0px -2px 8px 0px #ccc;
        display: flex;
        align-items: center;
        position: fixed;
        width: 100%;
        background: white;
        z-index: 7;
        .logo-small{
           display: none;
        }
    }
</style>
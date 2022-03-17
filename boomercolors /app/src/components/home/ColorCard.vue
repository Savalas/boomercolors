<template>
    <div
        class = "color-card"
        @click = "handleClick"
        :style="{'background-color': card.bg}"
    >
    </div>

</template>

<script>
    export default {
      name: "ColorCard",
      props: {
        card: {
          type: Object,
          default: () => {}
        }
      },
      mounted () {
        this.audio = new Audio('/resources/click.wav');
      },
      methods: {
            handleClick() {
              this.$emit("selectedCard", this.card);
              this.audio.play();
            }
        },
      data(){
        return {
          audio : null,
          myStyle:{
            backgroundColor:"#16a085"
          },
          isSelected: false
        }
      }
    }
</script>

<style lang="scss" scoped>
    .color-card{
        cursor: pointer;
        float: left;
        height: 150px;
        border-radius: 8px;
        padding: 30px;
        margin-bottom: 16px;
      &:hover{
        box-shadow: 0 8px 12px 0 rgba(85, 126, 251, 0.75);

      }
    }

    @media (max-width: 786px) {
        .color-card{
            grid-template-columns: 100px 1fr;
            height: unset;
        }
    }
    @media (max-width: 504px) {
        .color-card{
            grid-template-columns:  1fr;
            height: unset;
            .time-day{
                flex-direction: row;
                justify-content: space-between;
            }
        }
    }
</style>
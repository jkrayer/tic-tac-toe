<template lang="html">
  <div class="board">
    <template v-for="(row, y) in board">
      <div class="cell" v-for="(char, x) in row" :key="[y, x].join('')">
        <btn
          @click="play([x, y])"
          :disabled="char !== '' || winner"
          :symbol="char"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Btn from "./Btn.vue";

export default {
  components: { Btn },

  computed: {
    ...mapState(["board", "winner"])
  },

  methods: {
    play(coordinates) {
      console.log(32, "play");
      this.$store.dispatch("play", coordinates);
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  display: flex;
  flex-wrap: wrap;
  width: 82vw;
  height: 82vw;
  // max-width: ;
  margin-right: auto;
  margin-left: auto;
  background-color: #222;
}
.cell {
  box-sizing: border-box;
  width: 33.33333%;
  height: 33.33333%;
  padding: 2px;
}
</style>

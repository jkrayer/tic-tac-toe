<template lang="html">
  <div class="board">
    <template v-for="(row, y) in board">
      <div v-for="(char, x) in row" :key="[y, x].join('')" class="cell">
        <btn
          @click="play([x, y])"
          :disabled="char !== '' || winner"
          :symbol="char"
        />
      </div>
    </template>
    <div class="strike" :class="winningClass" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Btn from "./Btn.vue";

export default {
  components: { Btn },

  computed: {
    ...mapState(["board", "winner"]),

    winningClass() {
      const { winner } = this;
      return winner ? `${winner[2]}-${winner[3]}` : "";
    }
  },

  methods: {
    play(coordinates) {
      this.$store.dispatch("play", coordinates);
    }
  }
};
</script>

<style lang="scss" scoped>
.board {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: 82vw;
  max-height: 400px;
  background-color: #222;
}

.cell {
  box-sizing: border-box;
  width: 33.33333%;
  height: 33.33333%;
  padding: 2px;
}

// TODO Add Strike - A Line through the winning row
.strike {
  position: absolute;
  background-color: #222;
}

.row-1,
.row-2,
.row-3 {
  width: 95%;
  height: 7px;
  left: 2.5%;
}
.row-1 {
  top: 16%;
}
.row-2 {
  top: 49%;
}
.row-3 {
  top: 82%;
}

.col-1,
.col-2,
.col-3 {
  width: 7px;
  height: 95%;
  top: 2.5%;
}
.col-1 {
  left: 16%;
}
.col-2 {
  left: 49%;
}
.col-3 {
  left: 82%;
}

.dia-1,
.dia-2 {
  left: -5%;
  top: 49%;
  width: 110%;
  height: 7px;
}
.dia-1 {
  transform: rotate(45deg);
}
.dia-2 {
  transform: rotate(-45deg);
}
</style>

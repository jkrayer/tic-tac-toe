<template lang="html">
  <div class="board">
    <template v-for="(row, y) in board">
      <div v-for="(char, x) in row" :key="[y, x].join('')" class="cell">
        <btn @click="play([x, y])" :disabled="gameOver" :symbol="char" />
      </div>
    </template>
    <modal />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Btn from './Btn.vue';
import Modal from './Modal.vue';

export default {
  components: {
    Btn,
    Modal
  },

  computed: {
    ...mapGetters(['gameOver']),
    ...mapState(['board', 'winner']),

    winningClass() {
      const { winner } = this;
      return winner ? `${winner[2]}-${winner[3]}` : '';
    }
  },

  methods: {
    play(coordinates) {
      this.$store.dispatch('play', coordinates);
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
</style>

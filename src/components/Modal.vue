<template>
  <div v-if="gameOver" class="overlay">
    <div class="content">
      <p class="main">
        {{ winMessage }}
      </p>
      <p data-testid="tally">
        Wins: {{ winTally[0] }} <span class="super">|</span> {{ winTally[1] }}
      </p>
      <button @click="handleClick" type="button">
        Play Again
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'Modal',

  computed: {
    ...mapGetters(['gameOver']),
    ...mapState(['currentPlayer', 'winner', 'wins']),

    winMessage() {
      const { winner, currentPlayer } = this;
      return winner === true ? `${currentPlayer} wins!` : 'X and 0 tie!';
    },

    winTally() {
      return Object.entries(this.wins).map(a => a.join(' '));
    }
  },

  methods: {
    handleClick() {
      this.$store.dispatch('reset');
    }
  }
};
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  color: #fff;
  text-shadow: 1px 1px #000;
  line-height: 1;

  > p {
    margin-top: 0;
    margin-bottom: 0.75rem;
  }
}

.main {
  font-size: 1.5rem;
  font-weight: 700;
}

.super {
  position: relative;
  top: -2px;
  display: inline-block;
}
</style>

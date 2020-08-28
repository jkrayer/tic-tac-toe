<template>
  <button
    type="button"
    class="button"
    :class="symbol"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div />
    <div />
  </button>
</template>

<script>
export default {
  name: 'Btn',

  props: {
    symbol: {
      type: String,
      default: '',
      valiator: val => ['', 'x', 'o'].includes(val)
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  height: 100%;
  padding: 0;
  border: none;
  font-size: 1rem;

  > div {
    display: inline-block;
    width: 100%;
  }
}

.X {
  > div {
    height: 0.5em;
    background-color: red;
  }

  :first-child {
    transform: rotate(45deg) translate(7px, 5px);
  }

  :last-child {
    transform: rotate(-45deg) translate(5px, -10px);
  }
}

.O {
  > div {
    box-sizing: border-box;
    width: 90%;
    height: 90%;
    border: solid 0.5em green;
    border-radius: 50%;
  }

  :last-child {
    display: none;
  }
}
</style>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { useCounter } from "../composables/useCounter";

export default {
  setup() {
    // Use the useCounter composable
    const { counter, increment, decrement } = useCounter();

    // Return data to the template
    return { counter, increment, decrement };
  },
};
</script>

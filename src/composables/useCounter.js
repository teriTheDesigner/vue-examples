// src/composables/useCounter.js
import { ref } from 'vue';

// Define a composable function to manage a counter
export function useCounter(initialValue = 0) {
    // Define reactive state using ref
    const counter = ref(initialValue);

    // Define methods to manipulate the counter
    const increment = () => {
        counter.value++;
    };

    const decrement = () => {
        counter.value--;
    };

    // Return the counter value and methods as an object
    return {
        counter,
        increment,
        decrement
    };
}

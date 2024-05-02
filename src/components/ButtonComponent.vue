<script setup>

const props = defineProps({
    title: String
})
</script>
<template>
    <div>
        <button>{{ title }}</button>
    </div>
</template>

<style scoped>
button {
    background-color: var(--clr-primary);
    padding: 2rem;
    width: 100%;
    border-radius: 1.5rem;
    border: 0;
    outline: 0;
    font-size: var(--fs-heading-s);
    font-weight: var(--fw-700);
    color: var(--color-button-text);
    font-family: inherit;
    cursor: pointer;

    transition: background-color 0.3s;
}

button:hover {
    background-color: var(--clr-primary-lighten);
}
</style>
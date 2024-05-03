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
    padding: 1rem;
    width: 100%;
    border-radius: 12px;
    border: 0;
    outline: 0;
    font-size: var(--fs-heading-s);
    font-weight: var(--fw-700);
    color: var(--color-button-text);
    font-family: inherit;
    cursor: pointer;

    transition: background-color 0.3s;
}

@media (min-width:37.5rem) {
    button {
        border-radius: 24px;
        padding: 2rem;
    }
}

button:hover {
    background-color: var(--clr-primary-lighten);
}
</style>
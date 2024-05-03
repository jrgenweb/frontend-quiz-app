<script setup>
import { computed } from 'vue';
const props = defineProps({
    value: Number,
    max: Number

})


const width = computed(() => {

    const width = (props.value / props.max) * 100
    return width + '%'
})


</script>



<template>
    <div>
        <div class="outer">
            <div class="inner" :style="`--width:${width}`"></div>
        </div>
    </div>
</template>

<style scoped>
.outer {
    width: 100%;
    padding: 0.5rem;
    background-color: var(--color-progressbar-bg);
    border-radius: 999px;
}

.inner {
    width: calc(var(--width));
    background-color: var(--clr-primary);
    height: 0.5rem;
    border-radius: 104px;
}
</style>
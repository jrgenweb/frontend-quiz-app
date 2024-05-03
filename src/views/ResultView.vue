<script setup>
import Button from '@/components/ButtonComponent.vue';

import router from '@/router'

</script>
<template>
    <div>
        <div class="flex">
            <div>
                <h1>Quiz completed<span>You scored...</span></h1>
                <p>Pick a subject to get started</p>
            </div>

            <div class="">
                <div class="scored">
                    <div class="card">
                        <img src="../assets/images/icon-accessibility.svg" alt="Acces logo">
                        <span>Accessebility</span>
                    </div>


                    <p>
                        <span class="score">8</span>
                        out of <span class="total">10</span>
                    </p>
                </div>

                <Button title="Play Again" @click="router.push('/')"></Button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex {
    font-size: 18px;
}

.scored {
    border-radius: 0.5rem;
    background-color: var(--color-card-bg);
}

p .score {
    font-weight: bold;
    font-size: var(--fs-display);
    line-height: 1;
}

p span:first-of-type {

    display: block;
    margin: 0;
    padding: 0;
}
</style>
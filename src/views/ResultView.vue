<script setup>
import Button from '@/components/ButtonComponent.vue';

import router from '@/router'

import { useQuizStore } from '@/stores/quizStore';





</script>
<template>
    <div>
        <div class="flex">
            <div>
                <h1>Quiz completed<span>You scored...</span></h1>

            </div>

            <div class="">
                <div class="scored">
                    <div class="card">
                        <img :src="useQuizStore.icon" :alt="useQuizStore.title + ' logo'"
                            :data-title="useQuizStore.title">
                        <span>{{ useQuizStore.title }}</span>
                    </div>


                    <p>
                        <span class="score">{{ useQuizStore.score }}</span>
                        out of <span class="total">{{ useQuizStore.maxScore }}</span>
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
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 2rem;

    & p {
        text-align: center;
    }
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

.card {
    display: flex;
    align-items: center;
    gap: 1rem;
}
</style>
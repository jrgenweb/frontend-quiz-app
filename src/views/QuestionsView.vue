<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import CardItem from '../components/CardItem.vue'
import Button from '../components/ButtonComponent.vue'
import ProgressBar from '@/components/ProgressBar.vue'
import IconError from '@/components/icons/IconError.vue'
import router from '@/router'
import * as fn from '../functions/functions'
import { useQuizStore } from '@/stores/quizStore'



const route = useRoute()




const allQuestions = ref(0);//contains all question by category
const currentQuestion = ref(0);//current question, options and the correct answer
const current = ref(0); //current index of question
const question = ref(0);//question title




const answers = ref(0);//answer options
const answered = ref(false);//if answered true else false
const score = ref(0);//points
const selectedAnswer = ref(0);//the selected answer


const submited = ref(false)//if submited the answer



onMounted(() => {
    loadQuestion()
    useQuizStore.score = 0; // set to null
    useQuizStore.title = route.params.type
    useQuizStore.icon = fn.getImageUrl(fn.getIcon(route.params.type).icon.substring(2))
    useQuizStore.maxScore = allQuestions.value.length

});



function loadQuestion() {
    allQuestions.value = fn.getAllQuestion(route.params.type);
    currentQuestion.value = fn.getQuestion(allQuestions.value, current.value);
    question.value = currentQuestion.value.question;
    answers.value = currentQuestion.value.options;

}



function submitAnswer() {

    submited.value = true
    console.log(selectedAnswer.value, answered.value)
    if (!selectedAnswer.value) {
        //hiba üzenet megjelenítése
        return false
    }
    answered.value = !answered.value;



    if (currentQuestion.value.answer === selectedAnswer.value) {
        useQuizStore.score++;
    }







}

function loadNextQuestion() {
    submited.value = false;
    selectedAnswer.value = '';
    if (answered.value) {
        current.value++;

        //ha van még kérdés akkor
        loadQuestion();
        //ha nincs akkor átirányitjuk a resultsra és megjelenítjük a pontokat
    }
    answered.value = false;
}

function loadResults() {
    router.push('/results/');
}



</script>

<template>


    <div class="flex">

        <div class="leftside">
            <div>
                <p>Question {{ (current + 1) }} of {{ allQuestions.length }}</p>
                <h2>{{ question }}</h2>
            </div>
            <ProgressBar :max="allQuestions.length" :value="current + 1" class="progressbar"></ProgressBar>

        </div>
        <div>


            <CardItem v-bind:key="index" v-for="item, index in answers " icon="HTML" :text="item" :index="index"
                class="carditem" @click="!answered ? selectedAnswer = item : null" :state="{
                    active: item == selectedAnswer,
                    correct: currentQuestion.answer === item && answered ? 'correct' : '',
                    fail: answered && item != currentQuestion.answer && item == selectedAnswer ? 'fail' : ''
                }">
            </CardItem>


            <Button title="Submit Answer" class="btn" @click="submitAnswer" v-if="!answered" />
            <Button title="See Results" class="btn" @click="loadResults"
                v-else-if="current + 1 == allQuestions.length && answered" />
            <Button title="Next Question" class="btn" @click="loadNextQuestion" v-else />

            <span v-if="!selectedAnswer && !answered && submited" class="error-message">
                <IconError></IconError>
                Please select an answer
            </span>

        </div>
    </div>
</template>

<style scoped>
.leftside {
    margin-bottom: 40px;

    &>*:not(:first-child) {
        margin-top: 1rem;
    }
}

.cards:not(:first-child),
.btn {
    margin-top: 12px;

}



h2 {
    font-size: var(--fs-heading-m);
    font-weight: bold;
}

p {
    font-style: italic;
    color: var(--clr-neutral-400);
}

@media (min-width: 800px) {

    .leftside {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1rem;
        padding-bottom: 3rem;


    }


    .cards:not(:first-child),
    .btn {
        margin-top: 1.5rem;

    }
}

.carditem.active {
    outline: 2px solid var(--clr-primary);
    border-radius: 1.5rem;

    &.icon {
        background-color: var(--clr-danger);
        color: var(--clr-white);
    }
}

.carditem.success {
    outline: 2px solid var(--clr-success);
    border-radius: 1.5rem;

    &.icon {

        color: var(--clr-success);

        outline: 4px solid red;
    }
}

.error-message {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 1rem;
    color: var(--clr-danger);
    justify-content: center;
    font-size: var(--fs-body-m);
}
</style>
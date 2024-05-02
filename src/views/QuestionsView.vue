<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import CardItem from '../components/CardItem.vue'
import Button from '../components/ButtonComponent.vue'
import * as fn from '../functions/functions'



const route = useRoute()




const allQuestions = ref(0);
const currentQuestion = ref(0);
const current = ref(0);
const question = ref(0);




const answers = ref(0);
const answered = ref(false);
const score = ref(0);
const selectedAnswer = ref(0);






onMounted(() => {


    loadQuestion()

});



function loadQuestion() {
    allQuestions.value = fn.getAllQuestion(route.params.type);
    currentQuestion.value = fn.getQuestion(allQuestions.value, current.value);
    question.value = currentQuestion.value.question;
    answers.value = currentQuestion.value.options;

}



function submitAnswer() {

    answered.value = !answered.value;



    console.log(fn.getQuestion(0, 'CSS'))
    /** check if correct */

    console.log(selectedAnswer.value, 'selected')

    if (checkAnswer(selectedAnswer.value)) {
        console.log('helyes')
        //add green icon to 
    } else {
        //add red icon to


    }


}

function loadNextQuestion() {

    if (answered.value) {
        current.value++;

        //ha van még kérdés akkor
        loadQuestion();
        //ha nincs akkor átirányitjuk a resultsra és megjelenítjük a pontokat
    }
    answered.value = false;
}

function checkAnswer(answer) {

    if (currentQuestion.value.answer === answer) {
        //show green icon

        score.value++;
        console.log(score.value)
        return true
    }


    //show red icon
    return false
}




</script>

<template>


    <div class="flex">
        <div>
            <p>Question {{ (current + 1) }} of {{ allQuestions.length }}</p>
            <h2>{{ question }}</h2>



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
            <Button title="Next Question" class="btn" @click="loadNextQuestion" v-else />

        </div>
    </div>
</template>

<style scoped>
.cards:not(:first-child),
.btn {
    margin-top: 1.5rem;

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
</style>
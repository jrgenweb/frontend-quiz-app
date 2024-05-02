import data from '../data/data.json'

export function loadQuizzCategories() {
  let quizz = []
  data.quizzes.forEach((element, index) => {
    quizz.push({
      title: element.title,
      icon: element.icon,
      index: index
    })
  })

  return quizz
}

export function loadQuizzQuestionsByCategory(category) {
  return data.quizzes.filter((item) => {
    return item.title === category
  })
}

export function getQuizzDataByTitle(title) {
  let quizzData = {}
  console.log(data.quizzes)
  const helper = data.quizzes.filter((item) => {
    return item.title === title
  })
  console.log(helper, 'helper')
  quizzData.title = title
  quizzData.icon = helper[0]?.icon

  console.log('quizz data', quizzData)

  return quizzData
}

/* 

if index < 0 or index > question.length return 0 

else return a question and the answers

*/

export function getAllQuestion(category) {
  const selected = data.quizzes.filter((item) => {
    return item.title === category
  })

  return [...selected[0].questions]
}

export function getQuestion(questions, index) {
  return questions[index]
}
/* export function getQuestion(index, category) {
  const selected = data.quizzes.filter((item) => {
    return item.title === category
  })

  const questions = [...selected[0].questions]
  if (index < 0 || index > questions.length) {
    console.log('Nem megfelelő index')
    return 0
  }

  return questions[index]
}
 */

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

export function getIcon(title) {
  console.log(data.quizzes)
  const helper = data.quizzes.filter((item) => {
    return item.title === title
  })
  console.log(helper[0], 'helpeeeeeeeeeeeer')
  return helper[0]
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

export function getImageUrl(path) {
  const url = path.split('/')
  console.log(url)

  return new URL(`../assets/${url[1]}/${url[2]}`, import.meta.url).href
}

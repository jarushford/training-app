export const getTrainingData = (data) => ({
  type: 'GET_TRAINING',
  data
})

export const getProjects = (data) => ({
  type: 'GET_PROJECTS',
  data
})

export const getAscents = (data) => ({
  type: 'GET_ASCENTS',
  data
})

export const toggleDiscipline = (discipline) => ({
  type: 'TOGGLE_DISCIPLINE',
  discipline
})
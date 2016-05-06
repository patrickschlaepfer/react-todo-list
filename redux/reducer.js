function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

/*
 * Reducer handles the actions
 */

let reducer = function reducer(state, action) {
	switch(action.type) {
		case 'ADD_TODO':
			console.log('got to correct ADD_TODO case')
			 return Object.assign({}, state, {
				todos: [{
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos]  // appends all the current todos
			})
		default:
			return state;
	}
}

export default reducer
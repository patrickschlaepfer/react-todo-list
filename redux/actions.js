var constants = {
	ADD_TODO: 'ADD_TODO'
}

let actions = {
	addTodo: function(text) {
		return {
			type: constants.ADD_TODO,
			text: text
		}
	}
}

export default actions
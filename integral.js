

const solve = x => {
	x = all_safe_trans (x)
	return done (x) ?
		x : find_problem (x)
}

const find_problem = x => {
	x = heuristic_transforms (x) // queue those  
	solve (x)
}

// implementation-ideas: 'tiered' stacks sorted by difficulty
// goal tree made of arrays with solution-field
/**
	{
		"api":1,
		"name":"Comma to Semicolon",
		"description":"Replace commas with semicolons.",
		"author":"Vivek-Raman",
		"icon":"quote",
		"tags":"boop,replace,comma,semicolon"
	}
**/
function main(state) {
	try {
		state.text = state.text.replaceAll(/,/g, ';');
	}
	catch(error) {
		state.postError("Something strange happened here...")
	}
}

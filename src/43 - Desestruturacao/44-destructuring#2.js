const data = {
	firstName: 'Daniel',
	surname: 'Silva',
	age: 32,
	blog: 'https://danielsilva.com.br',
	social: {
		linkedin: 'https://www.linkedin.com/in/daniel-silva-dxp/',
		instagram: '@daniel.dxp'
	}
};

//Destructuring
const { firstName, surname, age, social: { linkedin, instagram } } = data;
console.log(firstName, surname, age, linkedin, instagram);

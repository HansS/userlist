var users = require('./userdata.json');

export class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

export function list() {
	let xs = [];
	console.log(users);
	for (let u of users) {
		console.log(u);
		let user = new User(u.name, u.age);
		xs.push(user);
	}
	return xs;
}



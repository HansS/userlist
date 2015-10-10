import {User,list} from './users';

var users = list();
//users = users.join(list()) ;
console.log(users.length);

users.map(u => console.log(u.name));
console.log(users);

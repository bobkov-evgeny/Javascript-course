// // Задание 1

// const myName = "Evgeny";
// const programmingLanguage = "JavaScript";
// const courseCreatorName = "Vladilen";
// const reasonText = "Courage";
// const numberOfMonth = "4";

// let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

// Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

// console.log(myInfoText);

// // Задание 2

// myInfoText = myInfoText.replaceAll(
// 	programmingLanguage,
// 	programmingLanguage.toUpperCase()
// );

// console.log(myInfoText);
// console.log(myInfoText.length);
// console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

// // Задание 3

// //const userName = prompt("What is your name?").trim().toLowerCase();
// alert(`Your name is ${userName}.`);

// //Задание 4

// //const userAge = Number(prompt("How old are you?").trim());
// alert(`Your name is ${userName}, you are ${userAge} y.o.`);

// // Задание 5

// //const userString = prompt("Enter prefered string").trim().toLowerCase();
// //const startSliceIndex = Number(prompt("Enter starter slicing index").trim());
// //const endSliceIndex = Number(prompt("Enter ending slicing index").trim());
// alert(userString.slice(startSliceIndex, endSliceIndex));

// // Задание 6

// //const userText = prompt("Enter any text").trim();
// //const wordFromText = prompt("Enter any word from your Text").trim();

// const indexOfWord = userText.indexOf(wordFromText);
// const resultString = userText.slice(0, indexOfWord);
// console.log(`Результат: ${resultString}`);

// // Дополнительное задание

// const javaScriptDescription =
// 	"JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

// const resultStr = javaScriptDescription
// 	.slice(0, javaScriptDescription.length / 2)
// 	.replaceAll("а", "А")
// 	.replaceAll(" ", "")
// 	.repeat(3);

// console.log(resultStr.slice(resultStr.length / 2, resultStr.length / 2 + 1));

// const password = "A082c63asffasfasfasfase27rus";

// function digitCount(str) {
// 	let count = 0;
// 	for (let character of str) {
// 		if (character === character.toUpperCase() && isNaN(character)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// function numberCount(str) {
// 	let count = 0;
// 	for (let character of str) {
// 		if (!isNaN(character)) {
// 			count++;
// 		}
// 	}
// 	return count;
// }

// function isValidPassword(str) {
// 	if (
// 		str.length > 3 &&
// 		str.length < 20 &&
// 		digitCount(str) > 0 &&
// 		numberCount(str) > 0
// 	)
// 		return "ok";
// 	else return "not valid";
// }
// console.log(isValidPassword(password));
"use strict";

// Задание 1

// const existedUserLogin = "the_best_user";
// const existedUserPassword = "12345678";

// const userLogin = prompt("Введите логин").trim();
// const userPassword = prompt("Введите пароль").trim();

// if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
// 	console.log(`Добро пожаловать, ${userLogin}!`);
// } else {
// 	console.log("Логин и(или) Пароль введены неверно!");
// }

// Задание 2

// for (let i = 0; i < 3; i += 1) {
// 	let newStudent = prompt("Введите имя нового студента!");
// 	newStudent = newStudent.trim();
// 	if (newStudent) {
// 		console.log(`Добро пожаловать, ${newStudent}!`);
// 	}
// }

// let i = 0;
// while (i < 3) {
// 	let newStudent = prompt("Введите имя нового студента!");
// 	newStudent = newStudent.trim();
// 	if (newStudent) {
// 		console.log(`Добро пожаловать, ${newStudent}!`);
// 	}
// 	i += 1;
// }

// let i = 0;
// do {
// 	let newStudent = prompt("Введите имя нового студента!");
// 	newStudent = newStudent.trim();
// 	if (newStudent) {
// 		console.log(`WHILE Добро пожаловать, ${newStudent}!`);
// 	}
// 	i += 1;
// } while (i < 3);

// Задание 3

// let sum = 0;
// for (let i = 0; i <= 100; i += 1) {
// 	sum += i;
// }
// alert(`The result is: ${sum}`);

// Задание 4

// let correctAnswers = 0;
// let incorrectAnswers = 0;

// const answer1 = prompt("Сколько будет 2 + 2?");
// if (Number(answer1) === 4) {
// 	correctAnswers += 1;
// 	alert("Верно!");
// } else {
// 	incorrectAnswers += 1;
// 	alert("Ответ неверный :(");
// }

// const answer2 = prompt("Сколько будет 2 * 2?");
// if (Number(answer2) === 4) {
// 	correctAnswers += 1;
// 	alert("Верно!");
// } else {
// 	incorrectAnswers += 1;
// 	alert("Ответ неверный :(");
// }

// const answer3 = prompt(
// 	"У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
// );
// if (Number(answer3) === 1) {
// 	correctAnswers += 1;
// 	alert("Верно!");
// } else {
// 	incorrectAnswers += 1;
// 	alert("Ответ неверный :(");
// }

// const answer4 = prompt(
// 	"У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
// );
// if (Number(answer4) === 12) {
// 	correctAnswers += 1;
// 	alert("Верно!");
// } else {
// 	incorrectAnswers += 1;
// 	alert("Ответ неверный :(");
// }

// const answer5 = prompt("Сколько будет 2 + 2 * 2?");
// if (Number(answer5) === 6) {
// 	correctAnswers += 1;
// 	alert("Верно!");
// } else {
// 	incorrectAnswers += 1;
// 	alert("Ответ неверный :(");
// }

// alert(
// 	`Конец теста! Правильные ответы - ${correctAnswers}. Неправильные ответы - ${incorrectAnswers}.`
// );

// Задание 5

// const clientName = "Igor";
// let clientSpentForAllTime = 110;
// let clientSpentToday = 25;
// let discount = 0;

// if (clientSpentForAllTime > 100 && clientSpentForAllTime < 300) {
// 	discount = 10;
// } else if (clientSpentForAllTime > 300 && clientSpentForAllTime < 500) {
// 	discount = 20;
// } else if (clientSpentForAllTime > 500) {
// 	discount = 30;
// } else {
// 	discount = 0;
// }
// alert(`Вам предоставляется скидка в ${discount}%!`);

// clientSpentForAllTime += clientSpentToday - clientSpentToday / discount;

// alert(
// 	`Спасибо, ${clientName}! К оплате ${
// 		clientSpentToday - clientSpentToday / discount
// 	}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
// );

// Задание 6

// const clientName = prompt("Введите имя клиента");
// let clientSpentToday = prompt("Сколько клиент потратил сегодня?");
// let clientSpentForAllTime = Number(
// 	prompt("Сколько клиент потратил за все время?")
// );

// if (isNaN(clientSpentForAllTime) && isNaN(clientSpentToday)) {

// 	alert(
// 		"Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку."
// 	);

// } else {

// 	let discount = 0;

// 	if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
// 		discount = 10;
// 	} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime <= 500) {
// 		discount = 20;
// 	} else if (clientSpentForAllTime >= 500) {
// 		discount = 30;
// 	} else {
// 		discount = 0;
// 	}
// 	alert(`Вам предоставляется скидка в ${discount}%!`);

// 	clientSpentForAllTime += clientSpentToday * (1 - discount / 100);

// 	alert(
// 		`Спасибо, ${clientName}! К оплате ${
// 			clientSpentToday * (1 - discount / 100)
// 		}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
// 	);

// }

// Дополнительное задание

// Задание 1

// let health = prompt('Введите число параметра "здоровье" для персонажа');

// if (health <= 0 || !health) {
// 	alert('Параметр "здоровье" должен быть больше нуля!');
// } else {
// 	//console.log(Health);
// 	alert(`Параметр "здоровье" равен ${health}`);
// }

// Задание 2

// const temperatureInCelcius = prompt("Введите температуру в градусах Цельсия");

// console.log(temperatureInCelcius, typeof temperatureInCelcius);

// if (Number(temperatureInCelcius) === 0) {
// 	alert("0 градусов по Цельсию - это температура замерзания воды.");
// } else if (Number(temperatureInCelcius) < 0) {
// 	alert(
// 		"Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже."
// 	);
// }

// //console.log(temperatureIncelcius);
// const temperatureInFahrenheit = (temperatureInCelcius * 9) / 5 + 32;
// alert(
// 	`${temperatureInCelcius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`
// );

// Задание 3

// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let tapPercentage = 13;
// let totalJuniorDeveloperSalary = 0;

// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
// 	console.log(totalJuniorDeveloperSalary);

// 	const salaryWithTax =
// 		salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * tapPercentage) / 100;
// 	totalJuniorDeveloperSalary += salaryWithTax;
// }
// console.log("totalJuniorDeveloperSalary", totalJuniorDeveloperSalary);

// function getSumOfNumbers(number, type = "odd") {
// 	let sum = 0;

// 	if (type === "even") {
// 		for (let i = 1; i <= number; i += 1) {
// 			if (i % 2 === 0) {
// 				console.log(i);
// 				sum += i;
// 			}
// 		}
// 	} else if (type === "odd") {
// 		for (let i = 1; i <= number; i += 1) {
// 			if (i % 2 !== 0) {
// 				console.log(i);
// 				sum += i;
// 			}
// 		}
// 	} else if (type === "") {
// 		for (let i = 1; i <= number; i += 1) {
// 			sum += i;
// 		}
// 	}

// 	return sum;
// }

// console.log(getSumOfNumbers(10, "even"));

// function getSumOfNumbers(number, type = "odd") {
// 	let sum = 0;
// }

// Задание 1

// function getName1(name) {
// 	return `Имя равно ${name}`;
// }

// const getName2 = function (name) {
// 	return `Имя равно ${name}`;
// };

// const getName3 = (name) => `Имя равно ${name}`;

// console.log(getName1("Bob"));
// console.log(getName2("Bob"));
// console.log(getName3("Bob"));

// Задание 2

// function getSumOfNumbers(number, type = "odd") {
// 	let sum = 0;

// 	if (type === "even") {
// 		for (let i = 1; i <= number; i += 1) {
// 			if (i % 2 === 0) {
// 				sum += i;
// 			}
// 		}
// 	} else if (type === "odd") {
// 		for (let i = 1; i <= number; i += 1) {
// 			if (i % 2 !== 0) {
// 				sum += i;
// 			}
// 		}
// 	} else if (type === "") {
// 		for (let i = 1; i <= number; i += 1) {
// 			sum += i;
// 		}
// 	}

// 	return sum;
// }

// console.log(getSumOfNumbers(10, "even"));

// Задание 3

// function getDivisors(number = 1) {
// 	if (number < 0 || !Number.isInteger(number)) {
// 		alert(`${number} должен быть целым числом и больше нуля!`);
// 	} else {
// 		let counter = 0;
// 		for (let i = 0; i <= number; i += 1) {
// 			if (number % i === 0) counter += 1;
// 		}
// 		return counter;
// 	}
// }

// console.log(getDivisors(3.1));

// Задание 4

// function checkQuestionAnswer(question, correctAnswer) {
// 	const answer = prompt(question).toLowerCase().trim();
// 	correctAnswer.toLowerCase() === answer
// 		? alert("Ответ верный!")
// 		: alert("Ответ неверный.");
// }

// checkQuestionAnswer("Арбуз это фрукт или ягода?", "Ягода");
// checkQuestionAnswer("Сколько в среднем зубов у взрослого человека?", "32");
// checkQuestionAnswer("Как называется самая маленькая птица в мире?", "Калибри");

// Дополнительное задание

// const showSuccessMessage = function (message) {
// 	console.log(message);
// };

// const showErrorMessage = function (message) {
// 	console.error(message);
// };

// const checkTextOnErrorSymbol = function (
// 	text,
// 	errorSymbol,
// 	succsessCallback,
// 	errorCallback
// ) {
// 	let errorHappened = false;

// 	for (let i = 0; i <= text.length; i += 1) {
// 		if (text.toLowerCase()[i] === errorSymbol) {
// 			errorCallback(
// 				`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`
// 			);
// 			errorHappened = true;
// 		}
// 	}
// 	if (!errorHappened)
// 		succsessCallback("В данном тексте нет запрещенных символов");
// };

// const text = "Привет! Как дела! Давно мы с тобой не виделись.";
// checkTextOnErrorSymbol(text, "п", showSuccessMessage, showErrorMessage);

// Задание 1

// function getSumOfSequence(number) {
// 	let arr = [];
// 	for (let i = 1; i <= number; i += 1) {
// 		arr.push(i);
// 	}

// 	return arr[0] + arr[arr.length - 1];
// }

// console.log(getSumOfSequence(5));

// Задание 2

// const peopleWaiting = [
// 	"Кристина",
// 	"Олег",
// 	"Кирилл",
// 	"Мария",
// 	"Светлана",
// 	"Артем",
// 	"Глеб",
// ];

// peopleWaiting.shift();
// peopleWaiting.shift();

// function giveParcel() {
// 	let person = peopleWaiting.shift();
// 	alert(
// 		`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`
// 	);
// }

// const leaveQueueWithoutParcel = () => {
// 	let person = peopleWaiting.shift();
// 	alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`);
// };

// giveParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// leaveQueueWithoutParcel();
// Не уверен что правильно понял задание

// Задание 3

// const numbers = [10, 4, 100, -5, 54, 2];

// let result = 0;
// for (let i = 0; i < numbers.length; i += 1) {
// 	result += numbers[i] ** 3;
// }

// let result = 0;
// for (let number of numbers) {
// 	result += number ** 3;
// }

// let result = 0;
// numbers.forEach((number) => {
// 	result1 += number ** 3;
// });
// console.log(result);

// const result = numbers.reduce((acc, number) => (acc += number ** 3), 0);
// console.log(result);

// Задание 4

// const coffees = ["Latte", "Cappuccino", "Americano"];
// const coffeeName = prompt("Поиск кофе по названию:").trim().toLowerCase();
// const searchWord = `${coffeeName[0].toUpperCase()}${coffeeName.slice(1)}`;

// coffees.includes(searchWord)
// 	? alert(
// 			`Держите ваш любимый кофе ${searchWord}. Он ${
// 				coffees.indexOf(searchWord) + 1
// 			}-й по популярности в нашей кофейне.`
// 	  )
// 	: alert("К сожалению, такого вида кофе нет в наличии");

// Задание 5

// const coffees = ["Latte", "Cappuccino", "Americano"];
// const prices = [1.5, 1, 2];

// const updatedPrices = prices.map((price) => price + 0.5);

// coffees.forEach((coffee, index) =>
// 	alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`)
// );

// Задание 6

// const clientsEstimations = [];
// function askClientToGiveEstimation() {
// 	const rating = +prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
// 	if (!isNaN(rating) && rating >= 0 && rating <= 10)
// 		clientsEstimations.push(rating);
// }

// for (let i = 1; i <= 5; i += 1) {
// 	askClientToGiveEstimation();
// }

// const goodEstimations = clientsEstimations
// 	.filter((rating) => rating > 5)
// 	.reduce((acc) => (acc += 1), 0);
// const notGoodEstimations = clientsEstimations
// 	.filter((rating) => rating <= 5)
// 	.reduce((acc) => (acc += 1), 0);

// alert(
// 	`Всего положительных оценок: ${goodEstimations}; Всего отцирательных оценок: ${notGoodEstimations}.`
// );

// Задание 7

// const goals = [8, 1, 1, 3, 12, -1, 5];

// 1;
// const bestGameIndex = goals.indexOf(
// 	goals.reduce((acc, game) => (acc > game ? acc : game), 0)
// );
// alert(
// 	`Самый результативный матч был под номером ${
// 		bestGameIndex + 1
// 	}. В нем было забито ${goals[bestGameIndex]} гол(ов).`
// );

// 2;
// const worstGamesIndexes = [];
// const worstGameResult = [...goals]
// 	.sort((a, b) => a - b)
// 	.filter((game) => game > 0)[0];

// goals.forEach((game, i) => {
// 	if (game === worstGameResult) worstGamesIndexes.push(i + 1);
// });

// alert(
// 	`Самые не результативные матчи были под номерами ${worstGamesIndexes.join(
// 		", "
// 	)}. В каждом из них было забито по ${worstGameResult} мячу(а).`
// );

// 3;
// alert(
// 	`Общее количество голов за сезон равно ${goals.reduce(
// 		(acc, game) => (game > 0 ? (acc += game) : acc),
// 		0
// 	)}`
// );

// 4;
// goals.filter((game) => game < 0).length > 0
// 	? alert(`Были автоматические поражения: да`)
// 	: alert(`Были автоматические поражения: нет`);

// 5;
// alert(
// 	`Среднее количество голов за матч равно ${(
// 		goals.reduce((acc, game) => (acc += game), 0) / goals.length
// 	).toFixed(1)}`
// );

// 6;
// alert(
// 	`Голы отсортированы в порядке возрастания: ${[...goals]
// 		.sort((a, b) => a - b)
// 		.join("; ")}`
// );

// console.log(`Итоговый массив goals не модифицирован: ${goals}`);

// Задание 8

// function getMathResult(expression) {
//   const mathSignes = [`>`, `<`, `=`, `+`, `-`, `*`, `/`];
//   expression = expression.filter(element => mathSignes.includes(element) || !isNaN(element))

//   if(!mathSignes.includes(expression[1]) || expression.length < 3) return `Ошибка`;

//   switch(expression[1]) {
//     case '>':
//       return +expression[0] > +expression[2];

//     case '<':
//       return +expression[0] < +expression[2];

//     case '=':
//       return +expression[0] == +expression[2];

//     case '+':
//       return +expression[0] + +expression[2];

//     case '-':
//       return +expression[0] - +expression[2];

//     case '*':
//       return +expression[0] * +expression[2];

//     case '/':
//       return +expression[0] / +expression[2];
//   }
// }

// console.log(getMathResult([`200`, `+`, 300]))
// console.log(getMathResult([`20`, `-`, `5`]))
// console.log(getMathResult([100, `/`, 100]))
// console.log(getMathResult([2, `-`, 2]))
// console.log(getMathResult([`5`, `>`, `10`]))
// console.log(getMathResult([`5`, `<`, `10`]))
// console.log(getMathResult([`1`, `=`, 1]))
// console.log(getMathResult([`1`, `**`, 1]))

// Дополнительное задание 1

// let matrix = [];

// for(let i = 1; i <= 3; i+=1) {
//   let tempMatrix = []

//   for(let i = 1; i<=5; i+=1) {
//     tempMatrix.push(i);
//   }

//   matrix.push(tempMatrix);
// }

// console.log(matrix);

// // Дополнительное задание 2

// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ],
//  ];

// const mergedMatrix = matrix.reduce((acc, el) => acc.concat(el), [])
// console.log(mergedMatrix)

// function getSumOfNumbers(number, type = 'odd') {
//   const numbersArr = [];
//   for(let i = 1; i <=number; i+=1) {
//     numbersArr.push(i)
//   }

//   switch(type) {
//     case 'even': return numbersArr.reduce((acc, number) => number%2===0 ? acc+=number : acc);
//     case 'odd': return numbersArr.reduce((acc, number) => number%2!==0 ? acc+=number : acc);
//     case '': return numbersArr.reduce((acc, number) => acc+=number)
//   }

// }

// console.log(getSumOfNumbers(10, ''))

// getSumOfNumbers принимает в себя 2 параметра: number и type. Параметр number - это число, по которому будет считаться сумма. То есть, если было передано число 10, то функция должна посчитать сумму от 0 до 10 (0 + 1 + 2 + … + 10). Параметрtype отвечает за выбор чисел для подсчета суммы. Он может быть 3-мя значениями: “odd”, “even” и “”. Если type равняется “odd”, то в сумму должны входить только нечетные числа, “even” - четные числа, пустая строка “” - все числа. По умолчанию параметр type должен быть равен odd.

// Функция getSumOfNumbers должна возвращаться итоговую сумму с помощью return.

// number = 10, type = ‘odd’. Возвращает 25.
// number = 10, type = ‘even’. Возвращает 30.
// number = 10, type = ‘’. Возвращает 55.

/*
// Задание 1

const users = [{
       username: 'David',
       status: 'online',
       lastActivity: 10
   }, {username: 'Lucy',
       status: 'offline',
       lastActivity: 22
   }, {username: 'Bob',
       status: 'online',
       lastActivity: 104
   }
]

const onlineUsers = users.filter(user => user.status === 'online')
const usersOnlineNames = onlineUsers.map(user => user.username)

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames.join(', ')}`)

// Задание 2

const student = {
   fullName: 'Максим',
   experienceInMonths: 12,
   stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const giveJobToStudent = function(student, jobName) {
  alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
  student.job = jobName;
  return student;
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent)

// Задание 3

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}

const handleObjects = function(obj, key, action) {
  switch(action) {

    case 'get':
      return obj[key];

    case 'add':
      obj[key] = '';
      return obj;

    case 'delete':
      delete obj[key];
      return obj;

    default:
      return obj;
  }
}

const result = handleObjects(student, 'programmingLanguage', 'delete');
console.log('result', result);

// Задание 4

const getKiller = function (suspectInfo, deadPeople) {
	const suspects = Object.entries(suspectInfo);

	function checkKiller(suspected, victims) {
		const result = victims.map((name) =>
			suspected.includes(name) ? true : false
		);
		return result.every((item) => item === true) ? true : false;
	}

	for (let i = 0; i < suspects.length; i += 1) {
		if (checkKiller(suspects[i][1], deadPeople) === true)
			alert(`Убийца ${suspects[i][0]}`);
	}
};

getKiller(
	{
		James: ["Jacob", "Bill", "Lucas"],
		Johnny: ["David", "Kyle", "Lucas"],
		Peter: ["Lucy", "Kyle"],
	},
	["Lucas", "Bill"]
);

getKiller(
	{
		Brad: [],
		Megan: ["Ben", "Kevin"],
		Finn: [],
	},
	["Ben"]
);

// Задание 5

function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const todaysWinner = {
	prize: "10 000$",
};

const winnerApplicants = {
	"001": {
		name: "Максим",
		age: 25,
	},
	201: {
		name: "Светлана",
		age: 20,
	},
	304: {
		name: "Екатерина",
		age: 35,
	},
};

const getWinner = function (applicants, winnerObject) {
	const participants = Object.values(applicants);
	const winnerNumber = getRandomNumberInRange(
		0,
		Object.keys(applicants).length
	);
	winnerObject.name = participants[winnerNumber].name;
	winnerObject.age = participants[winnerNumber].age;

	return winnerObject;
};

const resultWinner = getWinner(winnerApplicants, todaysWinner);
console.log("resultWinner", resultWinner); // { prize: '10 000$', name: 'Максим', age: 25 }

// Задание 6

const ordersArr = [4, 2, 1, 3];
const people = [
	{ id: 1, name: "Максим" },
	{ id: 2, name: "Николай" },
	{ id: 3, name: "Ангелина" },
	{ id: 4, name: "Виталий" },
];

const giveTalonsInOrder = function (patients, orders) {
	const result = [];
	for (let order of orders) {
		result.push(...patients.filter((item) => item.id === order));
	}
	return result;
};

const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);

/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]


// Дополнительное задание 1

const groceries = {
	"Orange Juice": {
		price: 1.5,
		discount: 10,
	},
	Chocolate: {
		price: 2,
		discount: 0,
	},
	// more items...
};

const shoppingBag = [
	{ product: "Chocolate", quantity: 3 },
	{ product: "Orange Juice", quantity: 23 },
];

const getTotalPriceOfShoppingBag = function (shoppingBag) {
	const groceriesNames = Object.keys(groceries);
	let totalPrice = 0;

	for (let item of shoppingBag) {
		for (let product of groceriesNames) {
			if (item.product === product) {
				const discount = groceries[product].discount;
				let price = groceries[product].price;
				if (discount) price = price * ((100 - discount) / 100);

				totalPrice += price * item.quantity;
			}
		}
	}
	return totalPrice.toFixed(2);
};

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice); // Возвращает 37.05

// Дополнительное задание 2
function getRandomNumberInRange(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

const hero = {
	name: "Batman",
	health: 100,
	heatEnemy: (enemy) => (enemy.health -= 10),
};

const enemy = {
	name: "Joker",
	health: 100,
	heatHero: (hero) => (hero.health -= 10),
};

const startGame = function (heroPlayer, enemyPlayer) {
	while (heroPlayer.health > 0 && enemyPlayer.health > 0) {
		switch (getRandomNumberInRange(0, 2)) {
			case 0:
				heroPlayer.heatEnemy(enemyPlayer);
				console.log(
					`${heroPlayer.name}(${heroPlayer.health}hp) hit ${enemyPlayer.name}(${enemyPlayer.health}hp)`
				);
				break;
			case 1:
				enemyPlayer.heatHero(heroPlayer);
				console.log(
					`${enemyPlayer.name}(${enemyPlayer.health}hp) hit ${heroPlayer.name}(${heroPlayer.health}hp)`
				);
				break;
		}
	}

	const winner = enemyPlayer.health === 0 ? heroPlayer : enemyPlayer;
	alert(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
};

startGame(hero, enemy);
console.log(hero, enemy);
*/

// Date

// const date = new Date();
// console.log(date);
// 0(Январь) - 11(декабрь);

// const newDate = new Date(2000, 1, 10, 11, 55, 5, 5000);
// console.log(newDate);

// console.log("year", newDate.getFullYear());
// console.log("month", newDate.getMonth());

// getHours
// getMinutes
// getSeconds
// getMiliseconds

// //День недели 0 (воскресеье) - 6 (суббота)
// console.log("day", newDate.getDay());

// newDate.setFullYear(2050);
// // setHours
// // setMinutes
// // setMonth
// console.log(newDate.getFullYear());

// const date1 = new Date(2005, 4, 20);
// const date2 = new Date(2006, 4, 10);

// console.log("date1", date1.getTime());
// console.log("date2", date2.getTime());

// const difference = date2.getTime() - date1.getTime();
// console.log("minutes", difference / 1000 / 60);

// const startTime = Date.now();
// for (let i = 0; i < 10000000; i += 1) {}
// const endTime = Date.now();
// console.log(endTime - startTime);

// Задание 1
/*
const birthDate = new Date(1996, 4, 7);
const getDateFormat = function (date, separator) {
	const textDate = `0${date.getDate()}${separator}0${
		date.getMonth() + 1
	}${separator}${date.getFullYear()}`;
	console.log(textDate);
};

getDateFormat(birthDate, ".");
*/
// Задание 2
/*
const getDaysBeforeBirthday = function (nextBirthdayDate) {
	const convertMsToDays = (miliseconds) =>
		Math.round(miliseconds / 1000 / 60 / 60 / 24);
	return convertMsToDays(nextBirthdayDate - Date.now());
};

console.log(getDaysBeforeBirthday(new Date(2022, 4, 7)));
*/
// Задание 3
/*
const today = Date.now();
const addDays = (date, days = 1) => new Date(date + days * 24 * 60 * 60 * 1000);

console.log(addDays(today, 10));
*/
// Дополнительное задание

// const peopleWithVisa = [
// 	{
// 		firstName: "Stasia",
// 		lastName: "Ward",
// 		criminalRecord: true,
// 		passportExpiration: "19.06.2023",
// 	},
// 	{
// 		firstName: "Elliot",
// 		lastName: "Baker",
// 		criminalRecord: false,
// 		passportExpiration: "04.06.2021",
// 	},
// 	{
// 		firstName: "Leighann",
// 		lastName: "Scott",
// 		criminalRecord: true,
// 		passportExpiration: "31.07.2022",
// 	},
// 	{
// 		firstName: "Nick",
// 		lastName: "Pop",
// 		criminalRecord: false,
// 		passportExpiration: "31.12.2021",
// 	},
// ];

// const allowVisa = (arr) =>
// 	arr.filter((person) => {
// 		const passportExpirationDate = new Date(
// 			person.passportExpiration
// 				.split(".")
// 				.reverse()
// 				.map((number) => +number)
// 		);
// 		return passportExpirationDate > Date.now() && !person.criminalRecord;
// 	});

// const result = allowVisa(peopleWithVisa);
// console.log("result", result);

// Задание 1
/*
const student = {
	stack: ["HTML"],
	level: 1,
	improveLevel() {
		this.level++;
		switch (true) {
			case this.level === 2:
				this.stack.push("CSS");
				break;
			case this.level === 3:
				this.stack.push("JavaScript");
				break;
			case this.level === 4:
				this.stack.push("React");
				break;
			case this.level === 5:
				this.stack.push("NodeJS");
				break;
			case this.level > 5:
				alert(`Студент выучил все технологии!`);
				break;
		}
		return this;
	},
};

student
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel()
	.improveLevel();
*/

// Задание 2
/*
const dog = {
	name: "Чарли",
	type: "Собака",
	makeSound() {
		return "Гав-Гав";
	},
};

const bird = {
	name: "Петя",
	type: "Воробей",
	makeSound() {
		return "Чик-чирик";
	},
};

const makeDomestic = function (isDomestic) {
	console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
	this.isDomestic = isDomestic;
	return this;
};

makeDomestic.bind(dog, true)();
makeDomestic.call(bird, true);
makeDomestic.apply(bird, [true]);
*/

// Задание 3
/*
const footballer = {
	fullName: "Cristiano Ronaldo",
	attack() {
		console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
	},
	scoreGoal(sound) {
		console.log(`${this.fullName} забил гол! Вот это да!`);
		this.celebrate(sound);
	},
	celebrate(sound) {
		console.log(sound);
	},
	goToSubstitution: function (newPlayer) {
		console.log(
			`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
		);
	},
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);
*/

// Дополнительное задание

const attacker = {
	archer: 30,
	footSoldier: 55,
	cavalry: 10,
	artillery: 3,
	checkChancesToWin(defenderObject) {
		//prettier-ignore
		const currentAttackerArmy = Object.entries(this).filter(troops => !isNaN(troops[1]));
		//prettier-ignore
		const currentDefenderArmy = Object.entries(defenderObject).filter((troops) => !isNaN(troops[1]));
		const maximumChances = currentDefenderArmy.length;
		//prettier-ignore
		const ourArmyChances = currentAttackerArmy.reduce((acc, troops, index) => troops[1] > currentDefenderArmy[index][1] ? (acc += 1) : acc, 0);

		return [ourArmyChances, maximumChances];
	},
	improveArmy() {
		//prettier-ignore
		const currentArmy = Object.entries(this).filter((value) => !isNaN(value[1]));
		for (let troops of currentArmy) {
			this[troops[0]] += 5;
		}
	},
	attack(defender) {
		//prettier-ignore
		const [ourArmyChances, maximumChances] = [...this.checkChancesToWin(defender)];
		//prettier-ignore
		if ((100 / maximumChances) * ourArmyChances > 70) alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
		else {
			alert(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`);
			this.improveArmy();
		}
	},
};

const defender = {
	archer: 33,
	footSoldier: 50,
	cavalry: 40,
	artillery: 10,
};

attacker.attack(defender);
attacker.attack(defender);
attacker.attack(defender);

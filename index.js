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

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
// "use strict";

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

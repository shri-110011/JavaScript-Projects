function getApple(){
	console.log("Apple is here.")
}
function getOrange(){
	console.log("Orange is here.")
}
// module.exports.apple = getApple;//module.exports.<custon-name-of-our-function> is the way we can export our function by this custom name in other files
// module.exports.orange = getOrange;//orange is the custom-name and getOrange is the name our function

//Note: module. is not mandatory we can still write it as:
exports.apple = getApple;
exports.orange = getOrange;

// module.exports = {
// 	apple: function getApple(){
// 		console.log("Apple is here.")
// 	},
// 	orange: function (){
// 		console.log("Orange is here.")
// 	}
// }
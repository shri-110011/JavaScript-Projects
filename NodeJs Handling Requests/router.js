function route(res, handle, pathName, postData){
	if(typeof handle[pathName] === 'function'){
		console.log("Routing to: "+pathName);
		handle[pathName](res, postData);
	}
	else{
		console.log("Route not defined");
	}
}
exports.route = route;
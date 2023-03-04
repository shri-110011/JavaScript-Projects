var data = "{\"studentData\":[{\"Name\":\"Graham\",\"aggregate\":\"86\",\"regular\":\"true\",\"percentages\":[{\"sub1\":\"69\",\"sub2\":\"97\",\"sub3\":\"90\"}]},{\"Name\":\"Finley\",\"aggregate\":\"96\",\"regular\":\"false\",\"percentages\":[{\"sub1\":\"95\",\"sub2\":\"91\",\"sub3\":\"73\"}]},{\"Name\":\"Carrillo\",\"aggregate\":\"93\",\"regular\":\"true\",\"percentages\":[{\"sub1\":\"90\",\"sub2\":\"84\",\"sub3\":\"80\"}]},{\"Name\":\"Crosby\",\"aggregate\":\"68\",\"regular\":\"true\",\"percentages\":[{\"sub1\":\"63\",\"sub2\":\"92\",\"sub3\":\"77\"}]},{\"Name\":\"Small\",\"aggregate\":\"88\",\"regular\":\"true\",\"percentages\":[{\"sub1\":\"65\",\"sub2\":\"80\",\"sub3\":\"81\"}]}]}" ;
data = JSON.parse(data);
data.studentData.forEach(function(x){
	//console.log(x);
	x.aggregate = Number(x.aggregate);
	x.regular = Boolean(x.regular);
	x.percentages.forEach(function(y){
			y.sub1 = Number(y.sub1);
			y.sub2 = Number(y.sub2);
			y.sub3 = Number(y.sub3);
			
	});
	// console.log(x);
});
return data;
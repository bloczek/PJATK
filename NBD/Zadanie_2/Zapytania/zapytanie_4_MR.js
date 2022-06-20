var mapFunction = function(){
	{emit(this.nationality, {weight: parseFloat(this.weight), height: parseFloat(this.height), num: 1});
}};

var reduceFunction = function(nationality, values){

	var bmi_array = [];
	var x = {num: 0, sum: 0};

	for (let i = 0; i < values.length; i++) {
		bmi = values[i].weight/(values[i].height**2);

		bmi_array.push(bmi);
		x.num += values[i].num;
		x.sum += bmi;}

	var output = "avg_bmi: " + x.sum/x.num + "; min_bmi: " + Math.min(...bmi_array) + "; max_bmi: " + Math.max(...bmi_array);
	return output;
};

printjson(db.people.mapReduce(mapFunction,reduceFunction,{ out: {inline : 1}}))

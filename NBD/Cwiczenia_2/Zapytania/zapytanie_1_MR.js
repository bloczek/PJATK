var mapFunction = function(){
		{	
		emit(this.sex, 
		{weight: parseFloat(this.weight),height: parseFloat(this.height), num: 1});
		}};


var reduceFunction = function(sex, values){
	var measure = {weight: 0, height: 0, num: 0};

	for (let i = 0; i < values.length; i++) {
		measure.weight += values[i].weight;
		measure.height += values[i].height;
		measure.num += values[i].num;
}

	var output = "avg_weight: " + measure.weight/measure.num + "; avg_height: " + measure.height/measure.num;
	return output;
};


printjson(db.people.mapReduce(mapFunction,reduceFunction,{ out: {inline : 1}}))


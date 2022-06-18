var mapFunction = function(){{emit(this.job,{num: 1});
}};

var reduceFunction = function(job, num){
};

printjson(db.people.mapReduce(mapFunction,reduceFunction,{out: {inline : 1}}))

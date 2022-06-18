var mapFunction = function(){

	if (this.nationality == "Poland" && this.sex == "Female") 

		{for (let x = 0; x < this.credit.length; x++) {	
			emit(this.credit[x].currency, {balance: parseFloat(this.credit[x].balance), num: 1});
		}}};

var reduceFunction = function(currency, values){

	var money = {balance: 0, num: 0};

	for (let i = 0; i < values.length; i++) 

		{money.balance += values[i].balance;
		 money.num += values[i].num;}

	var output = "avg_balance: " + money.balance/money.num + "; sum_balance: " + money.balance;

	return output;
};

printjson(db.people.mapReduce(mapFunction,reduceFunction,{ out: {inline : 1}}))

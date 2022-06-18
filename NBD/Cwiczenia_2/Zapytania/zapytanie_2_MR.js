var mapFunction = function(){
	for (let x = 0; x < this.credit.length; x++) 

	{emit(this.credit[x].currency, 
	{balance: parseFloat(this.credit[x].balance), 
	 num: 1});

}};

var reduceFunction = function(currency, values){

	var cash = {balance: 0, num: 0};

	for (let i = 0; i<values.length; i++) 

	{cash.balance += values[i].balance;
	 cash.num += values[i].num;
}

	return cash.balance / cash.num;

};


printjson(db.people.mapReduce(mapFunction,reduceFunction,{ out: {inline : 1}}))
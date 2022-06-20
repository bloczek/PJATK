printjson(db.people.aggregate(
	[{$unwind: "$credit" },

	{$match:{
			sex: "Female",
			nationality: "Poland"
	}},

	{$addFields: {
			balance_conv: { $convert: { input: "$credit.balance", to: "double"}}
	}},
	
	{$group: {
		_id: "$credit.currency",
		avg_balance: {$avg: "$balance_conv"},
		sum_balance: {$sum: "$balance_conv"}
	}}]
).toArray())
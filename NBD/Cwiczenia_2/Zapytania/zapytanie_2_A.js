printjson(db.people.aggregate(
	[{ $unwind : "$credit" },
	{$addFields: {
		balance_conv: { $convert: { input: "$credit.balance", to: "double"}},
	}},
	{$group: {
		_id: "$credit.currency",
		avg_balance: {$avg: "$balance_conv"},
	}}]
).toArray())
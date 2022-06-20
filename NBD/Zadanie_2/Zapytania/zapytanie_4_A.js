printjson(db.people.aggregate(
	[{$addFields: {
			height_conv: { $convert: { input: "$height", to: "double"}},
			weight_conv: { $convert: { input: "$weight", to: "double"}}
	}},
	
	{$group: {
		_id: "$nationality",
		min_bmi: {$min: { $sqrt: {$divide: ["$weight_conv","$height_conv"]}}},
		max_bmi: {$max: { $sqrt: {$divide: ["$weight_conv","$height_conv"]}}},
		avg_bmi: {$avg: { $sqrt: {$divide: ["$weight_conv","$height_conv"]}}}
	}}]
).toArray())
printjson(db.people.aggregate([{$group:{_id: "$sex", avg_height: {$avg: "$height"},avg_weight:{$avg:"$weight"}}}]).toArray())

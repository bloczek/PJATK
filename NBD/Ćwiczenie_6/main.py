from riak import RiakClient

client = RiakClient(pb_port=8087)
bucket = client.bucket('s25750')

doc = {
	"name": "Jakub",
	"surname": "Matuszewski",
	"year": 1,
	"grade": 4
}

key = bucket.new('stud_record', data=doc)
key.store()

fetched = bucket.get('stud_record')
print(fetched.encoded_data)

fetched.data["grade"] = 5
fetched.store()

fetched = bucket.get('stud_record')
print(fetched.encoded_data)

fetched.delete()
print(fetched)
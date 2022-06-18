printjson(db.people.insert(

{
        "sex" : "Male",
        "first_name" : "Jakub",
        "last_name" : "Matuszewski",
        "job" : "ITS Engineer",
        "email" : "s25750@pjwstk.edu.pl",
        "location" : {
                "city" : "Warsaw",
                "address" : {
                        "streetname" : "Dobra",
                        "streetnumber" : "24"
                }
        },
        "description" : "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus",
        "height" : "199.99",
        "weight" : 99.99,
        "birth_date" : "1997-04-23T10:27:20Z",
        "nationality" : "Poland",
        "credit" : [
                {
                        "type" : "jcb",
                        "number" : "3238567155666774",
                        "currency" : "PLN",
                        "balance" : "2.00"
                },
                {
                        "type" : "mastercard",
                        "number" : "1933423323252330113",
                        "currency" : "PLN",
                        "balance" : "2443.96"
                },
                {
                        "type" : "diners-club-enroute",
                        "number" : "643693774355527232",
                        "currency" : "PLN",
                        "balance" : "39.65"
                }
        ]
})
)
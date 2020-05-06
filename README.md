# Private-Chat-App-React-Native-Node
Api requests : -

SIGN UP :

Request Type : POST
url : localhost:3000/signup
body : {
	     "UserName" : "sanchit3",
	     "Password" : "1234"
       }
response : {
       "message": "signed up",
       "error": false,
       "token":      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjI1ZGIzNGUyMzQ3MmNjODJmMjM4YSIsImlhdCI6MTU4ODc0NzY5OX0.qrIsUoQ_vhwlVrpHIPUy8EHCQWz77tUOzd0tRIBAg8s"
}

SIGN IN :

Request Type : POST
url : localhost:3000/signin
body : {
	     "UserName" : "sanchit3",
	     "Password" : "1234"
       }
response : {
       "message": "signed in",
       "error": false,
       "token":      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjI1ZGIzNGUyMzQ3MmNjODJmMjM4YSIsImlhdCI6MTU4ODc0NzY5OX0.qrIsUoQ_vhwlVrpHIPUy8EHCQWz77tUOzd0tRIBAg8s"
}

SEND MESSAGE : 

//FOR PUBLIC MESSAGE
//taged array contains id of users you want to send a private message to, in case of public message array is empty.
Request Type : POST
url : localhost:3000/sendMessage
body : {
       "message" : "hey for everyone",
	     "taged" : []
       }
reponse : {
          "message": "Sent",
          "error": false
          }     
          

//FOR PRIVATE MESSAGE
//taged array contains id of users you want to send a private message to.
//array is filed at user end point ex :in an app or website.Information about user id can be extracted using the users api request //below.
Request Type : POST
url : localhost:3000/sendMessage
body : {
       "message" : "hey for person1 and person2",
	     "taged" : ["5eb25d744e23472cc82f2386","5eb25d744e23472cc82f2386"] 
       }
reponse : {
          "message": "Sent",
          "error": false
          }     
          
//to get users
Request Type : GET
url : localhost:3000/users
response : {
    "users": [
        {
            "id": "5eb25d2f4e23472cc82f2383",
            "uname": "sanchit"
        },
        {
            "id": "5eb25d744e23472cc82f2386",
            "uname": "sanchit1"
        },
        {
            "id": "5eb25d8e4e23472cc82f2388",
            "uname": "sanchit2"
        },
        {
            "id": "5eb25db34e23472cc82f238a",
            "uname": "sanchit3"
        }
    ],
    "error": false
}

//to get messages
Request Type : GET
url : localhost:3000/messages
response : {
    "messages": [
        {
            "sender": {
                "senderId": "5eb25d2f4e23472cc82f2383",
                "UserName": "sanchit"
            },
            "_id": "5eb25fa51658f929b835a844",
            "message": "hey for all",
            "time": "2020-05-06T06:56:37.193Z",
            "__v": 0
        },
        {
            "sender": {
                "senderId": "5eb25d2f4e23472cc82f2383",
                "UserName": "sanchit"
            },
            "_id": "5eb2617b4290073c807682ed",
            "message": "hey for all sanchit 1 and sanchit 2",
            "time": "2020-05-06T07:04:27.986Z",
            "__v": 0
        },
        {
            "sender": {
                "senderId": "5eb25d2f4e23472cc82f2383",
                "UserName": "sanchit"
            },
            "_id": "5eb263d890430b26c8a7545a",
            "message": "hey for sanchit 1 and sanchit 2",
            "time": "2020-05-06T07:14:32.227Z",
            "__v": 0
        },
        {
            "sender": {
                "senderId": "5eb25d2f4e23472cc82f2383",
                "UserName": "sanchit"
            },
            "_id": "5eb263e890430b26c8a7545e",
            "message": "hey for everyone",
            "time": "2020-05-06T07:14:48.151Z",
            "__v": 0
        }
    ],
    "error": false
}

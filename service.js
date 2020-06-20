//              RUN node service.js


// Here initialize Hapi package 
const Hapi = require("@hapi/hapi");
// Initialize/ declare server to host 
const server = new Hapi.Server({ "host": "localhost", "port": 3000 });
// Declaring router and initizing data through request.Then response is in try and error is in catch area 
server.route({
    method: "POST",
    path: "/familydetails",
    handler: async function (req, res) {
        try {
            let arrayOfObjects = req.payload; // Requesting body and initialize in a variable 
            let zero = arrayOfObjects.zero; // Initialize first KEY in a variable
            let one = arrayOfObjects.one;   // Initialize second KEY in a variable
            let two = arrayOfObjects.two;   // Initialize third KEY in a variable
            let Objects = {}; // Declaring a object to create the alogorithm
            // Here is the for looping for extract keys and values from array of zero
            for (let i = 0; i <= (zero.length) - 1; i++) {
                //  Algorithm is designed as using array and objects. All array values are designed using there 
                // position. First array of elements is getting in for loop and all other array of elements is geting
                // in mentionof array position  
                Objects = {
                    id: zero[i].id,
                    title: zero[i].title,
                    level: zero[i].level,
                    childern: [{
                        id: one[0].id,
                        title: one[0].title,
                        level: one[0].level,
                        children: [{
                            id: two[0].id,
                            title: two[0].title,
                            level: two[0].level,
                            children: [],
                            parent_id: one[0].id
                        },
                        {
                            id: two[2].id,
                            title: two[2].title,
                            level: two[2].level,
                            children: [],
                            parent_id: one[0].id
                        }],
                        parent_id: zero[i].id,
                    },
                    {
                        id: one[1].id,
                        title: one[1].title,
                        level: one[1].level,
                        children: [],
                        parent_id: zero[i].id
                    },
                    {
                        id: one[2].id,
                        title: one[2].title,
                        level: one[2].level,
                        children: [{
                            id: two[1].id,
                            title: two[1].title,
                            level: two[1].level,
                            children: [],
                            parent_id: one[2].id
                        }],
                        parent_id: zero[i].id
                    }],
                    parent_id: zero[i].parent_id
                }
                return res.response(Objects);   // Response 
            }
        } catch (error) {
            return res.response(error); // Error Response
        }
    }
});
server.start();
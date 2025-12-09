import express, { response } from "express"
import userdata from "./data/data.js"

const app = express();
app.use(express.json());
const PORT = 8080;

// get request ===> fetching data from server
app.get("/", (req, res) => {
  res.status(200).send("hi my name is devis");
});

app.get("/api/v1/users", (req, res) => {
// qure perams =================================
  const { name } = req.query;
//   console.log(req)
 
//   console.log(req.query)
 

  if (name) {
    const user = userdata.filter((user) => user.name === name);
    return res.status(200).send(user);   // <-- IMPORTANT return
  }

  // if no query -> send all users
  return res.status(200).send(userdata);
});
// route perams ============================================ 
app.get("/api/v1/users/:id",(req,res)=>{

    const {id} = req.params;
    // console.log(typeof id);

    const parsedId = parseInt(id);

    const user = userdata.find((user)=>user.id === parsedId)

    console.log(req.params);
    res.status(200).send(user)
})


// post req (it is data send to server)

app.post("/api/v1/users",(req , res)=>{
    // console.log(req.body);
    const {name} = req.body;
    // console.log(name);

    const newUser = {
        id:userdata.length+1,
        name
    }

    userdata.push(newUser);

    // res.status(201).send("data is send successfully")
    // //===> any items creat so use to status is 201 not 200 okkkkkkkkkkk
    //   res.status(201).send(userdata)
     res.status(201).send({
        message: "user created",
        data:newUser
})
//put req =====> updating data on server (update all filds)



    // console.log(req.params , req.params);
    // res.status(200).send("user update")

app.put("/api/v1/users/:id", (req, res) => {
  const { body, params: { id } } = req;
  const parsedId = parseInt(id);

  const userIndex = userdata.findIndex((user) => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  userdata[userIndex] = {
    ...userdata[userIndex],   // old data keep
    ...body,                  // new data update
    id: parsedId,             // id same hi rahega
  };

  return res.status(200).send({
    message: "User updated",
    data: userdata[userIndex],
  });
});



//patch req ====> updating data on server (specific filds update)


app.patch("/api/v1/users/:id", (req, res) => {
  const { body, params: { id } } = req;
  const parsedId = parseInt(id);

  const userIndex = userdata.findIndex((user) => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send("User not found");
  }

  userdata[userIndex] = {
    ...userdata[userIndex],   // old data keep
    ...body,                  // new data update
    id: parsedId,             // id same hi rahega
  };

  return res.status(200).send({
    message: "User updated",
    data: userdata[userIndex],
  });
});
//delete req ===> deleting data on server

app.delete("/api/v1/users/:id", (req, res) => {
  const { id } = req.params;
  const parsedId = parseInt(id);

  const userIndex = userdata.findIndex((user) => user.id === parsedId);

  // user not found
  if (userIndex === -1) {
    return res.status(404).send({
      message: "User not found"
    });
  }

  // remove user
  const deletedUser = userdata.splice(userIndex, 1);

  return res.status(200).send({
    message: "User deleted successfully",
    data: deletedUser[0]
  });
});


})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

import express from "express";
import cors from "cors";
import pool from "./db.mjs";
// import cache from "./cache.mjs"; 
import { v4 as uuidv4 } from "uuid";

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => { 
//   res.send("It works!");
// });

//ROUTES//

//create a ToDo

app.post("/todos", async(req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
    res.json(newTodo.rows[0]);
  } catch(err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//get all ToDos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//get a ToDo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//update a ToDo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);
    res.json("ToDo was updated!");
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//delete a ToDo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("ToDo was deleted!");
  } catch (err) {
    console.error(err.message);
    res.send(err.message);
  }
});

//

app.use("*", (_, res) => {
  return res
    .status(404)
    .json({ error: "the requested resource does not exist on this server" });
});


export default app;

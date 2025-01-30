import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Existing routes
app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test", (c) => {
  return c.json({
    message: "Hello Hono!",
    data: {
      name: "John Doe",
      age: 25,
    },
  });
});

// New User routes
app.post("/users", async (c) => {
  const body = await c.req.json();
  // Here you would typically save the user to a database
  return c.json({ message: "User created", data: body }, 201);
});

app.get("/users/:id", (c) => {
  const userId = c.req.param("id");
  // Here you would fetch the user from a database
  const user = {
    id: userId,
    name: "John Doe",
    email: "john@example.com",
  };
  return c.json({ message: "User found", data: user });
});

app.put("/users/:id", async (c) => {
  const userId = c.req.param("id");
  const body = await c.req.json();
  // Here you would update the user in the database
  return c.json({ message: "User updated", data: { id: userId, ...body } });
});

app.delete("/users/:id", (c) => {
  const userId = c.req.param("id");
  // Here you would delete the user from the database
  return c.json({ message: `User ${userId} deleted` });
});

export default app;

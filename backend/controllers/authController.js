import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

const usersFilePath = path.resolve("data/users.json");

const getUsers = () => {
  const data = fs.readFileSync(usersFilePath);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const users = getUsers();

    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
    };

    users.push(newUser);

    saveUsers(users);

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
      },
      "travivaSecret",
      {
        expiresIn: "7d",
      }
    );

    res.status(201).json({
      token,
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const users = getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "travivaSecret",
      {
        expiresIn: "7d",
      }
    );

    res.json({
      token,
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};
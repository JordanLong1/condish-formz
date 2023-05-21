function login({ email, password }) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous login process
    setTimeout(() => {
      if (email === "example@example.com" && password === "password123") {
        resolve("Login successful!");
      } else {
        reject("Invalid email or password.");
      }
    }, 2000); // Simulating a 2-second delay
  });
}

export default login;

const fs = require("fs");

const hey = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (x) => {
    if (x.toString().trim() === "ls") {
      fs.readdir("./", "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files.join("\n"));
          process.stdout.write("prompt > ");
        }
      });
    }
  });
};

module.exports = {
  hey,
};

const hello = () => {
  process.stdout.write("prompt > ");

  process.stdin.on("data", (x) => {
    if (x.toString().trim() === "pwd") {
      const cmd = process.cwd();

      process.stdout.write(cmd);
      process.stdout.write("\nprompt > ");
    } else {
      process.stdout.write("please input pwd");
      process.stdout.write("\nprompt > ");
    }
  });
};

module.exports = {
  hello,
};

const args = process.argv.slice(2);
if (!args) return false;
for (let i of args) {
  if (i > 0) {
    setTimeout(() => {
    process.stdout.write('\x07');;
  }, i * 1000);
  }
}

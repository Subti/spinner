const spinnyBois = ['|', '/', '-', '\\', '|'];

for (let i = 0; i < spinnyBois.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnyBois[i]}    `);
  }, 100 * i)
}
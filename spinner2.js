const signs = ['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   '];
let time = 100;

for(const sign of signs){
  setTimeout(() => {
    process.stdout.write(sign);
  },time)
  time += 200
}

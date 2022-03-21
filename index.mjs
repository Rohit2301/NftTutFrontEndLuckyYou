import { NFTStorage, File } from "nft.storage";
// import { getFilesFromPath } from "files-from-path";
import fs from "fs";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGFDQmEwMDVCYTM5YTVhMzEwQzVCNDk5RTQ1NWNGNkY4QzJmMjA0YjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0Nzg3MTU3NTY0NSwibmFtZSI6Ik5GVEx1Y2t5WW91RGVtbyJ9.UbFpJd_mGdP7X11uUhbv9hy8huZzP4_5zJOyD8QKURY",
});

async function main() {
  let file = new File([fs.readFileSync("image.jpg")], "image.jpg", {
    type: "image/png",
  });
  const metadata = await client.store({
    name: "LuckYou Winner Nft",
    description: "hey you are the winner and this is your nft",
    image: file,
  });
  console.log("metadata url : ", metadata.url);
  console.log("metadata json data: ", metadata.data);
}

main();
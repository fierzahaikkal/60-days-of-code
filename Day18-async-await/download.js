const getStatus = (url) => {
  console.log(`Downloading from ${url}...`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Download Complete");
    }, 3000);
  });
};
const url1 = "myxyz.com";
const url2 = "xyz.com";
const url3 = "abc.com";

const download = async () => {
  let status1 = await getStatus(url1);
  console.log(status1);
  let status2 = await getStatus(url2);
  console.log(status2);
  let status3 = await getStatus(url3);
  console.log(status3);
};

download();

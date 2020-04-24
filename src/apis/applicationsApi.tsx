export function getApplications() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          applicationName: `Application ${i+1}`,
          otherData: "Other-data"
        })
      }
      resolve(data);
    }, 1000)
  });
}
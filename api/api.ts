const fetchOptions = {
  method: "GET",
  Headers: {
    "Content-Type": "application/json",
  },
};

const base = "https://balburdia-api.onrender.com";
const dev = "http://localhost:4001";

export const getMonthStatus = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const promResp = await fetch(base + "/api/month-status", fetchOptions);
      const resp = await promResp.json();
      // console.log("resp");
      // console.log(resp);
      if (resp.status) {
        resolve(resp.datas);
      } else {
        reject(resp.error);
      }
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const getExpenses = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const promResp = await fetch(base + "/api/expenses", fetchOptions);
      const resp = await promResp.json();
      if (resp.status) {
        resolve(resp);
      } else {
        reject(resp.error);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export const getPayers = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const promResp = await fetch(base + "/api/payers", fetchOptions);
      const resp = await promResp.json();
      if (resp.status) {
        resolve(resp.datas);
      } else {
        reject(resp.error);
      }
    } catch (error: any) {
      reject(error.message);
    }
  });
};

export const getFinier = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const promResp = await fetch(dev + "/api/fines", fetchOptions);
      const resp = await promResp.json();
      if (resp.status) {
        resolve(resp.data);
      } else {
        reject(resp.error);
      }
    } catch (error: any) {
      reject(error.message);
    }
  });
};

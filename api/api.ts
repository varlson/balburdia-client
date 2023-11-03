export const desp = [
  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },
  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },

  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },
  {
    purchase: "alguma coisa ",
    price: "400 R$ ",
    by: "fulano",
    date: "11/11/11",
  },
];

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
      const promResp = await fetch(dev + "/api/expenses", fetchOptions);
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

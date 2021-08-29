const USER = require("../admin/models/user.js");
const boxen = require("boxen");

const generateSuperUser = async () => {
  const password = "1234";
  const randomEmail = "Admin@api.com";
  const userAdmin = new USER({
    email: randomEmail,
    password: password,
    isSuperUser: true,
    profile: {
      name: "ADMIN",
    },
  });

  const usercreated = await userAdmin.save().catch((erro) => null);

  if (!usercreated) {
    console.log(
      boxen("Usuario no Creado", {
        padding: 1,
        borderColor: "red",
      })
    );
  } else {
    console.log(
      boxen("Usuario Creado", {
        padding: 1,
        borderColor: "green",
      })
    );
  }
  process.exit();
};

generateSuperUser();

import jwt from "jsonwebtoken";



async function test() { //

  const accessToken = jwt.sign({ sub: "user.id" }, "fdasfdsafdasfdasvczx");
  const test = jwt.verify(accessToken, "fdasfdsafdasfdasvczx");

  console.log(test);
}


test();
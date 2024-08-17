import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { stringToHex } from "viem"

export default buildModule("Ballot", (m) => {
  const lock = m.contract("Ballot", [[
    stringToHex("a", { size: 32 }),
    stringToHex("b", { size: 32 })
  ]]);
  return { lock };
});



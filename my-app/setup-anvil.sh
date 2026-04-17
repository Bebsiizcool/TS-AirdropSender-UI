#!/bin/bash
pkill anvil
cd ~/Documents/TS-AirdropSender-UI/my-app
anvil --load-state tsender-deployed.json &
sleep 3

forge script ~/Documents/TS-AirdropSender-UI/contracts/script/Deploy.s.sol:Deploy \
  --rpc-url http://localhost:8545 \
  --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
  --broadcast \
  --root ~/Documents/TS-AirdropSender-UI/contracts

echo "Done! TSender at 0x5FbDB2315678afecb367f032d93F642f64180aa3"
echo "MockToken at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"

#!/bin/bash
pkill anvil
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"
anvil --load-state tsender-deployed.json &
sleep 3

cd "$SCRIPT_DIR/../contracts"
forge script script/Deploy.s.sol:Deploy \
  --rpc-url http://localhost:8545 \
  --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 \
  --broadcast

echo "Done! TSender at 0x5FbDB2315678afecb367f032d93F642f64180aa3"
echo "MockToken at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
echo "MockToken2 at 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"

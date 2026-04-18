# TS-AirdropSender-UI

A full-stack ERC20 airdrop tool built with Next.js, Wagmi, RainbowKit, and Solidity. Send tokens to multiple wallet addresses in a single transaction using a clean, modern UI.

🔗 **Live Demo:** [ts-airdrop-sender-ui.vercel.app](#)

---

## What It Does

- Connect your wallet via RainbowKit (MetaMask, WalletConnect, and more)
- Enter a token address, list of recipient addresses, and amounts
- Automatically handles ERC20 approval before airdropping
- Sends tokens to multiple recipients in one transaction
- Supports Anvil local testnet for development

---

## Project Structure

```
TS-AirdropSender-UI/
├── contracts/         # Solidity smart contracts (Foundry)
└── my-app/            # Next.js frontend
```

---

## Prerequisites

Make sure you have the following installed before getting started:

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) — `npm install -g pnpm`
- [Foundry](https://getfoundry.sh/) — for smart contract development
- [Git](https://git-scm.com/)
- [MetaMask](https://metamask.io/) browser extension

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Bebsiizcool/TS-AirdropSender-UI.git
cd TS-AirdropSender-UI
```

### 2. Install Git Submodules

```bash
git submodule update --init --recursive
```

---

## Smart Contracts Setup (Foundry)

### Install Foundry

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### Navigate to contracts folder

```bash
cd contracts
```

### Install OpenZeppelin Contracts

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

### Install Forge Standard Library

```bash
forge install foundry-rs/forge-std
```

### Build Contracts

```bash
forge build
```

### Run Tests

```bash
forge test
```

### Start Local Anvil Node

```bash
anvil
```

This starts a local Ethereum node at `http://127.0.0.1:8545` with Chain ID `31337`. Copy one of the private keys printed in the terminal and import it into MetaMask.

### Deploy Contracts (optional)

```bash
forge script script/Deploy.s.sol --rpc-url http://127.0.0.1:8545 --broadcast
```

---

## Frontend Setup (Next.js)

### Navigate to the frontend folder

```bash
cd my-app
```

### Install Dependencies

```bash
pnpm install
```

### Install Vanta.js Background (optional)

```bash
pnpm add vanta three@0.134.0
```

### Environment Variables

Create a `.env.local` file in the `my-app` folder:

```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com).

### Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Connecting MetaMask to Anvil

1. Open MetaMask → Settings → Networks → Add Network
2. Fill in the following:
   - **Network Name:** Anvil
   - **RPC URL:** `http://127.0.0.1:8545`
   - **Chain ID:** `31337`
   - **Currency Symbol:** `ETH`
3. Import one of the Anvil test accounts using its private key

---

## Frontend Dependencies

| Package | Purpose |
|---|---|
| `next` | React framework |
| `react` / `react-dom` | UI library |
| `wagmi` | Ethereum hooks for React |
| `viem` | Ethereum interactions |
| `@rainbow-me/rainbowkit` | Wallet connection UI |
| `@tanstack/react-query` | Async state management |
| `tailwindcss` | Utility-first CSS framework |
| `vanta` | Animated 3D backgrounds |
| `three@0.134.0` | 3D rendering (required by Vanta) |

---

## Smart Contract Dependencies

| Package | Purpose |
|---|---|
| `OpenZeppelin/openzeppelin-contracts` | ERC20 standard & utilities |
| `foundry-rs/forge-std` | Foundry testing & scripting tools |

---

## How to Use

1. Start Anvil: `anvil`
2. Start the frontend: `pnpm dev`
3. Connect your wallet using the header button
4. Enter the ERC20 token contract address
5. Enter recipient addresses (comma or newline separated)
6. Enter amounts per recipient (comma or newline separated)
7. Click **Send Tokens**
8. Approve the token spend in MetaMask (first transaction)
9. Confirm the airdrop transaction in MetaMask (second transaction)

---

## License

MIT

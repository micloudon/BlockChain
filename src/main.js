
const{Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d4449d8debd57efc2b93b0ae81784275342ea1828a1540650bfcdfb38651df81');
const myWalletAddress = myKey.getPublic('hex');

let mickeyCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
mickeyCoin.addTransaction(tx1);


function mine(mickeyCoin) {
      console.log('\n Starting the miner..');
      mickeyCoin.minePendingTransactions(myWalletAddress);
}
mine()
mine()
mine()

function balance(mickeyCoin) {
      console.log(`Balance of mickey is ${mickeyCoin.getBalanceOfAddress(myWalletAddress)}`);
}

balance()
balance()




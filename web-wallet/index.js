
const { ethers } = window.ethers;

const mnemonicPhrase = document.getElementById('mnemonic-display');
const mnemonicHeading = document.getElementById('mnemonic-heading');

const createMnemonicBtn = document.getElementById('generate-mnemonic');
const createWalletBtn = document.getElementById('add-wallet');
const walletList = document.getElementById('wallet-list');


let mnemonic="";
let walletCount = {
    "eth":0
}


createMnemonicBtn.addEventListener('click', () => {
    mnemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    mnemonicHeading.textContent = "Mnemonic Phrase"
    mnemonicPhrase.textContent = mnemonic;
});

createWalletBtn.addEventListener('click', () => {
    if (!mnemonic) {
        alert('Please generate a mnemonic first.');
        return;
    }

    const walletID = walletCount.eth;
    const wallet = ethers.Wallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${walletID}`);
    walletCount["eth"]+=1
    const walletItem = document.createElement('li');
    walletItem.textContent = `EthWallet ${walletID + 1}: ${wallet.address}`;
    walletList.appendChild(walletItem);
});

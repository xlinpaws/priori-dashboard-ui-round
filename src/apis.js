
export function getAssetsByAddress(address) {
  return fetch('https://api.covalenthq.com/v1/1/address/demo.eth/balances_v2/?key=ckey_61cc564f892c41f5a656f74c8f2')
    .then(response => response.json())
}
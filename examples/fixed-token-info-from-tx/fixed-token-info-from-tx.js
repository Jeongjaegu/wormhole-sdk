/*
  Get the token information for a token generated with manage-token.
*/

"use strict"

// Instantiate wormholecash
const WH = require("wormholecash/lib/Wormhole").default
const Wormhole = new WH({
  restURL: `https://wormholecash-staging.herokuapp.com/v1/`
})

// Open the tx data generated by managed-token.
let txInfo
try {
  txInfo = require(`../create-fixed-token/token-tx.json`)
} catch (err) {
  console.log(
    `Could not open token-tx.json. Generate a managed token first.
    Exiting.`
  )
  console.log(err)
  process.exit(0)
}

// Get Token info from the TX.
async function getTxInfo() {
  const retVal = await Wormhole.DataRetrieval.transaction(txInfo.tokenTx)

  console.log(
    `Info from TXID ${txInfo.tokenTx}: ${JSON.stringify(retVal, null, 2)}`
  )
}
getTxInfo()
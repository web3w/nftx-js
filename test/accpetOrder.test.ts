import * as secrets from '../../../secrets.json'
import {LooksRareSDK} from "../src/index";
import {Asset, SellOrderParams} from "web3-accounts";
import {Web3ABICoder} from "web3-abi-coder";


// const seller = '0x9F7A946d935c8Efc7A8329C0d894A69bA241345A';
const seller = '0x32f4B63A46c1D12AD82cABC778D75aBF9889821a';
const chainId = 1


const sdk = new LooksRareSDK({
    chainId,
    address: seller,
    privateKeys: secrets.privateKeys
}, {proxyUrl: "http://127.0.0.1:7890", apiKey: secrets.looksApikey});

;(async () => {
        try {
            // const buyNowInput = "0xb4e4b29600000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032f4b63a46c1d12ad82cabc778d75abf9889821a00000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000015b0000000000000000000000000000000000000000000000000000000000001d4c00000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000004443049b49caf8eb4e9235aa1efe38fcfa0055a10000000000000000000000005d99371a4297dfd301a1f22eff22a7e0ed9b448200000000000000000000000000000000000000000000000000005af3107a4000000000000000000000000000000000000000000000000000000000000000015b000000000000000000000000000000000000000000000000000000000000000100000000000000000000000056244bb70cbd3ea9dc8007399f61dfc065190031000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000621238fb0000000000000000000000000000000000000000000000000000000062ff78bb00000000000000000000000000000000000000000000000000000000000021340000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001cbfddd07a06832c09cf3a444747e5fa7be1f539f06e1b190f8c54721af3af5ddd0e47c52dac76bfea3f059ee47724dbd82b848fe54f0401685a4821736d9bcef80000000000000000000000000000000000000000000000000000000000000000"
            const acceptInput = "0x3b6d032e00000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000120000000000000000000000000000000000000000000000000000000000000000100000000000000000000000036b1a29e0bbd47dfe9dcf7380f276e86da90c4c2000000000000000000000000000000000000000000000000004380663abb8000000000000000000000000000000000000000000000000000000000000000002d0000000000000000000000000000000000000000000000000000000000001d4c00000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032f4b63a46c1d12ad82cabc778d75abf9889821a00000000000000000000000052f687b1c6aacc92b47da5209cf25d987c876628000000000000000000000000000000000000000000000000004380663abb8000000000000000000000000000000000000000000000000000000000000000002d000000000000000000000000000000000000000000000000000000000000000100000000000000000000000056244bb70cbd3ea9dc8007399f61dfc065190031000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc200000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000062dd75210000000000000000000000000000000000000000000000000000000062dd832900000000000000000000000000000000000000000000000000000000000026480000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001bc5a7f605657614b9d3683763ba8b2044dd1d6267f0443f0ebd4f78ca61045c1a28da7d313da203a51e373a7c73e9550c2fcc9429cf1a5fdffc85e8e12994a5640000000000000000000000000000000000000000000000000000000000000000"

            console.log(sdk.coder.decodeInput(acceptInput))
            const asset: Asset = {
                tokenId: "8740",
                tokenAddress: "0x0eDA3c383F13C36db1c96bD9c56f715B09b9E350",
                schemaName: "ERC721"
            }

            const buyParams = {
                asset,
                startAmount: 0.029,
                quantity: 1,
                expirationTime: Math.round(new Date().getTime() / 1000 + 3600),
                listingTime: 0
            } as SellOrderParams
            //
            const buyData = await sdk.createBuyOrder(buyParams)

            //


        } catch (err: any) {
            console.log(err)
            debugger

        }
    }
)()

// matchBidWithTakerAsk
// {
//     name: 'matchBidWithTakerAsk',
//         type: 'function',
//     values: {
//     takerAsk: {
//         isOrderAsk: true,
//             taker: '0x36B1a29E0bbD47dFe9dcf7380F276e86da90c4c2',
//             price: '19000000000000000',
//             tokenId: '45',
//             minPercentageToAsk: '7500',
//             params: '0x'
//     },
//     makerBid: {
//         isOrderAsk: false,
//             signer: '0x32f4B63A46c1D12AD82cABC778D75aBF9889821a',
//             collection: '0x52F687B1c6aACC92b47DA5209cf25D987C876628',
//             price: '19000000000000000',
//             tokenId: '45',
//             amount: '1',
//             strategy: '0x56244Bb70CbD3EA9Dc8007399F61dFC065190031',
//             currency: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//             nonce: '5',
//             startTime: '1658680609',
//             endTime: '1658684201',
//             minPercentageToAsk: '9800',
//             params: '0x',
//             v: 27,
//             r: '0xc5a7f605657614b9d3683763ba8b2044dd1d6267f0443f0ebd4f78ca61045c1a',
//             s: '0x28da7d313da203a51e373a7c73e9550c2fcc9429cf1a5fdffc85e8e12994a564'
//     }
// }
// }


// https://testnets-api.opensea.io/api/v1/assets?include_orders=false&limit=1&owner=0x9F7A946d935c8Efc7A8329C0d894A69bA241345A
// https://testnets-api.opensea.io/api/v1/assets?include_orders=false&limit=1&owner=0x9F7A946d935c8Efc7A8329C0d894A69bA241345A

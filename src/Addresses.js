import { ADDRESS_ZERO } from "@uniswap/v3-sdk";
import { ARBITRUM_GOERLI } from "./Helpers";

const CONTRACTS = {
  1: {
    UniswapMycEthPool: "0x66dD48889Df1Fc32cBa3aBfA2c453906d527eB2e",

    UniswapTcrEthPool: "0x10b5c63a0a94ec3036238190bc88608a02e91e2c",
    SushiswapTcrEthPool: "0xe55c3e83852429334a986b265d03b879a3d188ac",

    UniswapEthUsdcPool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
    BalancerVault: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",

    TCR: "0x9c4a4204b79dd291d6b6571c5be8bbcd0622f050",
    MYC: "0x4b13006980aCB09645131b91D259eaA111eaF5Ba",

    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },

  421613: {
    // arbitrum goerli
    Vault: "0x21C577722EF0AdF247c600E7c21bfc25DDf20c99",
    Router: "0xFaBa3f2F1A4cf35a07cfFeb2F7ACE3BcCc2d2973",
    VaultReader: "0x6131e9d8dA3A30fFe0D5bA6c0149702218e2a2C1",
    Reader: "0xD3E64F364f304fF21C06914Dc459C49fB77F0F1a",
    MlpManager: "0x9ac416970c46AA156cfB8A558c7599633ff0A6a7",
    RewardRouter: "0x8e256078AfAE075cF48cDBE4079b352262e9457c",
    RewardReader: "0x4289375Fe05aA4D49b9132FE332669b3988F8de4",

    // https://github.com/OffchainLabs/arbitrum/blob/950c2f91b2e951cd3764394e0a73eac3797aecf3/packages/arb-ts/src/lib/networks.ts#L65
    NATIVE_TOKEN: "0x08466D6683d2A39E3597500c1F17b792555FCAB9",
    MLP: "0x25C7873FC2B2FB0A5A5D6346ee8940dCCd6A88B8",
    TCR: "0x428F127d29f45dbB05B99a5d3adeA8171A3Ec390",
    MYC: "0x428F127d29f45dbB05B99a5d3adeA8171A3Ec390",
    ES_MYC: "0xe2b9C2F3c8BD2b6Bc1E75b5650133be26Ca324Af",
    BN_MYC: "0x6cb7A4b0360Cf1B54eE9140F8Da45726671E7fdb",
    USDG: "0x52d1A1d053CF2132C9bF9989aaaaF7921f9011BE",

    StakedMycTracker: "0x45E8f0770DD204388477CfA42315E883572E0DAA",
    BonusMycTracker: "0xa8D1b5e8b09782d64d75cd1d55444a3AbEaD0821",
    FeeMycTracker: "0x9e958AC42115a17C6d734D02c164e761daa2BC47",
    StakedMlpTracker: "0xFCe0334D8dd8Ae6f6dEb2784a7a6e1Bd3Dc645A2",
    FeeMlpTracker: "0xbdf67A0a70e4A5907559f4fA784b544365A2564F",

    StakedMycDistributor: "0x92E6D5464A3B4070031df73e0782951bD1a16d8C",
    StakedMlpDistributor: "0x74F067d10D4783937Ef7d9Dc6DeF27e7489e7802",

    MycVester: "0x59A3640b4C8aCF9D6E6107e9Ba16d8B7d7cC412c",
    MlpVester: "0xd3A37697c1B21DdE4F97636E294399e0fab9D235",

    OrderBook: "0x5351f1EA99999aE1f088415DF3a07638eC951d08",
    OldOrderBook: "0xB131725c12789064875c9ee126f83c96D771bD90", // Update this once deployed
    OrderExecutor: "0x9B12CF1bC134a9eE01DC456fbb13a662C2dcf443",
    OrderBookReader: "0xf2A0764144bEB244cD04356b5b2078E0ef682FF6",
    PositionRouter: "0x48e715eb6d5a9D2Aab1b4b938790F81919bDf71b",
    PositionManager: "0xb65B42c48DB28e13Cd490f72dDDEEe57eD2072f6",
    PositionCreator: "0x67cDf2a2f2c1a5FF13dAaF425523e4919bE93993",

    ReferralStorage: "0x956BbBe040A2378B63C21011e3c71978d7B75a56",
    ReferralReader: "0x27ec154C4D6e496027FBED863aC7a0186942Cc09",

    // TODO: Change these once deployed
    FeeDistributor: "0x057B99E0112A0D9fDA7503bDc8b6995fA2ff997D",
    FeeDistributorReader: "0x55ce0A81b697f1eff846e8a56D3f303A5BE490b1",
    MerkleDistributor: "0xEC503757C71440A7c82B6BB2d689bC4d191bC75d",
    MerkleDistributorReader: "0xbB097d322D793ecd03721538d906d0C450d3839C",
  },
  42161: {
    // arbitrum mainnet
    Vault: "0xDfbA8AD57d2c62F61F0a60B2C508bCdeb182f855",
    Router: "0x3cd2F02B9e39ccC781d0C07fc0286F654e53A76D",
    VaultReader: "0x261f953172ed61155a3f18fF807139Abe8234196",
    Reader: "0x77AE0F7128C6AC9f0efdb8A6F0Aabd5b979Ea80e",
    MlpManager: "0x2DE28AB4827112Cd3F89E5353Ca5A8D80dB7018f",
    RewardRouter: "0xd98d8e458F7aD22DD3C1d7A8B35C74005eb52b0b",
    RewardReader: "0x676CF948e84560808EEfb7Af9D3a46e0d6A6F988",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    MLP: "0x752b746426b6D0c3188bb530660374f92FD9cf7c",
    TCR: "0xA72159FC390f0E3C6D415e658264c7c4051E9b87",
    MYC: "0xc74fe4c715510ec2f8c61d70d397b32043f55abe",
    ES_MYC: "0x7CEC785fba5ee648B48FBffc378d74C8671BB3cb",
    BN_MYC: "0xb97f91bd8f7fb6ac761Fb84cB953e4F52f049486",
    USDG: "0xe61a61B9Ce1Bd12e17a53AeeeE1005Ef6C1b2E80",
    StakedMycTracker: "0x2BC8E28f5d41a4b112BC62EB7Db1B757c85f37Ff",
    BonusMycTracker: "0xbF86a15fa2604dbA2ad7E843c589FAAAd78bF318",
    FeeMycTracker: "0x0cA0147c21F9DB9D4627e6a996342A11D25972C5",
    StakedMlpTracker: "0xF7Bd2ed13BEf9C27a2188f541Dc5ED85C5325306",
    FeeMlpTracker: "0xF0BFB95087E611897096982c33B6934C8aBfA083",

    StakedMycDistributor: "0x3169b5719B8a7b40580965E8557379Fe15209aAD",
    StakedMlpDistributor: "0xB000f7dF69d74a1F3b3cdb8ddEB3317a0823af2b",

    MycVester: "0x67fF0614F6E4E04362B3b919Adc7371884895Ae8",
    MlpVester: "0xCB6ac1EacF498118f4609462c0979fFB3eBD1821",

    OrderBook: "0x74F28832cA4337bFC6035400eAB80AFD61cdf35b",
    OldOrderBook: ADDRESS_ZERO, // Update this once deployed
    // OrderBookV1: "0x2EeEf7852a306a580acF94F7c18C3FF124A59d4f",
    OrderExecutor: "0xC4e695a2ae9fd060E24Cdb87874b684dB7447a18",
    OrderBookReader: "0x1044345924277FD2e9bdF14Edad8C1d1a67a4B8e",

    PositionRouter: "0xE510571cAc76279DADf6c4b6eAcE5370F86e3dC2",
    PositionManager: "0x3892b8cF646b17709C91E653319bA5504a5FEafe",
    PositionCreator: ADDRESS_ZERO, // Update this once deployed

    UniswapMycTcrPool: "0xc9f423c406e690b7f7715f9e048489caafb2266b",
    // TODO this uniswap pool has low liquidity so cant use for pricing
    UniswapMycEthPool: "0x6a034ac28064ffa8375e4668f4ecebdf3aafcba0",
    UniswapTcrEthPool: "0xe8bfb2918853576f0965e29bb86001ea93019003",

    BalancerVault: "0xBA12222222228d8Ba445958a75a0704d566BF2C8",

    ReferralStorage: "0x3Cd316df040f8A76eb2b496B92b358d3b2EFB9F5",
    ReferralReader: "0xb220724b6b68a84392eC22e841eDe5519863A21F",

    FeeDistributor: "0xc136c6a977af230B4F288dCE7f9432b0e91e4657",
    FeeDistributorReader: "0xe6d60D6A7d39d9435403e0993890D6B50B4B03BC",

    MerkleDistributor: "0xEC503757C71440A7c82B6BB2d689bC4d191bC75d",
    MerkleDistributorReader: "0xbB097d322D793ecd03721538d906d0C450d3839C",

    LentMYC: "0x9B225FF56C48671d4D04786De068Ed8b88b672d6",
    MYCStakingRewards: "0xF9B003Ee160dA9677115Ad3c5bd6BB6dADcB2F93", // v2 staking
  },
};

export function getContract(chainId, name) {
  if (!CONTRACTS[chainId]) {
    throw new Error(`Unknown chainId ${chainId}`);
  }
  if (!CONTRACTS[chainId][name]) {
    throw new Error(`Unknown contract "${name}" for chainId ${chainId}`);
  }
  return CONTRACTS[chainId][name];
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MintToken,
  MintTokenInterface,
} from "../../../contracts/mint.sol/MintToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "MetaTransactionExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "executeMetaTransaction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020016826b4b73a2a37b5b2b760b91b815250604051806040016040528060038152602001624d544b60e81b815250816003908162000061919062000285565b50600462000070828262000285565b5050506200008d62000087620000c060201b60201c565b620000c4565b620000b533620000a06012600a62000466565b620000af90620f42406200047e565b62000116565b6001600655620004ae565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001715760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000185919062000498565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200020c57607f821691505b6020821081036200022d57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001dc57600081815260208120601f850160051c810160208610156200025c5750805b601f850160051c820191505b818110156200027d5782815560010162000268565b505050505050565b81516001600160401b03811115620002a157620002a1620001e1565b620002b981620002b28454620001f7565b8462000233565b602080601f831160018114620002f15760008415620002d85750858301515b600019600386901b1c1916600185901b1785556200027d565b600085815260208120601f198616915b82811015620003225788860151825594840194600190910190840162000301565b5085821015620003415787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115620003a85781600019048211156200038c576200038c62000351565b808516156200039a57918102915b93841c93908002906200036c565b509250929050565b600082620003c15750600162000460565b81620003d05750600062000460565b8160018114620003e95760028114620003f45762000414565b600191505062000460565b60ff84111562000408576200040862000351565b50506001821b62000460565b5060208310610133831016604e8410600b841016171562000439575081810a62000460565b62000445838362000367565b80600019048211156200045c576200045c62000351565b0290505b92915050565b60006200047760ff841683620003b0565b9392505050565b808202811582820484141762000460576200046062000351565b8082018082111562000460576200046062000351565b610ed080620004be6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063d69c3d3011610066578063d69c3d3014610209578063d8ed1acc14610212578063dd62ed3e14610225578063f2fde38b1461023857600080fd5b80638da5cb5b146101c057806395d89b41146101db578063a457c2d7146101e3578063a9059cbb146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806370a082311461018d578063715018a6146101b657600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61024b565b60405161011a9190610b6d565b60405180910390f35b610136610131366004610ba3565b6102dd565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610bcd565b6102f7565b6040516012815260200161011a565b610136610188366004610ba3565b61031b565b61014a61019b366004610c09565b6001600160a01b031660009081526020819052604090205490565b6101be61033d565b005b6005546040516001600160a01b03909116815260200161011a565b61010d610351565b6101366101f1366004610ba3565b610360565b610136610204366004610ba3565b6103e0565b61014a60065481565b6101be610220366004610cc7565b6103ee565b61014a610233366004610d3b565b6105d0565b6101be610246366004610c09565b6105fb565b60606003805461025a90610d6e565b80601f016020809104026020016040519081016040528092919081815260200182805461028690610d6e565b80156102d35780601f106102a8576101008083540402835291602001916102d3565b820191906000526020600020905b8154815290600101906020018083116102b657829003601f168201915b5050505050905090565b6000336102eb818585610674565b60019150505b92915050565b600033610305858285610798565b610310858585610812565b506001949350505050565b6000336102eb81858561032e83836105d0565b6103389190610dbe565b610674565b6103456109b6565b61034f6000610a10565b565b60606004805461025a90610d6e565b6000338161036e82866105d0565b9050838110156103d35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103108286868403610674565b6000336102eb818585610812565b6005546001600160a01b031633148061040657503330145b6104465760405162461bcd60e51b81526020600482015260116024820152702737ba1037bbb732b91037b91039b2b63360791b60448201526064016103ca565b60008360065484306040516020016104619493929190610dd1565b604051602081830303815290604052805190602001209050610484848284610a62565b6104c45760405162461bcd60e51b8152602060048201526011602482015270496e76616c6964207369676e617475726560781b60448201526064016103ca565b600680549060006104d483610e20565b91905055506000306001600160a01b0316846040516104f39190610e39565b6000604051808303816000865af19150503d8060008114610530576040519150601f19603f3d011682016040523d82523d6000602084013e610535565b606091505b50509050806105905760405162461bcd60e51b815260206004820152602160248201527f4d657461207472616e73616374696f6e20657865637574696f6e206661696c656044820152601960fa1b60648201526084016103ca565b7fac470f3118096492e2f9f1d479269b22af43d8c9eba96e8de7d2fe8ebfed0eec85856040516105c1929190610e55565b60405180910390a15050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6106036109b6565b6001600160a01b0381166106685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103ca565b61067181610a10565b50565b6001600160a01b0383166106d65760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103ca565b6001600160a01b0382166107375760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103ca565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006107a484846105d0565b9050600019811461080c57818110156107ff5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ca565b61080c8484848403610674565b50505050565b6001600160a01b0383166108765760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103ca565b6001600160a01b0382166108d85760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103ca565b6001600160a01b038316600090815260208190526040902054818110156109505760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103ca565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361080c565b6005546001600160a01b0316331461034f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103ca565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080610a6f8484610a88565b6001600160a01b03908116908616149150509392505050565b6020810151604082015160608301516000929190831a601b811015610ab557610ab2601b82610e81565b90505b60408051600081526020810180835288905260ff831691810191909152606081018490526080810183905260019060a0016020604051602081039080840390855afa158015610b08573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b60005b83811015610b38578181015183820152602001610b20565b50506000910152565b60008151808452610b59816020860160208601610b1d565b601f01601f19169290920160200192915050565b602081526000610b806020830184610b41565b9392505050565b80356001600160a01b0381168114610b9e57600080fd5b919050565b60008060408385031215610bb657600080fd5b610bbf83610b87565b946020939093013593505050565b600080600060608486031215610be257600080fd5b610beb84610b87565b9250610bf960208501610b87565b9150604084013590509250925092565b600060208284031215610c1b57600080fd5b610b8082610b87565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610c4b57600080fd5b813567ffffffffffffffff80821115610c6657610c66610c24565b604051601f8301601f19908116603f01168101908282118183101715610c8e57610c8e610c24565b81604052838152866020858801011115610ca757600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215610cdc57600080fd5b610ce584610b87565b9250602084013567ffffffffffffffff80821115610d0257600080fd5b610d0e87838801610c3a565b93506040860135915080821115610d2457600080fd5b50610d3186828701610c3a565b9150509250925092565b60008060408385031215610d4e57600080fd5b610d5783610b87565b9150610d6560208401610b87565b90509250929050565b600181811c90821680610d8257607f821691505b602082108103610da257634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156102f1576102f1610da8565b60006bffffffffffffffffffffffff19808760601b1683528560148401528451610e02816034860160208901610b1d565b60609490941b16919092016034810191909152604801949350505050565b600060018201610e3257610e32610da8565b5060010190565b60008251610e4b818460208701610b1d565b9190910192915050565b6001600160a01b0383168152604060208201819052600090610e7990830184610b41565b949350505050565b60ff81811683821601908111156102f1576102f1610da856fea2646970667358221220d93d11669562e66c9b9bf8560ddddd25f8789bbd8df12d1cd04e5c2ef2ae409464736f6c63430008120033";

type MintTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MintTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MintToken__factory extends ContractFactory {
  constructor(...args: MintTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MintToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MintToken__factory {
    return super.connect(runner) as MintToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintTokenInterface {
    return new Interface(_abi) as MintTokenInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MintToken {
    return new Contract(address, _abi, runner) as unknown as MintToken;
  }
}
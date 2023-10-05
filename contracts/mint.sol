// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintToken is ERC20, Ownable {
    uint256 public nextNonce;

    constructor() ERC20("MintToken", "MTK") {
        _mint(msg.sender, 1000000 * (10**decimals()));
        nextNonce = 1;
    }

    modifier onlyOwnerOrSelf() {
        require(msg.sender == owner() || msg.sender == address(this), "Not owner or self");
        _;
    }

    function executeMetaTransaction(
        address user,
        bytes memory data,
        bytes memory signature
    ) external onlyOwnerOrSelf {
        bytes32 hash = keccak256(abi.encodePacked(user, nextNonce, data, address(this)));
        require(validateSignature(user, hash, signature), "Invalid signature");

        // Increment nonce to prevent replay attacks
        nextNonce++;

        // Execute the desired function
        (bool success, ) = address(this).call(data);
        require(success, "Meta transaction execution failed");

        // Emit an event or perform other actions
        emit MetaTransactionExecuted(user, data);
    }

    function validateSignature(
        address user,
        bytes32 hash,
        bytes memory signature
    ) internal pure returns (bool) {
        address signer = recoverSigner(hash, signature);
        return signer == user;
    }

    function recoverSigner(bytes32 hash, bytes memory signature)
        internal
        pure
        returns (address)
    {
        bytes32 r;
        bytes32 s;
        uint8 v;

        // Extracting r, s, v from the signature
        assembly {
            r := mload(add(signature, 32))
            s := mload(add(signature, 64))
            v := byte(0, mload(add(signature, 96)))
        }

        // EIP-2 and EIP-155 compliance for v
        if (v < 27) {
            v += 27;
        }

        return ecrecover(hash, v, r, s);
    }
    
    event MetaTransactionExecuted(address user, bytes data);
}

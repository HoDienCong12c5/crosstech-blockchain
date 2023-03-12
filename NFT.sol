// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint256 => string) private _tokenImageHashes;

    constructor() ERC721("MyNFT", "NFT") {}

    function mint(address recipient, string memory imageHash) public returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(recipient, newTokenId);
        _tokenImageHashes[newTokenId] = imageHash;
        return newTokenId;
    }

    function setImageHash(uint256 tokenId, string memory imageHash) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Image update not authorized");
        _tokenImageHashes[tokenId] = imageHash;
    }

    function getImageHash(uint256 tokenId) public view returns (string memory) {
        return _tokenImageHashes[tokenId];
    }

    function send(address recipient, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Send not authorized");
        safeTransferFrom(msg.sender, recipient, tokenId);
    }
}

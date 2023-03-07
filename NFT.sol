pragma solidity ^0.5.0;
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/drafts/Counters.sol";
contract MyERC721 is ERC721Full, Counters {
  constructor() public ERC721Full("MyERC721", "ME721") {
    _mint(msg.sender, 1);
  }
  mapping (uint256 => string) public images;
  address public minter;
  modifier onlyMinter() {
    require(msg.sender == minter);
    _;
  }

  function setMinter(address _minter) public {
    minter = _minter;
  }

 function setImg(uint256 _tokenId, string memory _image) public {
    images[_tokenId] = _image;
  }
  function mintImg(uint256 _tokenId, string memory _image) public {
    _mint(msg.sender, _tokenId);
    images[_tokenId] = _image;
    _incrementCounter(msg.sender);
  }
  function mint(address _to, uint256 _tokenId) public onlyMinter {
    _mint(_to, _tokenId);
    _incrementCounter(_to);
  }

  function _burn(address from, uint256 id) internal {
    _burn(from, id);
    _decrementCounter(from);
  }

  function transfer(address _to, uint256 _tokenId) public {
    require(ownerOf(_tokenId) == msg.sender);
    require(_to != address(0));
    _clearApproval(_tokenId);
    _transfer(msg.sender, _to, _tokenId);
  }
}
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    mapping (uint256 => string) private _tokenImageUrls;
    mapping (address => bool) private _minters;

    constructor() ERC721("MyNFT", "NFT") {}

    function mint(address recipient, string memory imageUrl) public returns (uint256) {
        require(_minters[msg.sender], "Minting not permitted");
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(recipient, newTokenId);
        _tokenImageUrls[newTokenId] = imageUrl;
        return newTokenId;
    }

    function transferFrom(address from, address to, uint256 tokenId) public override {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Transfer not authorized");
        super.transferFrom(from, to, tokenId);
    }

    function setImageUrl(uint256 tokenId, string memory imageUrl) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Image update not authorized");
        _tokenImageUrls[tokenId] = imageUrl;
    }

    function getImageUrl(uint256 tokenId) public view returns (string memory) {
        return _tokenImageUrls[tokenId];
    }

    function addMinter(address account) public onlyOwner {
        _minters[account] = true;
    }

    function removeMinter(address account) public onlyOwner {
        _minters[account] = false;
    }

    function sendNFT(address recipient, uint256 tokenId) public {
        require(_isApprovedOrOwner(msg.sender, tokenId), "Send not authorized");
        transferFrom(msg.sender, recipient, tokenId);
    }
}
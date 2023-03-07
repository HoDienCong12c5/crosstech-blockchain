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
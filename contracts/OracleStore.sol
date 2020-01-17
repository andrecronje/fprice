pragma solidity >=0.4.21 <0.7.0;

contract OracleStore {
  mapping(address => uint256) _priceStore;
  mapping(address => uint256) _liquidityStore;
  address oracle;

  constructor() public {
    oracle = msg.sender;
  }

  modifier restricted() {
    if (msg.sender == oracle) _;
  }

  function setPrice(address _token, uint256 _price) public restricted {
    _priceStore[_token] = _price;
  }

  function getPrice(address _token) public view returns (uint256) {
    return _priceStore[_token];
  }

  function setLiquidity(address _token, uint256 _liquidity) public restricted {
    _liquidityStore[_token] = _liquidity;
  }

  function getLiquidity(address _token) public view returns (uint256) {
    return _liquidityStore[_token];
  }
}

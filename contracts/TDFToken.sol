// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/ITransferPermitter.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";

contract TDFToken is ERC20Upgradeable, Ownable2StepUpgradeable {
    /**
     * @dev Emitted when the pause is triggered by `account`.
     */
    event Paused(address account);

    /**
     * @dev Emitted when the pause is lifted by `account`.
     */
    event Unpaused(address account);

    bool private _paused;
    ITransferPermitter private _daoContract;

    modifier onlyDAOorOwner() {
        require(
            owner() == _msgSender() || address(_daoContract) == _msgSender(),
            "Ownable: caller is not the owner or DAO"
        );
        _;
    }

    function initialize(address manager) public initializer {
        __TDFToken_init(manager);
    }

    function __TDFToken_init(address manager) internal onlyInitializing {
        __ERC20_init("Traditional Dream Factory", "TDF");
        __TDFToken_init_unchained(manager);
        __Ownable2Step_init();
    }

    function __TDFToken_init_unchained(address manager) internal onlyInitializing {
        _daoContract = ITransferPermitter(manager);
        _paused = false;
    }

    function setDAOContract(address manager) public onlyOwner {
        _daoContract = ITransferPermitter(manager);
    }

    function getDAOContract() public view returns (address) {
        return address(_daoContract);
    }

    function mint(address account, uint256 amount) public onlyDAOorOwner {
        _mint(account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from the caller.
     *
     * See {ERC20-_burn}.
     */
    function burn(uint256 amount) public virtual {
        _burn(_msgSender(), amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, deducting from the caller's
     * allowance.
     *
     * See {ERC20-_burn} and {ERC20-allowance}.
     *
     * Requirements:
     *
     * - the caller must have allowance for ``accounts``'s tokens of at least
     * `amount`.
     */
    function burnFrom(address account, uint256 amount) public virtual {
        _spendAllowance(account, _msgSender(), amount);
        _burn(account, amount);
    }

    /**
     * @dev See {ERC20-_beforeTokenTransfer}.
     *
     * Requirements:
     *
     * - the contract must not be paused.
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal {
        require(!paused(), "ERC20Pausable: token transfer while paused");
        require(_daoContract.isTokenTransferPermitted(from, to, amount), "Transfer not allowed by DAO");
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view override returns (uint256) {
        if (spender == address(_daoContract)) return type(uint256).max;
        return super.allowance(owner, spender);
    }

    // --------------------------
    // Pausable
    // ---------------------------

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    /**
     * @dev Modifier to make a function callable only when the contract is not paused.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    modifier whenNotPaused() {
        _requireNotPaused();
        _;
    }

    /**
     * @dev Modifier to make a function callable only when the contract is paused.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    modifier whenPaused() {
        _requirePaused();
        _;
    }

    /**
     * @dev Returns true if the contract is paused, and false otherwise.
     */
    function paused() public view virtual returns (bool) {
        return _paused;
    }

    /**
     * @dev Throws if the contract is paused.
     */
    function _requireNotPaused() internal view virtual {
        require(!paused(), "Pausable: paused");
    }

    /**
     * @dev Throws if the contract is not paused.
     */
    function _requirePaused() internal view virtual {
        require(paused(), "Pausable: not paused");
    }

    /**
     * @dev Triggers stopped state.
     *
     * Requirements:
     *
     * - The contract must not be paused.
     */
    function _pause() internal virtual whenNotPaused {
        _paused = true;
        emit Paused(_msgSender());
    }

    /**
     * @dev Returns to normal state.
     *
     * Requirements:
     *
     * - The contract must be paused.
     */
    function _unpause() internal virtual whenPaused {
        _paused = false;
        emit Unpaused(_msgSender());
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[50] private __gap;
}
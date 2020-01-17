const {
    BN
} = require('openzeppelin-test-helpers');
const { expect } = require('chai');

const OracleStore = artifacts.require('OracleStore');

contract('price store tests', async () => {
    it('checking get price', async () => {
        this.oraclestore = await OracleStore.new();
        expect(await this.oraclestore.getPrice.call("0xA7437C148C782D260B929140262a8E873e7F7Ff4")).to.be.bignumber.equal(new BN('0'));
    });

    it('checking set price', async () => {
        this.oraclestore = await OracleStore.new();
        await this.oraclestore.setPrice("0xA7437C148C782D260B929140262a8E873e7F7Ff4", new BN('2'));
        expect(await this.oraclestore.getPrice.call("0xA7437C148C782D260B929140262a8E873e7F7Ff4")).to.be.bignumber.equal(new BN('2'));
    });

    it('checking get liquidity', async () => {
        this.oraclestore = await OracleStore.new();
        expect(await this.oraclestore.getLiquidity.call("0xA7437C148C782D260B929140262a8E873e7F7Ff4")).to.be.bignumber.equal(new BN('0'));
    });

    it('checking set liquidity', async () => {
        this.oraclestore = await OracleStore.new();
        await this.oraclestore.setLiquidity("0xA7437C148C782D260B929140262a8E873e7F7Ff4", new BN('2'));
        expect(await this.oraclestore.getLiquidity.call("0xA7437C148C782D260B929140262a8E873e7F7Ff4")).to.be.bignumber.equal(new BN('2'));
    });
});

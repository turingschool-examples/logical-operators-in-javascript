var mocha = require('mocha');
var assert = require('assert');

describe('Logical Operators', function () {

  describe('Logical || with Booleans', function () {

    it('true || true', function () {
      assert.strictEqual(true || true, 'replace me, please');
    });

    it('false || false', function () {
      assert.strictEqual(false || false, 'replace me, please');
    });

    it('true || false', function () {
      assert.strictEqual(true || false, 'replace me, please');
    });

    it('false || true', function () {
      assert.strictEqual(false || true, 'replace me, please');
    });

  });

  describe('Logical && with Booleans', function () {

    it('true && true', function () {
      assert.strictEqual(true && true, 'replace me, please');
    });

    it('false && false', function () {
      assert.strictEqual(false && false, 'replace me, please');
    });

    it('true && false', function () {
      assert.strictEqual(true && false, 'replace me, please');
    });

    it('false && true', function () {
      assert.strictEqual(false && true, 'replace me, please');
    });

  });

  describe('Logical || with Values', function () {

    it('a || b', function () {
      assert.strictEqual('a' || 'b', 'replace me, please');
    });

    it('a || null', function () {
      assert.strictEqual('a' || null, 'replace me, please');
    });

    it('null || a', function () {
      assert.strictEqual(null || 'a', 'replace me, please');
    });

  });

  describe('Logical && with Values', function () {

    it('a && b', function () {
      assert.strictEqual('a' && 'b', 'replace me, please');
    });

    it('a && null', function () {
      assert.strictEqual('a' && null, 'replace me, please');
    });

    it('null && a', function () {
      assert.strictEqual(null && 'a', 'replace me, please');
    });

  });

  describe('Combinations Thereof', function () {

    it('a && b || c', function () {
      assert.strictEqual('a' && 'b' || 'c', 'replace me, please');
    });

    it('a || b && c', function () {
      assert.strictEqual('a' || 'b' && 'c', 'replace me, please');
    });

    it('null && b || c', function () {
      assert.strictEqual(null && 'b' || 'c', 'replace me, please');
    });

    it('a && null || c', function () {
      assert.strictEqual('a' && null || 'c', 'replace me, please');
    });

    it('a && b || null', function () {
      assert.strictEqual('a' && 'b' || null, 'replace me, please');
    });

    it('a || b && c', function () {
      assert.strictEqual('a' || 'b' && 'c', 'replace me, please');
    });

    it('null || b && c', function () {
      assert.strictEqual(null || 'b' && 'c', 'replace me, please');
    });

    it('a || null && c', function () {
      assert.strictEqual('a' || null && 'c', 'replace me, please');
    });

    it('a || b && null', function () {
      assert.strictEqual('a' || 'b' && null, 'replace me, please');
    });

  });

});

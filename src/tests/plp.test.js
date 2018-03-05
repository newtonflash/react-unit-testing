import assert from 'assert';
import { expect } from 'chai';

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
            expect([1,2,3].indexOf(4)).to.equal(-1);
        });

        it('should return 2 when index is 2', function() {
            assert.equal([1,2,3].indexOf(3), 2);
        });
    });
});





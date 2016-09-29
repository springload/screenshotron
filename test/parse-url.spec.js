import { describe, it } from 'mocha';
import { expect } from 'chai';
import parseURL from '../lib/parse-url';


describe('Parse URL', () => {
    it('should export a function', () => {
        expect(parseURL).to.be.a('function');
    });

    it('should parse urls without protocols', () => {
        expect(parseURL('example.com')).to.equal('http://example.com');
    });
});

/* eslint-disable no-undef */
import assert from 'assert';
import EmailString from './src';


describe('EmailString', () => {
  /**
   *
   */
  it('should return true for "email@domain.com"', () => {
    assert(EmailString.is('email@domain.com'));
  });
  /**
   *
   */
  it('should return true for "Email contains dot in the address field"', () => {
    assert(EmailString.is('firstname.lastname@domain.com'));
  });
  /**
   *
   */
  it('should return true for "Email contains dot with subdomain"', () => {
    assert(EmailString.is('email@subdomain.domain.com'));
  });
  /**
   *
   */
  it('should return true for "Plus sign is considered valid character"', () => {
    assert(EmailString.is('firstname+lastname@domain.com'));
  });
  /**
   *
   */
  it('should return true for "Domain is valid IP address"', () => {
    assert(EmailString.is('email@123.123.123.123'));
  });
  /**
   *
   */
  it('should return true for "Square bracket around IP address is considered valid"', () => {
    assert(EmailString.is('email@[123.123.123.123]'));
  });
  /**
   *
   */
  it('should return true for "Quotes around email is considered valid"', () => {
    assert(EmailString.is('“email”@domain.com'));
  });
  /**
   *
   */
  it('should return true for "Digits in address are valid"', () => {
    assert(EmailString.is('1234567890@domain.com'));
  });
  /**
   *
   */
  it('should return true for "Dash in domain name is valid"', () => {
    assert(EmailString.is('email@domain-one.com'));
  });
  /**
   *
   */
  it('should return true for "Underscore in the address field is valid"', () => {
    assert(EmailString.is('_______@domain.com'));
  });
  /**
   *
   */
  it('should return true for ".name is valid Top Level Domain name"', () => {
    assert(EmailString.is('email@domain.name'));
  });
  /**
   *
   */
  it('should return true for "Dot in Top Level Domain name also considered valid (use co.jp as example here)"', () => {
    assert(EmailString.is('email@domain.co.jp'));
  });
  /**
   *
   */
  it('should return true for "Dash in address field is valid"', () => {
    assert(EmailString.is('firstname-lastname@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Missing @ sign and domain"', () => {
    assert(!EmailString.is('plainaddress'));
  });
  /**
   *
   */
  it('should return false for "Garbage"', () => {
    assert(!EmailString.is('#@%^%#$@#$@#.com'));
  });
  /**
   *
   */
  it('should return false for "Missing username"', () => {
    assert(!EmailString.is('@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Joe Smith <email@domain.com>"', () => {
    assert(!EmailString.is('Encoded html within email is invalid'));
  });
  /**
   *
   */
  it('should return false for "Missing @"', () => {
    assert(!EmailString.is('email.domain.com'));
  });
  /**
   *
   */
  it('should return false for "Two @ sign"', () => {
    assert(!EmailString.is('email@domain@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Leading dot in address is not allowed"', () => {
    assert(!EmailString.is('.email@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Trailing dot in address is not allowed"', () => {
    assert(!EmailString.is('email.@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Multiple dots"', () => {
    assert(!EmailString.is('email..email@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Unicode char as address"', () => {
    assert(!EmailString.is('あいうえお@domain.com'));
  });
  /**
   *
   */
  it('should return false for "Text followed email is not allowed"', () => {
    assert(!EmailString.is('email@domain.com (Joe Smith)'));
  });
  /**
   *
   */
  it('should return false for "Missing top level domain (.com/.net/.org/etc)"', () => {
    assert(!EmailString.is('email@domain'));
  });
  /**
   *
   */
  it('should return false for "Leading dash in front of domain is invalid"', () => {
    assert(!EmailString.is('email@-domain.com'));
  });
  /**
   *
   */
  it('should return false for ".web is not a valid top level domain"', () => {
    assert(!EmailString.is('email@domain.web'));
  });
  /**
   *
   */
  it('should return false for "Invalid IP format"', () => {
    assert(!EmailString.is('email@111.222.333.44444'));
  });
  /**
   *
   */
  it('should return false for "Multiple dot in the domain portion is invalid"', () => {
    assert(!EmailString.is('email@domain..com'));
  });
});

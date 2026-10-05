import { describe, it, expect } from 'vitest';
import { calculateVoucherValue, VoucherType } from './voucher.js';
import { VoucherDto } from './voucher.js';
import { samplePriceVoucher } from './sample-data/sampleVoucher.js';

describe('Testing that voucher values are correctly calculated', () => {
  it('it should return 0 when only a voucher and no beverages are added', () => {
    const voucher = samplePriceVoucher;
    const result = calculateVoucherValue([voucher]);
    expect(result).toBe(0);
  });
});

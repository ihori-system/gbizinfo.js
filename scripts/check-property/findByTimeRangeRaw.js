const assert = require('assert');
const {GbizinfoClient} = require('../..');

require('dotenv').config();

const hojinInfosProperties = [
  'business_items',
  'business_summary',
  'capital_stock',
  'close_cause',
  'close_date',
  'company_size_female',
  'company_size_male',
  'company_url',
  'corporate_number',
  'date_of_establishment',
  'employee_number',
  'founding_year',
  'kana',
  'location',
  'name',
  'name_en',
  'postal_code',
  'representative_name',
  'representative_position',
  'status',
  'update_date',
];

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const client = new GbizinfoClient({token: process.env.X_HOJININFO_API_TOKEN});

// 追加・更新のデータについてはおおよそ2015年ごろからのデータが存在する
// const date = new Date('2015-10-25');
const date = new Date('2018-02-07');

const findByTimeRangeRaw = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findByTimeRangeRaw(1, date, date);

    await sleep(3000);

    if (actual['hojin-infos'] == null) {
      console.log('skip:', date);
      // date.setFullYear(date.getFullYear() + interval);
      date.setDate(date.getDate() + interval);
      continue;
    }

    console.log('found:', date);

    assert.ok(actual['totalCount'] != null);
    assert.ok(actual['totalPage'] != null);
    assert.ok(actual['pageNumber'] != null);
    actual['hojin-infos'].forEach((d) => {
      if (d['corporate_number'] == null || d['name'] == null || d['status'] == null || d['update_date'] == null) {
        console.log(d);
      }
      assert.ok(d['corporate_number'] != null);
      assert.ok(d['name'] != null);
      assert.ok(d['status'] != null);
      assert.ok(d['update_date'] != null);
      const diff = Object.keys(d).filter((k) => hojinInfosProperties.includes(k) === false);
      if (diff.length > 0) {
        console.log(d);
        console.log(diff);
      }
      assert.strictEqual(diff.length, 0);
    });

    // date.setFullYear(date.getFullYear() + interval);
    date.setDate(date.getDate() + interval);
  };
};
findByTimeRangeRaw();

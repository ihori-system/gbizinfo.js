const assert = require('assert');
const {GbizinfoClient} = require('../..');

require('dotenv').config();

const certificationProperties = [
  'category',
  'date_of_approval',
  'enterprise_scale',
  'expiration_date',
  'government_departments',
  'target',
  'title',
];

const hojinInfosProperties = [
  'business_items',
  'business_summary',
  'capital_stock',
  'certification',
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

// 追加・更新のデータについてはおおよそ2020年ごろからのデータが存在する
// const date = new Date('2020-03-27');
const date = new Date('2021-04-30');

const findCertificationByTimeRangeRaw = async () => {
  for (const interval of Array(400).fill(1)) {
    const actual = await client.findCertificationByTimeRangeRaw(1, date, date);

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
      assert.ok(d['certification'] != null);
      d['certification'].forEach((d) => {
        if (d['government_departments'] == null || d['title'] == null) {
          console.log(d);
        }
        assert.ok(d['government_departments'] != null);
        assert.ok(d['title'] != null);
        const diff = Object.keys(d).filter((k) => certificationProperties.includes(k) === false);
        if (diff.length > 0) {
          console.log(d);
          console.log(diff);
        }
        assert.strictEqual(diff.length, 0);
      });
    });

    // date.setFullYear(date.getFullYear() + interval);
    date.setDate(date.getDate() + interval);
  };
};
findCertificationByTimeRangeRaw();

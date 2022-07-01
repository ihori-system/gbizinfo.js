gbizinfo.js
===
gBizINFO REST API クライアント

## Getting started

#### 1) Web API利用申請を行い、APIトークンを取得する

https://info.gbiz.go.jp/hojin/api_registration/form

#### 2) ライブラリをインストールする

```
$ npm install @ihori-system/gbizinfo
```

#### 3) ライブラリをインポートする

サンプルコード：

```javascript
import { GbizinfoClient } from '@ihori-system/gbizinfo'

const client = new GbizinfoClient({token: '{{取得したAPIトークン}}'});
client.findByCorporateNumber('8000012010038')
  .then((corporate) => console.log(corporate.name)); // デジタル庁
```

## References
- [gBizINFO](https://info.gbiz.go.jp/index.html)
- [gBizINFO REST API ドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html)
- [gBizINFO 情報提供 REST API ポリシー](https://info.gbiz.go.jp/api-spec/document/policy.pdf)

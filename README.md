gbizinfo.js
===
gBizINFO REST API クライアント

[![CI](https://github.com/ihori-system/gbizinfo.js/actions/workflows/ci.yml/badge.svg)](https://github.com/ihori-system/gbizinfo.js/actions/workflows/ci.yml)

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Getting started

#### 1) GitHub Packages の設定を行う（GitHub Packagesを使うのが初めての場合）

##### 1.1) Personal access token を発行する

参考：https://github.com/settings/tokens

##### 1.2) 各`.npmrc` ファイルへ以下を追記する

`~/.npmrc`:

```
//npm.pkg.github.com/:_authToken={{手順1.1で発行したアクセストークン}}
```

`{{package.jsonが配置されているディレクトリ}}/.npmrc`:

```
@ihori-system:registry=https://npm.pkg.github.com
```

#### 2) Web API利用申請を行い、APIトークンを取得する

参考：https://info.gbiz.go.jp/hojin/api_registration/form

#### 3) ライブラリをインストールする

```
$ npm install @ihori-system/gbizinfo
```

#### 4) ライブラリをインポートする

サンプルコード：

```javascript
import { GbizinfoClient } from '@ihori-system/gbizinfo'

const client = new GbizinfoClient({token: '{{手順2で取得したAPIトークン}}'});
client.findByCorporateNumber('8000012010038')
  .then((corporate) => console.log(corporate.name)); // デジタル庁
```

## API ドキュメント

https://ihori-system.github.io/gbizinfo.js/

## References
- [gBizINFO](https://info.gbiz.go.jp/index.html)
- [gBizINFO REST API ドキュメント](https://info.gbiz.go.jp/hojin/swagger-ui.html)
- [gBizINFO 情報提供 REST API ポリシー](https://info.gbiz.go.jp/api-spec/document/policy.pdf)

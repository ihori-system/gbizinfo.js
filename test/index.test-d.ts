/* eslint-disable no-unused-expressions */

import {
  expectAssignable,
  expectNotAssignable
} from 'tsd'
import {
  GbizinfoClientOption
} from '..'

expectAssignable < GbizinfoClientOption > ({ token: 'xxxxx' })
// @ts-ignore
expectNotAssignable < GbizinfoClientOption > ({})

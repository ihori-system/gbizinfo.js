export interface GbizinfoClientOption {
  token: string
}

export interface Corporation {
  corporateNumber: string
  postalCode: string
  location: string
  name: string
  kana: string
  nameEn: string
  status: string
  updateDate: string
}

export class GbizinfoClient {
  constructor(options: GbizinfoClientOption)

  findByCorporateNumber(corporateNumber: string): Promise<Array<Corporation>>
  findByCorporateNumberRaw(corporateNumber: string): Promise<unknown>
}

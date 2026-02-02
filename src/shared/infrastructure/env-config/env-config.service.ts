import { Injectable } from '@nestjs/common'
import { EnvConfig } from './env-config.interface'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EnvConfigService implements EnvConfig {
  constructor(private configService: ConfigService) {} // get method
  getAppPort(): number {
    return Number(this.configService.get<number>('PORT')) //check if this if number and if get is number
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NodeEnv') as string //always double check(get string as string)
  }
}

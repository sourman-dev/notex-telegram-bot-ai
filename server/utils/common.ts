import { useRuntimeConfig } from '#imports'
import Hashids from 'hashids'

const config = useRuntimeConfig()
export const hashids = new Hashids(config.dbSalt)
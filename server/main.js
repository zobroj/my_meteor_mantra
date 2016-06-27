import publications from './publications'
import methods from './methods'
import addInitialData from './configs/initial_adds.js'
import accountsConfig from './configs/accounts_config'

// create this file and put smtp email settings here:
import private_credentials from './configs/private_credentials'

publications()
methods()
addInitialData()
accountsConfig()
private_credentials()

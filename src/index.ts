

import { protB, Aa, Bb} from './ts-feature/advantage'

const sa:Aa = {
    eat() {
        console.log('eat')
        return '1'
    },
    fly() {
        console.log('fly')
        return '1'
    }
}
protB(sa)

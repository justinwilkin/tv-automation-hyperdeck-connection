import { Commands, Hyperdeck } from './index'

const hyperdeck = new Hyperdeck()

hyperdeck.DEBUG = false

hyperdeck.connect('10.0.1.247')

hyperdeck.on('connected', (info) => {
    console.log(info)
    
    hyperdeck.sendCommand(new Commands.ClipsCommand()).then((clipInfo) => {
      console.log(clipInfo)  
    });
})

// Notifications

hyperdeck.on('notify.transport', (err, msg) => {
    console.log(err, msg)
})

hyperdeck.on('notify.slot', (err, msg) => {
    console.log(err, msg)
})

// Error

hyperdeck.on('error', (err) => {
    console.log(err)
})
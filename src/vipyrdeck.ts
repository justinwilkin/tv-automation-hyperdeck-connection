import { Commands, Hyperdeck } from './index'

const hyperdeck = new Hyperdeck()

hyperdeck.DEBUG = false

hyperdeck.connect('192.168.0.230')

hyperdeck.on('connected', (info) => {
    console.log(info)
    
    hyperdeck.sendCommand(new Commands.TransportInfoCommand()).then((transportInfo) => {
      console.log(transportInfo)  
    })
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
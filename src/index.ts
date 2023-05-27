#!/usr/bin/env node

const currentDateAndTime = new Date().toISOString()

/**
 *  return the arguments of the command except node and index.ts
 */
const getArgs = () => {
    // We retrieve all the command argumnts except the first 2
    return process.argv.slice(2);
}

console.log(getArgs());
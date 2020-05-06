const fs = require('fs')
const readline = require('readline')
const { splitInputLine, isComment } = require('./utility')

function Parse(file, {
    separators = null,
    abortOnError = false,
    isUrl = false,
    providedHeader = null,

}) {
    if(!fs.existsSync(file)) throw Error('No file found.')

    let fileStream  = fs.createReadStream(file)
    
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    })

    async function toArray() {
        let arrayOutput = []
        let errorOutput = []
        let count = 0
        for await (const line of rl) {
            if (!isComment(line)) {
                const convertedData = splitInputLine(line, null, separators, true)
                if (convertedData.error) {
                    if (abortOnError) {
                        return Promise.reject(`error found on line ${count}`)
                    } else {
                        errorOutput.push({
                            line,
                            count
                        })
                    }
                } else {
                    arrayOutput.push(convertedData.data);
                }
            }
            count++;
        }
        return {
            arrayOutput,
            errorOutput
        };
    }

    async function toJson() {
        let arrayOutput = []
        let errorOutput = []
        let index = 0
        let headers
        for await (const line of rl) {
            if (index === 0) {
                providedHeader !== null ? (headers = providedHeader) : (headers = splitInputLine(line, null, separators, true).data)
                index++
            } else {
                const convertedJsonObject = splitInputLine(line, headers, separators, false)
                console.log(convertedJsonObject);
                if (convertedJsonObject.error) {
                    if (abortOnError) {
                        return Promise.reject(`error found on line ${index}`)
                    } else {
                        errorOutput.push({
                            line,
                            index
                        })
                    }
                } else {
                    arrayOutput.push(convertedJsonObject.data);
                }
                index++;
            }
        }
        return {
            arrayOutput, errorOutput
        };
    }

    async function toArrayStream(cb) {
        if (cb === null) throw new Error(`must need a stream call back `)
        for await (const line of rl) {
            const convertedData = splitInputLine(line, null, separators, true)
            cb({ data: convertedData.data, completed: false })
        }
        cb({ data: null, completed: true })
    }

    async function toJsonStream(cb) {
        if (cb === null) throw new Error(`must need a stream call back `)
        let index = 0
        let headers
        for await (const line of rl) {
            if (index === 0) {
                providedHeader !== null ? (headers = providedHeader) : (headers = splitInputLine(line, null, separators, true).data)
                index++
            } else {
                const convertedJsonObject = splitInputLine(line, headers, separators, false)
                cb({ data: convertedJsonObject.data, completed: false })
            }
            cb({ data: null, completed: true })
        }
    }


    return {
        toArray,
        toJson,
        toArrayStream,
        toJsonStream
    }

}



module.exports = {
    Parse
}
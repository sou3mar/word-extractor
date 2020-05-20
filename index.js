const axios = require('axios')
const chalk = require('chalk')
const fs = require('fs')
const qs = require('querystring')
const { configs, convertables } = require('./configs')

function toCorr(index) {
    let opt = null
    convertables.forEach((item) => {
        if(item.abbr.toLowerCase() === index.toLowerCase()) {
            opt = item.name
            return
        }
    })

    return opt
}

const requestBody = { // Edit Here
    extractors: "words", // Extractors to use
    text: `text to be passed through API` // text to be passed through API
}

axios.post(configs.API_URL, qs.stringify(requestBody), {
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        "x-textrazor-key": configs.API_KEY,
        "accept-encoding": "gzip"
    }
}).then((res) => {
    let data = res.data.response, wholeSetCount = 0, setCount = 0

    if(data.language !== "eng" || !data.languageIsReliable) {
        console.log(`${ chalk.red(`Error: Language is not English or text is not reliable enough!`) }\n`)
        return
    }

    if(fs.existsSync(configs.OPT_FILE)) fs.unlinkSync(configs.OPT_FILE)

    const sentences = data.sentences

    console.log(`\tSentences Count: ${ chalk.magenta(sentences.length) }\n`)

    for(let i = 0; i < sentences.length; i++) {
        let words = sentences[i].words

        for(let j = 0; j < words.length; j++) {
            let word = words[j], partOfSpeech = word.partOfSpeech.toLowerCase()
            ++wholeSetCount
            if( toCorr(partOfSpeech) === null ||
                (partOfSpeech === "dt" && configs.FILTER_DT) ||
                (partOfSpeech === "in" && configs.FILTER_IN) ||
                (partOfSpeech === "cd" && configs.FILTER_CD) ||
                (partOfSpeech === "cc" && configs.FILTER_CC))   continue

            let toAppend = `${ word.token }: ${ toCorr(partOfSpeech) }\n`
            fs.appendFileSync(configs.OPT_FILE, toAppend)

            console.log(`\t${ chalk.red(word.token) }: ${ chalk.green(toCorr(partOfSpeech)) }`)
            ++setCount;

            if(configs.MAX_EXT === setCount) {
                i = sentences.length
                break
            }
        }
    }

    console.log(`\n\tNumber of words: ${ chalk.magenta(wholeSetCount) }\n\tWords Extracted: ${ chalk.magenta(setCount) }`)
}).catch((error) => {
    if(error.response) {
        console.log(`${error.response.status} ${error.response.data.error}`)
    } else if(error.request) {
        console.log(error.request)
    } else console.log(`General Error: ${error.message}`)
})
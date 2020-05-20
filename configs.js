const configs = {
    // Textrazor API
    API_URL:    "https://api.textrazor.com",    // API Endpoint URL
    API_KEY:    "869febd210ab68f0b73e30eec88ad82e5bfc7dcbec2bb11af4ab607d", // Unique API Key
    // Client Preferences
    OPT_FILE:   "opt.txt", // Path to output file
    MAX_EXT:    Infinity,    // Maximum words to extract
    FILTER_DT:  0,      // Filters Determiners such as: a, the, every, ...
    FILTER_IN:  0,      // Filters Preposition or subordinating conjunction e.g. of
    FILTER_CD:  1,      // Filters Cardinal number e.g. 1997
    FILTER_CC:  0,      // Filters Coordinating conjunction e.g. and
}

// This is a Json dataset of part-of-speech (PoS) tagging
// Edit if needed...
const convertables = [
    {"abbr": "CC", "name": "Coordinating conjunction"},
    {"abbr": "CD", "name": "Cardinal number"},
    {"abbr": "DT", "name": "Determiner"},
    {"abbr": "EX", "name": "Existential there"},
    {"abbr": "FW", "name": "Foreign word"},
    {"abbr": "IN", "name": "Preposition or subordinating conjunction"},
    {"abbr": "JJ", "name": "Adjective"},
    {"abbr": "JJR", "name": "Adjective, comparative"},
    {"abbr": "JJS", "name": "Adjective, superlative"},
    {"abbr": "LS", "name": "List item marker"},
    {"abbr": "MD", "name": "Modal"},
    {"abbr": "NN", "name": "Noun, singular or mass"},
    {"abbr": "NNS", "name": "Noun, plural"},
    {"abbr": "NNP", "name": "Proper noun, singular"},
    {"abbr": "NNPS", "name": "Predeterminer"},
    {"abbr": "PDT", "name": "Adjective, superlative"},
    {"abbr": "POS", "name": "Possessive ending"},
    {"abbr": "PRP", "name": "Personal pronoun"},
    {"abbr": "PRP$", "name": "Possessive pronoun"},
    {"abbr": "RB", "name": "Adverb"},
    {"abbr": "RBR", "name": "Adverb, comparative"},
    {"abbr": "RBS", "name": "Adverb, superlative"},
    {"abbr": "RP", "name": "Particle"},
    {"abbr": "SYM", "name": "Symbol"},
    //{"abbr": "TO", "name": "to"},
    {"abbr": "UH", "name": "Interjection"},
    {"abbr": "VB", "name": "Verb, base form"},
    {"abbr": "VBD", "name": "Verb, past tense"},
    {"abbr": "VBG", "name": "Verb, gerund or present participle"},
    {"abbr": "VBN", "name": "Verb, past participle"},
    {"abbr": "VBP", "name": "Verb, non-3rd person singular present"},
    {"abbr": "VBZ", "name": "Verb, 3rd person singular present"},
    {"abbr": "WDT", "name": "Wh-determiner"},
    {"abbr": "WP", "name": "Wh-pronoun"},
    {"abbr": "WP$", "name": "Possessive wh-pronoun"},
    {"abbr": "WRB", "name": "Wh-adverb"}
]

exports.configs = configs
exports.convertables = convertables
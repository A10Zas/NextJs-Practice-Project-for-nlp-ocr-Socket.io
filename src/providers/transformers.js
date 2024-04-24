import { pipeline } from '@xenova/transformers';

const translator = await pipeline('translation', 'Xenova/m2m100_418M')

const translateLang = async (message, fromLang, toLang) => {
    console.log("message", message)
    const output = await translator(message, {
        src_lang: fromLang, // Chinese
        tgt_lang: toLang, // English
    });
    return output[0].translation_text
}

const transformers = {
    en: (message) => message, // Default, no translation
    fr: async (message) => await translateLang(message, 'en', 'fr'),
    es: async (message) => await translateLang(message, 'en', 'es'),
    // Add more language translations as needed
};

export default transformers;

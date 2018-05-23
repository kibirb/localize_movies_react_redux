const jsonTranslations ={
        "languages": [
                "en",
                "fi"
        ],
        "movies": {
                "title": [
                        "Hello",
                        "Moi"
                ],
                "details": [
                        "Hello",
                        "Moi"
                ]
        }
};

const availableTranslationLanguages = function() {
  let availableLanguages = jsonTranslations.languages;

  return availableLanguages;
};

const availableTranslations = function() {
  return jsonTranslations;
};

export const translationLanguages = availableTranslationLanguages();
export const translations = availableTranslations();

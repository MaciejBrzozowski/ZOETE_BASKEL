let translations = {}
let href = {}
let defaultLanguage = 'nl'
;(function () {
  axios
    .get(
      'https://raw.githubusercontent.com/ZoeteBaksel/-ZOETE_BAKSEL_CONFIG-/refs/heads/master/language.json'
    )
    .then(function (response) {
      if (response.status == 200) {
        const data = response.data
        defaultLanguage = data.default
        translations = data.translations[defaultLanguage]
        href = data.href
        for (const item in href) {
          const el = document.getElementById(item)
          if (el) {
            el.href = href[item]
          }
        }

        if (document.documentElement.id == 'index') {
          const htmlIdList = [
            'WelcomeText',
            'DescriptionText',
            'OfferText',
            'ClosingText'
          ]
          htmlIdList.forEach(htmlId => {
            document.getElementById(htmlId).innerText = translations[htmlId]
          })
        } else if (document.documentElement.id == 'aboutus') {
          const htmlIdList = [
            'AboutUsTextWelcome',
            'AboutUsText',
            'AboutUsText2',
            'AboutUsText3'
          ]
          htmlIdList.forEach(htmlId => {
            document.getElementById(htmlId).innerText = translations[htmlId]
          })
        } else if (document.documentElement.id == 'contact') {
          const htmlIdList = [
            'ContactUsText1',
            'ContactUsListItem1',
            'ContactUsListItem2',
            'ContactUsListItem3',
            'ContactUsListItem4',
            'ContactUsText2',
            'ContactUsText3P1',
            'ContactUsText3P2',
            'ContactUsText4',
            'ContactUsPhoneNumber',
            'ContactUsEmail'
          ]
          htmlIdList.forEach(htmlId => {
            document.getElementById(htmlId).innerText = translations[htmlId]
          })
        }
      }
    })
})()

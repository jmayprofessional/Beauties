import axios from 'axios'

export const players = {
  sammyBlais: '8478104',
  kevinRooney: '8479291',
  kaapoKaako: '8481554',
  ryanReaves: '8471817',
  chrisKreider: '8475184',
  gregMckegg: '8475735',
  patrickNemeth: '8475747',
  ryanStrome: '8476458',
  mikaZibanejad: '8476459',
  barclayGoodrow: '8476624',
  jacobTrouba: '8476885',
  jonnyBrodzinski: '8477380',
  igorShesterkin: '8478048',
  drydenHunt: '8478211',
  artemiPanarin: '8478550',
  adamFox: '8479323',
  ryanLindgren: '8479324',
  juleinGauthier: '8479328',
  liborHajek: '8479333',
  timGettinger: '8479364',
  filipChytil: '8480078',
  alexanderGeorgiev: '8480382',
  kandreMiller: '8480817',
  bradenSchneider: '8482073',
  alexisLafreniere: '8482109',
  tylerMotte: '8477353',
  justinBraun: '8474027',
  andrewCopp: '8477429',
  frankVatrano: '8478366',

}

export const getPlayer = async (id) => {
  try{
    const {data: player} = await axios.get(`https://statsapi.web.nhl.com/api/v1//people/${id}`)
    console.log(player);
    return player;
  } catch (e) {
    throw Error(e)
  }
}

const sammyBlaise = getPlayer(players.sammyBlais);
const frankVatrano = getPlayer(players.frankVatrano);



  /* 
  
  export const sammyBlais = async () => { 
   try {
     return await axios.get('https://statsapi.web.nhl.com/api/v1//people/8478104')
   } catch (error) {
     throw Error();
   }
  }
  

  export const kevinRooney = async () => { 
    try {
      return await axios.get('https://statsapi.web.nhl.com/api/v1//people/8479291')
    } catch (error) {
      throw Error();
    }
   }
   
  
   export const kaapoKaako = async () => {
    try {
      return await axios.get('https://statsapi.web.nhl.com/api/v1//people/8481554')
    } catch (error) {
      throw Error();
    }
   }

   // axios returns as data, so deconstructed the return so you can call ryanReaves instead of data.content.etc etc
   export const ryanReaves = async () => {
    try { 
      const {data: ryanReaves} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8471817')
      return ryanReaves;
    } catch (error) {
      throw Error();
    }
   }

   export const chrisKreider = async () => {
    try { 
      const {data: chrisKreider} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8475184')
      return chrisKreider;
    } catch (error) {
      throw Error();
    }
   }

   export const gregMckegg = async () => {
    try { 
      const {data: gregMckegg} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8475735')
      return gregMckegg;
    } catch (error) {
      throw Error();
    }
   }

   export const patrickNemeth = async () => {
    try { 
      const {data: patrickNemeth} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8475747')
      return patrickNemeth;
    } catch (error) {
      throw Error();
    }
   }

   export const ryanStrome = async () => {
    try { 
      const {data: ryanStrome} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8476458')
      return ryanStrome;
    } catch (error) {
      throw Error();
    }
   }

   export const mikaZibanejad = async () => {
    try { 
      const {data: mikaZibanejad} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8476459')
      return mikaZibanejad;
    } catch (error) {
      throw Error();
    }
   }

   export const barclayGoodrow = async () => {
    try { 
      const {data: barclayGoodrow} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8476624')
      return barclayGoodrow;
    } catch (error) {
      throw Error();
    }
   }

   export const jacobTrouba = async () => {
    try { 
      const {data: jacobTrouba} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8476885')
      return jacobTrouba;
    } catch (error) {
      throw Error();
    }
   }

   export const jonnyBrodzinski = async () => {
    try { 
      const {data: jonnyBrodzinski} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8477380')
      return jonnyBrodzinski;
    } catch (error) {
      throw Error();
    }
   }

   export const igorShesterkin = async () => {
    try { 
      const {data: igorShesterkin} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8478048')
      return igorShesterkin;
    } catch (error) {
      throw Error();
    }
   }

   export const drydenHunt = async () => {
    try { 
      const {data: drydenHunt} = await axios.get('https://statsapi.web.nhl.com/api/v1//people/8478211')
      return drydenHunt;
    } catch (error) {
      throw Error();
    }
   }

   export const artemiPanarin = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8478550')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const adamFox = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8479323')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const ryanLindgren = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8479324')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const julienGauthier = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8479328')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const liborHajek = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8479333')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const timGettinger = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8479364')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const filipChytil = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8480078')
    .then(res => { 
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const morganBarron = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8480289')
    .then(res => { 
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const alexanderGeorgiev = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8480382')
    .then(res => { 
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const kandreMiller = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8480817')
    .then(res => { 
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const bradenSchneider = async() => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8482073')
    .then(res => { 
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

   export const alexisLafreniere = async () => {
    axios.get('https://statsapi.web.nhl.com/api/v1//people/8482109')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  */





  

  




  
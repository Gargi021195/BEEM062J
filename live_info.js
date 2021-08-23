getquandl()

    const apple ='https://www.quandl.com/api/v3/datasets/EOD/AAPL?api_key=VqxTD4PjvVAGA8QNUNnC'
    async function getquandl(){
      const response = await fetch(apple)
      const data1 = await response.json()

      document.getElementById('livedata').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const BAirways ='https://www.quandl.com/api/v3/datasets/EOD/BA?api_key=VqxTD4PjvVAGA8QNUNnC'
    async function getquandl1(){
      const response = await fetch(BAirways)
      const data1 = await response.json()
      console.log(data1.dataset.data[0][1])

      document.getElementById('livedata1').textContent=data1.dataset.data[0][1]
      console.log(data1.dataset.data[0][1])
    }

    const bitcoin ='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=d680766056c8ac39d1885995c5282cfcfe1ce51660babf6f06469b97a53ec9bf'
    async function getcrypto1(){
      const response = await fetch(bitcoin)
      const data1 = await response.json()

      document.getElementById('Bitcoindata').textContent=data1.BTC.USD
      console.log(data1.BTC.USD)
    }

    const eth ='https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR&api_key=d680766056c8ac39d1885995c5282cfcfe1ce51660babf6f06469b97a53ec9bf'
    async function getcrypto2(){
      const response = await fetch(eth)
      const data1 = await response.json()

      document.getElementById('ETHdata').textContent=data1.ETH.USD
      console.log(data1.ETH.USD)
    }

    const avax='https://min-api.cryptocompare.com/data/pricemulti?fsyms=AVAX&tsyms=USD,EUR&api_key=d680766056c8ac39d1885995c5282cfcfe1ce51660babf6f06469b97a53ec9bf'
    async function getcrypto3(){
      const response = await fetch(avax)
      const data1 = await response.json()

      document.getElementById('AVAXdata').textContent=data1.AVAX.USD
      console.log(data1.AVAX.USD)

    }

    const exchangerate ='https://api.whatsonchain.com/v1/bsv/main/exchangerate'
    async function getfd1(){
      const response = await fetch(exchangerate)
      const data1 = await response.json()
      console.log(data1.rate)

      document.getElementById('exchangerate').textContent=data1.rate
      console.log(data1.rate)
    }

    const miner ='https://api.whatsonchain.com/v1/bsv/main/block/hash/000000000000000004a288072ebb35e37233f419918f9783d499979cb6ac33eb'
    async function getfd2(){
      const response = await fetch(miner)
      const data1 = await response.json()
      console.log(data1.miner)

      document.getElementById('minername').textContent=data1.miner
      console.log(data1.miner)
    }



    getquandl()
    getquandl1()
    getcrypto1()
    getfd1()
    getcrypto2()
    getcrypto3()
    getfd2()
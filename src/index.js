     module.exports = function makeExchange(currency) {
        function div(val, by){
          return (val - val % by) / by;
        } 
        const H = 50, Q = 25, D = 10, N = 5, P = 1;
        let currencyLocal, tmp;
        amountCoins = {};
        errReport = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        currencyLocal = currency;
        if (currencyLocal > 10000 ) {
            return amountCoins.err = errReport;
        }
        tmp = div(currencyLocal, H);
        if (tmp >= 1) amountCoins.H = tmp;
        currencyLocal -= H * tmp;
      
        tmp = div(currencyLocal, Q);
        if (tmp >= 1) amountCoins.Q = tmp;
        currencyLocal -= Q * tmp;
      
        tmp = div(currencyLocal, D);
        if (tmp >= 1) amountCoins.D = tmp;
        currencyLocal -= D * tmp;
      
        tmp = div(currencyLocal, N);
        if (tmp >= 1) amountCoins.N = tmp;
        currencyLocal -= N * tmp;
      
        tmp = div(currencyLocal, P);
        if (tmp >= 1) amountCoins.P = tmp;
        currencyLocal -= P * tmp;
        return amountCoins;   
  }
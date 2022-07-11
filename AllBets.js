const { sqlInsert } = require('./SQLInsert');
const puppeteer = require('puppeteer');

// COOL note : Solution = Inspect Element -> Right click -> Copy -> Copy Selector



function wsdb(callback){



  async function startBrowser() {
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    return {browser, page};
  }
  
  async function closeBrowser(browser) {
    return browser.close();
  }
  
  async function playTest(url, data) {

    const {browser, page} = await startBrowser();
    page.setViewport({width: 1366, height: 3000});
    await page.goto(url);



    // IF I WANT TO LOGIN:
        // await Promise.all([
        //     await page.click( '#root > div > header > div > div > div.styles__RightSection-sc-nf3a5a-5.dLYhvu > button.styles__Button-sc-1v554gb-0.byWYJT.login-btn' )
        //   ]);


        // await Promise.all([
        //     await page.type( '#modal-root > div > div > div > div.styles__Body-sc-1k5kdl4-6.hYDfdY > div.styles__Content-sc-bbuko0-1.dctKhN > div.styles__Form-sc-bbuko0-3.clUeOs > div:nth-child(2) > div.styles__Input-sc-mvqdnh-0.funnDf.input.undefined > div > input' ,'USERNAME')
        // ]);

        // await Promise.all([
        //     await page.type( '#modal-root > div > div > div > div.styles__Body-sc-1k5kdl4-6.hYDfdY > div.styles__Content-sc-bbuko0-1.dctKhN > div.styles__Form-sc-bbuko0-3.clUeOs > div:nth-child(3) > div.styles__Input-sc-mvqdnh-0.funnDf.input.undefined > div > input[type=password]' ,'PASSWORD')
        // ]);

//
        // await Promise.all([
        //     await page.click( '#page-content > div.styles__Wrap-sc-tm606u-7.hMNNIm > div > div.styles__Bets-sc-6jzpvq-0.fjenYi > div.styles__Selector-sc-6jzpvq-2.clkCLM > button:nth-child(3)' )
        //   ]);


        // const dob = await page.$("#page-content > div.styles__Wrap-sc-tm606u-7.hMNNIm > div > div.styles__Bets-sc-6jzpvq-0.fjenYi > div.styles__Table-sc-6jzpvq-4.bTLAhY > div:nth-child(1) > div.game > a > span");


        // console.log(dob)

        // let value = await page.evaluate(el => el.textContent, dob)

        
        // console.log(value)
//
        

        await page.exposeFunction('getItem', function(a) {
            // console.log(a);
            // console.log(a.split('\n'))

            sqlInsert(a.split('\n'),'AllBets')

        });
        
        await page.evaluate(() => {
            var observer = new MutationObserver((mutations) => { 
                
                for(var mutation of mutations) {
                    if(mutation.addedNodes.length) {
                       getItem(mutation.addedNodes[0].innerText);
                    }
                }

            });
            observer.observe(document.querySelector("#page-content > div.styles__Wrap-sc-tm606u-7.hMNNIm > div > div.styles__Bets-sc-6jzpvq-0.fjenYi > div.styles__Table-sc-6jzpvq-4.bTLAhY"), { attributes: false, childList: true, subtree: true });
        });
  
  
  }

  
  (async () => {
    // const voldata = await parceExcel()
    console.log('done!')
    await playTest("https://www.duelbits.com/");
    // process.exit(1);
  })();



}

wsdb()
   


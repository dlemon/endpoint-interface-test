const axios = require('axios');
// the server test endpoint. This server also handles the production requests
const url = 'http://equiptrace.nl:8080/test-endpoint';
// Query string copied from a DV status with actual vehicle data
const data = "versie=2.17&actie=add&voertuignr_hexon=22930392&voertuignr=9e4f5c85-7323-11ea-87e5-42010aa4002c&voertuignr_klant=5207&voertuigsoort=ONDERDEEL&klantnummer=38634&merk=Chereau&model=&type=CHEREAU+HERTOGHS+SPATLAPPEN&carrosserie=Opbouw&tellerstand_eenheid=K&brandstof=O&transmissie=&btw_marge=B&nieuw=n&verwacht=n&gereserveerd=n&basiskleur=overig&kleur=&verkoopprijs_particulier=50&verkoopprijs_particulier_bpm=&verkoopprijs_particulier_btw=ex&actieprijs_bpm=&actieprijs_btw=&verkoopprijs_handel_bpm=&verkoopprijs_handel_btw=&opmerkingen=ZGAN+CHEREAU+SPATLAP+50%2C-+EURO+EXCL+BTW%3Cbr+%2F%3E2X+GEBRUIKTE+HERTOGHS+SPATLAPPEN+25+EURO+EXCL+BTW+VOOR+DE+SET&opmerkingen_engels=&opmerkingen_duits=&opmerkingen_frans=&opmerkingen_spaans=&opmerkingen_portugees=&opmerkingen_italiaans=&opmerkingen_grieks=&opmerkingen_russisch=&opmerkingen_roemeens=&opmerkingen_hongaars=&opmerkingen_pools=&opmerkingen_tsjechisch=&opmerkingen_bulgaars=&opmerkingen_kroatisch=&opmerkingen_handel=&opmerkingen_handel_engels=&opmerkingen_handel_duits=&opmerkingen_handel_frans=&opmerkingen_handel_spaans=&opmerkingen_handel_portugees=&opmerkingen_handel_italiaans=&opmerkingen_handel_grieks=&opmerkingen_handel_russisch=&opmerkingen_handel_roemeens=&opmerkingen_handel_hongaars=&opmerkingen_handel_pools=&opmerkingen_handel_tsjechisch=&opmerkingen_handel_bulgaars=&opmerkingen_handel_kroatisch=&titel=&titel_engels=&titel_duits=&titel_frans=&titel_spaans=&titel_portugees=&titel_italiaans=&titel_grieks=&titel_russisch=&titel_roemeens=&titel_hongaars=&titel_pools=&titel_tsjechisch=&titel_bulgaars=&titel_kroatisch=&highlights=&highlights_engels=&highlights_duits=&highlights_frans=&highlights_spaans=&highlights_portugees=&highlights_italiaans=&highlights_grieks=&highlights_russisch=&highlights_roemeens=&highlights_hongaars=&highlights_pools=&highlights_tsjechisch=&highlights_bulgaars=&highlights_kroatisch=&zoektermen=&zoektermen_engels=&zoektermen_duits=&zoektermen_frans=&zoektermen_spaans=&zoektermen_portugees=&zoektermen_italiaans=&zoektermen_grieks=&zoektermen_russisch=&zoektermen_roemeens=&zoektermen_hongaars=&zoektermen_pools=&zoektermen_tsjechisch=&zoektermen_bulgaars=&zoektermen_kroatisch=&standaardopmerkingen=&standaardopmerkingen_engels=&standaardopmerkingen_duits=&standaardopmerkingen_frans=&standaardopmerkingen_spaans=&standaardopmerkingen_portugees=&standaardopmerkingen_italiaans=&standaardopmerkingen_grieks=&standaardopmerkingen_russisch=&standaardopmerkingen_roemeens=&standaardopmerkingen_hongaars=&standaardopmerkingen_pools=&standaardopmerkingen_tsjechisch=&standaardopmerkingen_bulgaars=&standaardopmerkingen_kroatisch=&plugin_hybride=n&accu_laadvermogen=0&accu_laadtijd=0&accu_snellaadtijd=0&accu_laadsnelheid=0&accu_snellaadsnelheid=0&accu_conditie=0&geschikt_voor_snelladen=n&apk_bij_aflevering=n&vermogen_motor_pk=0&bpm_bedrag=0&nap_weblabel=n&onderhoudsboekjes=&exportprijs_btw=&meeneemprijs_bpm=&meeneemprijs_btw=&kosten_rijklaar=0&schadevoertuig=n&consignatie=n&demovoertuig=n&merkgarantie=&autotrust_garantie=n&vakgarant_premium_occasion=n&vwe_occasion_garant_plan=n&opmerkingen_garantie=&wegenbelasting_kwartaal_min=&wegenbelasting_kwartaal_max=&verkocht=n&bijtelling_pct=0&verkocht_datum=&verlengd=&verhoogd=&geremd=n&datum_binnenkomst=31-03-2020&verhuur=n&klassieker=n&land=nl&munteenheid=EUR&volautomatisch=n&voortbeweging_zelfstandig=&verplaatsing=weg&generatorvermogen=&generatorvermogen_eenheid=&doorvoercapaciteit=&doorvoercapaciteit_eenheid=&maximale_reikwijdte=&maximale_reikwijdte_eenheid=&voedingsspanning=&voedingsspanning_eenheid=&mastlengte=&mastlengte_eenheid=&bovenarmlengte=&bovenarmlengte_eenheid=&rupsbandbreedte=&rupsbandbreedte_eenheid=&laadschopinhoud=&laadschopinhoud_eenheid=&minimale_koeltemperatuur=&minimale_koeltemperatuur_eenheid=&maximale_koeltemperatuur=&maximale_koeltemperatuur_eenheid=&toepassingsmateriaal=&toepassingsgebied=&ce_markering=n&rompmateriaal=&aandrijving=nvt&attachment_passend_op=&hefwerktuigaansluiting=&snelwisselsysteem=n&pantograaf=n&wals_trillend=&prijstype=vraagprijs&bieden_toestaan=&oldtimer=&powershuttle=n&gesynchroniseerde_transmissie=n&opbouw%5Bkipper_rechts%5D=n&opbouw%5Bkipper_links%5D=n&opbouw%5Bkipper_achter%5D=n&opbouw%5Bpomp%5D=n&opbouw%5Bslangen%5D=n&opbouw%5Btelwerk%5D=n&opbouw%5Bwaterinstallatie%5D=n&opbouw%5Bschoonwatertank%5D=n&opbouw%5Bhogedrukpomp%5D=n&opbouw%5Bschuifdak%5D=n&laadklep=n&kraan=n&accessoires=&afbeeldingen=http%3A%2F%2Fmedia.eigenwebsiteincrementeel.export.doorlinkenvoorraad.nl%2F6238653226%2F22930392-1.jpg%2Chttp%3A%2F%2Fmedia.eigenwebsiteincrementeel.export.doorlinkenvoorraad.nl%2F6238653227%2F22930392-2.jpg%2Chttp%3A%2F%2Fmedia.eigenwebsiteincrementeel.export.doorlinkenvoorraad.nl%2F6238653228%2F22930392-3.jpg%2Chttp%3A%2F%2Fmedia.eigenwebsiteincrementeel.export.doorlinkenvoorraad.nl%2F6238653229%2F22930392-4.jpg";
// Headers copied from DV, representing the same headers as DV sends
const options = {
    headers: {
        "host": "equiptrace.nl:8080",
        "user-agent": "Doorlinken Voorraad",
        "accept": "*/*",
        "accept-encoding": "deflate, gzip",
        "content-type": "application/X-www-form-urlencoded",
        "expect": "100-continue"
    }
};

function run_test() {
    let success = 0;
    let max = 10000;
    let count = 0;
    let success_rate = 0;

    console.log('going to post', url, max, 'times....');
    let start = Date.now();

    // Send out <max> post requests. These requests are axios promises
    for(i=0;i<max;i++) {
        axios.post(url, data, options)
        .then(function (response) {
            // handle success: if the server responded with "1" this is considered a success
            if (response.data == "1") {
                    success = success + 1
            }
          })
          .catch(function (error) {
            // handle error: something went wrong, print the error and increase error count
            console.log(error.code);
          })
          .finally(function () {
            // always executed: wait until all post requests are executed and then print the test results
            count = count + 1;
            if (count == max) {
                success_rate = (success/max) * 100;
                console.log("success: ", (success/max) * 100, "% error: ", 100 - succes_rate, "%")
                console.log("execution count: ", max);
                console.log("execution time: ", (Date.now() - start)/1000, "seconds.");
            }
          });
    }
}

run_test();
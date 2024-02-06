const Apify = require('apify');
const firebase = require('firebase');

var runAccordingToSepcificConditions = false
//var runAccordingToSepcificConditions = true

//var url = 'https://api.apify.com/v2/acts/kbvhuuvcccch~puppeteer-scraper/runs?token='+token
//var whichActorToRun = 'https://api.apify.com/v2/acts/kbvhuuvcccch~puppeteer-scraper/runs'
var whichActorToRun = 'https://api.apify.com/v2/acts/fghrh65h565~my-puppeteer-scraper/runs'
//var whichActorToRun = 'https://api.apify.com/v2/acts/fd564df564df~apify-sdk-js-jan-2024/runs'

async function startRunningActorProcess() {
	

async function getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse )
{
	
	//var countriesArray = ["United Arab Emirates", "United States", "Denmark", "Australia"];
	//var countriesArray = ["Australia", "United States" ] ;
	//var countriesArray = [ "United States", "Denmark" ] ;
	//var countriesArray = [ "United States", "United States" ] ;
	//var countriesArray = ["Australia", "United States","United Arab Emirates", "Denmark" ] ;
	//var countriesArray = ["United States","United Arab Emirates" ] ;
	//var countriesArray = ["Denmark","United Arab Emirates","Austria" ] ;
	//var countriesArray = ["United Arab Emirates", "United States", "Canada","Austria" ] ;
	//var countriesArray = ["United Arab Emirates", "United States", "United Kingdom", "Canada","Australia", "New Zealand", "Austria", "Denmark","Sweden" ] ;
	//var countriesArray = ["Austria","Austria" ] ;
	//var countriesArray = ["United Arab Emirates", "United States", "United Kingdom", "Canada","Australia", "New Zealand", "Saudi Arabia", "Kuwait", "Brazil", "Ghana" ] ;
	var countriesArray = [ 
	
	"United States",
	"United Kingdom",
	"Canada",
	"United Arab Emirates",
	"New Zealand",
	"Kuwait",
	"Australia"
	
	] ;
	
	var countryCodes = {
// Mapping of country names to ISO 3166-1 alpha-2 codes
  "India": "IN",
  "United Arab Emirates": "AE",
  "United States": "US",
  "Denmark": "DK",
  "Australia": "AU",
  "Austria": "AT",
  "Canada": "CA",
  "Ghana": "GH",
  "United Kingdom": "GB",
  "New Zealand": "NZ",
  "Sweden": "SE",
  "Swaziland": "SZ",
  "Saudi Arabia": "SA",
  "Kuwait": "KW",
  "Brazil": "BR",
  "France": "FR",
  "Italy": "IT",
  "Germany": "DE",
  "Colombia": "CO",
  "Czech Republic": "CZ",
  "Finland": "FI",
  "Greece": "GR",
  "Greenland": "GL",
  "Hungary": "HU",
  "Iceland": "IS",
  "Mexico": "MX",
  "Japan": "JP",
  
};

	/*
	function shuffleArray(array) {
	  for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	  }
	}

	shuffleArray(countriesArray);
	console.log( countriesArray )
	*/
	
	if(whichAccountTurnTrueFalse==true)
	{
	// if this is turn of next account then change its country
	
	var newCountryNumber = previousCountryNumber + 1 
	
	if( newCountryNumber>=countriesArray.length )
	{
		var selectedCountry = countriesArray[0]
		var selectedCountryCode = countryCodes[selectedCountry]
		
		console.log( "newSelectedCountry",selectedCountry )
		
		return {
			"selectedCountryNumber":0,
			"selectedCountryCode":selectedCountryCode,
		}
	}
	else{
		
		var previousSelectedCountry = countriesArray[previousCountryNumber]

		var newSelectedCountry = countriesArray[newCountryNumber]
		var selectedCountryCode = countryCodes[newSelectedCountry]
		
		console.log( "previousSelectedCountry", previousSelectedCountry, "newSelectedCountry",newSelectedCountry )
		
		return {
			"selectedCountryNumber":newCountryNumber,
			"selectedCountryCode":selectedCountryCode,
		}
	}
	
	}
	else
	{
		// if this is not turn of next account then remain its same country

	var newCountryNumber = previousCountryNumber
	
	if( newCountryNumber>=countriesArray.length )
	{
		var selectedCountry = countriesArray[0]
		var selectedCountryCode = countryCodes[selectedCountry]
		
		console.log( "newSelectedCountry",selectedCountry )
		
		return {
			"selectedCountryNumber":0,
			"selectedCountryCode":selectedCountryCode,
		}
	}
	else
	{
		var sameSelectedCountry = countriesArray[previousCountryNumber]
		var selectedCountryCode = countryCodes[sameSelectedCountry]
		
		console.log( "sameSelectedCountry",sameSelectedCountry )
		
		return {
			"selectedCountryNumber":previousCountryNumber,
			"selectedCountryCode":selectedCountryCode,
		}
		
	}
	}

}



function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


/*
rakeshkumarfb: Org 9 (Sunday 18-Jun-2023 08:49:34 PM)
moxafa5631: Org 6 (Tuesday 13-Jun-2023 08:51:10 AM)
moxafa5631: Org 8 (Tuesday 27-Jun-2023 08:53:00 PM)
coyisi4601: Org 9 (Tuesday 13-Jun-2023 08:52:40 AM)

account 1 = rakeshkumarfb
account 2 = coyisi4601
account 3 = moxafa5631
*/
 
var accountsWithDetails = {

 'NewTemplate':{

 },
 
 'NewTemplate':{

 },
 
 //2 feb
 'lavpreetoig38@proton.me':{
"lavpreetoig38@proton.meOrg1":{"createdAt":"lavpreetoig38@proton.meOrg1 (02 Feb (23:52:00 PM) Friday)","userName":"japan_row","userID":"FBtepJw5DPZKe5uGj","personalAPIToken":"apify_api_N0qoRifgNZ0KI4gc5tp7iuwTIW7D7E3ssccK","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (23:52:00 PM) Friday)","userName":"Khjfgdxvj","userID":"r2ycWW9RatHLKFAi2","personalAPIToken":"apify_api_n5Z1xGjn8st2DPegd9iEmnheJcVLQf1Vblfj","organizationAPIToken":"apify_api_LlNcVANL2yGgNx2cdHYw4yvQVIr7eC3A1YZy"},

 },
 
 'ramankunar370@proton.me':{
"ramankunar370@proton.meOrg1":{"createdAt":"ramankunar370@proton.meOrg1 (02 Feb (21:21:00 PM) Friday)","userName":"kinetic_microscope","userID":"ndyDAqSFSj7gbhPqH","personalAPIToken":"apify_api_FPrJakOZZa3o5tEGU7Xnm7mGqQ0flE2XTYut","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (21:21:00 PM) Friday)","userName":"Lkihtttttdfgh","userID":"e8kt6YwMMi8uRmeSn","personalAPIToken":"apify_api_3iHMP2CNTCpQlkGv9syWhcAyzrmp2t2ghWeb","organizationAPIToken":"apify_api_KB3Rw2LBiMqsRCOCsA8crGomvwvX72013xBH"},

 },
 
 'niteshkunar901@proton.me':{
"niteshkunar901@proton.meOrg1":{"createdAt":"niteshkunar901@proton.meOrg1 (02 Feb (15:21:00 PM) Friday)","userName":"glaciological_filbert","userID":"7oeAhtYqGeKw8vtnB","personalAPIToken":"apify_api_fVGOPSIY5TLjb2PN4cN3AHXhVS2uX63ildmy","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (15:21:00 PM) Friday)","userName":"Jvgugdgxjvkb","userID":"zjfG4Ne8sETxsNPvY","personalAPIToken":"apify_api_MpxiOh4iDtewfVHtv6xkMlst4HIUfW2hd5S5","organizationAPIToken":"apify_api_xdyJer1jXmLGlknOHSDBiUQ8SYhe8x3WpWxB"},

 },
 
 'jugeshkysd70@proton.me':{
"jugeshkysd70@proton.meOrg1":{"createdAt":"jugeshkysd70@proton.meOrg1 (02 Feb (12:25:00 PM) Friday)","userName":"fetching_syrup","userID":"Z8385gPuzsgnL6Wyp","personalAPIToken":"apify_api_4D0fKcJ0mavYq7iOauMvVtjbygkvK40msGMo","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (12:25:00 PM) Friday)","userName":"Ssrtyfnddetytfg","userID":"bQXcdDW6MBptGsHXv","personalAPIToken":"apify_api_Uo0lz45BhaZBfok7hhtIcKI2xaECnb1n1FVv","organizationAPIToken":"apify_api_Uyois2UbFwwG8SrLGRyEoyIv7eXeJx2ncpMD"},

 },
 
 'surjeetkuna3079@proton.me':{
"surjeetkuna3079@proton.meOrg1":{"createdAt":"surjeetkuna3079@proton.meOrg1 (02 Feb (09:55:00 AM) Friday)","userName":"cherished_jingo","userID":"yaZ8iZD7EHgt9uhyu","personalAPIToken":"apify_api_T82UgMa9Af4cIererH7hvYdjqNI3ex3NOeIR","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (09:55:00 AM) Friday)","userName":"Ksskdjhgfchg","userID":"oZWvhzwYTdWRiyyhF","personalAPIToken":"apify_api_N7QE6sR3bHdQtdwckH9B3sGtQPtZZO2VuFU8","organizationAPIToken":"apify_api_xbLTHTH86IlzqSfyO5hwAUREZcXt2G38Y4p8"},

 },
 
 'amandeepajj384@proton.me':{
"amandeepajj384@proton.meOrg1":{"createdAt":"amandeepajj384@proton.meOrg1 (02 Feb (18:54:00 PM) Friday)","userName":"giggling_pavement","userID":"PW4b5p2Pox7HiWdHd","personalAPIToken":"apify_api_q22grxMkgmee5HcyPpwbHa5QokaZD74jBqw9","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (18:54:00 PM) Friday)","userName":"Slosodurvkhv","userID":"tioepRhcDAGBh83pG","personalAPIToken":"apify_api_dD7OIcCowEjZraofKqLIpvFzBobW6r3aarFX","organizationAPIToken":"apify_api_OO1YD45mRGD2gh0lKWjwXk9L0200Tf2NdooW"},

 },
 
 'arjunpanday030@proton.me':{
"arjunpanday030@proton.meOrg1":{"createdAt":"arjunpanday030@proton.meOrg1 (02 Feb (16:48:00 PM) Friday)","userName":"satisfactory_elderberry","userID":"mAaBPfmjP82MKmQrg","personalAPIToken":"apify_api_nFOVIMBy00Iem3Su1qqzJkzlhidD6G0STnt3","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (02 Feb (16:48:00 PM) Friday)","userName":"Lspoihdvbe","userID":"jh2Moahcxeg5LgJpJ","personalAPIToken":"apify_api_gs5EtBy8YuziWZtuWMncL97OlZKZAG0O2Tuz","organizationAPIToken":""},

 },
 
 // 1 feb
 'parveenkuma334@proton.me':{
"parveenkuma334@proton.me":{"createdAt":"parveenkuma334@proton.me (01 Feb (20:54:00 PM) Thursday)","userName":"orthogonal_imagination","userID":"6jM4ypfGEN74dMz5X","personalAPIToken":"apify_api_VX2C5jNBwsOB6cyivtcIhHp7lNyCQZ0UUaXw","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (01 Feb (20:54:00 PM) Thursday)","userName":"Skskdjdhvg","userID":"M68SwtDJyuMmyphxw","personalAPIToken":"apify_api_ijxPc17uFWaTtxBSiYd3MXBbBqrC5K2ov2HV","organizationAPIToken":"apify_api_XNGIFWFyam5gyOcyeNaori7NsrqvDu10w858"},

 },
 
 'farhanpyfz65@proton.me':{
"farhanpyfz65@proton.meOrg1":{"createdAt":"farhanpyfz65@proton.meOrg1 (01 Feb (18:11:00 PM) Thursday)","userName":"breathtaking_geometry","userID":"6c76QgLarXtHmD3Yn","personalAPIToken":"apify_api_PMUOIdymAyBQ2AadS4y3ubcAuqFSbL48xLic","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (01 Feb (18:11:00 PM) Thursday)","userName":"Llloigfdac","userID":"RbAdEz2ts8fBQEjHg","personalAPIToken":"apify_api_vOKTRWo0eITnnOubZ5RVChxiLjzy0C2rC0iP","organizationAPIToken":"apify_api_aFgphKh3ZtFboATDpSm8XJr4biaKaR1CFLQ5"},

 },
 
 'jatinderyadh684@proton.me':{
"jatinderyadh684@proton.meOrg1":{"createdAt":"jatinderyadh684@proton.meOrg1 (01 Feb (11:14:00 AM) Thursday)","userName":"defendable_quinsy","userID":"tswyF4RMz2duGCzoX","personalAPIToken":"apify_api_SygwYnImANMxBYlV4KIwQBFm7udT6p20OJZX","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (01 Feb (11:14:00 AM) Thursday)","userName":"Llooigfddxcbjk","userID":"uJjGfCWzfPesjs4eL","personalAPIToken":"apify_api_sWg2H9LCH0KwCS9CEuSs7S1wDRuoa10TWOtE","organizationAPIToken":"apify_api_6KDrhKkJlzCsapEBcZwoFJnyB5rxis2KNqTu"},

 },
 
 //31 jan
 'narjootkynsh6@proton.me':{
//"narjootkynsh6@proton.meOrg1":{"createdAt":"narjootkynsh6@proton.meOrg1 (31 Jan (19:51:00 PM) Wednesday)","userName":"sleek_transmission","userID":"EPs59HS8edrZ2H89i","personalAPIToken":"apify_api_ueMOxD7fC1Ic8cquzaODhsXjFhwlAZ2dI1aU","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (31 Jan (19:51:00 PM) Wednesday)","userName":"Dkskjhgyvkh","userID":"K9R5RcFKQz9iJ79No","personalAPIToken":"apify_api_1X7qvjzbfjw5VamKfQrDFod2JRZmKa434IWR","organizationAPIToken":"apify_api_VALN6oD4m5Rd1D8fIUYzmk7WPCj45c3jRWzm"},

 },
 
 'utenderkynar68@proton.me':{
"utenderkynar68@proton.meOrg1":{"createdAt":"utenderkynar68@proton.meOrg1 (31 Jan (17:05:00 PM) Wednesday)","userName":"happy_gas","userID":"GNfsf3HmLMNfF2h4m","personalAPIToken":"apify_api_D4BmAw0KSltYXGfbOIkdmmbDDm43Oc4qiD98","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (31 Jan (17:05:00 PM) Wednesday)","userName":"Slsloohvsvh","userID":"JK4QeLgjvBvBPQfpK","personalAPIToken":"apify_api_WPnaMWjAVvs3G3NtrSERjbFiFtpHqO29Q17o","organizationAPIToken":"apify_api_uaHoMYaHHhJmxQyLOSNf9acc6Bv5am2HH79a"},

 },
 
 'sureshpanday978@proton.me':{
"sureshpanday978@proton.meOrg1":{"createdAt":"sureshpanday978@proton.meOrg1 (31 Jan (11:10:00 AM) Wednesday)","userName":"waxlike_parade","userID":"yW42k3WLd6vK96vxJ","personalAPIToken":"apify_api_ynmFvIhtSY4cPL7rhYr2OndebmelUB06Y1WN","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (31 Jan (11:10:00 AM) Wednesday)","userName":"Skzkiddbhhsv","userID":"5aGDePvWcFanbMYom","personalAPIToken":"apify_api_agcDylture6l3ujpMzqP7knaO8KyAt36P7hL","organizationAPIToken":"apify_api_pfZup46aezennpDZd2t9dTmQ0h7ifp3kMotn"},

 },
 
 'ishanpanday6970@proton.me':{
"ishanpanday6970@proton.meOrg1":{"createdAt":"ishanpanday6970@proton.meOrg1 (31 Jan (14:09:00 PM) Wednesday)","userName":"famed_enchantment","userID":"tEMGThNGXDr3tZ4k4","personalAPIToken":"apify_api_80RRExjYbuSY5n39o67jK8zGQeA34r3q6c1q","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (31 Jan (14:09:00 PM) Wednesday)","userName":"Skksodrhvhg","userID":"AnDvmF8QvwouvgzK9","personalAPIToken":"apify_api_oTCvT4UGLDGhbSx4cdu6Tl3BHlPcQ019V3Eu","organizationAPIToken":"apify_api_jRQ1ajSfyz8WZQUxvlGimmFOU6bs1b0LzsGD"},

 },
 
 'jitenderku680@proton.me':{
"jitenderku680@proton.meOrg1":{"createdAt":"jitenderku680@proton.meOrg1 (31 Jan (01:03:00 AM) Wednesday)","userName":"lemon_jasmine","userID":"i3N8rakfGHjLGQEsj","personalAPIToken":"apify_api_of3FxYT2CCZGSPdHXk9xbSAbxnF1JL2sdZlA","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (31 Jan (01:03:00 AM) Wednesday)","userName":"Sldodirbvg","userID":"92KeKMc99JgRHTqrB","personalAPIToken":"apify_api_ZftQJ84TmBtkgoTjuLQqRdZDMAvK1B08YpJL","organizationAPIToken":"apify_api_TIffHqFlE9LLVc77qaPr7UeKtrZlJx147Eg8"},

 },
 
 
 'surindernn54@proton.me':{
"surindernn54@proton.me":{"createdAt":"surindernn54@proton.meOrg1 (31 Jan (12:02:00 PM) Saturday)","userName":"compelling_xiphosura","userID":"xcGXMr4XzDs8ahHea","personalAPIToken":"apify_api_lWWuksyNbIJ0GDNoH1b9M0zzzc3sa83kzDhK","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (31 Jan (12:02:00 PM) Saturday)","userName":"Jhctxgxkb","userID":"Rwj87jAtTurQSqPR3","personalAPIToken":"apify_api_a8d0coO2rXecRrct4Cl0W00Wozj3SR4s7SYH","organizationAPIToken":"apify_api_ZbBwFCgUqBq43OoEpEEealDPOOnv0q1AfkXJ"},

 },
 
 // 30 jan
 'omeshkumar664@proton.me':{
"omeshkumar664@proton.me30":{"createdAt":"omeshkumar664@proton.me30 (30 Jan (23:00:00 PM) Tuesday)","userName":"resourceful_grape","userID":"wmXFAShSDjmyDTvci","personalAPIToken":"apify_api_qb3I1TG4tcBlf4qQac40Kh1vpgr3nz4BzbvW","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (30 Jan (23:00:00 PM) Tuesday)","userName":"Jhyftdgdugihhi","userID":"iKBj6vXyyqXWzEzFX","personalAPIToken":"apify_api_zKQh0znVtOH0ViDaSbW0yP72ziyUf71SuDZ1","organizationAPIToken":"apify_api_v0AO3vs5ezcUfzeRbYkr3d9KfMlTB83vrcWe"},

 },
 
 'jagandeepkua65@proton.me':{
"jagandeepkua65@proton.me":{"createdAt":"jagandeepkua65@proton.me (30 Jan (17:23:00 PM) Tuesday)","userName":"smalt_huckleberry","userID":"NSww9wFfSeiYpWeww","personalAPIToken":"apify_api_I2eVF90eiUVypEukRxPHqksYopCSwI1OZabI","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (30 Jan (17:23:00 PM) Tuesday)","userName":"Xlsodibvch","userID":"383x5iRpKhY3t4ub9","personalAPIToken":"apify_api_kGaiDZQRHxg6AboTCEPhHKT8BeyeEZ02nk6T","organizationAPIToken":"apify_api_nWbcGn6xsW0uXtEaznbnvgOioEPvie3578Yr"},

 },
 
 'jiteshkumar051@proton.me':{
//"jiteshkumar051@proton.meOrg1":{"createdAt":"jiteshkumar051@proton.meOrg1 (30 Jan (10:23:00 AM) Tuesday)","userName":"convenient_tomorrow","userID":"DX2T4nBfKMpeDfWYd","personalAPIToken":"apify_api_r4qIzyFfwhhd6PyGRddJHs83hcfriS0F9tzy","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (30 Jan (10:23:00 AM) Tuesday)","userName":"Jhydtdhfihoh","userID":"LjuRcjehdAWCTJTa2","personalAPIToken":"apify_api_G7xFvt8xpJbHQ9MEHN5xHUG9adOwcg31jR8M","organizationAPIToken":"apify_api_439udHbs0cclo3xAWKllgH1xDQnnjL02P1Uf"},

 },
 
 //29 jan
 'omeshkunar65@proton.me':{
"omeshkunar65@proton.meOrg1":{"createdAt":"omeshkunar65@proton.meOrg1 (29 Jan (21:05:00 PM) Monday)","userName":"comical_wild","userID":"rW93oodQbHnuSEgzb","personalAPIToken":"apify_api_DLZZuLlhc1c3eSFX2azGhTWSc2l9G046VKYq","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (29 Jan (21:05:00 PM) Monday)","userName":"Kdjdbjhehby","userID":"e2awYjyj8PjEEcgmm","personalAPIToken":"apify_api_peHfUOIXy87VNgL6dTDVtb0jez78TD3SnOUj","organizationAPIToken":"apify_api_YgDmhUy36AHRwuWs8w7ZBnfzpdgMHQ1ebiQk"},

 },
 
 'sureshkimar668@proton.me':{
"sureshkimar668@proton.meOrg1":{"createdAt":"sureshkimar668@proton.meOrg1 (29 Jan (16:41:00 PM) Monday)","userName":"accessible_millipede","userID":"x4QEk32Tp68PocKNx","personalAPIToken":"apify_api_LWsKtxqGZxehhzCoxNmy42i9BKfEBJ1nO8nm","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (29 Jan (16:41:00 PM) Monday)","userName":"Gkjdhdjkfhd","userID":"fDZ36wZLCqYPcMMeZ","personalAPIToken":"apify_api_fIZUzZ2efb1EdrMl7ObOYzOcGMJYdX0eh8EO","organizationAPIToken":"apify_api_6D3q3fiKLkcQXH9aJmvMLToiNu0NEt3FpPzV"},

 },
 
 'riteshkunar905@proton.me':{
//"riteshkunar905@proton.meOrg1":{"createdAt":"riteshkunar905@proton.meOrg1 (29 Jan (13:31:00 PM) Monday)","userName":"judicial_hawk","userID":"GqbapNfwJphLXvZ7L","personalAPIToken":"apify_api_RnOZ6bVbP2KzjTbwLxZIOmDDZyuzx11ACY40","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (29 Jan (13:31:00 PM) Monday)","userName":"Jvydfsgxkvknhi","userID":"jt9hCLG2TskjveEAq","personalAPIToken":"apify_api_J8iIoae3oIEjzwUqhKNxFkluK30P2j1QbWlf","organizationAPIToken":"apify_api_BnSVvWxuMlCyiHJXPIPgmdi51cubjm4rqEmQ"},

 },
 
 'deepakyadav64@proton.me':{
"deepakyadav64@proton.meOrg1":{"createdAt":"deepakyadav64@proton.meOrg1 (29 Jan (00:25:00 AM) Monday)","userName":"native_income","userID":"ZRmc2YXRRtEmGgbSG","personalAPIToken":"apify_api_u1nAtUQarkEMzzn9GkjQT29blZcBVG0nx0lA","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (29 Jan (00:25:00 AM) Monday)","userName":"Skskdjevvf","userID":"cisPeA8S8kza37zJP","personalAPIToken":"apify_api_PsvFVDsef0r4jH6T2Ptwyf1aQRyUv32i6KfB","organizationAPIToken":"apify_api_shIYncoSnkDpTGZG4eDjwegvAQPUOV3PZ44q"},

 },
 
 //28 jan
 'tarndeepkum685@proton.me':{
"tarndeepkum685@proton.meOrg1":{"createdAt":"tarndeepkum685@proton.meOrg1 (28 Jan (17:20:00 PM) Sunday)","userName":"coral_xaphoon","userID":"nk2SAxm7itMxbYKGy","personalAPIToken":"apify_api_Gjjy0E9fb8yfOGxHHmMPdrcx2deaBz19U0sT","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (28 Jan (17:20:00 PM) Sunday)","userName":"Lsoejdbxhb","userID":"f8xprkZmDLTesCLET","personalAPIToken":"apify_api_hKCldNfHoxxB5CDoEhBbccT4apQgjl4u3y6l","organizationAPIToken":"apify_api_NUwGWSx8ZGIaHKICQczkqyXgzQ8VZJ2uzKoB"},

 },
 
 'amandeepkuma65@proton.me':{
"amandeepkuma65@proton.meOrg1":{"createdAt":"amandeepkuma65@proton.meOrg1 (28 Jan (19:32:00 PM) Sunday)","userName":"conceivable_ecology","userID":"Zpyotbk7sCYZiwwvD","personalAPIToken":"apify_api_Y497vBIH7Hohl6umuYepF0EoR5LWdT2cHSLp","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (28 Jan (19:32:00 PM) Sunday)","userName":"Ksskshdvv","userID":"dNyStNwYauJmZJTFJ","personalAPIToken":"apify_api_sv88TaRdbA25nnT7qrbWX8Jex5n9sJ2w4O3F","organizationAPIToken":"apify_api_XQxhBRcjacZtc5B3jgpgaLdpaeF3OM1PSO0l"},

 },
 
 'rakeshkumar334@proton.me':{
"rakeshkumar334@proton.me":{"createdAt":"rakeshkumar334@proton.me (28 Jan (16:12:00 PM) Sunday)","userName":"kitschy_rush","userID":"soycmHdGDbJgnCquh","personalAPIToken":"apify_api_5aFjCZJgPZthZYrlKlyguI8IfuibOj4fc2lN","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (28 Jan (16:12:00 PM) Sunday)","userName":"Kzxkdjdbdb","userID":"TeKQjDocuEQEgjTCP","personalAPIToken":"apify_api_BxTmXh5DWfHTwhaP37JvAbT74BP32T3ihlef","organizationAPIToken":"apify_api_GDt9gBWOxj1dUQg9HqPSDjibXr5bEJ0qSgGZ"},

 },
 
 'jiteshyadav98@proton.me':{
"jiteshyadav98@proton.meOrg1":{"createdAt":"jiteshyadav98@proton.meOrg1 (28 Jan (14:01:00 PM) Sunday)","userName":"cinnabar_gymnast","userID":"NTvysPGAtc3SdmSFo","personalAPIToken":"apify_api_ypoF1ZwX1JUIUUIgcPrWQDKppY9NRN0SP46R","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (28 Jan (14:01:00 PM) Sunday)","userName":"Kjhfcvhuygcch","userID":"nKSuvJtpxtZGo3mp9","personalAPIToken":"apify_api_xTMWEzScqnTVA0g9GGCmpUksJAa6kE0QTCou","organizationAPIToken":"apify_api_KZLszObqnKoTVYdDtsEjDoCPCONThT2rFi7D"},

 },
 
 'yuvrajkunar68@proton.me':{
"yuvrajkunar68@proton.meOrg1":{"createdAt":"yuvrajkunar68@proton.meOrg1 (28 Jan (11:03:00 AM) Sunday)","userName":"absolute_performer","userID":"bTx8BJfmydhtepZDc","personalAPIToken":"apify_api_xYr3pc6XNiXpofrzuiOdcSdVzplNcG0kpVCh","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (28 Jan (11:03:00 AM) Sunday)","userName":"Lssksjdvvf","userID":"t8iP5jgG97GZbjHLg","personalAPIToken":"apify_api_yJud3p0tMcGAdz4fAV7MzmsfAePWJu064fue","organizationAPIToken":"apify_api_YkDGzfbNImTUnThzXvkiWdN1BhtMfC1HtE6G"},

 },
 
 // 27 jan
 'deepakkunar635@proton.me':{
"deepakkunar635@proton.meOrg1":{"createdAt":"deepakkunar635@proton.meOrg1 (27 Jan (23:41:00 PM) Saturday)","userName":"guiltless_validation","userID":"7QxY5A6BXZyJR6zBr","personalAPIToken":"apify_api_zdv2DZow4HhKkOuW8FzKHYukV6tPJW3ZFZAR","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (23:41:00 PM) Saturday)","userName":"Sksjdbevhh","userID":"TCkryf57A4hjh8zBB","personalAPIToken":"apify_api_Inw22Wfxdz5wXZc3lBbt1awBcfPQZf2I9fzl","organizationAPIToken":"apify_api_BYEsMKpKaUQCDbyWHh01zZbmjEpOdZ2kcNgQ"},

 },
 
 'kuldeepkumars35@proton.me':{
"kuldeepkumars35@proton.meOrg1":{"createdAt":"kuldeepkumars35@proton.meOrg1 (27 Jan (16:49:00 PM) Saturday)","userName":"cherished_clip","userID":"wq9MBNfdexszoano2","personalAPIToken":"apify_api_Qk27g8KPPjCawt4E1v5TzcDBpr9ai52wywtN","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (16:49:00 PM) Saturday)","userName":"Dkdorhevsvhk","userID":"axGyg3m5c82eta7gd","personalAPIToken":"apify_api_JSqsHVWnIEamwtgV3meRiuJoftcmfL2hLguh","organizationAPIToken":"apify_api_z8ThxzdROmW7EqNWFNtdf87zo3rrDw1OV16I"},

 },
 
 'surinderkuar6@proton.me':{
"surinderkuar6@proton.meOrg1":{"createdAt":"surinderkuar6@proton.meOrg1 (27 Jan (13:42:00 PM) Saturday)","userName":"harmless_joyride","userID":"6Qow9Yb7YBBFTpEch","personalAPIToken":"apify_api_OuKVq2VHCkwyyAvEmPHQ9S8q7peVWx0jPUGN","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (13:42:00 PM) Saturday)","userName":"Kxofifjrbgta","userID":"Wi9i4PD9NnmxwxmHt","personalAPIToken":"apify_api_55gDWIiYOCLqdrjPdsOiJwXqKHtdjJ3PIxFi","organizationAPIToken":"apify_api_2v49h99AU28u5a00bacBrXlNlVEHwM2j18WZ"},

 },
 
 'rakeshkuma254@proton.me':{
"rakeshkuma254@proton.meOrg1":{"createdAt":"rakeshkuma254@proton.meOrg1 (27 Jan (10:41:00 AM) Saturday)","userName":"verifiable_jolt","userID":"tK8MezFgz7BkqcJqR","personalAPIToken":"apify_api_iH1kxXSfv6aZaC0Kntj73bGr7GJAiL2wXfBW","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (10:41:00 AM) Saturday)","userName":"Ksxirbdvsbsbsv","userID":"DhAkYeB8MyR6h3gMt","personalAPIToken":"apify_api_u9WbXlvOpQo1XkiL9pFcxLl6ZBnTGC1iI3CX","organizationAPIToken":"apify_api_LB3XbKUh3CxLMjIcku6vIgEdh4Wgo44ppj8m"},

 },
 
 'sandeepsingk58@proton.me':{
"sandeepsingk58@proton.meOrg1":{"createdAt":"sandeepsingk58@proton.meOrg1 (27 Jan (21:57:00 PM) Saturday)","userName":"gusty_grimace","userID":"s9rkHxyqpXYymxZwF","personalAPIToken":"apify_api_ejgi80QgHNDG6rsyfVekcmzbTdkAeV3nFhUg","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (21:57:00 PM) Saturday)","userName":"Khgfjhcchhh","userID":"LLEX2BPoBGbzvZPxj","personalAPIToken":"apify_api_2mYwuSrYjHnDrsYl6GWeXecaL3VNxe0oGpLm","organizationAPIToken":"apify_api_7ht1FjXHJib1yGg38lag2aYcnqmjnu4juvu9"},

 },
 
 'lavpreetkunat57@proton.me':{
"lavpreetkunat57@proton.meOrg1":{"createdAt":"lavpreetkunat57@proton.meOrg1 (27 Jan (19:15:00 PM) Saturday)","userName":"fulfilling_bounty","userID":"mCba4CyhgiMPzeAz4","personalAPIToken":"apify_api_pVdW26EtXwsColD7gi0VpMJ5BedAkk4uTuEy","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (19:15:00 PM) Saturday)","userName":"Ihuddhjvkb","userID":"rEgeNMk8ZQ2fMXmXa","personalAPIToken":"apify_api_zHmP2YH1albYho6TdQ9nL72Ot5euYo3zmKFf","organizationAPIToken":"apify_api_H0NurA9GN3UBxIPh474gTRzftj98xt3hJOge"},

 },
 
 'balwantsing14@proton.me':{
"balwantsing14@proton.meOrg1":{"createdAt":"balwantsing14@proton.meOrg1 (27 Jan (14:54:00 PM) Saturday)","userName":"oriented_jeans","userID":"f9cgz2TmyoE3mGKQu","personalAPIToken":"apify_api_slXmDNzu7yEnxArfzgMjKEj2dRHKnD0sQRDn","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (14:54:00 PM) Saturday)","userName":"Sdghfwsdgrs","userID":"wLGF4wn3yveubZkQg","personalAPIToken":"apify_api_nzetnYBXa3P1mU9Flkv62f2a8pNCPN0jXvcV","organizationAPIToken":"apify_api_mgFCTLVHRnRV3RCJQLXSZoJrYWm00A4A7f7b"},

 },
 
 'jagdishkunar65@proton.me':{
"jagdishkunar65@proton.meOrg1":{"createdAt":"jagdishkunar65@proton.meOrg1 (27 Jan (12:04:00 PM) Saturday)","userName":"available_finance","userID":"a6xa7Hzg7SYq9frt5","personalAPIToken":"apify_api_vwzbslbKsV82bZQmBpjhyH2eyaIo1X2e2b6d","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (27 Jan (12:04:00 PM) Saturday)","userName":"Ksskshsvvvc","userID":"mHsgpWugeNigbT23N","personalAPIToken":"apify_api_PEgx2uK5qZd0YmfpiyIodI9lfIyePL4Efns3","organizationAPIToken":"apify_api_lAt5kCwhIzfbeePjDB3yH9iTl2d9i50RY0ZR"},

 },
 
 //26 jan
 'divanshkumar68@proton.me':{
//"divanshkumar68@proton.meOrg1":{"createdAt":"divanshkumar68@proton.meOrg1 (26 Jan (16:30:00 PM) Friday)","userName":"peppy_steam","userID":"XETDMaxzLTHmGydwK","personalAPIToken":"apify_api_GwETD3sF6MayhHEiL9wngvt7MEiey74kyngk","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (26 Jan (16:30:00 PM) Friday)","userName":"Zmzkjsudgdvs","userID":"R4wYZxnERjHMsvshi","personalAPIToken":"apify_api_1uIj1yOT3PAaUZAzUwK7YAPpHvKkeG2buM0W","organizationAPIToken":"apify_api_cONVNqb5B370gjv6CgzPhwFmzi6c8w1iEEWz"},

 },
 
 'nirmalsighg36@proton.me':{
"nirmalsighg36@proton.meOrg1":{"createdAt":"nirmalsighg36@proton.meOrg1 (26 Jan (12:27:00 PM) Friday)","userName":"oscillating_kingfisher","userID":"eDY5qQ898aPubELQR","personalAPIToken":"apify_api_MPzUgzQKpFvMlHVzr0oSSDvbCg2x1b20gUQM","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (26 Jan (12:27:00 PM) Friday)","userName":"Kzskdjhedgdg","userID":"tCrYzqP82x6SmvXz8","personalAPIToken":"apify_api_gZP7XzkwT4pI1AyHewS9PP6ecLmbgm0KBN5u","organizationAPIToken":"apify_api_m9E4geUEdom6brd480W6fbyiMURgC23djGyJ"},

 },
 
 'satishkumarv57@proton.me':{
//"satishkumarv57@proton.meOrg1":{"createdAt":"satishkumarv57@proton.meOrg1 (26 Jan (20:12:00 PM) Friday)","userName":"peerless_rudder","userID":"A3N3qoAgjupDZjobG","personalAPIToken":"apify_api_VEdnbUQp7z5JyQkvKFEBbWKbFQIxLB3yaBxO","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (26 Jan (20:12:00 PM) Friday)","userName":"Kssojevesh","userID":"hPuvhy5T8GFMedLPk","personalAPIToken":"apify_api_IblohfB9NpHmLZSDIVvAa2KzC4FxWd0QAO3i","organizationAPIToken":"apify_api_eFvjwg5ultJZZkmrNF2cUVGFjDyrwG03RERQ"},

 },
 
 'sureshsingsj5@proton.me':{
"sureshsingsj5@proton.meOrg1":{"createdAt":"sureshsingsj5@proton.meOrg1 (26 Jan (15:00:00 PM) Friday)","userName":"wishful_rank","userID":"gCENsMfwJyZtS7fMv","personalAPIToken":"apify_api_N79dUqWLJM5lWo6cfMbJc3c5F9QDiA2QTipk","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (26 Jan (15:00:00 PM) Friday)","userName":"Ufryetdggj","userID":"brSzzcRrPKug9HebB","personalAPIToken":"apify_api_REeYyfuzAlMpEySLeOLJJLMjto4XVh34EBlW","organizationAPIToken":"apify_api_0b9c87xcsMPnN56a0X3JR3PgZYuooe1wYr66"},

 },
 
 'ivanshkuma64@proton.me':{
"ivanshkuma64@proton.meOrg1":{"createdAt":"ivanshkuma64@proton.meOrg1 (26 Jan (10:26:00 AM) Friday)","userName":"knutty_runner","userID":"Bq9ERpZ6YomyWCkrE","personalAPIToken":"apify_api_VacOqdIkEX6XWgNORrpJcx3Peto9cG4FBba1","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (26 Jan (10:26:00 AM) Friday)","userName":"Lslejebdjsh","userID":"ePtnxZjyCx7qsc2hb","personalAPIToken":"apify_api_uwKHZIGzKBdd8nNczOXxVZHH3t8c3633M79Z","organizationAPIToken":"apify_api_6fVubNYRhf3aoIE8IOELgS9XWhHCfp03h1vW"},

 },
 
 //25 jan
 'pardeepkumu7@proton.me':{
"pardeepkumu7@proton.meOrg1":{"createdAt":"pardeepkumu7@proton.meOrg1 (25 Jan (18:01:00 PM) Thursday)","userName":"coordinated_spinach","userID":"kgwyEmSA9G9BkKr3J","personalAPIToken":"apify_api_8RVwFR6HN3O6XisTyBPR48Uui1lbxC0tArXQ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (18:01:00 PM) Thursday)","userName":"Gdcjkhffgj","userID":"tDAxwy8NABSQmSwWg","personalAPIToken":"apify_api_8XaewLvWsTelHX57pRSzVgXM58OHW33ESNBS","organizationAPIToken":"apify_api_6Ioddon96w6pjiQdcvGp6crafSeCEC4yrsQz"},

 },
 
 'satishkumar225@proton.me':{
//"satishkumar225@proton.meOrg1":{"createdAt":"satishkumar225@proton.meOrg1 (25 Jan (13:49:00 PM) Thursday)","userName":"orchestrated_country","userID":"pgFxmBMTusP257fAs","personalAPIToken":"apify_api_TJg6lOgxHbbEDrhZEaTGml9P4STrLP1JivQ0","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (25 Jan (13:49:00 PM) Thursday)","userName":"Gigdgxkbmb","userID":"DoTWR9tSWComrkY3W","personalAPIToken":"apify_api_kbZKz1cEdxY9NCC4uROUtNRxBLrZbT06IQrO","organizationAPIToken":"apify_api_ZUeH3ltYTU6Hmd29xd83RYs7pp3L8i0siQal"},

 },
 
 'sandeepsingh68@proton.me':{
"sandeepsingh68@proton.meOrg1":{"createdAt":"sandeepsingh68@proton.meOrg1 (25 Jan (21:53:00 PM) Thursday)","userName":"rare_path","userID":"Fj7mX3TiqvgFipCba","personalAPIToken":"apify_api_IhbXyIoRUvCiU7RkUhSGWs1UJSp5cb2M6YN0","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (21:53:00 PM) Thursday)","userName":"Knhgffhjjgvd","userID":"JEiYhuCDvr9Y4rYNr","personalAPIToken":"apify_api_liNcwdf2wPfIhKhK6N3RleG0AtUh4q3TSpFG","organizationAPIToken":"apify_api_w48GMsB7s5131ME0Oc7xI6QZX4CEfh0RwVVk"},

 },
 
 'joginderkum68@proton.me':{
"joginderkum68@proton.meOrg1":{"createdAt":"joginderkum68@proton.meOrg1 (25 Jan (19:29:00 PM) Thursday)","userName":"dandelion_partridge","userID":"7MsXnBn7S8dqKkbCo","personalAPIToken":"apify_api_uGCKvFAsiLCJAH2uNHAd24qR8LdkPr1r64yd","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (19:29:00 PM) Thursday)","userName":"Bkhffssfhfgj","userID":"hmGQeAMGyvtRqidB2","personalAPIToken":"apify_api_igy55qrgw0j11AX6ZQdp4deJYFMrxx4CNLI3","organizationAPIToken":"apify_api_llOu9bQnJvItoU33pQxKO1bZscqN7K2ttGyv"},

 },
 
 'nirmaldeepsin5@proton.me':{
"nirmaldeepsin5@proton.meOrg1":{"createdAt":"nirmaldeepsin5@proton.meOrg1 (25 Jan (16:24:00 PM) Thursday)","userName":"journalistic_guild","userID":"PrYwJEDxC74FtpGmM","personalAPIToken":"apify_api_YFtpMt9pWf9A1avjzWaxSkpF0xMslg2RmjUs","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (16:24:00 PM) Thursday)","userName":"Jgyfsdgjgkh","userID":"2mioq7nFD3uTpkc58","personalAPIToken":"apify_api_X2ZmqbZq3njNRfRINj3CNQ4pjbeVgr0hbSxk","organizationAPIToken":"apify_api_hhsBbVk84eiinSJlnbdfebiYnGgq9F0Q37dn"},

 },
 
 'gagandeepkuh257@proton.me':{
"gagandeepkuh257@proton.meOrg1":{"createdAt":"gagandeepkuh257@proton.meOrg1 (25 Jan (12:44:00 PM) Thursday)","userName":"weightless_taste","userID":"g2QN5tnfYyXCZcpLd","personalAPIToken":"apify_api_x2G58pMyUCG4y7ar05MWTjh3goygNM2Bjl6P","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (12:50:00 PM) Thursday)","userName":"Lkbvffdhjbcc","userID":"YqpottTBKFTxcqosF","personalAPIToken":"apify_api_yndmXp0mZKvtee88eeDfBEXfh0JYr933NSqZ","organizationAPIToken":"apify_api_nbKARBUKrOw5egXVsXzLsRQIoe1ME51akyoE"},

 },
 
 'kartikkumar64@proton.me':{
"kartikkumar64@proton.meOrg1":{"createdAt":"kartikkumar64@proton.meOrg1 (25 Jan (10:46:00 AM) Thursday)","userName":"incandescent_argument","userID":"2YYvF7TFoJmbus7EA","personalAPIToken":"apify_api_I4w36FBbShp2PQwH1lRgP9zFbGK4VI2QDKIx","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (25 Jan (10:46:00 AM) Thursday)","userName":"Kssofodjb","userID":"jebGQsmfeFQKzJLv4","personalAPIToken":"apify_api_E2oZ2BIVk9cQZVuIAIyGXa8LFhAjvC0k7Ruc","organizationAPIToken":"apify_api_TNhojtHcKMPqcBAjPF3ks8iUKeEArM39vYxr"},

 },
 
 //24 jan
 'yuvikyg54@proton.me':{
//"yuvikyg54@proton.meOrg1":{"createdAt":"yuvikyg54@proton.meOrg1 (24 Jan (23:41:00 PM) Wednesday)","userName":"notable_playground","userID":"C6fjLtZummWwkySDQ","personalAPIToken":"apify_api_KhucW7h0LYzV0GOS8RYAdPSJreHvwR42oZ7E","organizationAPIToken":""},
//"Org1":{"createdAt":"Org1 (24 Jan (23:41:00 PM) Wednesday)","userName":"Kbvhuuvcccch","userID":"KqNk7uz5c9xAhWQKD","personalAPIToken":"apify_api_bQY3uopQDZIIChobKcAQgYbIgDGtUe1x7l2Y","organizationAPIToken":"apify_api_vzhR4HZS6Nj3cTcmi8BBteMl01JNl327LDDb"},

 },
 
 'jogindergf58@proton.me':{
"jogindergf58@proton.meOrg1":{"createdAt":"jogindergf58@proton.meOrg1 (24 Jan (19:26:00 PM) Wednesday)","userName":"deliberate_resort","userID":"vcpHLhu4RvSE6gb4H","personalAPIToken":"apify_api_pTQWshxx1YSt1v5VjMIHaUFM0SnzuS3NfrsF","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (19:26:00 PM) Wednesday)","userName":"Ljhsffdjgkhhf","userID":"MpYexefuKK52joTeG","personalAPIToken":"apify_api_1RyIEakWVu3xfedldpqjlEnNhXrk2r277dQc","organizationAPIToken":"apify_api_ajEYEeoe6A0kz5tCotkkOpeRCwS56D1IOxo7"},

 },
 
 'umeshkuma648@proton.me':{
"umeshkuma648@proton.me":{"createdAt":"umeshkuma648@proton.me (24 Jan (15:24:00 PM) Wednesday)","userName":"delectable_fruit","userID":"fZHuwgG7C52wgeScA","personalAPIToken":"apify_api_3hSnqIw5MSIcljoBzjXreb0MZexXTw2Op4cQ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (15:24:00 PM) Wednesday)","userName":"Fgjjyfdzvhhjfx","userID":"C8dEeM35MTK8Ez5MJ","personalAPIToken":"apify_api_02ZsTmhpKxqjQfM1i7f5zZkgyyBWrp40Ao7i","organizationAPIToken":"apify_api_mdqzTImhAt4GvCcqm6tLTgw66KeO180f5QRS"},

 },
 
 'jarnailsh45@proton.me':{
"jarnailsh45@proton.meOrg1":{"createdAt":"jarnailsh45@proton.meOrg1 (24 Jan (13:39:00 PM) Wednesday)","userName":"content_toronto","userID":"JAFn2oDhxc4zN3QbD","personalAPIToken":"apify_api_P6MQoh6GdaGVr93CK8eBy9fM53S5oU1xLL2O","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (13:39:00 PM) Wednesday)","userName":"Mddkfjfhb","userID":"yS9nTiNpcEQKQ5oZF","personalAPIToken":"apify_api_oQR36fLClxEPvDI150sXQeTilBINsF0jP1YM","organizationAPIToken":"apify_api_dRuruwL1muYeJYiVC8V9hoiRma5VxW0Rktto"},

 },
 
 'hardeepku27@proton.me':{
"hardeepku27@proton.meOrg1":{"createdAt":"hardeepku27@proton.meOrg1 (24 Jan (00:10:00 AM) Wednesday)","userName":"rational_jacktree","userID":"cqGhccNAmHbeGBrwi","personalAPIToken":"apify_api_ucDGfAi16YZkHX0JfpBSzfytbtatpf1bHWOx","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (00:10:00 AM) Wednesday)","userName":"Jvydgdjvkb","userID":"rMym5qHA8hiTjjFn2","personalAPIToken":"apify_api_CZ1vITfwxw4at3bwhi0hsL7kRxqrmr3TaxeI","organizationAPIToken":"apify_api_VyzmVhhO9S3kdrXHRFNthI83HBByzb4bwBeu"},

 },
 
 'veerujk574@proton.me':{
"veerujk574@proton.meOrg1":{"createdAt":"veerujk574@proton.meOrg1 (24 Jan (22:15:00 PM) Wednesday)","userName":"keyless_nascent","userID":"hosnf2DL2sqQTN4ie","personalAPIToken":"apify_api_EGJkDbeaaInesiqR38r4iorBz8IJgk0P38It","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (22:15:00 PM) Wednesday)","userName":"Ugfhjvmbkbkh","userID":"K2ZZgGFMhP9bZyc8h","personalAPIToken":"apify_api_NsPY9GO13PehIM1XqMnpzFcd9FRLF22HESDs","organizationAPIToken":"apify_api_VbsmhGHFIMGZZoAbHaOOb2AwYCrarX0EOUtp"},

 },
 
 'jitenderkum48@proton.me':{
"jitenderkum48@proton.meOrg1":{"createdAt":"jitenderkum48@proton.meOrg1 (24 Jan (16:35:00 PM) Wednesday)","userName":"moralistic_alchemy","userID":"ECZ2JY5nebyYYsJJr","personalAPIToken":"apify_api_md03pEnYT2owisCLWTuyARST92rAVh3qBzCV","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (16:35:00 PM) Wednesday)","userName":"Jjgcckibbggj","userID":"4thPmbpHQB5JdDZ7M","personalAPIToken":"apify_api_icG76Fxg7FRg1TyFJQjkrD73Nb0Ei21n37RY","organizationAPIToken":"apify_api_TnR8rbfMaXPZbWrjKRBeEK7sMIhrWv1hKpOt"},

 },
 
 'harmandj693@proton.me':{
"harmandj693@proton.meOrg1":{"createdAt":"harmandj693@proton.meOrg1 (24 Jan (13:52:00 PM) Wednesday)","userName":"dignified_shelter","userID":"iTu9GbjZJ8HgozYot","personalAPIToken":"apify_api_Mnr6xP4RB81GVQ2kZeX9pncPz1V2yr2mIFCu","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (24 Jan (13:52:00 PM) Wednesday)","userName":"Djdidblgg","userID":"kPXJkGHmD5ftCDs8b","personalAPIToken":"apify_api_e0cg79LYpc6aRi7kDFwyGJAIdHuxlg2Kpaku","organizationAPIToken":"apify_api_r6aXKd7kRYXPfeUn8RrZlcaMvyZMWA3fBAZ2"},

 },
 
 // 23 jan
 'gagangfs624@proton.me':{
"gagangfs624@proton.meOrg1":{"createdAt":"gagangfs624@proton.meOrg1 (23 Jan (23:27:00 PM) Tuesday)","userName":"nautical_partial","userID":"9BRCmnMqLZT3KkWDN","personalAPIToken":"apify_api_mYzzFdWZgdSPHVAmggS2G2L5AkIGge4EG64A","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (23:27:00 PM) Tuesday)","userName":"Ugetrwufhiuo","userID":"9aWuYcQHZTCrf8rbN","personalAPIToken":"apify_api_Trxp0FDWdza1gwnKTX8tzQGSAeFbiK3gECd2","organizationAPIToken":"apify_api_ULSb6YXFVDsXacPWzkhtSwFgubSnBL1HzQOC"},

 },
 
 'teetuhf588@proton.me':{
"teetuhf588@proton.meOrg1":{"createdAt":"teetuhf588@proton.meOrg1 (23 Jan (22:13:00 PM) Tuesday)","userName":"constructive_citizen","userID":"qrvGZzBozrbYN3Dof","personalAPIToken":"apify_api_O9fe6L16xFVD1ZCJKXgR33WW1X7jB02RntnP","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (22:13:00 PM) Tuesday)","userName":"Hgtchkjbbbc","userID":"td2FzsQWwCfSmYRfz","personalAPIToken":"apify_api_g5stAJGEEXmUHurtSO2iCcwgVfzIe33nzOha","organizationAPIToken":"apify_api_xKHoE4XeHwypF2XA89osSlmicfRn4s3sOVw7"},

 },
 
 'sattuhf58@proton.me':{
"sattuhf58@proton.me":{"createdAt":"sattuhf58@proton.me (23 Jan (18:08:00 PM) Tuesday)","userName":"fathomable_resin","userID":"dAHSob4Bn9s673n2q","personalAPIToken":"apify_api_Iz2bgIb4ELBVTVl0LaXub2ZGw3jAwn22MvNd","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (18:08:00 PM) Tuesday)","userName":"Jdordbbhfioj","userID":"QzeTzGHi22jHMxE9y","personalAPIToken":"apify_api_8wo2b60Ac3A4qT5czbfhfJq6Le4wd30mVH5Q","organizationAPIToken":"apify_api_n8c2ZxjxOChnfJ2a7wjQhfgUq37toM48UjaP"},

 },
 
 'sandeepv57@proton.me':{
"sandeepv57@proton.meOrg1":{"createdAt":"sandeepv57@proton.meOrg1 (23 Jan (17:04:00 PM) Tuesday)","userName":"magnolia_skull","userID":"GLLFPJDoHPtkve2mw","personalAPIToken":"apify_api_hve5S7EgsCijxEiwoFaabbtGE4NpqC4hCs3V","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (17:04:00 PM) Tuesday)","userName":"Hgkgyojguv","userID":"HyN9CWcdkYHjz4Bf5","personalAPIToken":"apify_api_jynZNAOmxHgF3KfzKLog120btR5CE54iPr2T","organizationAPIToken":"apify_api_hHpY3lPzaeS9bqwWdxQNfvSQBdQPu51N1DEm"},

 },
 
 'kartikhf58@proton.me':{
"kartikhf58@proton.meqOrg1":{"createdAt":"kartikhf58@proton.meqOrg1 (23 Jan (16:18:00 PM) Tuesday)","userName":"busy_cloud","userID":"H2NEoHjofBmKCcC3c","personalAPIToken":"apify_api_phMrlgMwDeAqeK5hF83cSCRy3TCxLc30LRFB","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (16:18:00 PM) Tuesday)","userName":"Gihdcjmmlb","userID":"iJ295ZpmhzvkixFJa","personalAPIToken":"apify_api_gMsSAdTLvp2FKmgZ1mTlND51X4brF148dYUi","organizationAPIToken":"apify_api_N322E4lavVM8ceLYA25ymPmKpq8HNz0AXFmm"},

 },
 
 'jagdishhv58@proton.me':{
"jagdishhv58@proton.meOrg1":{"createdAt":"jagdishhv58@proton.meOrg1 (23 Jan (15:34:00 PM) Tuesday)","userName":"emblematic_cash","userID":"SqLuMDH4zB5Q4Z66d","personalAPIToken":"apify_api_A6rwkE1snv0yYvsK4TTmdlcZWb2st01woiYP","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (15:34:00 PM) Tuesday)","userName":"Gurhfyhfvi","userID":"9SDwaAFb4KmHWa2hW","personalAPIToken":"apify_api_xx77y9buwvenjyp1mbiGxdX3hxfzwQ0DlTxO","organizationAPIToken":"apify_api_j7pcihZdBaV3zSjcH7060NfmaPlsGN4DlHD2"},

 },
 
 'umeshsm64@proton.me':{
"umeshsm64@proton.meOrg1":{"createdAt":"umeshsm64@proton.meOrg1 (23 Jan (14:11:00 PM) Tuesday)","userName":"nutrient_fig","userID":"WWhsjoGNunbrQ6peC","personalAPIToken":"apify_api_mecqfoDcediPDj3TfCc2axtKeYLdxc3uz1fe","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (14:11:00 PM) Tuesday)","userName":"Sksjsbxbdi","userID":"hGkPuuiXwr5mzGkbS","personalAPIToken":"apify_api_rgBGREGMEd9aTH8YsfqpJD7ohyEKFq3UdBK7","organizationAPIToken":"apify_api_rENkHixbgY4QutHHhcGcdydP0bUkBM00ZjbF"},

 },
 
 'ceepishe493@proton.me':{
"ceepishe493@proton.meOrg1":{"createdAt":"ceepishe493@proton.meOrg1 (23 Jan (21:40:00 PM) Tuesday)","userName":"meticulous_winch","userID":"Atb8Z8EjeKbQLb7tf","personalAPIToken":"apify_api_iSW3v6pAspfsLKCqfVFG9ZsRxFFHfd3aJ1rd","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (21:40:00 PM) Tuesday)","userName":"Kdoxjdbd","userID":"J2etNRL9fKQuDh9HD","personalAPIToken":"apify_api_jRuCDUBB2SEE7EohdqSrOFXHk5d2l53tZMwK","organizationAPIToken":"apify_api_4lXeqVsrPQcHhsN6FMAMCDBb0nqH2c04EL8l"},

 },
 
 
 'pardeepj5862@proton.me':{
"pardeepj5862@proton.meOrg1":{"createdAt":"pardeepj5862@proton.meOrg1 (23 Jan (18:05:00 PM) Tuesday)","userName":"tan_key","userID":"6Sx2ofqn9mE9ueGJ9","personalAPIToken":"apify_api_qmkrU880UhVI6hifYtHRYAJXehrZ3T0pSHYg","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (18:05:00 PM) Tuesday)","userName":"Sksksjbeb","userID":"uFJQjrqkpsSr8wsP9","personalAPIToken":"apify_api_2T2rJgrWkpKEUvugDjYeR6vilGGmfT3pbXDe","organizationAPIToken":"apify_api_aI83hO46Gbtxaew7RhwzWLP5dPbLxJ4aK80q"},

 },
 
 'sureshhv582@proton.me':{
"sureshhv582@proton.meOrg1":{"createdAt":"sureshhv582@proton.meOrg1 (23 Jan (17:09:00 PM) Tuesday)","userName":"athletic_butternut","userID":"vn74v3X9QW88xoEjc","personalAPIToken":"apify_api_Xx4L8wPH9Ku9clbToeMN4z6r6XAjx51gRE32","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (17:09:00 PM) Tuesday)","userName":"Ohkxhxkhhg","userID":"8Tf58YgLrBBLMSeBZ","personalAPIToken":"apify_api_fPLLS2RYEy3IgPZoFePUmJbCDRwbVq3myHm1","organizationAPIToken":"apify_api_UdvvaLsSzLNOlSohCwkp7BmdmLpRdB4iQKq8"},

 },
 
 'jeetuhd58@proton.me':{
"jeetuhd58@proton.meOrg1":{"createdAt":"jeetuhd58@proton.meOrg1 (23 Jan (16:09:00 PM) Tuesday)","userName":"snazzy_kitchen","userID":"TzcjWwk4bkSPbejLS","personalAPIToken":"apify_api_Agdi4Q1F5dsUArVwrVcBZbHkrpk1kT0Shcjs","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (16:09:00 PM) Tuesday)","userName":"Uggdhdfhkh","userID":"aoZYqtzAKPNsj6Bz7","personalAPIToken":"apify_api_cxnqjpEskT5VImtU5ae93qTd4iiMDo1bwLnK","organizationAPIToken":"apify_api_TLKIu6248vfx4SxN6ek0hqAoYOravq4CYTUA"},

 },
 
 'harmanh57@proton.me':{
"harmanh57@proton.meOrg1":{"createdAt":"harmanh57@proton.meOrg1 (23 Jan (15:00:00 PM) Tuesday)","userName":"spry_laser","userID":"X8Y9PaZmfKtE6tvMW","personalAPIToken":"apify_api_QnD7gyXrCb24oenyBZAgFg4Oy5bAcw0fviqB","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (15:00:00 PM) Tuesday)","userName":"Ugyfdyhdhf","userID":"9CXMTScNxFmv9Pqdf","personalAPIToken":"apify_api_oZDDgidyaJLlbjL3lCGWDuWkx3m7kk3PKlcA","organizationAPIToken":"apify_api_5aIPEyZdtIbScfexHMZkBefKodxhcb4xCweO"},

 },
 
 'rakeshsj6@proton.me':{
"rakeshsj6@proton.meOrg1":{"createdAt":"rakeshsj6@proton.meOrg1 (23 Jan (14:08:00 PM) Tuesday)","userName":"jaunty_linnet","userID":"imz2f9j9XSMbi7oTA","personalAPIToken":"apify_api_A26qmc1DViXpe4OcBjoMtYjbsornkp43ZQ9Q","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (14:08:00 PM) Tuesday)","userName":"Cvgtdghh","userID":"aG8sqdJtAXRDvBTJY","personalAPIToken":"apify_api_MEcAMfMSNdJz0U5T6fDXGQyAcUJbcg2wV3Iq","organizationAPIToken":"apify_api_4olIMZnXpkiPSNEIAmvklSZQVZ5KcZ1aezTS"},

 },
 
 'riteshku58@proton.me':{
"riteshku58@proton.meOrg1":{"createdAt":"riteshku58@proton.meOrg1 (23 Jan (12:14:00 PM) Tuesday)","userName":"scenic_ivy","userID":"9uN6mtHuRibaQY7cL","personalAPIToken":"apify_api_tKq4EXyErTcI5ao3c2vNBkbRlUyPgj2k7cEM","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (23 Jan (12:14:00 PM) Tuesday)","userName":"Khfhgdhckh","userID":"JqdidW9QPZNbRxbES","personalAPIToken":"apify_api_TImR1WNodnD4t4Z1PIdIElZdi25Jfq1BiE67","organizationAPIToken":"apify_api_TD3IuYEVChNYK8jWSg3yuw4CAFjvF53WnAqc"},

 },
 
 //22 jan
 'manojhv58@proton.me':{
"manojhv58@proton.meOrg1":{"createdAt":"manojhv58@proton.meOrg1 (22 Jan (23:27:00 PM) Monday)","userName":"clairvoyant_zittern","userID":"yQP9Hqwu7cqDj3NgP","personalAPIToken":"apify_api_tLdfuajTkm2kRFBp7htRnKEzKlRgjK2o8UaC","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (23:27:00 PM) Monday)","userName":"Jggdgdvjkb","userID":"T7S925uuqkEkwCnQ7","personalAPIToken":"apify_api_xayeGEDz4KSEsPfFEETjJ17nZLpUdd2THYFf","organizationAPIToken":"apify_api_mjoY4x04vzkq0qTqTU8rv0X1Ezbryt0M5zL5"},

 },
 
 'divanshs64@proton.me':{
"divanshs64@proton.meOrg1":{"createdAt":"divanshs64@proton.meOrg1 (22 Jan (22:31:00 PM) Monday)","userName":"individual_quantum","userID":"kzFwmAikTZJXrLDAQ","personalAPIToken":"apify_api_HEmXRHba3kj7RChXuI3E637p6d07Bm2ePHA7","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (22:31:00 PM) Monday)","userName":"Jvrsdsgchk","userID":"NNM9CDqFnNbkArEtF","personalAPIToken":"apify_api_Z4k110DeGQHkjLtLEMfuStp3cDzSBc0wPzAA","organizationAPIToken":"apify_api_fkHyhpU1wVUMJOLTENDchaPoTR7WI81LUL1o"},

 },
 
 'inderjf58@proton.me':{
"inderjf58@proton.meOrg1":{"createdAt":"inderjf58@proton.meOrg1 (22 Jan (23:23:00 PM) Monday)","userName":"laudable_xerosere","userID":"pueRKWAkqpiMYXnPj","personalAPIToken":"apify_api_1hLR8Z0C3QsjgrvhqmU9UnafHCdYml0HKD3M","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (23:23:00 PM) Monday)","userName":"Futsfujvklu","userID":"bbbh4soe7WWk7uZPZ","personalAPIToken":"apify_api_MgiyUDKes9cwbMlFeO5hzdiI9uqBnp3kFEHh","organizationAPIToken":"apify_api_u241leKhGi1qMrNriUuCvycrQlioTN2NXAVw"},

 },
 
 'jagdeepb58@proton.me':{
"jagdeepb58@proton.meOrg1":{"createdAt":"jagdeepb58@proton.meOrg1 (22 Jan (22:29:00 PM) Monday)","userName":"assuring_cottage","userID":"6SRCpEsSrCeW55fPN","personalAPIToken":"apify_api_grsmGkJYS2UKmz2duD45MwvrIC0O5x1EGCR0","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (22:29:00 PM) Monday)","userName":"Fhfjkhlhppjo","userID":"KTZXq2BePn23MSSb9","personalAPIToken":"apify_api_J8QZXFWWqK33nXdjRnMDQkbroiq5wN2JGeCY","organizationAPIToken":"apify_api_chnDirkHJ6DLS9qR0w9X4ACab0jPAB2OfUbo"},

 },
 
 
 //Org1 (22 Jan (21:19:00 PM) Monday)
 'hardeepsj81@proton.me':{
"hardeepsj81@proton.meOrg1":{"createdAt":"hardeepsj81@proton.meOrg1 (22 Jan (21:19:00 PM) Monday)","userName":"economical_laureate","userID":"vui9Sniwsh6uQpMxb","personalAPIToken":"apify_api_YTU5JuYv5QDSv0mFx0P5mR5pUOge650KFpJZ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (21:19:00 PM) Monday)","userName":"Ugtdgcjbkj","userID":"R5hWudsQeTQ3QcHa3","personalAPIToken":"apify_api_Re1DocaLlfQogjLvELosEvg1jfdnFD1qWi8K","organizationAPIToken":"apify_api_P9oThEu2IMEgb1khRJuuTXzLFbyS651vhvsK"},

 },
 
 'harbhajanj55@proton.me':{
"harbhajanj55@proton.meOrg1":{"createdAt":"harbhajanj55@proton.meOrg1 (22 Jan (19:51:00 PM) Monday)","userName":"fortunate_stem","userID":"fe4wn4aEN3mjbQLi5","personalAPIToken":"apify_api_aWmIngBoE9AOIHiUSxweoDnnIouOew4qDsSg","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (19:51:00 PM) Monday)","userName":"Jedkdkdneb","userID":"yMeFsoLnKy5Xdy6Dk","personalAPIToken":"apify_api_ktC55HWBPfMPjOelos179zfnkhOsrw3BSM9m","organizationAPIToken":"apify_api_g6Eg7bML2MaNPGs8nnnHLtW9TYzm4m0wnGNW"},

 },
 
 'pardeepad47@proton.me':{
"pardeepad47@proton.meOrg1":{"createdAt":"pardeepad47@proton.meOrg1 (22 Jan (18:31:00 PM) Monday)","userName":"luxurious_kettle","userID":"RaWepKuqqvHiLJDbp","personalAPIToken":"apify_api_WxCROMbkTEiHhH9bTGEhaT1mkdxTAj2SjrzC","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (18:31:00 PM) Monday)","userName":"Rnkddidnrb","userID":"WjkQxbuB4kM8sDouv","personalAPIToken":"apify_api_UuiqqodznoZNTDyPHUOsCpp8lcE9c038imow","organizationAPIToken":"apify_api_hbZu0vptLzLxvz0KmjagXvvWnNLLPy0KqQgl"},

 },
 
 'tarsemsh51@proton.me':{
"tarsemsh51@proton.meOrg1":{"createdAt":"tarsemsh51@proton.meOrg1 (22 Jan (15:28:00 PM) Monday)","userName":"intrepid_harmonica","userID":"TNmxz4wq5zcoxmrwN","personalAPIToken":"apify_api_MoyhsDJyLGPGWGFXBSkBaARrRoqCDP3CJksK","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (15:28:00 PM) Monday)","userName":"Khufhcfih","userID":"jBsW6pRkshMhY5oe7","personalAPIToken":"apify_api_lKNhim3m2UjBdSfvtvK5fdL1JxE1GH0OkQPi","organizationAPIToken":"apify_api_V30hgY4LFBYEKZmc9nWJnxCdRJCFIB0VTbxE"},

 },
 
 'karankum84@proton.me':{
"karankum84@proton.meOrg1":{"createdAt":"karankum84@proton.meOrg1 (22 Jan (13:20:00 PM) Monday)","userName":"comfy_vine","userID":"ZtZbzNAFBFpNYmpHd","personalAPIToken":"apify_api_4htA68iHMeSlrcUYxZLaDktPwnadqV44aWDy","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (13:20:00 PM) Monday)","userName":"Shdhgdduwh","userID":"KZ439E3xFXsfduyiX","personalAPIToken":"apify_api_ufDC73SB03SemGuVogNDDbYwVQLC4V293A1J","organizationAPIToken":"apify_api_pefeBQfCIyuqWLWUKLS9lKCu1hwa0H12bau6"},

 },
 
 'jarnailcj88@proton.me':{
"jarnailcj88@proton.me":{"createdAt":"jarnailcj88@proton.me (22 Jan (12:43:00 PM) Monday)","userName":"garnet_projector","userID":"RXaPecvRJCrFGuaW6","personalAPIToken":"apify_api_tbkFq4dUafROC5N10zS5xb24NHUrik1EsdCp","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (12:43:00 PM) Monday)","userName":"Ndnddndjdn","userID":"SxpaKaxe7aBWnkyxM","personalAPIToken":"apify_api_aoSi9yKVIgygjcXCjJOgBtlISkmU324m5gIY","organizationAPIToken":"apify_api_XDYkdyfruEhbhQKuVNdFxJUNJWTFir3NH8VI"},

 },
 
 'harmanjg5@proton.me':{
"harmanjg5@proton.meOrg1":{"createdAt":"harmanjg5@proton.meOrg1 (22 Jan (09:58:00 AM) Monday)","userName":"arresting_karst","userID":"EzFk5aFcaowX2fyke","personalAPIToken":"apify_api_btmHcaY9Fo3Awim8VdTcFE1YRofxmP005GVQ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (09:58:00 AM) Monday)","userName":"Nvhcgxjkgkg","userID":"Stscps7DaAgMpyJHq","personalAPIToken":"apify_api_5mvFPplgH2tlR5YqQiEqNsbw84E5643Dhwun","organizationAPIToken":"apify_api_fh8If7CgQyiCjX3lgtrH1WLIBpB4l93L89x2"},

 },
 
 'kamaldeeph84@proton.me':{
"kamaldeeph84@proton.meOrg1":{"createdAt":"kamaldeeph84@proton.meOrg1 (22 Jan (21:18:00 PM) Monday)","userName":"urban_fig","userID":"84FRS8agoeJM92Jzb","personalAPIToken":"apify_api_yNrJpZahHheiwTbyiIa6jrpyWIeTQh1o2OrF","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (21:18:00 PM) Monday)","userName":"Djdhfjfbrvebk","userID":"pg2rAWBHs3hXYnHv9","personalAPIToken":"apify_api_b6D9JIIM8y6QtNZkbFFMj7LXtUw7oq10qpry","organizationAPIToken":"apify_api_T7BZYOw7YlPi7tjAhBZH1IDz83IBOS1Yx2yS"},

 },
 
 'lovelysb58@proton.me':{
"lovelysb58@proton.meOrg1":{"createdAt":"lovelysb58@proton.meOrg1 (22 Jan (19:48:00 PM) Monday)","userName":"vehement_astragalus","userID":"T9QF73Zcbo8qJkDRd","personalAPIToken":"apify_api_LhgHHJNRKiK4Lqjq2aMOrV6Fzultam0ruAEk","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (19:48:00 PM) Monday)","userName":"Jdhddhehsvk","userID":"svB3CvXt5L8hgMDjs","personalAPIToken":"apify_api_mPjemhHmEYIi9Af2esg1DxXQy8eLQf2nT5fv","organizationAPIToken":"apify_api_qXvyxJ2nltw1p8YQ5nbukOBaHVItel3HWUro"},

 },
 
 'yadavkumc5@proton.me':{
"yadavkumc5@proton.meOrg1":{"createdAt":"yadavkumc5@proton.meOrg1 (22 Jan (18:30:00 PM) Monday)","userName":"ossified_ring","userID":"vh7FQRiTRZ9LpabFk","personalAPIToken":"apify_api_RD3OYaJfOCI0UjJp1ZUTWveehxMp8U3VB7QE","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (18:30:00 PM) Monday)","userName":"Fcbkugvnkh","userID":"E5yF6TpnmdodeDyyb","personalAPIToken":"apify_api_GlgfF6dksQJtGuXbCJuhZ2YyaVGQ8Y4miufQ","organizationAPIToken":"apify_api_ekhPrYJCTaXAUBgcegDHDjXUmV4jWR48evoh"},

 },
 
 'jaskarnhs8@proton.me':{
"jaskarnhs8@proton.meOrg1":{"createdAt":"jaskarnhs8@proton.meOrg1 (22 Jan (15:29:00 PM) Monday)","userName":"opal_technician","userID":"o2c6c7MkqSG9dCd4W","personalAPIToken":"apify_api_JS6gVFXFSIFnT0A7hzEvObx1TDNKfP08mFiM","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (15:29:00 PM) Monday)","userName":"Ihughchccb","userID":"J38f7WF3HsyLo6YKe","personalAPIToken":"apify_api_0AQ9SGgHFO46DJe3Z9ckue6dY3tJ9K2HxBFO","organizationAPIToken":"apify_api_EBtRpJEoGcsOPZKIpCFTaWfTi7pF8i0xJLpY"},

 },
 
 'rajanku68@proton.me':{
"rajanku68@proton.meOrg1":{"createdAt":"rajanku68@proton.meOrg1 (22 Jan (13:41:00 PM) Monday)","userName":"satisfactory_robot","userID":"dDNTspK3Yf2swNYT7","personalAPIToken":"apify_api_KBAJV8nKv93sBQlG75BpnXDceVw4Kd3uuQvJ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (13:41:00 PM) Monday)","userName":"Dhbsjskbsmd","userID":"XYnuC246Ysz8w8fGe","personalAPIToken":"apify_api_ou5STNtvy6CCbyfLdWjOQfVIIfKWWW21S4pH","organizationAPIToken":"apify_api_q3RlN7iHhH2UqqDssH9HZtJVmMz6nP3s0G7x"},

 },
 
 'gagandeepan8@proton.me':{
"gagandeepan8@proton.meOrg1":{"createdAt":"gagandeepan8@proton.meOrg1 (22 Jan (11:42:00 AM) Monday)","userName":"polite_ecology","userID":"TuG2Sdx3rAZh5kQnt","personalAPIToken":"apify_api_jZIdeK08SLcU7AoP213oJb2Sq6scAn3uuACj","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (11:42:00 AM) Monday)","userName":"Fxgjhffxz","userID":"vbqZCfkx7xe22Ejyc","personalAPIToken":"apify_api_ixx4goSvFr0lt6VHZM5Td3r7W4bNVz3kG4XQ","organizationAPIToken":"apify_api_X2qccSAZs0208Y9diZG0UCJLUztF0x05rlHZ"},

 },
 
 'kartikvf68@proton.me':{
"kartikvf68@proton.meOrg1":{"createdAt":"kartikvf68@proton.meOrg1 (22 Jan (09:58:00 AM) Monday)","userName":"accomplished_hydrogen","userID":"2LmeqraiZf3dqmuf9","personalAPIToken":"apify_api_ka5rfT13QHBPfEi2ZRrf6eCPQJY6zM07RVOW","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (09:58:00 AM) Monday)","userName":"Fjfhfgjkgvj","userID":"ctKXb8kuuphs8SczS","personalAPIToken":"apify_api_YAg1BLRmFhmLuplwwbR7gc6Hcpe1gV2lM9ot","organizationAPIToken":"apify_api_gVI9JlhnYViR0sMJ0R4sgm43iwKHyk1QyXYM"},

 },
 
 'parteeksh98@proton.me':{
"parteeksh98@proton.meOrg1":{"createdAt":"parteeksh98@proton.meOrg1 (22 Jan (09:04:00 AM) Monday)","userName":"superior_rhinoceros","userID":"DPyvAr7PCoQa3c5Hk","personalAPIToken":"apify_api_QMRaUPcUJgiH4FwHd335nXTd8MQnl400a9ex","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (22 Jan (09:04:00 AM) Monday)","userName":"Jddlgkfbsb","userID":"g5opLp4nTnRHpDzKC","personalAPIToken":"apify_api_y2ksVACCIRf6YbeV0aVhCyTVNRPS2B0qEyyv","organizationAPIToken":"apify_api_ZOvMazk9BRm65ddzNrt0XlM57t15VS4DK3eP"},

 },
 
 
 //Org1 (21 Jan (22:33:00 PM) Sunday)

//checked below all works

 'komalpreetsj5@proton.me':{
"komalpreetsj5@proton.meOrg1":{"createdAt":"komalpreetsj5@proton.meOrg1 (21 Jan (16:52:00 PM) Sunday)","userName":"quoin_xylophonist","userID":"dWKNTR8n2CcRkf8d8","personalAPIToken":"apify_api_IdCexfmfe5YM4pY4xNxN1hTa4Rgngq0ZHgKh","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (16:52:00 PM) Sunday)","userName":"Fbdjfjkffj","userID":"BJzFmos3jSADmLNmD","personalAPIToken":"apify_api_CB8QnA8oE01M2DemUOAVjd8Wqr1CQA1K1aAH","organizationAPIToken":"apify_api_OYqT8BJdSHKkeWrAO05xI6JSnNUovK0tRqjV"},

 },
  
 'rakeshkum994@proton.me':{
"rakeshkum994@proton.meOrg1":{"createdAt":"rakeshkum994@proton.meOrg1 (21 Jan (15:47:00 PM) Sunday)","userName":"relaxed_quill","userID":"zG6iwxvghSAeeFuPi","personalAPIToken":"apify_api_0iMS1aFxTtT2Gn6MhFc75ia1LQZ1OB0HbHwm","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (15:47:00 PM) Sunday)","userName":"Hdfdfhhyfd","userID":"kn5HWyNc62Ki7w6ay","personalAPIToken":"apify_api_iAwmt2XE8YCmj4N3j6ojTkszZ2540f3tefET","organizationAPIToken":"apify_api_nbPjSevRS4BxkX7i59EVpxcws2BJdv37KqhU"},

 },
 
 'gurmanhv57@proton.me':{
"gurmanhv57@proton.meOrg1":{"createdAt":"gurmanhv57@proton.meOrg1 (21 Jan (14:54:00 PM) Sunday)","userName":"satisfactory_yardstick","userID":"aeoefazuBjY3fuoJM","personalAPIToken":"apify_api_7FJDGCVM28P6WvvgSaWJFS1zbLy5it1PlLrT","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (14:54:00 PM) Sunday)","userName":"Ohtdfzhvkb","userID":"CnMbaAEf2gzQ3DZeF","personalAPIToken":"apify_api_9c5aYxXU61mY5nTCHsZjnYCPKaqOPl37m4lW","organizationAPIToken":"apify_api_NHI8Dw8e5sft6mZEHFuP6Ak3bYzA024xKgMV"},

 },
 
 'nirmalhb68@proton.me':{
"nirmalhb68@proton.meOrg1":{"createdAt":"nirmalhb68@proton.meOrg1 (21 Jan (13:54:00 PM) Sunday)","userName":"consoling_legume","userID":"zdxuXa9REnGNy9jHX","personalAPIToken":"apify_api_KtDA2fLlZmJoJu8zzT4ys0tnu1tYte4kkSFk","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (13:54:00 PM) Sunday)","userName":"Dkdjddjdhdh","userID":"sneYGiz23XtYqMdv9","personalAPIToken":"apify_api_BX6yFhcf8mTDqPMWVdSYjYvomPPLAR3UnKSI","organizationAPIToken":"apify_api_2sVzGIj8hy6Talv0ctmWmkUlss2VUM0k8Wxn"},

 },
 
 'gagandeepj6@proton.me':{
"gagandeepj6@proton.meOrg1":{"createdAt":"gagandeepj6@proton.meOrg1 (21 Jan (23:43:00 PM) Sunday)","userName":"sensible_metric","userID":"eRxJtLPXdcG77RoM5","personalAPIToken":"apify_api_YrbjjfLtmNcsWQ0FB2Psk86CPC8Xek2bYzab","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (23:43:00 PM) Sunday)","userName":"Igfydtoglj","userID":"Z8ve9dBjbh4jKLMFJ","personalAPIToken":"apify_api_1FBwgTAUNtWYEVkplVC0Kt4F0HGKLn2UoKT3","organizationAPIToken":"apify_api_OcaGqlWgZV8awSFtAJpVO7TQkwXXAo2VcxKA"},

 },
 
 'joginderh58@proton.me':{
"joginderh58@proton.meOrg1":{"createdAt":"joginderh58@proton.meOrg1 (21 Jan (22:39:00 PM) Sunday)","userName":"nonstop_marathon","userID":"XaBd9DG8N5KWedEFf","personalAPIToken":"apify_api_BtnkfmMoD8RtOCkxujtgX9kp7UgCFl2e173Z","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (22:39:00 PM) Sunday)","userName":"Fjgddggui","userID":"8nQsoZGurT6s5TzQL","personalAPIToken":"apify_api_TbgnchrEoPyn0zmmK3svHusEfcDhHz2gx7x7","organizationAPIToken":"apify_api_LW29icwfHf5EuhyQRpTywCXywCE8PR0n57gG"},

 },
 
 'varindergs478@proton.me':{
"varindergs478@proton.meOrg1":{"createdAt":"varindergs478@proton.meOrg1 (21 Jan (16:16:00 PM) Sunday)","userName":"productive_perch","userID":"mEDWEPFf8cSBACBaH","personalAPIToken":"apify_api_GWjlEfIvA8FE3SjEVGGQKuET9eMkOF25Pc8M","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (16:16:00 PM) Sunday)","userName":"Dhfhfoogfndb","userID":"RaQYWvktvoTLjiS3S","personalAPIToken":"apify_api_cDWB7pluzX1r86E5e3yKugvaUtl42O3QEQnk","organizationAPIToken":"apify_api_jVPHixlrh0PYvp6hXt7efJfjGlM2zy4kmEY0"},

 },
 
 'jagdishbv68@proton.me':{
"jagdishbv68@proton.meOrg1":{"createdAt":"jagdishbv68@proton.meOrg1 (21 Jan (14:48:00 PM) Sunday)","userName":"upstanding_temperature","userID":"oT678XLZRvxqv4o54","personalAPIToken":"apify_api_lXBSZ6UfLnvnn8OP3vGJ2nK8OZAtqs2QOnAF","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (14:48:00 PM) Sunday)","userName":"Idtsrgvhmk","userID":"qsRquwYxCnHdTJKcq","personalAPIToken":"apify_api_zxw3oDdyvzPGjSbSh7FPhfKphVkH3D20pJCZ","organizationAPIToken":"apify_api_dexUM5rb1PntkTPx8cO4TODoa5Scgf3XU2xK"},

 },
 
 'gurmansg68@proton.me':{
"gurmansg68@proton.meOrg1":{"createdAt":"gurmansg68@proton.meOrg1 (21 Jan (13:58:00 PM) Sunday)","userName":"deliberate_repo","userID":"zZimZjJ9fhnN7DD29","personalAPIToken":"apify_api_fwfAyu675gp1inIZkPVW6hiEtX6tqt2JqhTa","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (13:58:00 PM) Sunday)","userName":"Jvsfrsfhjv","userID":"AnqwShwAXzp5wmASW","personalAPIToken":"apify_api_LxRhp32DmhKTRaZU6N4lCjOmUL1JO31JYdWU","organizationAPIToken":"apify_api_Blmn5FBHzUU9ruWLfQ5Be2w3gWor9K10bk0P"},

 },
 
 'sandeepb58@proton.me':{
"sandeepb58@proton.meOrg1":{"createdAt":"sandeepb58@proton.meOrg1 (21 Jan (12:38:00 PM) Sunday)","userName":"rhymed_quickstep","userID":"5ocyzcYTv9ZnXwKTc","personalAPIToken":"apify_api_CLLaxNuSKPEa9BptcPCkCWjCUufvED1Gvlrk","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (12:38:00 PM) Sunday)","userName":"Jgtsgxjvkb","userID":"kYnaQQD8SaGfh27Ra","personalAPIToken":"apify_api_RDlfxqbddn9LR3yovHatrztfbdvQj73j0Guh","organizationAPIToken":"apify_api_FcERlph8LAk6j5ICfccd6t5pnW1HAW4CBBud"},

 },
 
 'hardeepsj49@proton.me':{
"hardeepsj49@proton.meOrg1":{"createdAt":"hardeepsj49@proton.meOrg1 (21 Jan (11:33:00 AM) Sunday)","userName":"tuneful_golf","userID":"sduXv5XY8e2EBSGQQ","personalAPIToken":"apify_api_dJjq2EdtscFPGQhn3C5OQaSXzrBOL11tAz5r","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (11:33:00 AM) Sunday)","userName":"Kgryatgxjc","userID":"ueJxjSeM6euP4uYRJ","personalAPIToken":"apify_api_EV28LFfo375ddFh64b2jcx6fOombeK4zujXP","organizationAPIToken":"apify_api_4ui7ZT13NJqb8JHtmhqAbYgJMgzUPg3IPGjn"},

 },

 'inderjeets43@proton.me':{
"inderjeets43@proton.meOrg1":{"createdAt":"inderjeets43@proton.meOrg1 (21 Jan (10:16:00 AM) Sunday)","userName":"jingling_cinema","userID":"ScbWMvHEGN3zkXuit","personalAPIToken":"apify_api_R43sT1Z9mvj7QXtA5BamC5wQ51xOLf1ZHZuX","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (10:16:00 AM) Sunday)","userName":"Gfkhgdjvkhx","userID":"Yb7trDN3fLqbfFGqp","personalAPIToken":"apify_api_SYDKFHEODqZsxj1qn779fWg2lehhq62U4ILg","organizationAPIToken":"apify_api_wOCj8AgpvJu4GMYfs84T8ATBPRT0dQ0XcrnD"},

 },
 
 'hardeeps47@proton.me':{
"hardeeps47@proton.meOrg1":{"createdAt":"hardeeps47@proton.meOrg1 (21 Jan (12:39:00 PM) Sunday)","userName":"friendly_xeric","userID":"DuJX2wRXW452TM3Nv","personalAPIToken":"apify_api_pvlMPTFAILlkNWTjnkNpkSqdspzIps34bSv6","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (12:39:00 PM) Sunday)","userName":"Bkyftdgxjv","userID":"XWcqnRRq2qxh87NLs","personalAPIToken":"apify_api_K8YgUuOtA41kjnYhHN9fuktxyDZzdz0e8L1g","organizationAPIToken":"apify_api_Qa569OgDi3bqmc33E3l1PKc5zLri2n1vsVwD"},

 },
 
 'parkashs54@proton.me':{
"parkashs54@proton.meOrg1":{"createdAt":"parkashs54@proton.meOrg1 (21 Jan (11:25:00 AM) Sunday)","userName":"unified_excellence","userID":"fXKuqGWBriXxHuEG4","personalAPIToken":"apify_api_CHphvl0dO3Bag8iHpGfx5HbzTTgiM30AEOc2","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (11:25:00 AM) Sunday)","userName":"Sjbdhddudb","userID":"Ci7fzkj8Q5ncvuCn3","personalAPIToken":"apify_api_FWN1FNdS55PnI0kW56HjwqmYroRceb3ylxDB","organizationAPIToken":"apify_api_2gE1j7Y6rcxVN8B9tCxu9cbd9cc1lh0Clpsv"},

 },
 
 'rajindersj98@proton.me':{
"rajindersj98@proton.meOrg1":{"createdAt":"rajindersj98@proton.meOrg1 (21 Jan (10:18:00 AM) Sunday)","userName":"knurled_ghatam","userID":"HN4vnDmu65xb2Dp4P","personalAPIToken":"apify_api_ffsQRU3xtcO8gamtIq951J8GI31hex2a3M4P","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (21 Jan (10:18:00 AM) Sunday)","userName":"Djdkfjfndbeb","userID":"6qiAKB4J6ojFZbphw","personalAPIToken":"apify_api_AOswpZmX57RghDurA3YfuJGC7az8Vu0Tm6DP","organizationAPIToken":"apify_api_hq4q4pawQNTuUSp6RNDZv9PJUBjRkX3NkSGI"},

 },
 
 
 
 

 'sagarjh68@proton.me':{
"sagarjh68@proton.meOrg1":{"createdAt":"sagarjh68@proton.meOrg1 (20 Jan (23:46:00 PM) Saturday)","userName":"quantum_canvas","userID":"6BK6DSzFujyMCo9sd","personalAPIToken":"apify_api_BWMDw4v3XQn4mBYY39oA0sGrjStffw0CpsRP","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (23:46:00 PM) Saturday)","userName":"Fttxhcjjf","userID":"gucb4Y5pf453Spa24","personalAPIToken":"apify_api_iOkqzAQjHUvwQPWF6YZavtYv53ULk60OOh0i","organizationAPIToken":"apify_api_KabEknhOQHbBHdf3GHPbBJOHt3G5vT2XDbMB"},

 },


 
 
 // Org1 (20 Jan (00:41:00 AM) - (19:58:00 PM) Saturday)
 
 
 
 'omeshkh58@proton.me':{
"omeshkh58@proton.meOrg1":{"createdAt":"omeshkh58@proton.meOrg1 (20 Jan (17:18:00 PM) Saturday)","userName":"excited_trend","userID":"vZFTPWbpkBgiXkePJ","personalAPIToken":"apify_api_V3ZZRdKKO0hmERFYRpW2HbTwSvq7Rf28eVz6","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (17:18:00 PM) Saturday)","userName":"Bffthbkbbhb","userID":"iL9g6NQ7mT2GBkJP7","personalAPIToken":"apify_api_xdSnBpMnGCCrilZCob4aHFSRDnQm7h0ggflP","organizationAPIToken":"apify_api_Lt54r9rnvKCPCwd8VwPoHYVHTwrxLm3QTfwF"},

 },
 
 'ajaydeepg58@proton.me':{
"ajaydeepg58@proton.meOrg1":{"createdAt":"ajaydeepg58@proton.meOrg1 (20 Jan (15:13:00 PM) Saturday)","userName":"informative_daughter","userID":"ugmuEtPiBZgaT2RSc","personalAPIToken":"apify_api_BAK4NHLwMiwHioiR106I9ucWTCwREP0ch1OY","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (15:13:00 PM) Saturday)","userName":"Jjvggvigggjj","userID":"R5oW6crmZ9N9f6RNP","personalAPIToken":"apify_api_TOKLWEeUfBZLBvRTs7qfEwvPkC5HAr1Skt49","organizationAPIToken":"apify_api_nnSinT0bYEtmYeJPwllqoQQ4A8hTty0jpd8F"},

 },

 'mandeepsh465@proton.me':{
"mandeepsh465@proton.meOrg1":{"createdAt":"mandeepsh465@proton.meOrg1 (20 Jan (15:13:00 PM) Saturday)","userName":"burgundy_jouster","userID":"2pJ2xT2aeXXQiPw9q","personalAPIToken":"apify_api_Bga4jfLh0kNNFiDhUH6DePs5olb9RK3uZdDK","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (15:13:00 PM) Saturday)","userName":"Khuggdjvljjg","userID":"FLJ57CeoFjCD3sfs8","personalAPIToken":"apify_api_LuWfA6tw9xPI5AOCF7bo5eemAZe2R90XEUOl","organizationAPIToken":"apify_api_S21xnI7LFuHo2sJHh3cUax4kNCaetD20jpXp"},

 },
 
 'jeetuhgd68@proton.me':{
"jeetuhgd68@proton.meOrg1":{"createdAt":"jeetuhgd68@proton.meOrg1 (20 Jan (13:58:00 PM) Saturday)","userName":"knowledgeable_kitten","userID":"dZ4r3regBwhtZ9XDc","personalAPIToken":"apify_api_2R8dWICyQXkJ3iDy8H7rjssJofrtD91kuQ47","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (13:58:00 PM) Saturday)","userName":"Jvyftdugih","userID":"xW5t8G7rt7tQRgzvr","personalAPIToken":"apify_api_eAW3R0mhl5VpAlrjnLtsfdoSu0NwZY3bApej","organizationAPIToken":"apify_api_6wVlXjehdNklXEEMUDH6soh7sf6nGu3plfqD"},

 },
 
 'deepuvj872@proton.me':{
"deepuvj872@proton.meOrg1":{"createdAt":"deepuvj872@proton.meOrg1 (20 Jan (12:49:00 PM) Saturday)","userName":"knavish_jacket","userID":"srXTaddB33ujtBuwH","personalAPIToken":"apify_api_DJ2SsIdx0rycqrkySnWMrljIjeMDta2BdGq4","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (12:49:00 PM) Saturday)","userName":"Ihtdtsljhi","userID":"Nc2HdtwXLaEN8zRsJ","personalAPIToken":"apify_api_OtXdMxVGv43jS9cGq3dv5tYfMDaJvA1ZuCOR","organizationAPIToken":"apify_api_Pdqg1wSWqJx6fPTWpEeJcP0dL6lI9D1wN4Iw"},

 },
 
 
 'harmandeep46@proton.me':{
"harmandeep46@proton.meOrg1":{"createdAt":"harmandeep46@proton.meOrg1 (20 Jan (10:42:00 AM) Saturday)","userName":"saffron_legume","userID":"GuRZQu6n6nua36Sw3","personalAPIToken":"apify_api_OfxWLIssM0EGhp1ddza3YmTSobT2E34eRa4j","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (10:42:00 AM) Saturday)","userName":"Jvfsfsgjkb","userID":"Ya2eFJKXXg5aHYfxE","personalAPIToken":"apify_api_BpmGJ8cHkhWTeDAFGl5LKyd1vfK5g34Gzmd1","organizationAPIToken":"apify_api_vxow2lZRje7PxraadQOo7IVBXeAE0H4xwRhI"},

 },
 
 'rajankuks46@proton.me':{
"rajankuks46@proton.meOrg1":{"createdAt":"rajankuks46@proton.meOrg1 (20 Jan (09:41:00 AM) Saturday)","userName":"loving_nutritionist","userID":"6bF2AYaGBBxpFschN","personalAPIToken":"apify_api_sggh4hPScAgc9gmyaoeTbEJ1UVRYD9399ekx","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (09:41:00 AM) Saturday)","userName":"Dnjddhdhdh","userID":"t2qPE4ene5umakFWm","personalAPIToken":"apify_api_DxDea08Z3OJUfyBfuteXxeb1EIa57K0yEvZm","organizationAPIToken":"apify_api_IGXcZoH01JRMiKie5qFpMLjcas37KA3nz93K"},

 },
 
 'rajinderha5@proton.me':{
"rajinderha5@proton.meOrg1":{"createdAt":"rajinderha5@proton.meOrg1 (20 Jan (20:06:00 PM) Saturday)","userName":"antique_elm","userID":"ysA3TRed3kgePKiZB","personalAPIToken":"apify_api_chmPMNZRWcbipqAdBczg8edK7Nljsi34HDMV","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (20:06:00 PM) Saturday)","userName":"Yftsdtgxkkkh","userID":"JPkDntvjFwnk6BJy5","personalAPIToken":"apify_api_MXlOQ4FNFfgJL4AbcvsZBLY85hR4dP3HqjEV","organizationAPIToken":"apify_api_dsLsjFawpNjBezgllOb9AaibOI9iPp2FrLbh"},

 },
 //checked below all works
 'surjanmsj49@proton.me':{
"surjanmsj49@proton.meOrg1":{"createdAt":"surjanmsj49@proton.meOrg1 (20 Jan (17:18:00 PM) Saturday)","userName":"judicial_paddle","userID":"ApKbZiHxZmensyb5v","personalAPIToken":"apify_api_RnVhNKKehz4GU05Ilea8j35uurQdU33CPvpu","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (17:18:00 PM) Saturday)","userName":"Hfdxhyeszhjur","userID":"hLYJwYzGR6yHjbhvw","personalAPIToken":"apify_api_Os8J0IA8oNFqhAy5Exbx0AsYuk0cSz1DAzDh","organizationAPIToken":"apify_api_2Ra8qaRD9vN8vhGS0PyjKPhtV3jFJe4uCdCO"},

 },

 'rajansing884@proton.me':{
"rajansing884@proton.meOrg1":{"createdAt":"rajansing884@proton.meOrg1 (20 Jan (16:02:00 PM) Saturday)","userName":"leafed_evaluation","userID":"bYNzy5tDbR56kmLPv","personalAPIToken":"apify_api_Om9IO4Uf8t9Bk7gEZuagcfD62m5cra47a7qy","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (16:02:00 PM) Saturday)","userName":"Fhhjuuuutedchf","userID":"4uFjXWsSZKDbvGG3E","personalAPIToken":"apify_api_A0GFC1dN2ArtEtrh6BaeUY8LHmdy7g2qag5B","organizationAPIToken":"apify_api_nuTiLgdQtKP63TCi7ZLwfFGykVWwHK38ti6S"},

 },
 
 'kamaldeepj57@proton.me':{
"kamaldeepj57@proton.meOrg1":{"createdAt":"kamaldeepj57@proton.meOrg1 (20 Jan (15:14:00 PM) Saturday)","userName":"eventful_technician","userID":"3PuLRem4q4awFumNN","personalAPIToken":"apify_api_AcskeXu1krKfjRUud7eed7ss5Ui2bD44SM3n","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (15:14:00 PM) Saturday)","userName":"Iyyftdgxvjkb","userID":"YiA8R79MRHdNXQ4XT","personalAPIToken":"apify_api_2EorDY8PamNMrga4sapS18qOVVIdme4wThMW","organizationAPIToken":"apify_api_ysJw14ls1vn3RbCQQ55AzFMunMZSmY17VPWi"},

 },
 
 'sanjusing58@proton.me':{
"sanjusing58@proton.meOrg1":{"createdAt":"sanjusing58@proton.meOrg1 (20 Jan (14:00:00 PM) Saturday)","userName":"orbicular_yield","userID":"Hya8JDb2apsLFecjo","personalAPIToken":"apify_api_FzMeLDEyN4O2JBpJ4srSD7yOV771yz3jCSQJ","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (14:00:00 PM) Saturday)","userName":"Gidytshcjv","userID":"gyBPXoPxbLHXNktTS","personalAPIToken":"apify_api_rjoLQb6pw8SVGgjh8n8m4wMi9sSbKl2oCvBw","organizationAPIToken":"apify_api_BW80jRf2HQhW4hhsJXyOsqjr0y5Poy3XpHPt"},

 },
 
 'ivanshkun94@proton.me':{
"ivanshkun94@proton.meOrg1":{"createdAt":"ivanshkun94@proton.meOrg1 (20 Jan (12:01:00 PM) Saturday)","userName":"crunchy_marmalade","userID":"tdbj8anKqKWrztuHR","personalAPIToken":"apify_api_dapTzqzfcRQtd8fWyannJNA1Ltk5Nq0ZQ3or","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (12:01:00 PM) Saturday)","userName":"Dyfshfjgfh","userID":"KaMWW9cP5944yeoXa","personalAPIToken":"apify_api_KAkcfwsVnkocoyvdChNaCHhve5mgAb4cdFeW","organizationAPIToken":"apify_api_c02WaLaL1vsmLKGHVrmcN8PwWdoa4K2z0gKZ"},

 },
 
 'pardeepsj9@proton.me':{
"pardeepsj9@proton.meOrg1":{"createdAt":"pardeepsj9@proton.meOrg1 (20 Jan (12:02:00 PM) Saturday)","userName":"gamboge_vacation","userID":"TssSYAy7z5iBAsd8B","personalAPIToken":"apify_api_pGwFdfURuU7MdktmB6zzBnkmfScZij2n17sO","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (12:02:00 PM) Saturday)","userName":"Ihfytedgb","userID":"az5hZTwdeaFDcrYD5","personalAPIToken":"apify_api_Lceeu2orRuInKnsAMiZRkc6xME0KLT1ISRhi","organizationAPIToken":"apify_api_k64aul4A9hyZepnbYpnXsWh4O6wbws45z85i"},

 },
 
 'surjansh76@proton.me':{
"surjansh76@proton.meOrg1":{"createdAt":"surjansh76@proton.meOrg1 (20 Jan (09:35:00 AM) Saturday)","userName":"warm_pectoral","userID":"2j4FawSJsdLNq5Sq4","personalAPIToken":"apify_api_wpKAcRo6dG4zyWwQCCXe2VAEZb6TUi3AsM8z","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (09:35:00 AM) Saturday)","userName":"Dgydytuf","userID":"BsRFgaGPd6b8kHqt8","personalAPIToken":"apify_api_tQCmxiwfWq73zNaYGpupsFxrG7xFIN0GUUDy","organizationAPIToken":"apify_api_9su1ijoy27h33eez8ZMv7NNOBzD6IN1pntvO"},

 },
 
 'deepakhgv38@proton.me':{
"deepakhgv38@proton.meOrg1":{"createdAt":"deepakhgv38@proton.meOrg1 (20 Jan (00:39:00 AM) Saturday)","userName":"vasty_kiwi","userID":"AKmmdeFjddHfMXtFe","personalAPIToken":"apify_api_2df7TloFe4AdZyGnt7lg3xJz2dLIYo33aqqh","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (00:39:00 AM) Saturday)","userName":"Utyifuhcjv","userID":"LFRar8taR4xpyfcgN","personalAPIToken":"apify_api_O2iBHsa3WfBH9Igsg75g6wVOxnZN6b2Evi9v","organizationAPIToken":"apify_api_XBfh2O8KaihQ9v6Ue0JKDxMmljCyqy2Xz2L7"},

 },
 
 'farhankg68@proton.me':{
"farhankg68@proton.meOrg1":{"createdAt":"farhankg68@proton.meOrg1 (20 Jan (00:41:00 AM) Saturday)","userName":"carefree_refrigerator","userID":"EJrgKu55s5J24EvB3","personalAPIToken":"apify_api_VA0qS4aeRrpECckVV5DdGm60vksefD4AsgLr","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (20 Jan (00:41:00 AM) Saturday)","userName":"Jbtdrdugih","userID":"F6Kc5pLPoqokevMqG","personalAPIToken":"apify_api_LGHeCrCoLai9Ra0Py4VG6BfenTHf5b2SVyhV","organizationAPIToken":"apify_api_WPWVhYZhwiACoGvFoT6peGuegua3SL3o6nhh"},

 },

 // Org1 (19 Jan (11:14:00 AM) - (23:43:00 PM) Friday)
 
 
 
 'jitenderb49@proton.me':{
"jitenderb49@proton.meOrg1":{"createdAt":"jitenderb49@proton.meOrg1 (19 Jan (12:18:00 PM) Friday)","userName":"peaceful_binoculars","userID":"yTXyj3ABYSpw2aqLT","personalAPIToken":"apify_api_0RKiXTcUSeE4LzAjrf6ltUE2dVho5j3JKtCO","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (12:18:00 PM) Friday)","userName":"Bsdbgddhjs","userID":"caJqkT6Ca2K5XcDxP","personalAPIToken":"apify_api_dMESmiOus5nKMRsiQbSAvKLVYMcTlL1qGFIi","organizationAPIToken":"apify_api_9R8gr10aMuuBgeykXl5Vli01k8NScW1XgaaS"},

 },
 
 'ceepihgf587@proton.me':{
"ceepihgf587@proton.meOrg1":{"createdAt":"ceepihgf587@proton.meOrg1 (19 Jan (23:43:00 PM) Friday)","userName":"magnolia_topic","userID":"BYFBDAEvF2YB6bpCs","personalAPIToken":"apify_api_QhocxXS5TYgEeE8yY3iPik1S5sFED04pGb1v","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (23:43:00 PM) Friday)","userName":"Ihtrtsfdugohih","userID":"SSNm6v7GFvGcatJ97","personalAPIToken":"apify_api_rbAAuhmFwqh8pCajbKxKOHzVVkcJ6M0Q3e6m","organizationAPIToken":"apify_api_vE2euVCEh9eouiztckJetdKbPclsAx2vMI1D"},

 },
 
 'sajankuma688@proton.me':{
"sajankuma688@proton.meOrg1":{"createdAt":"sajankuma688@proton.meOrg1 (19 Jan (22:32:00 PM) Friday)","userName":"unhindered_father","userID":"iHR3DM5riSv7z5tzG","personalAPIToken":"apify_api_tdcbOhobGUjJsDLZ3vnyb6DtrfUZuK2bm35f","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (22:32:00 PM) Friday)","userName":"Kjhcsdsgih","userID":"oaWyc8uTsTtYGyWi8","personalAPIToken":"apify_api_DTsJnbHJnNlOYgqXYHBCnJJVZXlhdV2fPrNH","organizationAPIToken":"apify_api_yxzoLP40xkL3gnVNtGAVak5FMNsLFK45d2Ai"},

 },
 
 'deepaksjh84@proton.me':{
"deepaksjh84@proton.meOrg1":{"createdAt":"deepaksjh84@proton.meOrg1 (19 Jan (20:36:00 PM) Friday)","userName":"adorable_doll","userID":"XKCvbMMoFEHKsYNjt","personalAPIToken":"apify_api_FrRI46NXXYy16wtadoChtZgvNThKHr0bstbr","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (20:36:00 PM) Friday)","userName":"Hfihtsgxkbkj","userID":"rE7aAKSaYQEB8Bn3C","personalAPIToken":"apify_api_z9P2EadNbuLhq7YlOMRxb7oWDGrVJU49UsWX","organizationAPIToken":"apify_api_uCilhfPWQkMAvz8eSoLgvGvNzCxC051xyUtz"},

 },
 
 'harmansj46@proton.me':{
"harmansj46@proton.meOrg1":{"createdAt":"harmansj46@proton.meOrg1 (19 Jan (18:46:00 PM) Friday)","userName":"impeccable_jaunt","userID":"69gqDEjdcPendREcm","personalAPIToken":"apify_api_ZhpUVGAavArkBjQCUilyZnHAxSe6As1PRc3R","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (18:46:00 PM) Friday)","userName":"Rjfbfktoejdb","userID":"iyERwLkd4hYDGNHGF","personalAPIToken":"apify_api_Qs3kswqKrjDKIsfyMPt1APtxtTQnBc3Fle1e","organizationAPIToken":"apify_api_NJBhV1cRQYrkwhPUasScuQowkzPEh42phB9V"},

 },
 
 'jelllajsj94@proton.me':{
"jelllajsj94@proton.meOrg1":{"createdAt":"jelllajsj94@proton.meOrg1 (19 Jan (16:33:00 PM) Friday)","userName":"enlightened_track","userID":"5JxtmNm4NCmQB95hK","personalAPIToken":"apify_api_A3xbQECmFDezRlMRq6KqVoOdvNzrvA1t3Mjo","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (16:33:00 PM) Friday)","userName":"Uttdrdhfkhk","userID":"wPp9qvaeZbGoBFnp2","personalAPIToken":"apify_api_VNenRukv6sqQGoiTecqPoEaOEZ54d63n6kVr","organizationAPIToken":"apify_api_LQWkJLHlcjs8sSAMOYd6O9n3xbccUm3gnk3p"},

 },
 
 'vikranjg65@proton.me':{
"vikranjg65@proton.meOrg1":{"createdAt":"vikranjg65@proton.meOrg1 (19 Jan (16:01:00 PM) Friday)","userName":"inspired_festival","userID":"QGhzguhq3Rh6JjceJ","personalAPIToken":"apify_api_88NFlmJFahsBqZ5u4q680C6Czb7PE01jtNyE","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (16:01:00 PM) Friday)","userName":"Fuyfydihkhkh","userID":"ShrmQ4WccuuuPoJtK","personalAPIToken":"apify_api_UGn0F6pbTaaY7oTkN1fCaLsvT9EEOn4jioEo","organizationAPIToken":"apify_api_kguLMRowOXUNaAcFnhdf25Qmjp3c9p2sBBPq"},

 },
 
 'jatirshug54@proton.me':{
"jatirshug54@proton.meOrg1":{"createdAt":"jatirshug54@proton.meOrg1 (19 Jan (14:25:00 PM) Friday)","userName":"disarming_xenoblast","userID":"YSigGtdKTrhruhd7q","personalAPIToken":"apify_api_9Hreg3PbHAn0ubfHGG3vbzO0s4AGM80K9aj7","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (14:25:00 PM) Friday)","userName":"Fuihufgcng","userID":"nW6pTPhETZEuEvjMR","personalAPIToken":"apify_api_F37S7lfMBtc2UaJU0lohBqO3bZtGir3fTHWg","organizationAPIToken":"apify_api_j3dLo7NtoMA3nlTI930ySsr4wa7GYW2FV75R"},

 },
 
 'jeetuvd475@proton.me':{
"jeetuvd475@proton.meOrg1":{"createdAt":"jeetuvd475@proton.meOrg1 (19 Jan (11:14:00 AM) Friday)","userName":"elder_unicycle","userID":"45SrnbEBvBSoj9nY2","personalAPIToken":"apify_api_teJDgilOksuaH4ZRx3vkoqTNPNu9WC2vM0mW","organizationAPIToken":""},
"Org1":{"createdAt":"Org1 (19 Jan (11:14:00 AM) Friday)","userName":"Khyfrsgxgjkh","userID":"t2h8m2fQ3wX8ZLJYe","personalAPIToken":"apify_api_quOvgFjTunH5WsJc2qLJkozzubsCmp3s9tKT","organizationAPIToken":"apify_api_88kuAIhHbfgxeyHcewaNQzPF5rSgZO4nKriY"},
"Org2":{"createdAt":"Org2 (28 Jan (20:44:00 PM) Sunday)","userName":"29EUwVgpT","userID":"C7P4FQGt28GqQiCCg","personalAPIToken":"apify_api_tM3QYYxD9KefjqyVwazVXY7OPc38ur2G9McU","organizationAPIToken":"apify_api_dsRjXnJ2RAxDudr6cQ90iAObZ4RCUa0YVBE5"},

 },
 
 
 
 // 18 jan
 
 
 //Org1 (17 Jan (09:21:00 AM) - (22:06:00 PM) Wednesday)
  
 //(16 Jan (10:11:00 AM) - (21:44:00 PM) Tuesday)
 
 //Org2 (22 Jan (21:31:00 PM) - (21:41:00 PM) Monday)
 
  // Org2 (21 Jan (21:00:00 PM) - (21:16:00 PM) Sunday)
 
 
 //Org2 (20 Jan (21:15:00 PM) -  (21:29:00 PM)  Saturday)
 
 
 //Org2 (19 Jan (21:14:00 PM) - (21:23:00 PM) Friday)
 
 
 //Org2 (18 Jan(23:34:00 PM) - (23:44:00 PM) Thursday)


 //Org2 (17 Jan (21:15:00 PM) - (21:53:00 PM) Wednesday)
 

 //Org2 (16 Jan (21:58:00 PM)-(22:30:00 PM) Tuesday)
 
   
};


  
//code to convert accountsWithDetails into simple form (Starts Here)
var simplifiedAccountsObj = {}
for( var email in accountsWithDetails )
{
	var organizations = accountsWithDetails[email] 
	simplifiedAccountsObj [ email ] ={}
	for( var org in organizations )
	{
		var orgObject = organizations[org]
		var createdAt =  orgObject['createdAt']
		
		if( createdAt !='' )
		{
			createdAt =  createdAt.split( createdAt.split('(')[0]+'(' )[1].replace(/\).*/,')')
			
			console.log(org)
			var date =  createdAt.split(' ')[0] + ' '+createdAt.split(' ')[1]
			//simplifiedAccountsObj [ email ] [date] = org + createdAt.split(date)[1]
			
			if( simplifiedAccountsObj [ email ] [date] ==undefined)
			{
				simplifiedAccountsObj [ email ] [date] = [ org + createdAt.split(date)[1] ]
			}
			else
			{
				(simplifiedAccountsObj [ email ] [date]).push( org + createdAt.split(date)[1] )
			}
			
			
			
		}
		
	}
}
//code to convert accountsWithDetails into simple form (Ends Here)

var accounts = simplifiedAccountsObj

/*

accounts = {
  "rakeshkumar": {
    '09 Jun': 'Rakesh (01:13:22 PM)',
    '22 Jun': 'org2 (02:00:23 PM)',
    '01 Jul': 'org3 (12:44:26 PM)',
    '14 Jun': 'org4 (09:55:57 AM)',
    '21 Jun': 'org5 (08:28:37 PM)',
    '28 Jun': 'org6 (08:48 PM)',
    '04 Jul': 'org7 (08:49 PM)',
    '11 Jul': 'org8 (08:49:30 PM)',
    '18 Jul': 'org9 (08:49:34 PM)',
    '25 Jul': 'org10 (08:49:35 PM) ',
  },
  "coyisi4601": {
    '10 Jun': 'temp (09:09:00 PM)',
    '11 Jun': 'org1 (11:00:34 AM)',
    '22 Jun': 'org2 (9:55:30 PM)',
    '01 Jul': 'org3 (12:45:44 PM)',
    '08 Jul': 'org4 (01:53:07 PM)',
    '15 Jun': 'org5 (10:00:53 PM)',
    '23 Jun': 'org6 (08:24 AM)',
    '30 Jun': 'org7 (08:52 AM)',
    '06 Jul': 'org8 (08:52 AM)',
    '13 Jul': 'org9 (08:52:40 AM)',
    '20 Jul': 'org10 (08:52:40 AM)',
  },
  "moxafa5631": {
    '07 Jul': 'temp (12:41:31 PM)',
    '07 Jul': 'org1 (03:13:52 PM)',
    '15 Jun': 'org2 (10:02:18 PM)',
    '23 Jun': 'org3 (08:26 AM)',
    '30 Jun': 'org4 (08:50 AM)',
    '06 Jul': 'org5 (08:50 AM)',
    '13 Jul': 'org6 (08:51:10 AM)',
    '20 Jul': 'org7 (08:51:10 AM)',
    '27 Jul': 'org8 (08:53:00 PM)',
    '04 Aug': 'org9 (08:53:00 PM)',
    '11 Aug': 'org10 (08:53:00 PM)',

  },
};
*/



var accountsByMonthWeek = {};
var accountsByMonthWeekArray = [];

var currentDate = new Date(); // Get the current date
//var currentDate = new Date("03 Jul"); // Get the current date


for (var account in accounts) {

  var transactions = accounts[account];
  for (var date in transactions) {
  for( var i=0;i<transactions[date].length;i++ )
  {
  const nextRenewal = getNextRenewalDate( date );
  
    var transactionDate = new Date(nextRenewal);
    var week = getWeekNumber(transactionDate);
	var fullYear = transactionDate.getFullYear()
    var month = transactionDate.toLocaleString('default', { month: 'short' }).toLowerCase();
    var weekRange = getWeekRange(transactionDate);
    if (!accountsByMonthWeek[month]) {
      accountsByMonthWeek[month] = {};
    }
    if (!accountsByMonthWeek[month][weekRange]) {
      accountsByMonthWeek[month][weekRange] = [];
    }
	
    //var transactionInfo = date + '-' + transactions[date] + ' ' + account;
    //var transactionInfo = date.split(' ')[0] + ' '+ capitalize(month) + '-' + transactions[date] + ' ' + account;
    var transactionInfo = date.split(' ')[0] + ' '+ capitalize(month)+ ' '+ fullYear + '-' + transactions[date][i] + '_' + account;
    
	accountsByMonthWeekArray.push(transactionInfo);
	
	if (isCurrentWeek(week, currentDate)) {
      transactionInfo = '<mark>' + transactionInfo + '</mark>'; // Highlight current week's accounts
    }
    accountsByMonthWeek[month][weekRange].push(transactionInfo);
	
  }
  }
}


//console.log("accountsByMonthWeek",accountsByMonthWeek)

/*
var output = '';
for (var month in accountsByMonthWeek) {
  output += '<p>' + month.toUpperCase() + ':</p>';
  var sortedWeekRanges = Object.keys(accountsByMonthWeek[month]).sort(sortWeekRange);
  for (var i = 0; i < sortedWeekRanges.length; i++) {
    var weekRange = sortedWeekRanges[i];
    var sortedTransactions = accountsByMonthWeek[month][weekRange].sort();
    var sortedTransactionsStr = sortedTransactions.toString().replace(/,/g,'<br>	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')
	//console.log(sortedTransactions)
	//console.log(sortedTransactionsStr)
//    output += '<p>' + weekRange + ': ' + sortedTransactions.join(', ')+ '</p>';
    output += '<div>' + weekRange + ': ' + sortedTransactionsStr+ '</div>';
  }
}

document.getElementById("ptag").innerHTML = (output);
*/

// Function to get the week number from a date
function getWeekNumber(date) {
  var onejan = new Date(date.getFullYear(), 0, 1);
  var week = Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  return week;
}

// Function to get the week range for a given date
function getWeekRange(date) {
  var startDate = new Date(date);
  startDate.setDate(startDate.getDate() - startDate.getDay() + 1); // Set to the first day of the week
  var endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6); // Set to the last day of the week
  var startDay = startDate.getDate();
  var endDay = endDate.getDate();
  var startMonth = startDate.toLocaleString('default', { month: 'short' }).toLowerCase();
  var endMonth = endDate.toLocaleString('default', { month: 'short' }).toLowerCase();
  var weekRange = startDay + ' ' + startMonth + '-' + endDay + ' ' + endMonth;
  return weekRange;
}

// Function to check if a given week is the current week
function isCurrentWeek(week, currentDate) {
  var currentWeek = getWeekNumber(currentDate);
  return week === currentWeek;
}

// Function to sort the week ranges in ascending order
function sortWeekRange(a, b) {
  var startA = parseInt(a.split(' ')[0]);
  var startB = parseInt(b.split(' ')[0]);
  return startA - startB;
}
//This modified code should provide the correct output with accurate week ranges and sorted transactions within each week range.




function getNextRenewalDate(passedRenewalDate) {
  const currentDate = new Date();
  //const currentDate = new Date("1 Aug");
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1; // Adding 1 because month index starts from 0

  // Set the renewal day and month
  //var renewalDate = new Date( "28 Jun" );
  var renewalDate = new Date( passedRenewalDate );
  //const renewalDay = 16;
  const renewalDay = renewalDate.getDate()
  //const renewalMonth = 7; // July (index 7-1=6)
  const renewalMonth = renewalDate.getMonth() + 1; // July (index 7-1=6)

  // Calculate the next renewal month and year
  let nextRenewalMonth = currentMonth;
  let nextRenewalYear = currentDate.getFullYear();

  if (currentDay > renewalDay || (currentDay === renewalDay && currentMonth !== renewalMonth)) {
    nextRenewalMonth += 1;
    if (nextRenewalMonth > 12) {
      nextRenewalMonth = 1;
      nextRenewalYear += 1;
    }
  }

  // Create the next renewal date
  const nextRenewalDate = new Date(nextRenewalYear, nextRenewalMonth - 1, renewalDay);

  return nextRenewalDate;
}




function getAvaliableDate( specificDate )
{

//var array1 = ["6 aug 2023","2 Jul 2023", "5 aug 2023", "3 aug 2023","3 aug 2023","1 sep 2023"];
//var array1 = ["6 aug","2 Jul", "5 aug", "3 aug","3 aug","1 sep"];
//var array1 = [    "06 Aug-org8 (08:53:00 PM) moxafa5631",    "04 Aug-org9 (08:53:00 PM) moxafa5631", "11 Aug-org10 (08:53:00 PM) moxafa5631"];

var dateMonthArray = []
for (var i = 0; i < accountsByMonthWeekArray.length; i++) {
	var dateMonthStr = accountsByMonthWeekArray[i].split('-')[0]
        dateMonthArray.push( dateMonthStr )
    
}

//console.log( "dateMonthArray",dateMonthArray )


var currentDate;
if( specificDate!=undefined )
{//if checking for specific date then run this block
currentDate = specificDate
}
else
{// otherwise check for current date & run this block

//var currentDate = "01 Aug 2023";
//currentDate = "04 Aug";
currentDate = formatDate( new Date() ) ;
}

function formatDate(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = date.getDate().toString().padStart(2, '0');
  var month = months[date.getMonth()];
  return `${day} ${month}`;
}


// Step 1: Convert dates to JavaScript Date objects
var currentDateObj = new Date(currentDate);
var array1Dates = dateMonthArray.map(dateStr => new Date(dateStr));

//console.log("array1Dates",array1Dates)
// Step 2: Filter out dates greater than the currentDate
var filteredDates = array1Dates.filter(date => date > currentDateObj);

// Step 3: Sort the filtered dates in ascending order
filteredDates.sort((a, b) => a - b);

//console.log("filteredDates",filteredDates)

// Step 4: Get the first date from the sorted array as the next date
//var nextDate = filteredDates.length > 0 ? filteredDates[0].toDateString() : "No next date found";
var nextDate = filteredDates.length > 0 ? filteredDates[0].toDateString() : "Null";

//console.log( "nextDate", nextDate);
return nextDate;
}

function getAvailableAccountsForToday_Previous()
{
var nextDate = getAvaliableDate()
var availableAccountsForToday = []
for (var i = 0; i < accountsByMonthWeekArray.length; i++) {
	var dateMonthStr = accountsByMonthWeekArray[i].split('-')[0]
    if (new Date( dateMonthStr ).getTime() === new Date( nextDate ).getTime()) {
        availableAccountsForToday.push(accountsByMonthWeekArray[i])
    }
}
console.log("availableAccountsForToday", availableAccountsForToday);

return availableAccountsForToday;
}

function getAvailableAccountsForToday( checkedAccountForTodayStr, passedAvailableAccountsForTodayArray )
{

console.log("checkedAccountForTodayStr",checkedAccountForTodayStr)
var nextDate = getAvaliableDate()
var availableAccountsForToday = []
for (var i = 0; i < accountsByMonthWeekArray.length; i++) {
	var dateMonthStr = accountsByMonthWeekArray[i].split('-')[0]
    if (new Date( dateMonthStr ).getTime() === new Date( nextDate ).getTime()) {
        availableAccountsForToday.push(accountsByMonthWeekArray[i])
    }
}


//console.log("availableAccountsForToday", availableAccountsForToday);


if( passedAvailableAccountsForTodayArray!=undefined )
{
	availableAccountsForToday = passedAvailableAccountsForTodayArray
}

if( checkedAccountForTodayStr==undefined )
{ // if getting getAvailableAccountsForToday for first time then run this block

console.log("availableAccountsForToday", availableAccountsForToday);

//return availableAccountsForToday[0];
return [ availableAccountsForToday[0], availableAccountsForToday ];
}


else if( checkedAccountForTodayStr!=undefined )
{ // if getting getAvailableAccountsForToday for second or more time then run this block

//console.log("availableAccountsForToday", availableAccountsForToday);
var indexOfCheckedAccountForTodayStr = availableAccountsForToday.indexOf(checkedAccountForTodayStr)
var nextAccount = availableAccountsForToday[ indexOfCheckedAccountForTodayStr +1 ]
if( indexOfCheckedAccountForTodayStr !=-1 && availableAccountsForToday.length > 1 && nextAccount!=undefined )
{// if availableAccountsForToday are more than 1, then return next account after increasing index to checking for apify credit

//return nextAccount;
return [ nextAccount, availableAccountsForToday ];
}
else
{

var upcomingDate = checkedAccountForTodayStr.split('-')[0]
//console.log('fetch next date accounts')
console.log('now checking for upcomingDate', upcomingDate)
var nextDate = getAvaliableDate( upcomingDate )
var availableAccountsForToday = []
for (var i = 0; i < accountsByMonthWeekArray.length; i++) {
	var dateMonthStr = accountsByMonthWeekArray[i].split('-')[0]
    if (new Date( dateMonthStr ).getTime() === new Date( nextDate ).getTime()) {
        availableAccountsForToday.push(accountsByMonthWeekArray[i])
    }
}


console.log("availableAccountsForUpcomingDate", upcomingDate, availableAccountsForToday);
//return availableAccountsForToday[0];
return [ availableAccountsForToday[0], availableAccountsForToday ];

}





}


}


function getAccountDetailsObject( availableAccountStr )
{
	//availableAccountStr = '04 Aug-org9 (08:53:00 PM) moxafa5631'
	//var org = availableAccountStr.split('-')[1].split(' ')[0] 
	var org = availableAccountStr.split('-')[1].split(' (')[0] 
	var email = availableAccountStr.split('_')[1]
	var accountDetailsObject = accountsWithDetails[ email ][ org ]
	//console.log("availableAccountStr",availableAccountStr)
	//console.log("accountDetailsObject",accountDetailsObject)
	return accountDetailsObject;
	
}




	//var apifyURL = 'https://api.apify.com/v2/users/me/limits?token=apify_api_miYNvXi5huhwqWuSRP06rkqf5duqKK3u0tcL'
		
async function checkApifyAccountCredit_Previous_30_Jan_2024(accountDetailsObject) {
    var personalAPIToken = accountDetailsObject['personalAPIToken'];
    var apifyURL = 'https://api.apify.com/v2/users/me/limits?token=' + personalAPIToken;

    try {
        // Fetch data using the Fetch API
        const response = await fetch(apifyURL);
        //const response = UrlFetchApp.fetch(apifyURL);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response body as JSON
        const data = await response.json();

        // checking if apify account credit is used or not
        var currentCredit = data['data']['current']['monthlyUsageUsd'].toFixed(2);
        var monthlyCredit = data['data']['limits']['maxMonthlyUsageUsd'];
        var usagePercentage = (currentCredit / monthlyCredit) * 100;
		// "monthlyUsageUsd": 0.6427965581308186,
		//"maxMonthlyUsageUsd": 5,
		// 1st use: 12.85 %
		// 2nd use: %

		//if (usagePercentage > 2) {
		if (usagePercentage >= 100) {
            console.log("fully used,", usagePercentage, currentCredit + '/' + monthlyCredit);
            return false;
        } else {
            console.log("fully empty,", usagePercentage, currentCredit + '/' + monthlyCredit);
            return true;
        }
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error:', error);
        return null;
    }
}

async function checkApifyAccountCredit(accountDetailsObject) {
    var personalAPIToken = accountDetailsObject['personalAPIToken'];
    var apifyUserURL = 'https://api.apify.com/v2/users/me?token=' + personalAPIToken;

    try {
        // Check if user exists
        const userResponse = await fetch(apifyUserURL);
        const userData = await userResponse.json();

        if ('error' in userData) {
            // User not found or access denied
            console.error('User not found or access denied:', userData.error.message);
            return null;
        }

        // User exists, now check account credit
        var apifyURL = 'https://api.apify.com/v2/users/me/limits?token=' + personalAPIToken;

        const response = await fetch(apifyURL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        var currentCredit = data['data']['current']['monthlyUsageUsd'].toFixed(2);
        var monthlyCredit = data['data']['limits']['maxMonthlyUsageUsd'];
        var usagePercentage = (currentCredit / monthlyCredit) * 100;

        if (usagePercentage >= 100) {
            console.log("Fully used,", usagePercentage, currentCredit + '/' + monthlyCredit);
            return false;
        } else {
            console.log("Not fully used,", usagePercentage, currentCredit + '/' + monthlyCredit);
            return true;
        }
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


async function getOneAccountToBeUsed_previous_02_jan_2024( token, storeID, recordKey, storeName, currentDate, retrievedData ) {
	var tempcount = 0
	var loopTrueFalse = true
	var checkedAccountForTodayStr;
	var availableAccountsForToday;
	
	var multipleAvailableAccountsObj = {
		"accountToBeUsed":{}
	}
	var multiAvailAccCount = 0
	
	console.log("accountsByMonthWeek",accountsByMonthWeek)
	console.log("accountsByMonthWeekArray",accountsByMonthWeekArray)
	
    try {

	while( loopTrueFalse )
	{
	tempcount = tempcount+1
	//var availableAccountForTodayStr = getAvailableAccountsForToday( checkedAccountForTodayStr )
	var returnedArray = getAvailableAccountsForToday( checkedAccountForTodayStr, availableAccountsForTodayArray )
	var availableAccountForTodayStr = returnedArray[0]
	var availableAccountsForTodayArray = returnedArray[1]
	
	   //if( availableAccountForTodayStr == undefined )
	   if( availableAccountForTodayStr == "null" )
	   {
		   // if there is not available any account to be checked, that means there has left no accounts, then exit from loop
	   loopTrueFalse = false
	   }
	   else
	   {
	var gotAccountDetailsObject = getAccountDetailsObject( availableAccountForTodayStr )
	console.log(availableAccountForTodayStr, gotAccountDetailsObject );
	
	  var creditAvailOrNot = await checkApifyAccountCredit( gotAccountDetailsObject );
	  if( creditAvailOrNot==true )
	  {
		multiAvailAccCount = multiAvailAccCount+1
	   // console.log('Apify account credit status:', creditAvailOrNot);
	   gotAccountDetailsObject['date'] = currentDate
	   gotAccountDetailsObject['availableAccountForTodayStr'] = availableAccountForTodayStr
	   
	   var selectedCountryNumber = 1000 // random number
	   var selectedCountryCode 
	   var whichAccountTurn = -1
	   var whichAccountTurnTrueFalse = false
	   
	     if ( retrievedData['error']==undefined ) {
			 // if there is not error then select increamented country
			 
			 whichAccountTurn = Number(retrievedData["whichAccountTurn"] ) + 1
			
			if( whichAccountTurn>=Object.keys(retrievedData ["accountToBeUsed"]).length )
			{
				whichAccountTurn = 0
			}
			
			var whichAccountTurnForTodayStr = Object.keys(retrievedData ["accountToBeUsed"])[whichAccountTurn]
			
				{
					whichAccountTurnTrueFalse = true
					//var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var previousCountryNumber = retrievedData ["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse )
					selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
					selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				}
			/*
			if( retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]!=undefined )
			{
				if( availableAccountForTodayStr == whichAccountTurnForTodayStr )
				{
					whichAccountTurnTrueFalse = true
					 
					var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse )
					selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
					selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
					
				}
				else
				{
					var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				}
			
			}
			else
			{
				var gotCountryCodeObj = await getCountryCode( selectedCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
			}
			
			*/
		 }
		 else{
			  // if there is error then select first country
				var gotCountryCodeObj = await getCountryCode( selectedCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				whichAccountTurn=0
		 }
		 
		  //gotAccountDetailsObject['selectedCountryNumber'] = selectedCountryNumber
		  //gotAccountDetailsObject['selectedCountryCode'] = selectedCountryCode
	   
		 
	   multipleAvailableAccountsObj['date'] = currentDate
	   multipleAvailableAccountsObj['whichAccountTurn'] = whichAccountTurn
	   multipleAvailableAccountsObj ["accountToBeUsed"] [availableAccountForTodayStr] = gotAccountDetailsObject
	   multipleAvailableAccountsObj['selectedCountryNumber'] = selectedCountryNumber
	   multipleAvailableAccountsObj['selectedCountryCode'] = selectedCountryCode
	   
	   
	   if( multiAvailAccCount == 4)
	   {
		loopTrueFalse = false
	   //console.log(' gotAccountDetailsObject:', gotAccountDetailsObject);
	   console.log(' multipleAvailableAccountsObj:', multipleAvailableAccountsObj);
	   
	    var storeCreatedOrNot = await createKeyValueStore( token, storeID, recordKey, storeName ) 
		 if ( storeCreatedOrNot['error']==undefined ) {
			 //await putRecord( token, storeID, recordKey, storeName, gotAccountDetailsObject )
			 await putRecord( token, storeID, recordKey, storeName, multipleAvailableAccountsObj )
		 }
		//await runApifyActor( gotAccountDetailsObject )
		
		// original account runner code
		//await runApifyActor( multipleAvailableAccountsObj, retrievedData )
		
	  }
	  else
	  {
		//creditAvailOrNot==true
		checkedAccountForTodayStr = availableAccountForTodayStr
	  }
	  
	  
	  
	  }
	  else
	  {
		//creditAvailOrNot==true
		checkedAccountForTodayStr = availableAccountForTodayStr
	  }
      
	  //console.error('tempcount:', tempcount);
	  
	   if( tempcount==10 )
	  {
	  //loopTrueFalse = false
	  }
	  
	}
	}
	
	await runApifyActor( multipleAvailableAccountsObj, retrievedData )
      
    } catch (error) {
        console.error('Error:', error);
    }
	
	console.log("got one account.. now we can start fetching data")
	

	
}

async function getOneAccountToBeUsed( token, storeID, recordKey, storeName, currentDate, retrievedData ) {
	var tempcount = 0
	var loopTrueFalse = true
	var checkedAccountForTodayStr;
	var availableAccountsForToday;
	
	var multipleAvailableAccountsObj = {
		"accountToBeUsed":{}
	}
	var multiAvailAccCount = 0
	
	console.log("accountsByMonthWeek",accountsByMonthWeek)
	console.log("accountsByMonthWeekArray",accountsByMonthWeekArray)
	
	console.log("retrievedData", retrievedData);


	var currentDateTemp = formatDateWithYear( new Date() );
 
	//if( retrievedData!=undefined && retrievedData!=null && retrievedData['error']!=undefined )
	if( retrievedData['date']!=undefined && retrievedData['date']==currentDateTemp )
	{
		//if retrievedData is undefined then start checking accounts from 1st account of retrievedData
		//instead of checking from scratch(which takes too much load)
		
		checkedAccountForTodayStr = Object.keys(retrievedData['accountToBeUsed'])[0]
		
		// Create a new Date object with the specified date (21 Feb 2024)
		//var currentDate = new Date('2024-02-01');
		var currentDate2 = new Date( checkedAccountForTodayStr.split('-')[0] );

		// Subtract 1 day
		currentDate2.setDate(currentDate2.getDate() - 1);

		// Format the date in the desired format (e.g., '21 Feb 2024')
		var formattedDate = `${currentDate2.getDate()} ${getMonthAbbreviation(currentDate2.getMonth())} ${currentDate2.getFullYear()}`;

		// Print the formatted date
		console.log("one previous date", formattedDate);

		// Function to get month abbreviation
		function getMonthAbbreviation(monthIndex) {
		  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		  return months[monthIndex];
		}
		
		var onePreviousCheckedAccountForTodayStr = formattedDate+'-'+checkedAccountForTodayStr.split('-')[1] 
		console.log( "staring from retrievedData's 1st account with:", onePreviousCheckedAccountForTodayStr)
		
		checkedAccountForTodayStr = onePreviousCheckedAccountForTodayStr
		
	}
	
	
	
    try {

	while( loopTrueFalse )
	{
	tempcount = tempcount+1
	//var availableAccountForTodayStr = getAvailableAccountsForToday( checkedAccountForTodayStr )
	var returnedArray = getAvailableAccountsForToday( checkedAccountForTodayStr, availableAccountsForTodayArray )
	var availableAccountForTodayStr = returnedArray[0]
	var availableAccountsForTodayArray = returnedArray[1]
	
	   //if( availableAccountForTodayStr == undefined )
	   if( availableAccountForTodayStr == "null" )
	   {
		   // if there is not available any account to be checked, that means there has left no accounts, then exit from loop
	   loopTrueFalse = false
	   }
	   else
	   {
	var gotAccountDetailsObject = getAccountDetailsObject( availableAccountForTodayStr )
	console.log(availableAccountForTodayStr, gotAccountDetailsObject );
	
	  var creditAvailOrNot = await checkApifyAccountCredit( gotAccountDetailsObject );
	  if( creditAvailOrNot==true )
	  {
		multiAvailAccCount = multiAvailAccCount+1
	   // console.log('Apify account credit status:', creditAvailOrNot);
	   gotAccountDetailsObject['date'] = currentDate
	   gotAccountDetailsObject['availableAccountForTodayStr'] = availableAccountForTodayStr
	   
	   var selectedCountryNumber = 1000 // random number
	   var selectedCountryCode 
	   var whichAccountTurn = -1
	   var whichAccountTurnTrueFalse = false
	   
	     if ( retrievedData['error']==undefined ) {
			 // if there is not error then select increamented country
			 
			 whichAccountTurn = Number(retrievedData["whichAccountTurn"] ) + 1
			
			if( whichAccountTurn>=Object.keys(retrievedData ["accountToBeUsed"]).length )
			{
				whichAccountTurn = 0
			}
			
			var whichAccountTurnForTodayStr = Object.keys(retrievedData ["accountToBeUsed"])[whichAccountTurn]
			
				{
					whichAccountTurnTrueFalse = true
					//var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var previousCountryNumber = retrievedData ["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse )
					selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
					selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				}
			/*
			if( retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]!=undefined )
			{
				if( availableAccountForTodayStr == whichAccountTurnForTodayStr )
				{
					whichAccountTurnTrueFalse = true
					 
					var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse )
					selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
					selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
					
				}
				else
				{
					var previousCountryNumber = retrievedData ["accountToBeUsed"] [availableAccountForTodayStr]["selectedCountryNumber"]
					var gotCountryCodeObj = await getCountryCode( previousCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				}
			
			}
			else
			{
				var gotCountryCodeObj = await getCountryCode( selectedCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
			}
			
			*/
		 }
		 else{
			  // if there is error then select first country
				var gotCountryCodeObj = await getCountryCode( selectedCountryNumber, whichAccountTurnTrueFalse  )
				selectedCountryNumber = gotCountryCodeObj["selectedCountryNumber"]
				selectedCountryCode = gotCountryCodeObj["selectedCountryCode"]
				whichAccountTurn=0
		 }
		 
		  //gotAccountDetailsObject['selectedCountryNumber'] = selectedCountryNumber
		  //gotAccountDetailsObject['selectedCountryCode'] = selectedCountryCode
	   
		 
	   multipleAvailableAccountsObj['date'] = currentDate
	   multipleAvailableAccountsObj['whichAccountTurn'] = whichAccountTurn
	   multipleAvailableAccountsObj ["accountToBeUsed"] [availableAccountForTodayStr] = gotAccountDetailsObject
	   multipleAvailableAccountsObj['selectedCountryNumber'] = selectedCountryNumber
	   multipleAvailableAccountsObj['selectedCountryCode'] = selectedCountryCode
	   
	   
	   if( multiAvailAccCount == 4)
	   {
		loopTrueFalse = false
	   //console.log(' gotAccountDetailsObject:', gotAccountDetailsObject);
	   console.log(' multipleAvailableAccountsObj:', multipleAvailableAccountsObj);
	   
	    var storeCreatedOrNot = await createKeyValueStore( token, storeID, recordKey, storeName ) 
		 if ( storeCreatedOrNot['error']==undefined ) {
			 //await putRecord( token, storeID, recordKey, storeName, gotAccountDetailsObject )
			 await putRecord( token, storeID, recordKey, storeName, multipleAvailableAccountsObj )
		 }
		//await runApifyActor( gotAccountDetailsObject )
		
		// original account runner code
		//await runApifyActor( multipleAvailableAccountsObj, retrievedData )
		
	  }
	  else
	  {
		//creditAvailOrNot==true
		checkedAccountForTodayStr = availableAccountForTodayStr
	  }
	  
	  
	  
	  }
	  else
	  {
		//creditAvailOrNot==true
		checkedAccountForTodayStr = availableAccountForTodayStr
	  }
      
	  //console.error('tempcount:', tempcount);
	  
	   if( tempcount==10 )
	  {
	  //loopTrueFalse = false
	  }
	  
	}
	}
	
	await runApifyActor( multipleAvailableAccountsObj, retrievedData )
      
    } catch (error) {
        console.error('Error:', error);
    }
	
	console.log("got one account.. now we can start fetching data")
	

	
}


async function runApifyActor( accountDetailsObject, retrievedData )
{
	
	//console.log( retrievedData )
	
	//var deviceTypes = [ 'mobile','desktop' ];
	var deviceTypes = [ 'desktop','desktop' ];

	// Generate a random index
	var randomIndex = Math.floor(Math.random() * deviceTypes.length);

	// Use the random index to get a random device type
	var selectedDeviceType = deviceTypes[randomIndex];

	//console.log(randomDeviceType);
	
	
	console.log( 'running actor for this account', accountDetailsObject)
	//for(var i=0;i<Object.keys(accountDetailsObject["accountToBeUsed"]).length;i++)	{
		
		//var availableAccountForTodayStr = Object.keys(accountDetailsObject["accountToBeUsed"])[i]
		var whichAccountTurn = accountDetailsObject["whichAccountTurn"]
		var availableAccountForTodayStr = Object.keys(accountDetailsObject["accountToBeUsed"])[ whichAccountTurn ]
		var personalAPIToken = accountDetailsObject["accountToBeUsed"][availableAccountForTodayStr]["personalAPIToken"]
		//var selectedCountry = countriesArray[i]
		//var selectedCountryCode = countryCodes[selectedCountry]
		//var selectedCountryCode = accountDetailsObject["accountToBeUsed"][availableAccountForTodayStr]["selectedCountryCode"]
		var selectedCountryCode = accountDetailsObject["selectedCountryCode"]
		
		console.log( selectedCountryCode, availableAccountForTodayStr, personalAPIToken )
		
		
		await apifyActor( personalAPIToken, availableAccountForTodayStr, selectedCountryCode, selectedDeviceType )
	//}
	
}

async function apifyActor( token, availableAccountForTodayStr, selectedCountryCode, selectedDeviceType )
{
	
	try {
const webhookObjectArray = [
  {
    eventTypes: ['ACTOR.RUN.FAILED'],
    requestUrl: 'https://example.com/run-failed',
  },
  {
    eventTypes: ['ACTOR.RUN.SUCCEEDED'],
    requestUrl: 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-test-deri-458/runs',
    //ORIGINAL DATABASE
	payloadTemplate: '{ "datasetId": {{resource.defaultDatasetId}}, "apiKey": "AIzaSyBXNKL0XqFnP-6ditzU2_Ylim_p9RaKPQ0","authDomain": "nse-data-saving-2023-5hf5fgdrg.firebaseapp.com", "projectId": "nse-data-saving-2023-5hf5fgdrg","collectionName": "apify" }',
    //TESTING DATABASE
	//payloadTemplate: '{ "datasetId": {{resource.defaultDatasetId}}, "apiKey": "AIzaSyACT33FgxL-YBE443rdFT6qZzbUPksYae4","authDomain": "newtest13235466.firebaseapp.com","projectId": "newtest13235466","collectionName": "apify" }',
  },
];

// Step 2: Base64 encode the string
// var webhookBase64Str = btoa( JSON.stringify(webhookObjectArray) );
var webhookBase64Str =  Buffer.from( JSON.stringify(webhookObjectArray) ).toString('base64');




//fetching https://api.apify.com/v2/acts/fdg43jkg33455~abc-web-test/runs?token=apify_api_GEwtyKRg7o18ySWGTlOSvW71r3Oje042gOPO
//saving https://api.apify.com/v2/acts/fdg43jkg33455~abc-test/runs?token=apify_api_GEwtyKRg7o18ySWGTlOSvW71r3Oje042gOPO
//webhook W3siZXZlbnRUeXBlcyI6WyJBQ1RPUi5SVU4uRkFJTEVEIl0sInJlcXVlc3RVcmwiOiJodHRwczovL2V4YW1wbGUuY29tL3J1bi1mYWlsZWQifSx7ImV2ZW50VHlwZXMiOlsiQUNUT1IuUlVOLlNVQ0NFRURFRCJdLCJyZXF1ZXN0VXJsIjoiaHR0cHM6Ly9hcGkuYXBpZnkuY29tL3YyL2FjdHMvZmRnNDNqa2czMzQ1NX5hYmMtdGVzdC9ydW5zIiwicGF5bG9hZFRlbXBsYXRlIjoieyBcImRhdGFzZXRJZFwiOiB7e3Jlc291cmNlLmRlZmF1bHREYXRhc2V0SWR9fSwgXCJhcGlLZXlcIjogXCJBSXphU3lBQ1QzM0ZneEwtWUJFNDQzcmRGVDZxWnpiVVBrc1lhZTRcIixcImF1dGhEb21haW5cIjogXCJuZXd0ZXN0MTMyMzU0NjYuZmlyZWJhc2VhcHAuY29tXCIsXCJwcm9qZWN0SWRcIjogXCJuZXd0ZXN0MTMyMzU0NjZcIixcImNvbGxlY3Rpb25OYW1lXCI6IFwiYXBpZnlcIiB9In1d


//request.open('POST', 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-web-test/runs?token=apify_api_GEwtyKRg7o18ySWGTlOSvW71r3Oje042gOPO');
//request.open('POST', 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-test/runs?token=apify_api_GEwtyKRg7o18ySWGTlOSvW71r3Oje042gOPO');
//request.open('POST', 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-test/runs?token=apify_api_GEwtyKRg7o18ySWGTlOSvW71r3Oje042gOPO&webhooks=W3siZXZlbnRUeXBlcyI6WyJBQ1RPUi5SVU4uRkFJTEVEIl0sInJlcXVlc3RVcmwiOiJodHRwczovL2V4YW1wbGUuY29tL3J1bi1mYWlsZWQifSx7ImV2ZW50VHlwZXMiOlsiQUNUT1IuUlVOLlNVQ0NFRURFRCJdLCJyZXF1ZXN0VXJsIjoiaHR0cHM6Ly9hcGkuYXBpZnkuY29tL3YyL2FjdHMvZmRnNDNqa2czMzQ1NX5hYmMtdGVzdC9ydW5zIiwicGF5bG9hZFRlbXBsYXRlIjoieyBcImRhdGFzZXRJZFwiOiB7e3Jlc291cmNlLmRlZmF1bHREYXRhc2V0SWR9fSwgXCJhcGlLZXlcIjogXCJBSXphU3lBQ1QzM0ZneEwtWUJFNDQzcmRGVDZxWnpiVVBrc1lhZTRcIixcImF1dGhEb21haW5cIjogXCJuZXd0ZXN0MTMyMzU0NjYuZmlyZWJhc2VhcHAuY29tXCIsXCJwcm9qZWN0SWRcIjogXCJuZXd0ZXN0MTMyMzU0NjZcIixcImNvbGxlY3Rpb25OYW1lXCI6IFwiYXBpZnlcIiB9In1d');
//var token = 'apify_api_hHNLPpVbwsdaDprhfVUgUJoL3PCHl936Vt23'

//var pageFunctionStr =  "\n\n//Original Database\n//https://api.apify.com/v2/acts/fdg43jkg33455~abc-test-deri-458/runs\n//{ \"datasetId\": {{resource.defaultDatasetId}}, \"apiKey\": \"AIzaSyBXNKL0XqFnP-6ditzU2_Ylim_p9RaKPQ0\",\"authDomain\": \"nse-data-saving-2023-5hf5fgdrg.firebaseapp.com\", \"projectId\": \"nse-data-saving-2023-5hf5fgdrg\",\"collectionName\": \"apify\" }\n// */6 09-15 * * 1-5\n\n\n//Testing Database\n//https://api.apify.com/v2/acts/fdg43jkg33455~abc-test-deri-458/runs\n//{ \"datasetId\": {{resource.defaultDatasetId}}, \"apiKey\": \"AIzaSyACT33FgxL-YBE443rdFT6qZzbUPksYae4\",\"authDomain\": \"newtest13235466.firebaseapp.com\",\"projectId\": \"newtest13235466\",\"collectionName\": \"apify\" }\n// */6 09-15 * * 1-5\n\n\n// The function accepts a single argument: the \"context\" object.\n// For a complete list of its properties and functions,\n// see https://apify.com/apify/web-scraper#page-function \nasync function pageFunction(context) {\n\t\n\tvar whichHalf = ''\n\n\twhichHalf = 'firstHalf'\n\t//whichHalf = 'secondHalf'\n\t//whichHalf = 'thirdHalf'\n\t//whichHalf = 'fourthHalf'\n\t//whichHalf = 'fifthHalf'\n\t//whichHalf = 'sixthHalf'\n\t\n\t\n\tfunction convertIntoSeconds(time) {\n\t\tvar ts = time.split(':');\n\t\treturn Date.UTC(1970, 0, 1, ts[0], ts[1], ts[2]) / 1000;\n\t}\n\t// This statement works as a breakpoint when you're trying to debug your code. Works only with Run mode: DEVELOPMENT!\n\t// debugger; \n\n\t// jQuery is handy for finding DOM elements and extracting data from them.\n\t// To use it, make sure to enable the \"Inject jQuery\" option.\n\tvar $ = context.jQuery;\n\t//const pageText = $('pre').text();\n\tvar pageText = $('pre').text();\n\t//const pageText = $('pre')['timestamp'];\n\n\tcontext.log.info(`URL: ${context.request.url}, TITLE: ${pageText}`);\n/*\n\tif ( context.request.url=='https://www.nseindia.com/api/market-data-pre-open?key=FO') \n\t{\t\n\t\tcontext.log.info(`URL: ${context.request.url}, TITLE: ${pageText}`);\n\n\t\t\t var jsonData = $.parseJSON( pageText );\n\n\t// Print some information to actor log\n\n\tcontext.log.info(jsonData['data'][0]['metadata']['symbol'])\n\n\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/option-chain-indices?symbol='+jsonData['data'][0]['metadata']['symbol'] });\n\t}\n*/\n\n\nvar urlsToBeFetchedArray = []\nasync function fetchMultipleUrls(urls) {\n  const promises = urls.map(url =>\n    fetch(url)\n      .then(response => {\n        if (response.status === 404 || response.status === 400) {\n           context.log.info(`URL ${url} returned a ${response.status} status.`);\n          //return {}; // Return an empty object for 404 and 400 errors\n          return {}; // Return an empty object for 404 and 400 errors\n        }\n        if (!response.ok) {\n          // Handle non-OK responses here (e.g., other error status codes)\n           context.log.info(`Failed to fetch ${url}. Status: ${response.status}`);\n          //throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);\n\t\t  //return {}; \n\t\t  return {}; \n        }\n        return response.json();\n      })\n      .catch(error => {\n        context.log.info(`Error while fetching ${url}: ${error}`);\n        return {}; // Return an empty object in case of an error\n      })\n  );\n\n  return Promise.all(promises);\n}\n\nfunction isObjectBlank(obj) {\n  // Check if the object is null or undefined\n  if (obj === null || obj === undefined) {\n    return true;\n  }\n\n  // Check if the object has no own properties\n  for (const key in obj) {\n    if (obj.hasOwnProperty(key)) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n  \n  \n\n\n\t\tvar counter = 0\n\nif ( context.request.url.includes('https://www.nseindia.com/api/quote-derivative')==true )\n\t{\t\n\t\n\t\tvar jsonData = $.parseJSON( pageText );\n\t\tvar allSymbolArray = jsonData['allSymbol'].sort()\n\n\t\tvar start = 0\n\t\tvar end = 0\n\t\t\n\t\tvar number = allSymbolArray.length;\n\t\tvar half =  Math.floor(number / 6);\n\t\t//splitting into 6 parts\n\t\tif( whichHalf== 'firstHalf' )\n\t\t{\n\t\n\t\t\tstart = 0\n\t\t\tend = half\n\t\t}\n\t\tif( whichHalf== 'secondHalf' )\n\t\t{\n\t\t\n\t\t\tstart = half\n\t\t\tend = 2*half\n\t\t}\n\t\telse if( whichHalf== 'thirdHalf' )\n\t\t{\n\t\t\tstart = 2*half\n\t\t\tend = 3*half\n\t\t}\n\t\telse if( whichHalf== 'fourthHalf' )\n\t\t{\n\t\t\tstart = 3*half\n\t\t\tend = 4*half\n\t\t}\n\t\telse if( whichHalf== 'fifthHalf' )\n\t\t{\n\t\t\tstart = 4*half\n\t\t\tend = 5*half\n\t\t}\n\t\telse if( whichHalf== 'sixthHalf' )\n\t\t{\n\t\t\tstart = 5*half\n\t\t\tend = number\n\t\t}\n\t\t\n\t\t\n\t\tvar difference = end - start\n\t\t\n\t\t//for firstHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=ACC')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=AXISBANK' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\n\t\t//for secondHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=BSOFT')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=DLF' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\n\t\t//for thirdHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=HAL')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=HDFCBANK' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\n\t\t//for fourthHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=INFY')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=ITC' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\n\t\t//for fifthHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=MRF')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=ONGC' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\t\t\n\t\t//for sixthHalf\n\t\tif ( context.request.url =='https://www.nseindia.com/api/quote-derivative?symbol=TCS')\n\t\t{\n\t\t\tend = end - Math.floor(difference / 2);\n\t\t}\n\t\telse if ( context.request.url == 'https://www.nseindia.com/api/quote-derivative?symbol=TITAN' )\n\t\t{\n\t\t\tstart = start + (Math.floor(difference / 2));\n\t\t}\n\t\t\n\n\n\t\tcontext.log.info(\"start \" + start+\", end \" + end)\n\n\n\t\tfor(var i=start;i<end;i++)\n\t\t//for(var i=start;i<3;i++)\n\t\t{\n\t\t\tvar symbol = allSymbolArray[i].replace(/&amp;/g,'%26').replace(/&/g,'%26')\n\n\t\t\tif(counter == 10)\n\t\t\t{\n\t\t\t\tcounter=0\n\t\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol='+ symbol });\n\t\t\t\t\n\t\t\t\t//context.log.info( 'https://www.nseindia.com/get-quotes/derivatives?symbol='+ symbol );\n\t\t\t}\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol='+ symbol });\n\t\t\t\n\t\t\turlsToBeFetchedArray.push( 'https://www.nseindia.com/api/quote-derivative?symbol='+ symbol ); \n\t\t\t\n\t\tcounter = counter+1;\n\t\t}\n\n\n\n\ntry {\n \nvar urls =[]\nvar combinedData =[]\n  urls = urlsToBeFetchedArray\n //context.log.info( urls )\nvar fetchedUrlCounter = 0\n\tvar fetchedDataArray = await fetchMultipleUrls(urls);\n//pageText = fetchedDataArray\n    // Loop through and print the fetched data\n    fetchedDataArray.forEach((data, index) => {\n\t\tif( isObjectBlank(data)==false ) // if object is not blank\n\t\t{\n\t\t\tvar fetchedUrl = urls[index]\n\t\t\tvar fetchedData = data\n\t\t\t\n\t\t\tfetchedUrlCounter = fetchedUrlCounter+1\n\t\n     context.log.info(`Result for URL ${urls[index]}:` + JSON.stringify(fetchedData) );\n\t combinedData.push(\n\t {\n\t\t \"url\":fetchedUrl,\n\t\t \"pageText\":fetchedData\n\t })\n\t}\n    });\n \n pageText = combinedData\n context.log.info( 'fetched URLs: '+ fetchedUrlCounter+ '/' + urls.length );\n\t\n  } catch (error) {\n    context.log.info('Error accessing fetched data:', error);\n  }\n\n\t\t//context.log.info(`URL: ${context.request.url}, jsonData: ${jsonData['timestamp']}`);\n//context.log.info(`URL: ${context.request.url}, jsonData: ${pageText}`);\n\n\t}\n\n\n\t\n\n\n\n\n\t// Manually add a new page to the queue for scraping.\n\n\tvar options = {\n\t\ttimeZone: 'Asia/Kolkata',\n\t\tyear: 'numeric',\n\t\tmonth: '2-digit',\n\t\tday: '2-digit',\n\t\thour: '2-digit',\n\t\tminute: '2-digit',\n\t\tsecond: '2-digit',\n\t\thour12: false\n\t};\n\n\tvar currentTime = new Date().toLocaleString('en-IN', options);\n\tvar currentTimeHMS = new Date().toLocaleString('en-IN', options).split(' ')[1];\n\t//context.log.info(`currentTime: ${currentTime}, currentTimeHMS: ${currentTimeHMS}`);\n\n\n\t// pre market urls\n\tif (convertIntoSeconds(currentTimeHMS) > convertIntoSeconds('09:15:00') )\n\t//if (convertIntoSeconds(currentTimeHMS) > convertIntoSeconds('09:15:00') && convertIntoSeconds(currentTimeHMS) <= convertIntoSeconds('15:45:00')) \n\t{\n\t\t\n\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/' });\n\t\t\n\t\tif( whichHalf== 'firstHalf' )\n\t\t{\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=ACC' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=ACC' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=AXISBANK' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=AXISBANK' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=NIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=NIFTY' });\n\t\t\t\n\n\t\t}\n\t\tif( whichHalf== 'secondHalf' )\n\t\t{\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=BSOFT' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=BSOFT' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=DLF' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=DLF' });\t\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=BANKNIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=BANKNIFTY' });\n\t\t\t\n\t\t}\n\t\telse if( whichHalf== 'thirdHalf' )\n\t\t{\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=HAL' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=HAL' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=HDFCBANK' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=HDFCBANK' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=FINNIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=FINNIFTY' });\n\t\t\t\n\t\t}\n\t\telse if( whichHalf== 'fourthHalf' )\n\t\t{\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=INFY' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=INFY' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=ITC' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=ITC' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=MIDCPNIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=MIDCPNIFTY' });\n\t\t\t\n\n\t\t}\n\t\telse if( whichHalf== 'fifthHalf' )\n\t\t{\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=MRF' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=MRF' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=ONGC' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=ONGC' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=MIDCPNIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=MIDCPNIFTY' });\n\t\t\t\n\t\t}\n\t\telse if( whichHalf== 'sixthHalf' )\n\t\t{\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=TCS' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=TCS' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=TITAN' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=TITAN' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=MIDCPNIFTY' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=MIDCPNIFTY' });\n\t\t\t\n\n\t\t}\n\t\telse\n\t\t{\n\t\t\t/*\n\t\t\t\n\t\t\t// check if current time is greater than or equal to 9 am\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=TCS' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=TCS' });\n\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=INFY' });\n\t\t\tawait context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=INFY' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=TATAMOTOR' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=TATAMOTOR' });\n\t\t\t\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/get-quotes/derivatives?symbol=RELIANCE' });\n\t\t\t//await context.enqueueRequest({ url: 'https://www.nseindia.com/api/quote-derivative?symbol=RELIANCE' });\n\t\t*/\n\t\t}\n\t\t\n\t}\n\n\t \nif ( context.request.url.includes('https://www.nseindia.com/api/quote-derivative')==true )\n\t{\n\t// Return an object with the data extracted from the page.\n\t// It will be stored to the resulting dataset.\n\treturn {\n\t\turl: context.request.url,\n\t\tpageText,\n\t};\n}\n\t\n}"

	


var body = {
    "browserLog": false,
    "browserType": "chrome",
    "closeCookieModals": false,
    "debugLog": false,
    "deviceType": selectedDeviceType,
    "downloadCss": true,
    "downloadMedia": true,
    "headless": false,
    "ignoreCorsAndCsp": false,
    "ignoreSslErrors": false,
    "keepUrlFragments": false,
    "maxConcurrency": 1,
    "maxCrawlingDepth": 0,
    "maxPagesPerCrawl": 0,
    "maxRequestRetries": 3,
    "maxResultsPerCrawl": 0,
    "maxScrollHeightPixels": 5000,
    "pageFunction": "async function pageFunction(context) {\n    const { page, request, log, frame, Actor, Apify } = context;\n    const title = await page.title();\n    log.info(`URL: ${request.url} TITLE: ${title}`);\n    \n  //  await context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/2023/06/intraday-trade-ideas.html' })\n   // await context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/2023/04/Make-Money-in-Your-Spare-Time-How-to-Participate-in-Paid-Surveys-and-Focus-Groups-for-Extra-Cash.html' })\n  //  await context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/2023/02/challenges-people-face-in-creating.html' })\n   // await context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/2023/03/Day-Trading-for-Dummies-Book-Summary-with-Important-Key-Points-by-Ann-C-Logue.html' })\n  \n   var pageUrl = page.url();\n\n\n//if( pageUrl=='https://skillwealth.blogspot.com/')\nif( title=='Skill Wealth - Skill Up to Wealth')\n{\n    // Extract all URLs with .html extension from the home page\n        //const pageUrls = await page.$$eval('a[href$=\".html\"]', links => links.map(link => link.href));\n        const pageUrls = await page.$$eval('a[href$=\".html\"]:not([href*=\"/p/\"])', links => links.map(link => link.href));\n\n            // Generate a random number between 1 and 5\n            var randomNumber = Math.floor(Math.random() * 4) + 2;\n            //console.log(randomNumber);\n\n            // Shuffle the array to get random URLs\n                const shuffledUrls = pageUrls.sort(() => Math.random() - 0.5);\n\n                    // Enqueue the first 5 URLs\n                        //const queue = await Apify.openRequestQueue();\n                            //for (let i = 0; i <shuffledUrls.length; i++) {\n                            //for (let i = 0; i <3; i++) {\n                            for (let i = 0; i <randomNumber; i++) {\n                                    await context.enqueueRequest({ url: shuffledUrls[i] });\n                            }\n                                        \n}\n  //await context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/2023/02/the-role-of-subconscious-mind-in-trading.html' })\n     \n\n    // Generate a random number between 15 and 25\n    var randomNumber = Math.floor(Math.random() * 11) + 15;\n    console.log('wating for',randomNumber);\n    await page.waitForTimeout( randomNumber*1000 );   \n\n\n{\n// this code to is to check if there is \"Consent\" button then click on it for Europen Countries\n//added on 19-Jan-2023\n\nconst consentButtonSelector = '.fc-cta-consent'; // Replace with the actual selector of the \"Consent\" button\n\n// Check if the \"Consent\" button is present in the DOM\nconst isConsentButtonAvailable = await page.$(consentButtonSelector);\n\nif (isConsentButtonAvailable) {\n    // If the button is available, click on it\n    await page.$eval(consentButtonSelector, button => button.click());\n    console.log('Clicked on the \"Consent\" button.');\n} else {\n    console.log('The \"Consent\" button is not available.');\n}\n\n}\n\n/*\n{\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n        //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n        const screenshotName = ( request.url.slice(0,50)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n        // Save the screenshot to the default key-value store\n        await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n*/\n\n\n\n    /*\n    await page.evaluate(() => {\n        window.scrollTo(0, document.body.scrollHeight);\n    });\n    */\n\n    /*\n        const scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n    const viewportHeight = await page.evaluate(() => window.innerHeight);\n    \n\n     let scrollY = 0;\n        while (scrollY < scrollHeight) {\n        await page.evaluate((y) => {\n            window.scrollBy(0, y);\n        }, viewportHeight);\n\n        // Add a delay after each scroll step to make it slow\n        await page.waitForTimeout(500); // Adjust the delay time as needed\n\n        scrollY += viewportHeight;\n    }\n\n    */\n\n\n    {\n        // code to randomly scroll random times waiting for random times after each scroll\n        \n        // Generate a random number between 3 and 10 of scroll actions\n        const scrollCount = Math.floor(Math.random() * 6) + 5;\n\n        for (let i = 0; i < scrollCount; i++) {\n            // Generate random scroll positions\n            const x = Math.floor(Math.random() * (await page.evaluate(() => document.documentElement.scrollWidth)));\n            const y = Math.floor(Math.random() * (await page.evaluate(() => document.documentElement.scrollHeight)));\n\n            \n\n            // Perform the scroll action\n            await page.evaluate((scrollX, scrollY) => {\n            window.scrollTo(scrollX, scrollY);\n            }, x, y);\n\n            // Wait for a random amount of time before the next scroll action\n            const delay = Math.floor(Math.random() * 4000) + 1000;\n\n            console.log('scrolling '+(i+1)+'x/'+scrollCount+': ',x,y,'wating for',delay)\n\n            await page.waitForTimeout(delay);\n        }\n\n\n    }\n\n\n    // Generate a random number between 15 and 25\n    var randomNumber = Math.floor(Math.random() * 11) + 15;\n    console.log('wating for',randomNumber);\n    await page.waitForTimeout( randomNumber*1000 );   \n\n    //await page.waitForTimeout(5000);   \n\n    \n    \n{\n// this code to is to check if there is \"Consent\" button then click on it for Europen Countries\n//added on 19-Jan-2023\n\nconst consentButtonSelector = '.fc-cta-consent'; // Replace with the actual selector of the \"Consent\" button\n\n// Check if the \"Consent\" button is present in the DOM\nconst isConsentButtonAvailable = await page.$(consentButtonSelector);\n\nif (isConsentButtonAvailable) {\n    // If the button is available, click on it\n    await page.$eval(consentButtonSelector, button => button.click());\n    console.log('Clicked on the \"Consent\" button.');\n} else {\n    console.log('The \"Consent\" button is not available.');\n}\n\n}\n\n\nvar myStoredValue = await Actor.getValue('myStoredValue');\nvar myStoredPageCounter = await Actor.getValue('myStoredPageCounter');\nif( myStoredPageCounter==null )\n{\n   \n    //console.log( 'storing myStoredPageCounter in key-value store' )\n    myStoredPageCounter = \"1\";\n    console.log( 'myStoredPageCounter as Page No.:', myStoredPageCounter )\n    await Actor.setValue('myStoredPageCounter', myStoredPageCounter, { contentType: 'text/plain' });\n    \n}\nelse\n{\n    myStoredPageCounter = (parseInt(myStoredPageCounter, 10) + 1).toString(); // The second parameter is the radix, which is 10 for decimal numbers\n    console.log( 'myStoredPageCounter as Page No.:', myStoredPageCounter )\n    await Actor.setValue('myStoredPageCounter', myStoredPageCounter, { contentType: 'text/plain' });\n}\n\n\nawait context.enqueueRequest({ url: 'https://skillwealth.blogspot.com/' })\n     \n\n\n\n\n//below code checks opened ads (Starts here)\n\nconst framesTemp = page.frames();\nvar availAdNumber = 0\nvar specificAvailAdNumber = 0\nfor (const frame of framesTemp) {\n     //if(frame.name().includes('aswift')==true)\n     {\n   var links = await frame.$$eval('a', anchors => anchors.map(anchor => ({\n                    href: anchor.href,\n                    text: anchor.innerHTML, // Get the text content of the link\n                    target:anchor.target,\n                    anchor:anchor.outerHTML,\n                })));\n\n     var serviceLinks = links.filter(link => \n                link.href.includes('googleadservices.com') ||\n                link.href.includes('googleads') ||\n                link.text.includes('<canvas') ||\n                link.href.includes('doubleclick') \n                );\n\n  var specificLinks = links.filter(link => \n                link.href.includes('googleadservices.com')\n                );\n           \n           \n if (specificLinks.length > 0 ) \n{\n    specificAvailAdNumber = specificAvailAdNumber+1\n}\n\n if (serviceLinks.length > 0 ) \n{\n         availAdNumber = availAdNumber+1\n/*\n         await frame.evaluate(() => {\n                        //trying to scroll each frame into view\n                        window.scroll({ top: 0, left: 0, behavior: 'smooth' });\n                    });\n\n\n                      await page.waitForTimeout(2000);   \n\n                  {\n                        console.log('taking snapshot inside opened ad after reload');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"reviewAD\"+ ( request.url.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n\n */\n     }\n     }\n}\n\nconsole.log(\"available ads:\", availAdNumber,\"/\",framesTemp.length )\nconsole.log(\"specific required ads:\", specificAvailAdNumber,\"/\", availAdNumber )\n\n// Generate a random number between 1 and 5 (inclusive)\n//const clickingAdNumber = Math.floor( Math.random() * availAdNumber ) + 1;\nconst clickingAdNumber = Math.floor( Math.random() * specificAvailAdNumber ) + 1;\n\nconsole.log(\"click will be on this clickingAdNumber\",clickingAdNumber);\n\n//below code checks opened ads (Ends here)\n\n\n\n\n//if( pageUrl=='https://skillwealth.blogspot.com/2023/02/the-role-of-subconscious-mind-in-trading.html')\n//if( pageUrl=='https://skillwealth.blogspot.com/2023/06/intraday-trade-ideas.html')\nif( myStoredValue=='startClck' || myStoredPageCounter > 4 || title=='Skill Wealth - Skill Up to Wealth' && request.url=='https://skillwealth.blogspot.com/')\n{\n    \n    if( myStoredValue==null )\n    {\n        console.log( 'storing myStoredValue in key-value store' )\n        await Actor.setValue('myStoredValue', 'startClck', { contentType: 'text/plain' });\n    }\n\n/*\n    {\n        console.log('taking snapshot before entring frames');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n \n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"beforeEntringFrames\"+  ( request.url.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n*/\n\n\n\ntry {\n\n     if (1 < 5) {\n                   // throw new Error('Random error occurred.');\n                }\n\n const frames = page.frames();\nvar clickedCount = 0\nvar adnumber = 0\nvar requiredAdNumber = 0\n\n            for (const frame of frames) {\n                //adnumber = adnumber+1\n\n                    await frame.evaluate(() => {\n                        //trying to scroll each frame into view\n                        window.scroll({ top: 0, left: 0, behavior: 'smooth' });\n                    });\n\n                 var links2 = await frame.$$eval('a', anchors => anchors.map(anchor => ({\n                    href: anchor.href,\n                    text: anchor.innerHTML, // Get the text content of the link\n                })));\n\n                // Get all links in the current frame\n                  var links = await frame.$$eval('a', anchors => anchors.map(anchor => ({\n                    href: anchor.href,\n                    text: anchor.innerHTML, // Get the text content of the link\n                    target:anchor.target,\n                    anchor:anchor.outerHTML,\n                })));\n\n                 var serviceLinks = links.filter(link => \n                link.href.includes('googleadservices.com') ||\n                link.href.includes('googleads') ||\n                link.text.includes('<canvas') ||\n                link.href.includes('doubleclick') \n                );\n\n                \n                //if(frame.name().includes('aswift')==true)\n                if( serviceLinks.length > 0 )\n                {\n                    // if there are links in ad iframes that means ads are opened\n                    await frame.waitForTimeout(10000);  \n                    \n                    console.log(links);\n\n                    adnumber = adnumber+1\n                    console.log(\"ad number\", adnumber,\"/\",frames.length);\n\n      \n\n                \n\n                /*\n                //commenting on 21-jan-2024\n                 links = links.filter(link =>\n                    link.text.includes('</div><canvas')\n                );\n                */\n                \n                // Filter links that include \"services.com\"\n                //var serviceLinks = links.filter(link => link.href.includes('googleadservices.com'));\n                //var serviceLinks = links.filter(link => link.href.includes('googleads'));\n                //const serviceLinks = links.filter(link => link.href);\n                /*\n                var serviceLinks = links.filter(link => \n                link.href.includes('googleadservices.com') ||\n                link.href.includes('googleads') ||\n                link.text.includes('</div><canvas') ||\n                link.href.includes('doubleclick') \n                );\n                */\n\n                var serviceLinks = links.filter(link => \n                link.href.includes('googleadservices.com') \n                );\n\n                                        \n                if (serviceLinks.length > 0 ) \n                {\n                    requiredAdNumber = requiredAdNumber+1\n                }\n\n                console.log(\"required ad number\", requiredAdNumber,\"/\",frames.length);\n\n                \n                    \n\n                // Click on the first link that includes \"services.com\"\n                //if (serviceLinks.length > 0 && clickedCount<1 && adnumber>4) {\n                //if (serviceLinks.length > 0 && clickedCount<1 && adnumber>4 && adnumber<frames.length) {\n                //if (serviceLinks.length > 0 && clickedCount<1 && adnumber<frames.length) {\n                //if (serviceLinks.length > 0 && adnumber<frames.length) {\n                //if (serviceLinks.length > 0 && adnumber<frames.length && adnumber>=clickingAdNumber ) {\n                if (serviceLinks.length > 0 && requiredAdNumber<frames.length && requiredAdNumber>=clickingAdNumber ) {\n                    clickedCount= clickedCount+1\n/*\n                    const clickedElement = await Promise.all([\n  // The navigation promise resolves after navigation has finished\n  frame.waitForNavigation(),\n  // Clicking the link will indirectly cause a navigation\n  frame.click(`a[href=\"${serviceLinks[0].href}\"]`),\n]);\n\nconsole.log(`Clicked element ${clickedElement}`);\n\n*/\n                   \n                   {\n                        console.log('taking snapshot before clicking ads');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"beforeClickingAD\"+ ( request.url.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n\n\n\n                    //console.log(`Clicked on link in frame ${serviceLinks[0].href}`);\n                    console.log(`anchor tag in frame`);\n                     console.log(serviceLinks[0]);\n\n                    await frame.click(`a[href=\"${serviceLinks[0].href}\"]`);\n                    console.log(`Clicked on link in frame ${frame.name()}: ${serviceLinks[0].text}`);\n                    \n                      console.log(`Ad has been clicked so waiting for 55 seconds`);\n                      await frame.waitForTimeout(55000);   \n                      \n                    console.log(links);\n                    console.log(`done!`);\n                    //return;\n                }\n            }\n}\n\n}\ncatch (error) {\n  // Code to handle the exception\n  console.error(\"An error occurred:\", error.message);\n  if( (error.message).toLocaleLowerCase().includes('detached frame')==true )\n{\n  var newPageUrl = await page.url();\n    console.log(\"newPageUrl\",newPageUrl);\n    \n  //var newPageContent = await page.content();\n   //console.log(\"newPageContent\",newPageContent);\n\n    //console.log(`waiting for 10 seconds`);\n    //await page.waitForTimeout(10000);  \n    // request.abort('failed'); \n\n    \n        var scrollHeight = await page.evaluate(() => document.body.scrollHeight);\n    var viewportHeight = await page.evaluate(() => window.innerHeight);\n    \n\n     let scrollY = 0;\n        while (scrollY < scrollHeight) {\n        await page.evaluate((y) => {\n            window.scrollBy(0, y);\n        }, viewportHeight);\n\n        // Add a delay after each scroll step to make it slow\n        await page.waitForTimeout(500); // Adjust the delay time as needed\n\n        scrollY += viewportHeight;\n    }\n\n    await page.waitForTimeout(10000);   \n    var newPageUrls = await page.$$eval('a[href$=\".html\"]:not([href*=\"/p/\"])', links => links.map(link => link.href));\n    var links = await page.$$eval('a', anchors => anchors.map(anchor => ({\n                    href: anchor.href,\n                    text: anchor.innerHTML, // Get the text content of the link\n                    target:anchor.target,\n                    anchor:anchor.outerHTML,\n                })));\n\n                // console.log(links);\n\n    console.log(\"newPageUrls\",newPageUrls);\n\n    console.log(`after scrolling opened AD's page waiting for 50 seconds`);\n    await page.waitForTimeout(50000);   \n\n/*\n                  {\n                        console.log('taking snapshot inside opened ad before reload');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"insideAD\"+ ( newPageUrl.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n*/\n\n    await page.reload();\n\n     console.log(`again waiting for 50 seconds`);\n    await page.waitForTimeout(50000);   \n\n await page.evaluate(() => {\n                        //trying to scroll top of page\n                        window.scroll({ top: 0, left: 0, behavior: 'smooth' });\n                    });\n\n\n                  {\n                        console.log('taking snapshot inside opened ad after reload');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"insideAD\"+ ( newPageUrl.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n\n\n  try {\n       // Execute a script in the page context to get the reference to the third anchor element\n            var thirdLink = await page.evaluate(() => {\n                var links = document.getElementsByTagName('a');\n                if (links.length >= 3) {\n                    return links[0];\n                } else {\n                    return null;\n                }\n            });\n\n          \n            // Check if the third link reference is obtained\n            if ( thirdLink!=undefined && thirdLink!=null ) {\n                // Click on the third link\n                await page.click(`a[href=\"${thirdLink.getAttribute('href')}\"]`);\n\n                // Wait for the new page to load if necessary\n                //await page.waitForNavigation({ waitUntil: 'domcontentloaded' });\n\n                // Now you are on the third link's destination page\n                // You can perform further actions or scraping here\n\n            await page.waitForTimeout(15000);   \n            var newPageUrl = await page.url();\n             console.log(\"newPageUrl\",newPageUrl);\n    \n\n\n            } else {\n                console.log('There are less than three links on the page.');\n            }\n            }\n            catch (error2) {\n                console.error(\"An error occurred:\", error2.message);\n             //console.log('Now you can abort actor run!');\n            }\n            finally{\n\n\n/*\n                  {\n                        console.log('taking snapshot inside opened ad');\n//below code is to take screen shot with or without page's html code file\n    \n    //await page.screenshot(); //take & save normal screen shot without page's html code file\n    //await context.saveSnapshot(); //take & save screen shot with page's html code file\n\n    const screenshot = await page.screenshot();\n    // Convert the URL into a valid key\n    //const key = request.url.replace(/[:/]/g, '_')+(new Date().getTime());\n    //const key = title.replace(/[:/]/g, '_')+(new Date().getTime());\n    const screenshotName =\"insideAD\"+ ( newPageUrl.slice(0,15)+(new Date().getTime()) ).replace(/[:/]/g, '_')\n    // Save the screenshot to the default key-value store\n    await Actor.setValue(screenshotName, screenshot, { contentType: 'image/png'});\n}\n*/\n\n            const runId = Apify.getEnv().actorRunId;\n            // Print the run ID\n            console.log(`Now aborting this actor with Actor Run ID: ${runId}`);\n            await Actor.abort(runId);\n\n            }\n                    \n      \n      \n            \n\n\n}\n\n} \n\n}\n\nif (clickedCount>0) {\n    \n  \n\n    //await page.waitForTimeout(10000);   \n\n}\n\n\n\n    /*\n    return {\n        url: request.url,\n        title\n    };\n    */\n}",
    "pageFunctionTimeoutSecs": 1200,
    "pageLoadTimeoutSecs": 1200,
    "postNavigationHooks": "// We need to return array of (possibly async) functions here.\n// The functions accept a single argument: the \"crawlingContext\" object.\n[\n    async (crawlingContext) => {\n        const { page } = crawlingContext;\n        // ...\n    },\n]",
    "preNavigationHooks": "// We need to return array of (possibly async) functions here.\n// The functions accept two arguments: the \"crawlingContext\" object\n// and \"gotoOptions\".\n[\n    async (crawlingContext, gotoOptions) => {\n        const { page } = crawlingContext;\n        // ...\n    },\n]",
    "proxyConfiguration": {
        "useApifyProxy": true,
        "apifyProxyGroups": [
            "RESIDENTIAL"
        ],
        "apifyProxyCountry": selectedCountryCode
    },
    "proxyRotation": "UNTIL_FAILURE",
    "startUrls": [
        {
            "url": "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://skillwealth.blogspot.com/%3Fm%3D1&ved=2ahUKEwio3oTf-fCCAxUYTWwGHZhtDTkQFnoECBEQAQ&usg=AOvVaw2855pXzWzvX3Q7Ql-3qiz6"
        }
    ],
    "useChrome": true,
    "waitUntil": [
        "networkidle2"
    ]
}



//var url = 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-web-test-deri/runs?token='+token+'&webhooks=' + webhookBase64Str 
//var url = 'https://api.apify.com/v2/acts/fdg43jkg33455~abc-pupp-scrap-test-clk/runs?token='+token
//var url = 'https://api.apify.com/v2/acts/xrhibiyftd~my-actr-testing-2/runs?token='+token
//var url = 'https://api.apify.com/v2/acts/soosevedhv~actr-test-2/runs?token='+token
//var url = 'https://api.apify.com/v2/acts/kbvhuuvcccch~puppeteer-scraper/runs?token='+token
var url = whichActorToRun+'?token='+token

		var optionsObj = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
			}
			

   
	

    const response = await fetch( url, optionsObj );
    const data = await response.json();
	 console.error('Started Actor :', availableAccountForTodayStr, data);
    //return data;
	
  } catch (error) {
    console.error('Error:', error);
    //return null;
  }
  
  
}


function formatDateWithYear(date) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate().toString().padStart(2, '0');
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}



// Example usage:





// apify key store functions

// get store with storeID

async function getStore( token, storeID, recordKey, storeName ) {
  try {
    //const apiUrl = 'https://api.apify.com/v2/key-value-stores/Ke21ha64h%2FstoreName/records/mykey?token=apify_api_fmCSPb4IMakAbJ0tgbJnhepcn1Wk501sXU64';
    const apiUrl = 'https://api.apify.com/v2/key-value-stores/'+storeID+'/records/'+recordKey+'?token='+token;
    const response = await fetch(apiUrl);
    const data = await response.json();
	 console.error('Got Store data:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

async function createKeyValueStore( token, storeID, recordKey, storeName ) {
	
  try {
    const apiUrl = 'https://api.apify.com/v2/key-value-stores?token='+token+'&name='+storeName;
    const response = await fetch( apiUrl, {  method: 'POST'} );
    const data = await response.json();
	 console.error('Key Value Store Created:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }

}


async function putRecord( token, storeID, recordKey, storeName, passedData  ) {

  try {
		//var storeIdStr = 'Ke21ha64h/testing'.replace(/\//g,'%2F')
		//var recordKey = 'myKey'
	    const url = 'https://api.apify.com/v2/key-value-stores/'+storeID+'/records/'+recordKey+'?token='+token;
		//const body = {    'foo': 'bar'  };
		const body = passedData;
		var optionsObj = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
			}
			

    const response = await fetch( url, optionsObj );
    const data = await response.text();
	 console.error('record is saved :', data);
    //const data = response;
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }


}

//var t=await putRecord()
//console.log( t  );


// Example usage:


async function mainStartingFunction() {
	/*
  var token = "apify_api_fmCSPb4IMakAbJ0tgbJnhepcn1Wk501sXU64";
  var userName = "Ke21ha64h"
  var storeName = "ObjectStoring"
  var recordKey = "myKey"

  // account details of org1 of rakeshkumar
  var token = "apify_api_O7eYr2RukGfbLglzi0g3AVPg9lXHBv0WYiZW";
  var userName = "fdg43jkg33455"
  var storeName = "bloggermyobject"
  var recordKey = "blogmyKey"

   // account details of org2 of Aagiatgyaan
  var token = "apify_api_ynpvzGJipfcMnmt9cLi3k4GqOuIqkJ1drjEZ";
  var userName = "dfdbr475"
  var storeName = "bloggerclckmyobject"
  var recordKey = "blogclckmyKey"
 
   // account details of Org1 of nfilms582@gmail.com
  var token = "apify_api_N5AyrR1nqiDqbiGPuugE1j7aLWUnJz4BF4VF";
  var userName = "U24hsj2hs"
  var storeName = "bloggerclckmyobject"
  var recordKey = "blogclckmyKey"
    
	
  // (30-Jan-2024) account details of org1 of riteshkunar905@proton.me
  var token = "apify_api_J8iIoae3oIEjzwUqhKNxFkluK30P2j1QbWlf";
  var userName = "Jvydfsgxkvknhi"
  var storeName = "bloggerclckmyobject"
  var recordKey = "blogclckmyKey"
  */
  
  // (31-Jan-2024) get automatically token and username of actor
  
  
var environmentVariables = await Apify.getEnv();
var defaultKeyValueStoreId = environmentVariables['defaultKeyValueStoreId'];
var actorToken = environmentVariables['token'];

    // Get information about the currently authenticated user
    var user = await Apify.client.users.getUser();

    // Access the username property
    var authUserName = user.username;
	    // Print the username
    console.log(`Current username: ${authUserName}`);
	console.log('actorToken',actorToken)
	
	console.log('environmentVariables',environmentVariables)
	console.log('defaultKeyValueStoreId',defaultKeyValueStoreId )

  var token = actorToken;
  //var userName = "Jvydfsgxkvknhi"
  var userName = authUserName
  var storeName = "bloggerclckmyobject"
  var recordKey = "blogclckmyKey"
  
  
  
  
  var storeID = userName +'/'.replace(/\//g,'%2F')+storeName
  
  var currentDate = formatDateWithYear( new Date() );
  //var currentDate = formatDateWithYear( new Date("04 Aug 2023") );


  
  // Retrieve data
  var retrievedData = await getStore( token, storeID, recordKey, storeName );
  if ( retrievedData['error']==undefined ) {
    //console.log("Retrieved Data:");
    //console.log(retrievedData);
	if( retrievedData['date']!=undefined && retrievedData['date']==currentDate )
	{
		 console.log( currentDate);
		//await runApifyActor( retrievedData )
		await getOneAccountToBeUsed( token, storeID, recordKey, storeName, currentDate, retrievedData );
	}
	else
	{
		 console.log( "get account");
		 await getOneAccountToBeUsed( token, storeID, recordKey, storeName, currentDate, retrievedData );
	}
   
		
  } else {
    console.log("No data found.");
	 await getOneAccountToBeUsed( token, storeID, recordKey, storeName, currentDate, retrievedData );
  }


}

//getOneAccountToBeUsed();
await mainStartingFunction();
}


Apify.main(async () => {
	
	 	  try {
			  
			 // await startRunningActorProcess();
			  
			  
			  if( runAccordingToSepcificConditions )
			  {  // this block checks if current time is matching this condition "Run every 40 minutes each day. i.e. run at 12:40pm, 01:20pm, so on..."
				  
				var dateOptions = {
				  timeZone: 'Asia/Kolkata',
				};

				  var localDate = new Date().toLocaleString('en-IN', dateOptions);
				  var currentDate = new Date( localDate );
				 // var currentDate = new Date(  );
				//var currentDate = new Date('2023-11-09T20:44:00');
				var midnightDate = new Date(currentDate);
				midnightDate.setHours(0, 0, 0, 0);
				//console.log(midnightDate);

				//var startTime = new Date('2023-01-01T00:00:00'); // Set the start time
				var startTime = midnightDate; // Set the start time

				var interval = 45; // 35 minutes interval
				var extraInterval = 5; // 35 minutes interval
				var currentHour = currentDate.getHours()
				
				if( currentHour >=8 && currentHour <10 || currentHour >=12 && currentHour <13 || currentHour >=16 && currentHour <18  || currentHour >=20 && currentHour <21 )
				{
					interval = 30; // 35 minutes interval
				}
				
				for (var i = 0; i < 120; i++) { // Check against 10 time intervals as an example
					var intervalTime = new Date(startTime.getTime() + i * interval * 60 * 1000);
					var extraIntervalTime = new Date(intervalTime.getTime() + extraInterval * 60 * 1000);
					
					var currentTime2Digit = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
					var intervalTime2Digit = intervalTime.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
					var extraIntervalTime2Digit = extraIntervalTime.toLocaleString([], { hour: '2-digit', minute: '2-digit' })
					
					var currentTimeNumber = currentDate.getTime()
					var intervalTimeNumber = intervalTime.getTime()
					var extraIntervalTimeNumber = extraIntervalTime.getTime()
					
					 //console.log( currentHour,currentMinute,  intervalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),);
					 //console.log( currentTimeNumber, intervalTimeNumber,extraIntervalTimeNumber, intervalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), extraIntervalTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) );
					 console.log( currentTime2Digit +' : '+intervalTime2Digit+' - '+extraIntervalTime2Digit );
					if( currentTimeNumber>=intervalTimeNumber && currentTimeNumber<=extraIntervalTimeNumber )
					{
						console.log('Current time ('+currentTime2Digit+') matches the interval:', intervalTime2Digit+' - '+extraIntervalTime2Digit );
						await startRunningActorProcess();
						break; // If a match is found, exit the loop
					}
					
				}

				  
			  }
			  else
			  {
				  await startRunningActorProcess();
			  }
			  
			
				
	
	} catch (err) {
                //console.log(`Cannot import item ${JSON.stringify(item)}: ${err.message}`);
                console.log(`Error while running main ${err.message} : ${err}`);
            }
});

const COLORS = [
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/2CDA49D666594849AF8EBC8D774397E5.jpg?w=600&h=400&mode=crop",
		text: "03 - LICHTGRAU",
		colorId: "7251 05 167\r",
		subText: "Tilnærmet RAL 7035",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/6DA69B7EC8E74D87BE137F0ADE95DBDF.jpg?w=600&h=400&mode=crop",
		text: "04 - SIGNALGRAU",
		colorId: "7004 05 083\r",
		subText: "Tilnærmet RAL 7004",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/954AF192993C4FAA80D42F7AE9259154.jpg?w=600&h=400&mode=crop",
		text: "07 - ACHTGRAU",
		colorId: "7038 05 167\r",
		subText: "Tilnærmet RAL 7038",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/5A16EA5E305E47F4A1F488CD7310FCA3.JPG?w=600&h=400&mode=crop",
		text: "06 - GRAU - GLATT",
		colorId: "7155 05 083\r",
		subText: "Tilnærmet RAL 7001",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/CBABC4495DBA42A48DD052EB8A206EEB.JPG?w=600&h=400&mode=crop",
		text: "08 - BETONGRAU",
		colorId: "7023 05 167\r",
		subText: "Tilnærmet RAL 7023",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/D61382A8593C473EBF3C1946647347F7.JPG?w=600&h=400&mode=crop",
		text: "09 - TROMPET C-32 N",
		colorId: "02.12.71.00019\r",
		subText: "TIlnærmet RAL 7006",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/CD3FCF4E762648D38321355A0374EB6F.jpg?w=600&h=400&mode=crop",
		text: "11 - QUARZGRAU - GLATT",
		colorId: "F436 7047\r",
		subText: "Tilnærmet RAL 7039",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/895531C45FD54378834C82FBCE35773E.jpg?w=600&h=400&mode=crop",
		text: "12 - FLEMISH GOLD C - 33",
		colorId: "02.12.81.000062\r",
		subText: "Tilnærmet RAL 7013",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/3A034D8D4A4B4252BCE20AAEF767E972.JPG?w=600&h=400&mode=crop",
		text: "14 BASALTGRAU",
		colorId: "436 7048\r",
		subText: "Tilnærmet RAL 7012",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/ECCC0E267AEC4A34994F6715E66666A6.jpg?w=600&h=400&mode=crop",
		text: "15- SCHIEFERGRAU",
		colorId: "7015 05 083\r",
		subText: "Tilnærmet RAL 7015",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/8F63D92B3E64450CB2CE0D264A91EDD0.JPG?w=600&h=400&mode=crop",
		text: "17 - ANTHRAZITGRAU - GLATT",
		colorId: "7016 05 083\r",
		subText: "Tilnærmet RAL 7016",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/D100B12B6F7F4DD4893AABEEDF071F54.jpg?w=600&h=400&mode=crop",
		text: "18 - BRAUN",
		colorId: "02.12.81.000016\r",
		subText: "Tilnærmet RAL 8014",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/B314EFC89BF94169B7568137FBD537E2.jpg?w=600&h=400&mode=crop",
		text: "19 - SCHWARZGRAU",
		colorId: "436 7023\r",
		subText: "Tilnærmet RAL 7021",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/EDED88C79E334603BA922C10B10379DF.JPG?w=600&h=400&mode=crop",
		text: "21 - SCHOKOBRAUN",
		colorId: "8875 05 167\r",
		subText: "Tilnærmet RAL 8017",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/B6DC10DB99CA497199AACB64DD786B05.JPG?w=600&h=400&mode=crop",
		text: "22 - BRAUN MAROON",
		colorId: "8099 05 167\r",
		subText: "Tilnærmet RAL 8017",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/BB7D1F1B165A408D9DBCAA42B348F309.jpg?w=600&h=400&mode=crop",
		text: "23 - ACH C-35",
		colorId: "02 12 81 000065\r",
		subText: "Tilnærmet RAL7022",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/1429F83FE52844ADAB4CE8A6A345B042.jpg?w=600&h=400&mode=crop",
		text: "24 - SCHWARZBRAUN",
		colorId: "8518 05 167\r",
		subText: "Tilnærmet RAL 8022",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/3295588EAE96498AA68A869C985DC646.jpg?w=600&h=400&mode=crop",
		text: "25 - BLACK ULTI-MATT",
		colorId: "02 20 01 000002 047\r",
		subText: "Tilnærmet RAL 9005",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/C2753821592948999C9521A573160438.JPG?w=600&h=400&mode=crop",
		text: "27 - DUNKELROT",
		colorId: "3081 05 167\r",
		subText: "Tilnærmet RAL 3011",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/E1AC0F72D8A0421980BA0B7A8EE7C5FA.jpg?w=600&h=400&mode=crop",
		text: "28 - WEINROT",
		colorId: "3005 05 167\r",
		subText: "Tilnærmet RAL 3005",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/9D087F48BE8349E19B49A549021B810D.jpg?w=600&h=400&mode=crop",
		text: "29 - MOOSGRUN",
		colorId: "6005 05 167\r",
		subText: "Tilnærmet RAL 6005",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/13CFD6B7911041CDADF7563E81E104F1.JPG?w=600&h=400&mode=crop",
		text: "30 - DUNKELGRUN",
		colorId: "6125 05 167\r",
		subText: "Tilnærmet RAL 6009",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/AD8BBE47705D4E8E8BA55C9A0D8018ED.JPG?w=600&h=400&mode=crop",
		text: "31 - SMARAGDGRUN",
		colorId: "6110 05 167\r",
		subText: "Tilnærmet RAL 6001",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/AB053F573CC3456092DA650921D4E744.jpg?w=600&h=400&mode=crop",
		text: "32 - BRILLIANTBLAU",
		colorId: "5007 05 167\r",
		subText: "RAL 5007",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/B843E266BEB34BB09C84BB40326536DF.jpg?w=600&h=400&mode=crop",
		text: "33 - DUNKELBLAU 5030",
		colorId: "02 12 51 000004\r",
		subText: "Tilnærmet RAL 5005",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/4BDAB302F166425D97588B6D5C9AB339.JPG?w=600&h=400&mode=crop",
		text: "34 - STAHLBLAU",
		colorId: "5150 05 167\r",
		subText: "Tilnærmet RAL 5011",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/BB6A68F1801E4E60B86CFD21ABDDFE90.JPG?w=600&h=400&mode=crop",
		text: "35 - SILBER D - GLATT",
		colorId: "02.12.76.000013\r",
		subText: "TIlnærmet RAL 9006",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/170BE7A0AA26479E9675569CEEDB51D9.JPG?w=600&h=400&mode=crop",
		text: "36 - SILBER V",
		colorId: "02.12.76.000014\r",
		subText: "Tilnærmet RAL 9006",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/88C5C5716A7443C9AC0C84F199A90DEA.JPG?w=600&h=400&mode=crop",
		text: "37 - METBRUSH ALUMINIUM",
		colorId: "436 1001\r",
		subText: "Tilnærmet RAL 9006",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/A49E239402724960A36ADA27473AF054.JPG?w=600&h=400&mode=crop",
		text: "38 - CROWN PLATIN",
		colorId: "1293 001 195\r",
		subText: "Tilnærmet RAL 7016 Metallic",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/C08399279B15431F98E447FD0FF56F75.JPG?w=600&h=400&mode=crop",
		text: "39 - QUARZ PLATIN",
		colorId: "1293 001 195\r",
		subText: "Tilnærmet RAL 7039",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/36F8AB06D15643FD8434E2A30D437A2D.jpg?w=600&h=400&mode=crop",
		text: "40 - KUPFER",
		colorId: "02 12 88 000001\r",
		subText: "Tilnærmet RAL 2013/8004",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/BF918822B09D45ABA0A672CC03DAF508.JPG?w=600&h=400&mode=crop",
		text: "42 - BRONZE PLATIN",
		colorId: "1293 714",
		subText: "",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/C05415D8E1EB49289FA9FED02F0395E6.JPG?w=600&h=400&mode=crop",
		text: "44 - METBRUSH",
		colorId: "F436 1006\r",
		subText: "Tilnærmet RAL 7016 Metallic",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/41A5A7E702B14A618EA106A325597A05.JPG?w=600&h=400&mode=crop",
		text: "45 - ALUX WEISSALUMINIUM",
		colorId: "F436 1015",
		subText: "",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/40C66C996D1E4D459E59BF8F4A6B666E.JPG?w=600&h=400&mode=crop",
		text: "46 - ALUX DB 703",
		colorId: "F43 1014",
		subText: "",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/6F0E921516A74A9E80E7C28EE0990871.JPG?w=600&h=400&mode=crop",
		text: "47 - ALUX ANTHRAZIT",
		colorId: "F436 1012",
		subText: "",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/A6D48F9E5A0A4EDD9D05F234F543BAC5.jpg?w=600&h=400&mode=crop",
		text: "77 - WEISS ULTI-MATT",
		colorId: "47094\r",
		subText: "Tilnærmet RAL 9010",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/FC245C7B99BA4CDA9C0C8053A179378D.jpg?w=600&h=400&mode=crop",
		text: "79 - CREMEWEISS ULTI-MATT",
		colorId: "47095\r",
		subText: "Tilnærmet RAL 9001",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/9D74763CBCB34D7B8A38B4AAF7EC146C.jpg?w=600&h=400&mode=crop",
		text: "80 - ZINKGELB",
		colorId: "1087 05 167\r",
		subText: "Tilnærmet RAL 1018",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/D6D4744B8AB341889FEE0E0E0F045894.jpg?w=600&h=400&mode=crop",
		text: "81 - MONDANCE C-31 N",
		colorId: "02.12.71.000018\r",
		subText: "Tillnærmet RAL 7030",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/2975A80FF89A42B9A6E3FB9597FF5E2C.jpg?w=600&h=400&mode=crop",
		text: "85 - SCHWARZ",
		colorId: "02 20 01 000002 167\r",
		subText: "Tilnærmet RAL 9005",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/4BF1DE19305E46CB911556B1C92B60E8.JPG?w=600&h=400&mode=crop",
		text: "86 - HELLROT 3054",
		colorId: "02 12 31 000002\r",
		subText: "Tilnærmet RAL 3002",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/F5E559478D5E40A78FCC34221BCF3042.JPG?w=600&h=400&mode=crop",
		text: "89 - METBRUSH SILVER",
		colorId: "436 1002\r",
		subText: "Tilnærmet RAL 9007",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/1044ACB2828C4381B9AFF75F6D0DA1B6.JPG?w=600&h=400&mode=crop",
		text: "90 - METBRUSH MESAUNG",
		colorId: "436 1007\r",
		subText: "RAL 1036",
	},
	{
		imageUrl:
			"https://www.hfasader.no/upload_images/C2EEA33B752A41D3B71210272EBAD7D3.png?w=600&h=400&mode=crop",
		text: "98 - SCHWARZ GLATT",
		colorId: "446 7062\r",
		subText: "Tilnærmet RAL 9005",
	},
];
export default COLORS;

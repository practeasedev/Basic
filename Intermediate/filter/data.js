const  countryData = [
    {
        "id": 1,
        "country": "Afghanistan",
        "capital": "Kabul",
        "currency": "Afghani",
        "languages": "Dari Persian, Pashto"
    },
    {
        "id": 2,
        "country": "Albania",
        "capital": "Tirane",
        "currency": "Lek",
        "languages": "Albanian"
    },
    {
        "id": 3,
        "country": "Algeria",
        "capital": "Algiers",
        "currency": "Dinar",
        "languages": "Arabic, Tamazight, French"
    },
    {
        "id": 4,
        "country": "Andorra",
        "capital": "Andorra la Vella",
        "currency": "Euro",
        "languages": "Catalan"
    },
    {
        "id": 5,
        "country": "Angola",
        "capital": "Luanda",
        "currency": "New Kwanza",
        "languages": "Portuguese"
    },
    {
        "id": 6,
        "country": "Antigua and Barbuda",
        "capital": "Saint John's",
        "currency": "East Caribbean dollar",
        "languages": "English"
    },
    {
        "id": 7,
        "country": "Argentina",
        "capital": "Buenos Aires",
        "currency": "Peso",
        "languages": "Spanish"
    },
    {
        "id": 8,
        "country": "Armenia",
        "capital": "Yerevan",
        "currency": "Dram",
        "languages": "Armenian"
    },
    {
        "id": 9,
        "country": "Australia",
        "capital": "Canberra",
        "currency": "Australian dollar",
        "languages": "English"
    },
    {
        "id": 10,
        "country": "Austria",
        "capital": "Vienna",
        "currency": "Euro (formerly schilling)",
        "languages": "German"
    },
    {
        "id": 11,
        "country": "Azerbaijan",
        "capital": "Baku",
        "currency": "Manat",
        "languages": "Azerbaijani"
    },
    {
        "id": 12,
        "country": "The Bahamas",
        "capital": "Nassau",
        "currency": "Bahamian dollar",
        "languages": "English"
    },
    {
        "id": 13,
        "country": "Bahrain",
        "capital": "Manama",
        "currency": "Bahrain dinar",
        "languages": "Arabic"
    },
    {
        "id": 14,
        "country": "Bangladesh",
        "capital": "Dhaka",
        "currency": "Taka",
        "languages": "Bangla"
    },
    {
        "id": 15,
        "country": "Barbados",
        "capital": "Bridgetown",
        "currency": "Barbados dollar",
        "languages": "English"
    },
    {
        "id": 16,
        "country": "Belarus",
        "capital": "Minsk",
        "currency": "Belorussian ruble",
        "languages": "Belarusian, Russian"
    },
    {
        "id": 17,
        "country": "Belgium",
        "capital": "Brussels",
        "currency": "Euro (formerly Belgian franc)",
        "languages": "Dutch, French, German"
    },
    {
        "id": 18,
        "country": "Belize",
        "capital": "Belmopan",
        "currency": "Belize dollar",
        "languages": "English"
    },
    {
        "id": 19,
        "country": "Benin",
        "capital": "Porto-Novo",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 20,
        "country": "Bhutan",
        "capital": "Thimphu",
        "currency": "Ngultrum",
        "languages": "Dzongkha"
    },
    {
        "id": 21,
        "country": "Bolivia",
        "capital": "La Paz\n(administrative), Sucre (judicial)",
        "currency": "Boliviano",
        "languages": "Spanish, Quechua, Aymara"
    },
    {
        "id": 22,
        "country": "Bosnia and Herzegovina",
        "capital": "Sarajevo",
        "currency": "Convertible Mark",
        "languages": "Bosnian, Croatian, Serbian"
    },
    {
        "id": 23,
        "country": "Botswana",
        "capital": "Gaborone",
        "currency": "Pula",
        "languages": "English, Tswana"
    },
    {
        "id": 24,
        "country": "Brazil",
        "capital": "Brasilia",
        "currency": "Real",
        "languages": "Portuguese"
    },
    {
        "id": 25,
        "country": "Brunei",
        "capital": "Bandar Seri Begawan",
        "currency": "Brunei dollar",
        "languages": "Malay"
    },
    {
        "id": 26,
        "country": "Bulgaria",
        "capital": "Sofia",
        "currency": "Lev",
        "languages": "Bulgarian"
    },
    {
        "id": 27,
        "country": "Burkina Faso",
        "capital": "Ouagadougou",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 28,
        "country": "Burundi",
        "capital": "Gitega",
        "currency": "Burundi franc",
        "languages": "Kirundi, French"
    },
    {
        "id": 29,
        "country": "Cambodia",
        "capital": "Phnom Penh",
        "currency": "Riel",
        "languages": "Khmer"
    },
    {
        "id": 30,
        "country": "Cameroon",
        "capital": "Yaounde",
        "currency": "CFA Franc",
        "languages": "French, English"
    },
    {
        "id": 31,
        "country": "Canada",
        "capital": "Ottawa",
        "currency": "Canadian dollar",
        "languages": "English, French"
    },
    {
        "id": 32,
        "country": "Cape Verde",
        "capital": "Praia",
        "currency": "Cape Verdean escudo",
        "languages": "Portuguese"
    },
    {
        "id": 33,
        "country": "Central African Republic",
        "capital": "Bangui",
        "currency": "CFA Franc",
        "languages": "Sango, French"
    },
    {
        "id": 34,
        "country": "Chad",
        "capital": "N'Djamena",
        "currency": "CFA Franc",
        "languages": "French, Arabic"
    },
    {
        "id": 35,
        "country": "Chile",
        "capital": "Santiago",
        "currency": "Chilean Peso",
        "languages": "Spanish"
    },
    {
        "id": 36,
        "country": "China",
        "capital": "Beijing",
        "currency": "Chinese Yuan",
        "languages": "Mandarin"
    },
    {
        "id": 37,
        "country": "Colombia",
        "capital": "Bogota",
        "currency": "Colombian Peso",
        "languages": "Spanish"
    },
    {
        "id": 38,
        "country": "Comoros",
        "capital": "Moroni",
        "currency": "Franc",
        "languages": "Comorian, Arabic,French"
    },
    {
        "id": 39,
        "country": "Republic of the Congo",
        "capital": "Brazzaville",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 40,
        "country": "Congo,\nDemocratic Republic of the",
        "capital": "Kinshasa",
        "currency": "Congolese franc",
        "languages": "French"
    },
    {
        "id": 41,
        "country": "Costa Rica",
        "capital": "San Jose",
        "currency": "Colón",
        "languages": "Spanish"
    },
    {
        "id": 42,
        "country": "Cote d'Ivoire",
        "capital": "Yamoussoukro (official), Abidjan (de facto)",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 43,
        "country": "Croatia",
        "capital": "Zagreb",
        "currency": "Croatian",
        "languages": "Kuna"
    },
    {
        "id": 44,
        "country": "Cuba",
        "capital": "Havana",
        "currency": "Cuban Peso",
        "languages": "Spanish"
    },
    {
        "id": 45,
        "country": "Cyprus",
        "capital": "Nicosia",
        "currency": "Euro",
        "languages": "Greek, Turkish"
    },
    {
        "id": 46,
        "country": "Czech Republic",
        "capital": "Prague",
        "currency": "Koruna",
        "languages": "Czech, Slovak"
    },
    {
        "id": 47,
        "country": "Denmark",
        "capital": "Copenhagen",
        "currency": "Danish Krone",
        "languages": "Danish"
    },
    {
        "id": 48,
        "country": "Djibouti",
        "capital": "Djibouti",
        "currency": "Djiboutian franc",
        "languages": "Arabic, French"
    },
    {
        "id": 49,
        "country": "Dominica",
        "capital": "Roseau",
        "currency": "East Caribbean dollar",
        "languages": "English, French, Antillean Creole"
    },
    {
        "id": 50,
        "country": "Dominican Republic",
        "capital": "Santo Domingo",
        "currency": "Dominican Peso",
        "languages": "Spanish"
    },
    {
        "id": 51,
        "country": "East Timor (Timor-Leste)",
        "capital": "Dili",
        "currency": "U.S. dollar",
        "languages": "Tetum, Portuguese, Iindonesian"
    },
    {
        "id": 52,
        "country": "Ecuador",
        "capital": "Quito",
        "currency": "U.S. dollar",
        "languages": "Spanish"
    },
    {
        "id": 53,
        "country": "Egypt",
        "capital": "Cairo",
        "currency": "Egyptian pound",
        "languages": "Arabic"
    },
    {
        "id": 54,
        "country": "El Salvador",
        "capital": "San Salvador",
        "currency": "Colón, U.S. dollar",
        "languages": "Spanish"
    },
    {
        "id": 55,
        "country": "Equatorial Guinea",
        "capital": "Malabo",
        "currency": "CFA Franc",
        "languages": "Spanish, French, Portuguese"
    },
    {
        "id": 56,
        "country": "Eritrea",
        "capital": "Asmara",
        "currency": "Nakfa",
        "languages": "Arabic, Tigrinya, English"
    },
    {
        "id": 57,
        "country": "Estonia",
        "capital": "Tallinn",
        "currency": "Estonia Kroon, Euro",
        "languages": "Estonian"
    },
    {
        "id": 58,
        "country": "Ethiopia",
        "capital": "Addis Ababa",
        "currency": "Birr",
        "languages": "Amharic"
    },
    {
        "id": 59,
        "country": "Fiji",
        "capital": "Suva",
        "currency": "Fiji dollar",
        "languages": "English, Bau Fijian, Hindi"
    },
    {
        "id": 60,
        "country": "Finland",
        "capital": "Helsinki",
        "currency": "Euro (formerly markka)",
        "languages": "Finnish, Swedish"
    },
    {
        "id": 61,
        "country": "France",
        "capital": "Paris",
        "currency": "Euro (formerly French franc)",
        "languages": "French"
    },
    {
        "id": 62,
        "country": "Gabon",
        "capital": "Libreville",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 63,
        "country": "The Gambia",
        "capital": "Banjul",
        "currency": "Dalasi",
        "languages": "English"
    },
    {
        "id": 64,
        "country": "Georgia",
        "capital": "Tbilisi",
        "currency": "Lari",
        "languages": "Georgian"
    },
    {
        "id": 65,
        "country": "Germany",
        "capital": "Berlin",
        "currency": "Euro (formerly Deutsche mark)",
        "languages": "German"
    },
    {
        "id": 66,
        "country": "Ghana",
        "capital": "Accra",
        "currency": "Cedi",
        "languages": "English"
    },
    {
        "id": 67,
        "country": "Greece",
        "capital": "Athens",
        "currency": "Euro (formerly drachma)",
        "languages": "Greek"
    },
    {
        "id": 68,
        "country": "Grenada",
        "capital": "Saint George's",
        "currency": "East Caribbean dollar",
        "languages": "English, Patois"
    },
    {
        "id": 69,
        "country": "Guatemala",
        "capital": "Guatemala City",
        "currency": "Quetzal",
        "languages": "Spanish"
    },
    {
        "id": 70,
        "country": "Guinea",
        "capital": "Conakry",
        "currency": "Guinean franc",
        "languages": "French"
    },
    {
        "id": 71,
        "country": "Guinea-Bissau",
        "capital": "Bissau",
        "currency": "CFA Franc",
        "languages": "Portuguese"
    },
    {
        "id": 72,
        "country": "Guyana",
        "capital": "Georgetown",
        "currency": "Guyanese dollar",
        "languages": "English"
    },
    {
        "id": 73,
        "country": "Haiti",
        "capital": "Port-au-Prince",
        "currency": "Gourde",
        "languages": "Haitian Creole, French"
    },
    {
        "id": 74,
        "country": "Honduras",
        "capital": "Tegucigalpa",
        "currency": "Lempira",
        "languages": "Spanish"
    },
    {
        "id": 75,
        "country": "Hungary",
        "capital": "Budapest",
        "currency": "Forint",
        "languages": "Hungarian"
    },
    {
        "id": 76,
        "country": "Iceland",
        "capital": "Reykjavik",
        "currency": "Icelandic króna",
        "languages": "Icelandic"
    },
    {
        "id": 77,
        "country": "India",
        "capital": "New Delhi",
        "currency": "Indian Rupee",
        "languages": "Hindi, English"
    },
    {
        "id": 78,
        "country": "Indonesia",
        "capital": "Jakarta",
        "currency": "Rupiah",
        "languages": "Indonesian"
    },
    {
        "id": 79,
        "country": "Iran",
        "capital": "Tehran",
        "currency": "Rial",
        "languages": "Persian"
    },
    {
        "id": 80,
        "country": "Iraq",
        "capital": "Baghdad",
        "currency": "Iraqi Dinar",
        "languages": "Arabic, Kurdish"
    },
    {
        "id": 81,
        "country": "Ireland",
        "capital": "Dublin",
        "currency": "Euro (formerly Irish pound [punt])",
        "languages": "English, Irish"
    },
    {
        "id": 82,
        "country": "Israel",
        "capital": "Jerusalem*",
        "currency": "Shekel",
        "languages": "Hebrew, Arabic"
    },
    {
        "id": 83,
        "country": "Italy",
        "capital": "Rome",
        "currency": "Euro (formerly lira)",
        "languages": "Italian"
    },
    {
        "id": 84,
        "country": "Ivory Coast",
        "capital": "Yamoussoukro",
        "currency": "West African CFA franc",
        "languages": "French"
    },
    {
        "id": 85,
        "country": "Jamaica",
        "capital": "Kingston",
        "currency": "Jamaican dollar",
        "languages": "English"
    },
    {
        "id": 86,
        "country": "Japan",
        "capital": "Tokyo",
        "currency": "Yen",
        "languages": "Japanese"
    },
    {
        "id": 87,
        "country": "Jordan",
        "capital": "Amman",
        "currency": "Jordanian dinar",
        "languages": "Arabic"
    },
    {
        "id": 88,
        "country": "Kazakhstan",
        "capital": "Nur Sultan",
        "currency": "Tenge",
        "languages": "Kazakh, Russian"
    },
    {
        "id": 89,
        "country": "Kenya",
        "capital": "Nairobi",
        "currency": "Kenya shilling",
        "languages": "Swahili, English"
    },
    {
        "id": 90,
        "country": "Kiribati",
        "capital": "Tarawa Atoll",
        "currency": "Kiribati dollar",
        "languages": "English, Gilbertese"
    },
    {
        "id": 91,
        "country": "Korea, North",
        "capital": "Pyongyang",
        "currency": "Won",
        "languages": "Korean"
    },
    {
        "id": 92,
        "country": "Korea, South",
        "capital": "Seoul",
        "currency": "Won",
        "languages": "Korean"
    },
    {
        "id": 93,
        "country": "Kosovo",
        "capital": "Pristina",
        "currency": "Euro (German Mark prior to 2002)",
        "languages": "Albanian, Serbian"
    },
    {
        "id": 94,
        "country": "Kuwait",
        "capital": "Kuwait City",
        "currency": "Kuwaiti Dollar",
        "languages": "Arabic, English"
    },
    {
        "id": 95,
        "country": "Kyrgyzstan",
        "capital": "Bishkek",
        "currency": "Som",
        "languages": "Kyrgyz, Russian"
    },
    {
        "id": 96,
        "country": "Laos",
        "capital": "Vientiane",
        "currency": "New Kip",
        "languages": "Lao (Laotian)"
    },
    {
        "id": 97,
        "country": "Latvia",
        "capital": "Riga",
        "currency": "Lats",
        "languages": "Latvian"
    },
    {
        "id": 98,
        "country": "Lebanon",
        "capital": "Beirut",
        "currency": "Lebanese pound",
        "languages": "Arabic, French"
    },
    {
        "id": 99,
        "country": "Lesotho",
        "capital": "Maseru",
        "currency": "Maluti",
        "languages": "Sesotho, English"
    },
    {
        "id": 100,
        "country": "Liberia",
        "capital": "Monrovia",
        "currency": "Liberian dollar",
        "languages": "English"
    },
    {
        "id": 101,
        "country": "Libya",
        "capital": "Tripoli",
        "currency": "Libyan dinar",
        "languages": "Arabic"
    },
    {
        "id": 102,
        "country": "Liechtenstein",
        "capital": "Vaduz",
        "currency": "Swiss franc",
        "languages": "German"
    },
    {
        "id": 103,
        "country": "Lithuania",
        "capital": "Vilnius",
        "currency": "Litas",
        "languages": "Lithuanian"
    },
    {
        "id": 104,
        "country": "Luxembourg",
        "capital": "Luxembourg",
        "currency": "Euro (formerly Luxembourg franc)",
        "languages": "German, French, Luxembourgish"
    },
    {
        "id": 105,
        "country": "Macedonia",
        "capital": "Skopje",
        "currency": "Denar",
        "languages": "Macedonian"
    },
    {
        "id": 106,
        "country": "Madagascar",
        "capital": "Antananarivo",
        "currency": "Malagasy Ariary",
        "languages": "Malagasy, French, English"
    },
    {
        "id": 107,
        "country": "Malawi",
        "capital": "Lilongwe",
        "currency": "Kwacha",
        "languages": "English"
    },
    {
        "id": 108,
        "country": "Malaysia",
        "capital": "Kuala Lumpur",
        "currency": "Ringgit",
        "languages": "Malay"
    },
    {
        "id": 109,
        "country": "Maldives",
        "capital": "Male",
        "currency": "Rufiyaa",
        "languages": "Dhivehi"
    },
    {
        "id": 110,
        "country": "Mali",
        "capital": "Bamako",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 111,
        "country": "Malta",
        "capital": "Valletta",
        "currency": "Euro",
        "languages": "Maltese, English"
    },
    {
        "id": 112,
        "country": "Marshall Islands",
        "capital": "Majuro",
        "currency": "U.S. Dollar",
        "languages": "Marshallese, English"
    },
    {
        "id": 113,
        "country": "Mauritania",
        "capital": "Nouakchott",
        "currency": "Ouguiya",
        "languages": "Arabic"
    },
    {
        "id": 114,
        "country": "Mauritius",
        "capital": "Port Louis",
        "currency": "Mauritian rupee",
        "languages": "English"
    },
    {
        "id": 115,
        "country": "Mexico",
        "capital": "Mexico City",
        "currency": "Mexican peso",
        "languages": "Spanish"
    },
    {
        "id": 116,
        "country": "Micronesia, Federated",
        "capital": "Palikir",
        "currency": "U.S. Dollar",
        "languages": "English"
    },
    {
        "id": 117,
        "country": "Moldova",
        "capital": "Chisinau",
        "currency": "Leu",
        "languages": "Moldovan (Romanian)"
    },
    {
        "id": 118,
        "country": "Monaco",
        "capital": "Monte Carlo",
        "currency": "Euro",
        "languages": "French, Italian, English"
    },
    {
        "id": 119,
        "country": "Mongolia",
        "capital": "Ulaanbaatar",
        "currency": "Togrog",
        "languages": "Mongolian"
    },
    {
        "id": 120,
        "country": "Montenegro",
        "capital": "Podgorica",
        "currency": "Euro",
        "languages": "Montenegrin"
    },
    {
        "id": 121,
        "country": "Morocco",
        "capital": "Rabat",
        "currency": "Dirham",
        "languages": "Arabic"
    },
    {
        "id": 122,
        "country": "Mozambique",
        "capital": "Maputo",
        "currency": "Metical",
        "languages": "Portuguese"
    },
    {
        "id": 123,
        "country": "Myanmar (Burma)",
        "capital": "Nay Pyi Taw",
        "currency": "Kyat",
        "languages": "Burmese"
    },
    {
        "id": 124,
        "country": "Namibia",
        "capital": "Windhoek",
        "currency": "Namibian dollar",
        "languages": "English, Afrikaans, German"
    },
    {
        "id": 125,
        "country": "Nauru",
        "capital": "no official capital, government offices in Yaren District",
        "currency": "Australian dollar",
        "languages": "English, Nauran"
    },
    {
        "id": 126,
        "country": "Nepal",
        "capital": "Kathmandu",
        "currency": "Nepalese rupee",
        "languages": "Nepali"
    },
    {
        "id": 127,
        "country": "Netherlands",
        "capital": "Amsterdam, The Hague (seat of\ngovernment)",
        "currency": "Euro (formerly guilder)",
        "languages": "Dutch"
    },
    {
        "id": 128,
        "country": "New Zealand",
        "capital": "Wellington",
        "currency": "New Zealand dollar",
        "languages": "English"
    },
    {
        "id": 129,
        "country": "Nicaragua",
        "capital": "Managua",
        "currency": "Gold cordoba",
        "languages": "Spanish"
    },
    {
        "id": 130,
        "country": "Niger",
        "capital": "Niamey",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 131,
        "country": "Nigeria",
        "capital": "Abuja",
        "currency": "Naira",
        "languages": "English"
    },
    {
        "id": 132,
        "country": "Norway",
        "capital": "Oslo",
        "currency": "Norwegian krone",
        "languages": "Norwegian"
    },
    {
        "id": 133,
        "country": "Oman",
        "capital": "Muscat",
        "currency": "Omani rial",
        "languages": "Arabic"
    },
    {
        "id": 134,
        "country": "Pakistan",
        "capital": "Islamabad",
        "currency": "Pakistani rupee",
        "languages": "Urdu, English"
    },
    {
        "id": 135,
        "country": "Palau",
        "capital": "Melekeok",
        "currency": "U.S. dollar",
        "languages": "English, Palauan"
    },
    {
        "id": 136,
        "country": "Palestine",
        "capital": "Ramallah, East Jerusalem",
        "currency": "Palestine Pound",
        "languages": "Arabic"
    },
    {
        "id": 137,
        "country": "Panama",
        "capital": "Panama City",
        "currency": "Balboa, U.S. dollar",
        "languages": "Spanish"
    },
    {
        "id": 138,
        "country": "Papua New Guinea",
        "capital": "Port Moresby",
        "currency": "Kina",
        "languages": "English, Tok Pisin, Hiri Motu"
    },
    {
        "id": 139,
        "country": "Paraguay",
        "capital": "Asuncion",
        "currency": "Guaraní",
        "languages": "Spanish, Guarani"
    },
    {
        "id": 140,
        "country": "Peru",
        "capital": "Lima",
        "currency": "Nuevo sol (1991)",
        "languages": "Spanish"
    },
    {
        "id": 141,
        "country": "Philippines",
        "capital": "Manila",
        "currency": "Peso",
        "languages": "Filipino, English"
    },
    {
        "id": 142,
        "country": "Poland",
        "capital": "Warsaw",
        "currency": "Zloty",
        "languages": "Polish"
    },
    {
        "id": 143,
        "country": "Portugal",
        "capital": "Lisbon",
        "currency": "Euro (formerly escudo)",
        "languages": "Portuguese"
    },
    {
        "id": 144,
        "country": "Qatar",
        "capital": "Doha",
        "currency": "Qatari riyal",
        "languages": "Arabic"
    },
    {
        "id": 145,
        "country": "Romania",
        "capital": "Bucharest",
        "currency": "Romanian Rupee",
        "languages": "Romanian"
    },
    {
        "id": 146,
        "country": "Russia",
        "capital": "Moscow",
        "currency": "Ruble",
        "languages": "Romanian"
    },
    {
        "id": 147,
        "country": "Rwanda",
        "capital": "Kigali",
        "currency": "Rwandan franc",
        "languages": "Russian"
    },
    {
        "id": 148,
        "country": "Saint Kitts and Nevis",
        "capital": "Basseterre",
        "currency": "East Caribbean dollar",
        "languages": "English"
    },
    {
        "id": 149,
        "country": "Saint Lucia",
        "capital": "Castries",
        "currency": "East Caribbean dollar",
        "languages": "English"
    },
    {
        "id": 150,
        "country": "Saint Vincent and the Grenadines",
        "capital": "Kingstown",
        "currency": "East Caribbean dollar",
        "languages": "English"
    },
    {
        "id": 151,
        "country": "Samoa",
        "capital": "Apia",
        "currency": "Tala",
        "languages": "Samoan, English"
    },
    {
        "id": 152,
        "country": "San Marino",
        "capital": "San Marino",
        "currency": "Euro",
        "languages": "Italian"
    },
    {
        "id": 153,
        "country": "Sao Tome and Principe",
        "capital": "Sao Tome",
        "currency": "Dobra",
        "languages": "Portuguese"
    },
    {
        "id": 154,
        "country": "Saudi Arabia",
        "capital": "Riyadh",
        "currency": "Riyal",
        "languages": "Arabic"
    },
    {
        "id": 155,
        "country": "Senegal",
        "capital": "Dakar",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 156,
        "country": "Serbia",
        "capital": "Belgrade",
        "currency": "Serbian Dinar",
        "languages": "Serbian"
    },
    {
        "id": 157,
        "country": "Seychelles",
        "capital": "Victoria",
        "currency": "Seychelles rupee",
        "languages": "Seychellois Creole, French English"
    },
    {
        "id": 158,
        "country": "Sierra Leone",
        "capital": "Freetown",
        "currency": "Leone",
        "languages": "English"
    },
    {
        "id": 159,
        "country": "Singapore",
        "capital": "Singapore",
        "currency": "Singapore dollar",
        "languages": "English, Chinese and Malay Tamil"
    },
    {
        "id": 160,
        "country": "Slovakia",
        "capital": "Bratislava",
        "currency": "Euro",
        "languages": "Slovak"
    },
    {
        "id": 161,
        "country": "Slovenia",
        "capital": "Ljubljana",
        "currency": "Slovenian tolar, euro (as of 1/1/07)",
        "languages": "Slovene"
    },
    {
        "id": 162,
        "country": "Solomon Islands",
        "capital": "Honiara",
        "currency": "Solomon Islands dollar",
        "languages": "English"
    },
    {
        "id": 163,
        "country": "Somalia",
        "capital": "Mogadishu",
        "currency": "Somali shilling",
        "languages": "Somali Arabic"
    },
    {
        "id": 164,
        "country": "South Africa",
        "capital": "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judiciary)",
        "currency": "Rand",
        "languages": "Afrikaans, English, Southern Ndebele, Northern Sotho, Southern Sotho, Swazi\nTsonga, Tswana,\nVenda, Xhosa, Zulu"
    },
    {
        "id": 165,
        "country": "South Sudan",
        "capital": "Juba",
        "currency": "Sudanese Pound",
        "languages": "English"
    },
    {
        "id": 166,
        "country": "Spain",
        "capital": "Madrid",
        "currency": "Euro (formerly peseta)",
        "languages": "Spanish, Catalan Galician , Gasque"
    },
    {
        "id": 167,
        "country": "Sri Lanka",
        "capital": "Colombo, Sri Jayewardenepura\nKotte (legislative)",
        "currency": "Sri Lankan rupee",
        "languages": "Sinhala, Tamil"
    },
    {
        "id": 168,
        "country": "Sudan",
        "capital": "Khartoum",
        "currency": "Sudanese Pound",
        "languages": "Arabic, English"
    },
    {
        "id": 169,
        "country": "Suriname",
        "capital": "Paramaribo",
        "currency": "Surinamese dollar",
        "languages": "Dutch"
    },
    {
        "id": 170,
        "country": "Swaziland",
        "capital": "Mbabane",
        "currency": "Lilangeni",
        "languages": "English, Swati"
    },
    {
        "id": 171,
        "country": "Sweden",
        "capital": "Stockholm",
        "currency": "Krona",
        "languages": "Swedish"
    },
    {
        "id": 172,
        "country": "Switzerland",
        "capital": "Berne",
        "currency": "Swiss franc",
        "languages": "German, French, Italian, Romansh"
    },
    {
        "id": 173,
        "country": "Syria",
        "capital": "Damascus",
        "currency": "Syrian pound",
        "languages": "Arabic"
    },
    {
        "id": 174,
        "country": "Taiwan",
        "capital": "Taipei",
        "currency": "Taiwan dollar",
        "languages": "Standard Chinese"
    },
    {
        "id": 175,
        "country": "Tajikistan",
        "capital": "Dushanbe",
        "currency": "somoni",
        "languages": "Tajik, Russian"
    },
    {
        "id": 176,
        "country": "Tanzania",
        "capital": "Dar es Salaam, Dodoma (legislative)",
        "currency": "Tanzanian shilling",
        "languages": "Swahili, English"
    },
    {
        "id": 177,
        "country": "Thailand",
        "capital": "Bangkok",
        "currency": "Baht",
        "languages": "Thai"
    },
    {
        "id": 178,
        "country": "Togo",
        "capital": "Lome",
        "currency": "CFA Franc",
        "languages": "French"
    },
    {
        "id": 179,
        "country": "Tonga",
        "capital": "Nuku'alofa",
        "currency": "Pa'anga",
        "languages": "English"
    },
    {
        "id": 180,
        "country": "Trinidad and Tobago",
        "capital": "Port-of-Spain",
        "currency": "Trinidad and Tobago dollar",
        "languages": "English"
    },
    {
        "id": 181,
        "country": "Tunisia",
        "capital": "Tunis",
        "currency": "Tunisian dinar",
        "languages": "Arabic"
    },
    {
        "id": 182,
        "country": "Turkey",
        "capital": "Ankara",
        "currency": "Turkish lira (YTL)",
        "languages": "Turkish"
    },
    {
        "id": 183,
        "country": "Turkmenistan",
        "capital": "Ashgabat",
        "currency": "Manat",
        "languages": "Turkmen"
    },
    {
        "id": 184,
        "country": "Tuvalu",
        "capital": "Vaiaku village, Funafuti province",
        "currency": "Tuvaluan Dollar",
        "languages": "Tuvaluan, English"
    },
    {
        "id": 185,
        "country": "Uganda",
        "capital": "Kampala",
        "currency": "Ugandan new shilling",
        "languages": "Swahili, English, Luganda"
    },
    {
        "id": 186,
        "country": "Ukraine",
        "capital": "Kiev",
        "currency": "Hryvnia",
        "languages": "Ukrainian"
    },
    {
        "id": 187,
        "country": "United Arab Emirates",
        "capital": "Abu Dhabi",
        "currency": "U.A.E. Dirham",
        "languages": "Arabic"
    },
    {
        "id": 188,
        "country": "United Kingdom",
        "capital": "London",
        "currency": "Pound sterling",
        "languages": "English"
    },
    {
        "id": 189,
        "country": "United States of America",
        "capital": "Washington D.C.",
        "currency": "Dollar",
        "languages": "English"
    },
    {
        "id": 190,
        "country": "Uruguay",
        "capital": "Montevideo",
        "currency": "Uruguay peso",
        "languages": "Spanish"
    },
    {
        "id": 191,
        "country": "Uzbekistan",
        "capital": "Tashkent",
        "currency": "Uzbekistani sum",
        "languages": "Uzbek"
    },
    {
        "id": 192,
        "country": "Vanuatu",
        "capital": "Port-Vila",
        "currency": "Vatu",
        "languages": "Bislama, French, English"
    },
    {
        "id": 193,
        "country": "Vatican City (Holy See)",
        "capital": "Vatican City",
        "currency": "Euro",
        "languages": "Italian"
    },
    {
        "id": 194,
        "country": "Venezuela",
        "capital": "Caracas",
        "currency": "Bolivar",
        "languages": "Spanish"
    },
    {
        "id": 195,
        "country": "Vietnam",
        "capital": "Hanoi",
        "currency": "Dong",
        "languages": "Vietnamese"
    },
    {
        "id": 196,
        "country": "Yemen",
        "capital": "Sanaa",
        "currency": "Rial",
        "languages": "Arabic"
    },
    {
        "id": 197,
        "country": "Zambia",
        "capital": "Lusaka",
        "currency": "Kwacha",
        "languages": "English"
    },
    {
        "id": 198,
        "country": "Zimbabwe",
        "capital": "Harare",
        "currency": "United States dollar",
        "languages": "English, Shona, Ndebele"
    }
]

// export default countryData;
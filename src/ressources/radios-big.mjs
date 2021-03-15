const radios = {
	list: [
		/*{
			name: '* * * * * Radios Française * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française']
		},*/
		/*{
			name: '----- Radios Nationales -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Nationale']
		},*/
		{
			name: 'BFM Business',
			url: 'http://chai5she.cdn.dvmr.fr/bfmbusiness',
			img: 'BFM_Business.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Cherie FM',
			url: 'http://scdn.nrjaudio.fm/adwz2/fr/30201/mp3_128.mp3?origine=fluxradios',
			img: 'Cherie_FM.png',
			tags: ['Française', 'Nationale', 'Cherie FM']
		},
		{
			name: 'Europe 1',
			url: 'http://stream.europe1.fr/europe1.mp3',
			img: 'Europe_1.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Fip',
			url: 'http://icecast.radiofrance.fr/fip-hifi.aac',
			img: 'FIP.png',
			tags: ['Française', 'Nationale', 'Fip']
		},
		{
			name: 'France Culture',
			url: 'http://icecast.radiofrance.fr/franceculture-hifi.aac',
			img: 'France_Culture.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'France Info',
			url: 'http://icecast.radiofrance.fr/franceinfo-hifi.aac',
			img: 'France_Info.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'France Inter',
			url: 'http://icecast.radiofrance.fr/franceinter-hifi.aac',
			img: 'France_Inter.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'France Musique',
			url: 'http://icecast.radiofrance.fr/francemusique-hifi.aac',
			img: 'France_Musique.png',
			tags: ['Française', 'Nationale', 'France Musique']
		},
		{
			name: 'Fun Radio France',
			url: 'http://icecast.funradio.fr/fun-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg',
			img: 'Fun_Radio.png',
			tags: ['Française', 'Nationale', 'Fun Radio']
		},
		{
			name: 'Jazz Radio',
			url: 'http://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3',
			img: 'Jazz_Radio.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Latina',
			url: 'http://start-latina.ice.infomaniak.ch/start-latina-high.mp3',
			img: 'Latina.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Mouv',
			url: 'http://icecast.radiofrance.fr/mouv-hifi.aac',
			img: 'Le_Mouv.png',
			tags: ['Française', 'Nationale', 'Mouv\'']
		},
		{
			name: 'M Radio',
			url: 'http://mfm.ice.infomaniak.ch/mfm-128.mp3',
			img: 'M_Radio.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Nostalgie France',
			url: 'http://scdn.nrjaudio.fm/adwz2/fr/30601/mp3_128.mp3?origine=fluxradios',
			img: 'Nostalgie.png',
			tags: ['Française', 'Nationale', 'Nostalgie']
		},
		{
			name: 'NRJ France',
			url: 'http://scdn.nrjaudio.fm/adwz2/fr/30001/mp3_128.mp3?origine=fluxradios',
			img: 'NRJ.png',
			tags: ['Française', 'Nationale', 'NRJ']
		},
		{
			name: 'NRJ France Ultra HD',
			url: 'http://cdn.nrjaudio.fm/audio1/fr/40101/aac_576.mp3?origine=fluxradios',
			img: 'NRJ.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Oüi FM',
			url: 'http://ouifm.ice.infomaniak.ch/ouifm-high.mp3',
			img: 'Oui_FM.png',
			tags: ['Française', 'Nationale', 'Oui FM']
		},
		{
			name: 'Phare FM',
			url: 'http://str0.creacast.com/pharefm',
			img: 'Phare_FM.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Radio Classique',
			url: 'http://radioclassique.ice.infomaniak.ch/radioclassique-high.mp3',
			img: 'Radio_Classique.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Radio Crooner',
			url: 'http://stream.crooner.fr/crooner',
			img: 'Crooner.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Radio FG',
			url: 'http://radiofg.impek.com/fg',
			img: 'Radio_FG.png',
			tags: ['Française', 'Nationale', 'Radio FG']
		},
		{
			name: 'Radio Nova',
			url: 'http://novazz.ice.infomaniak.ch/novazz-128.mp3',
			img: 'Radio_Nova.png',
			tags: ['Française', 'Nationale', 'Radio Nova']
		},
		{
			name: 'Radio Orient',
			url: 'http://stream3.broadcast-associes.com:8405/Radio-Orient',
			img: 'Radio_Orient.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'RCF',
			url: 'http://rcf.streamakaci.com/rcf.mp3',
			img: 'RCF.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'RFI Monde',
			url: 'http://live02.rfi.fr/rfimonde-96k.mp3',
			img: 'Radio_France_International_RFI_Monde.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'RFM',
			url: 'http://stream.rfm.fr/rfm.mp3',
			img: 'RFM.png',
			tags: ['Française', 'Nationale', 'RFM']
		},
		{
			name: 'Rire & Chansons',
			url: 'https://scdn.nrjaudio.fm/adwz2/fr/30401/mp3_128.mp3?origine=fluxradios',
			img: 'Rire_et_Chansons.png',
			tags: ['Française', 'Nationale', 'Rire & Chansons']
		},
		{
			name: 'RMC',
			url: 'http://chai5she.cdn.dvmr.fr/rmcinfo',
			img: 'RMC.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'RTL',
			url: 'http://icecast.rtl.fr/rtl-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg',
			img: 'RTL_Frankreich.png',
			tags: ['Française', 'Nationale', 'RTL']
		},
		{
			name: 'RTL2',
			url: 'http://icecast.rtl2.fr/rtl2-1-44-128?listen=webCwsBCggNCQgLDQUGBAcGBg',
			img: 'RTL2.png',
			tags: ['Française', 'Nationale', 'RTL2']
		},
		{
			name: 'Skyrock',
			url: 'http://icecast.skyrock.net/s/natio_mp3_128k',
			img: 'Skyrock.png',
			tags: ['Française', 'Nationale', 'Skyrock']
		},
		{
			name: 'Sud Radio',
			url: 'http://start-sud.ice.infomaniak.ch/start-sud-high.mp3',
			img: 'Sud_Radio.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'TSF Jazz',
			url: 'http://tsfjazz.ice.infomaniak.ch/tsfjazz-high.mp3',
			img: 'TSF_Jazz.png',
			tags: ['Française', 'Nationale']
		},
		{
			name: 'Virgin Radio',
			url: 'http://stream.virginradio.fr/virgin.mp3',
			img: 'Virage_Radio.png',
			tags: ['Française', 'Nationale', 'Virgin Radio']
		}/*,
		{
			name: '----- Info Trafic -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Info Trafic']
		}*/,
		{
			name: 'Autoroute Info - Zone Nord',
			url: 'http://media.autorouteinfo.fr:8000/direct_nord.mp3',
			img: 'Autoroute_INFO_107.7_Nord.png',
			tags: ['Française', 'Info Trafic', 'Autoroute Info']
		},
		{
			name: 'Autoroute Info - Zone Sud',
			url: 'http://media.autorouteinfo.fr:8000/direct_sud.mp3',
			img: 'Autoroute_INFO_107.7_Nord.png',
			tags: ['Française', 'Info Trafic', 'Autoroute Info']
		},
		{
			name: 'Radio Atlandes Autoroute',
			url: 'http://str0.creacast.com/radio_atlandes_autoroute',
			img: 'radio_atlandes_autoroute.png',
			tags: ['Française', 'Info Trafic']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Alpes Provence',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_6',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Auvergne / Zone Vallée du Rhône',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_5',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Côte d\'Azur',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_7',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Grand Ouest',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_2',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Languedoc Roussillon',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_4',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Ouest Centre',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_1',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Sud Ouest',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_3',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Radio Vinci Autoroutes - Zone Toulouse',
			url: 'http://str0.creacast.com/radio_vinci_autoroutes_8',
			img: 'Radio_Vinci_Autoroutes.png',
			tags: ['Française', 'Info Trafic', 'Radio Vinci Autoroutes']
		},
		{
			name: 'Sanef 107.7 - Zone Est',
			url: 'http://sanef.ice.infomaniak.ch/sanef1077-est.mp3',
			img: 'SANEF_Radio.png',
			tags: ['Française', 'Info Trafic', 'Sanef 107.7']
		},
		{
			name: 'Sanef 107.7 - Zone Ile-de-France',
			url: 'http://sanef.ice.infomaniak.ch/sanef1077-idf.mp3',
			img: 'SANEF_Radio.png',
			tags: ['Française', 'Info Trafic', 'Sanef 107.7']
		},
		{
			name: 'Sanef 107.7 - Zone Nord',
			url: 'http://sanef.ice.infomaniak.ch/sanef1077-nord.mp3',
			img: 'SANEF_Radio.png',
			tags: ['Française', 'Info Trafic', 'Sanef 107.7']
		},
		{
			name: 'Sanef 107.7 - Zone Ouest',
			url: 'http://sanef.ice.infomaniak.ch/sanef1077-ouest.mp3',
			img: 'SANEF_Radio.png',
			tags: ['Française', 'Info Trafic', 'Sanef 107.7']
		}/*,
		{
			name: '----- France Bleu -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'France Bleu', 'Locale']
		}*/,
		{
			name: 'France Bleu 107.1',
			url: 'http://direct.francebleu.fr/live/fb1071-midfi.mp3',
			img: 'France_Bleu_107.1.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Alsace',
			url: 'http://direct.francebleu.fr/live/fbalsace-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Armorique',
			url: 'http://direct.francebleu.fr/live/fbarmorique-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Auxerre',
			url: 'http://direct.francebleu.fr/live/fbauxerre-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Azur',
			url: 'http://direct.francebleu.fr/live/fbazur-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Basse-Normandie',
			url: 'http://direct.francebleu.fr/live/fbbassenormandie-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Bearn',
			url: 'http://direct.francebleu.fr/live/fbbearn-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Belfort Montbeliard',
			url: 'http://direct.francebleu.fr/live/fbbelfort-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Berry',
			url: 'http://direct.francebleu.fr/live/fbberry-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Besancon',
			url: 'http://direct.francebleu.fr/live/fbbesancon-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Bourgogne',
			url: 'http://direct.francebleu.fr/live/fbbourgogne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Breizh Izel',
			url: 'http://direct.francebleu.fr/live/fbbreizizel-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Champagne',
			url: 'http://direct.francebleu.fr/live/fbchampagne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Cotentin',
			url: 'http://direct.francebleu.fr/live/fbcotentin-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Creuse',
			url: 'http://direct.francebleu.fr/live/fbcreuse-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Drome Ardeche',
			url: 'http://direct.francebleu.fr/live/fbdromeardeche-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Elsass',
			url: 'http://direct.francebleu.fr/live/Fbelsass-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Frequenza Mora (RCFM)',
			url: 'http://direct.francebleu.fr/live/fbfrequenzamora-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Gard Lozere',
			url: 'http://direct.francebleu.fr/live/fbgardlozere-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Gascogne',
			url: 'http://direct.francebleu.fr/live/fbgascogne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Gironde',
			url: 'http://direct.francebleu.fr/live/fbgironde-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Haute-Normandie',
			url: 'http://direct.francebleu.fr/live/fbhautenormandie-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Herault',
			url: 'http://direct.francebleu.fr/live/fbherault-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Isere',
			url: 'http://direct.francebleu.fr/live/fbisere-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu La Rochelle',
			url: 'http://direct.francebleu.fr/live/fblarochelle-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Limousin',
			url: 'http://direct.francebleu.fr/live/fblimousin-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Loire Ocean',
			url: 'http://direct.francebleu.fr/live/fbloireocean-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Lorraine Nord',
			url: 'http://direct.francebleu.fr/live/fblorrainenord-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Maine',
			url: 'http://direct.francebleu.fr/live/fbmaine-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Mayenne',
			url: 'http://direct.francebleu.fr/live/fbmayenne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Nord',
			url: 'http://direct.francebleu.fr/live/fbnord-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Orleans',
			url: 'http://direct.francebleu.fr/live/fborleans-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Pays Basque',
			url: 'http://direct.francebleu.fr/live/fbpaysbasque-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Pays d\'Auvergne',
			url: 'http://direct.francebleu.fr/live/fbpaysdauvergne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Pays de Savoie',
			url: 'http://direct.francebleu.fr/live/fbpaysdesavoie-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Perigord',
			url: 'http://direct.francebleu.fr/live/fbperigord-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Picardie',
			url: 'http://direct.francebleu.fr/live/fbpicardie-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Poitou',
			url: 'http://direct.francebleu.fr/live/fbpoitou-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Provence',
			url: 'http://direct.francebleu.fr/live/fbprovence-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Roussillon',
			url: 'http://direct.francebleu.fr/live/fbroussillon-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Saint-Etienne',
			url: 'http://direct.francebleu.fr/live/fbstetienne-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Sud Lorraine',
			url: 'http://direct.francebleu.fr/live/fbsudlorraine-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Toulouse',
			url: 'http://direct.francebleu.fr/live/fbtoulouse-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Touraine',
			url: 'http://direct.francebleu.fr/live/fbtouraine-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		},
		{
			name: 'France Bleu Vaucluse',
			url: 'http://direct.francebleu.fr/live/fbvaucluse-midfi.mp3',
			img: 'France_Bleu.png',
			tags: ['Française', 'France Bleu', 'Locale']
		}/*,
		{
			name: '----- Radios Régionales / Locales : A / B / C -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		}*/,
		{
			name: 'Africa N°1',
			url: 'http://african1paris.ice.infomaniak.ch/african1paris-128.mp3',
			img: 'Africa_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Alouette',
			url: 'http://alouette.ice.infomaniak.ch/alouette-high.mp3',
			img: 'Alouette.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Alpes 1 Grand Grenoble',
			url: 'http://alpes1grenoble.ice.infomaniak.ch/alpes1grenoble-high.mp3',
			img: 'Alpes_1_Grand_Grenoble.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Alpes 1']
		},
		{
			name: 'Alpes 1 Alpes du Sud',
			url: 'http://alpes1gap.ice.infomaniak.ch/alpes1gap-high.mp3',
			img: 'Alpes_1.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Alpes 1']
		},
		{
			name: 'Alta Frequenza',
			url: 'http://altafrequenza.ice.infomaniak.ch/altafrequenza-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Atomic Radio',
			url: 'http://radios.topymedia.com:8032/;',
			img: 'Atomic_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Azur FM - Colmar',
			url: 'http://live.radioking.fr/azur-fm-68',
			img: 'Azur_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Azur FM']
		},
		{
			name: 'Azur FM - Sélestat',
			url: 'http://live.radioking.fr/azur-fm-67',
			img: 'Azur_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Azur FM']
		},
		{
			name: 'Beur FM',
			url: 'http://broadcast.infomaniak.ch/beurfm-high.mp3',
			img: 'BEUR_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Bretagne 5',
			url: 'https://bretagne5.streamakaci.com/bretagne5.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Capsao Lyon / Vienne',
			url: 'http://str2.creacast.com/capsao',
			img: 'Radio_CapSao.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Capsao']
		},
		{
			name: 'Capsao Oyonnax',
			url: 'http://str2.creacast.com/capsao_f',
			img: 'Radio_CapSao.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Capsao']
		},
		{
			name: 'Champagne FM Châlons-en-Champagne',
			url: 'http://chalons.ice.infomaniak.ch/chalons-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Château-Thierry',
			url: 'http://chateauthierry.ice.infomaniak.ch/chateauthierry-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Charleville-Mezières',
			url: 'http://charleville.ice.infomaniak.ch/charleville-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Epernay',
			url: 'http://epernay.ice.infomaniak.ch/epernay-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Reims',
			url: 'http://reims.ice.infomaniak.ch/reims-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Rethel',
			url: 'http://rethel.ice.infomaniak.ch/rethel-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Troyes',
			url: 'http://troyes.ice.infomaniak.ch/troyes-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'Champagne FM Vitry-St-Dizier',
			url: 'http://vitry-stdizier.ice.infomaniak.ch/vitry-stdizier-128.mp3',
			img: 'Champagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C', 'Champagne FM']
		},
		{
			name: 'CFM',
			url: 'http://cfm.streamakaci.com/;stream/1',
			img: 'CFM_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Chante France',
			url: 'http://stream1.chantefrance.com/Chante_France',
			img: 'Chante_France.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		},
		{
			name: 'Contact FM (Nord France)',
			url: 'http://radio-contact.ice.infomaniak.ch/radio-contact-high',
			img: 'Contact_FM.png',
			tags: ['Française', 'Régionale/Locale', 'A/B/C']
		}/*,
		{
			name: '----- Radios Régionales / Locales : D / E / F -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		}*/,
		{
			name: 'Delta FM Boulogne',
			url: 'http://deltafmboulogne.ice.infomaniak.ch/deltafmboulogne-high.mp3',
			img: 'Delta_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Delta FM']
		},
		{
			name: 'Delta FM Calais',
			url: 'http://deltafmcalais.ice.infomaniak.ch/deltafmcalais-128.aac',
			img: 'Delta_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Delta FM']
		},
		{
			name: 'Delta FM Dunkerque',
			url: 'http://deltafmdunkerque.ice.infomaniak.ch/deltafmdunkerque-high.mp3',
			img: 'Delta_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Delta FM']
		},
		{
			name: 'Delta FM Lille',
			url: 'http://deltafmregion.ice.infomaniak.ch/deltafmregion-128.aac',
			img: 'Delta_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Delta FM']
		},
		{
			name: 'Delta FM Saint Omer',
			url: 'http://deltafmsaintomer.ice.infomaniak.ch/deltafmsaintomer-high.mp3',
			img: 'Delta_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Delta FM']
		},
		{
			name: 'Demoiselle FM Oléron',
			url: 'http://stream.demoisellefm.com:8000/oleron-192.mp3',
			img: 'Demoiselle_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Demoiselle FM']
		},
		{
			name: 'Demoiselle FM Rochefort',
			url: 'http://stream.demoisellefm.com:8000/rochefort-192.mp3',
			img: 'Demoiselle_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Demoiselle FM']
		},
		{
			name: 'Demoiselle FM Royan',
			url: 'http://stream.demoisellefm.com:8000/royan-192.mp3',
			img: 'Demoiselle_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Demoiselle FM']
		},
		{
			name: 'Demoiselle FM Saintes',
			url: 'http://stream.demoisellefm.com:8000/saintes-192.mp3',
			img: 'Demoiselle_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Demoiselle FM']
		},
		{
			name: 'Evasion Essonne',
			url: 'http://stream1.evasionfm.com/Essonne',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Nord 77',
			url: 'http://stream1.evasionfm.com/Nord77',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Nord Yvelines',
			url: 'http://stream1.evasionfm.com/Nord78',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Oise',
			url: 'http://stream1.evasionfm.com/Oise',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Paris',
			url: 'http://stream1.evasionfm.com/Paris',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Somme',
			url: 'http://stream1.evasionfm.com/Somme',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Sud 77',
			url: 'http://stream1.evasionfm.com/Sud77',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'Evasion Sud Yvelines',
			url: 'http://stream1.evasionfm.com/Yvelines',
			img: 'Evasion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F', 'Evasion']
		},
		{
			name: 'FC Radio L\'essentiel',
			url: 'http://fcradio.ice.infomaniak.ch/fcradio-128.mp3',
			img: 'FC_Radio_lEssentiel.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		},
		{
			name: 'Forum',
			url: 'http://start-forum.ice.infomaniak.ch/start-forum-high.mp3',
			img: 'Forum.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		},
		{
			name: 'France Maghreb 2',
			url: 'http://francemaghreb2.ice.infomaniak.ch/francemaghreb2-high.mp3',
			img: 'France_Maghreb_2.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		},
		{
			name: 'Frequence Plus',
			url: 'http://freqplus.ice.infomaniak.ch/freqplus-high.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		},
		{
			name: 'Fréquence Plus (RTS programme Fréquence Plus)',
			url: 'http://frequenceplus71.ice.infomaniak.ch/frequenceplus71-128.mp3',
			img: 'Frequence_Plus.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		},
		{
			name: 'Fusion FM',
			url: 'http://fusionfm.ice.infomaniak.ch:8000/fusionfm-192.mp3',
			img: 'Fusion_FM.png',
			tags: ['Française', 'Régionale/Locale', 'D/E/F']
		}/*,
		{
			name: '----- Radios Régionales / Locales : G / H / I -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I']
		}*/,
		{
			name: 'Générations',
			url: 'http://generationfm.ice.infomaniak.ch/generationfm-high.mp3',
			img: 'Generations.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Générations']
		},
		{
			name: 'Générations Lyon',
			url: 'http://radiosun.ice.infomaniak.ch/radiosun-high.mp3',
			img: 'Generations_101.5_Lyon.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Générations']
		},
		{
			name: 'Hit West',
			url: 'http://broadcast.infomaniak.ch/hitwest-high.mp3',
			img: 'Hit_West.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Générations']
		},
		{
			name: 'Hot Radio Albertville',
			url: 'http://st8.hotradio.fr/42',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Bourgoin',
			url: 'http://st8.hotradio.fr/82',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Chambery',
			url: 'http://st8.hotradio.fr/32',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Grenoble',
			url: 'http://st8.hotradio.fr/12',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Pont-de-Beauvoisin',
			url: 'http://st8.hotradio.fr/52',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Pontcharra',
			url: 'http://st8.hotradio.fr/72',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		},
		{
			name: 'Hot Radio Voiron',
			url: 'http://st8.hotradio.fr/92',
			img: 'Hot_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'G/H/I', 'Hot Radio']
		}/*,
		{
			name: '----- Radios Régionales / Locales : J / K / L -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L']
		}*/,
		{
			name: 'Jordanne FM',
			url: 'http://live.jordannefm.com:8000/JFMCantalMD.mp3',
			img: 'Jordanne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L']
		},
		{
			name: 'Kiss FM Cannes, Grasses & Antibes',
			url: 'https://kissfmcannes.ice.infomaniak.ch/kissfmcannes-128.mp3',
			img: 'Kiss_FM.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'Kiss FM']
		},
		{
			name: 'Kiss FM Est & Centre Var',
			url: 'https://kissfmvarest.ice.infomaniak.ch/kissfmvarest-128.mp3',
			img: 'Kiss_FM.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'Kiss FM']
		},
		{
			name: 'Kiss FM Nice',
			url: 'http://kissfm.ice.infomaniak.ch/kissfm-128.mp3',
			img: 'Kiss_FM.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'Kiss FM']
		},
		{
			name: 'Kiss FM Toulon / Marseille',
			url: 'http://kissfm2.ice.infomaniak.ch/kissfm2-128.mp3',
			img: 'Kiss_FM.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'Kiss FM']
		},
		{
			name: 'La Radio Plus - Alpes du nord / Suisse',
			url: 'http://laradioplus.ice.infomaniak.ch/laradioplus-high.mp3',
			img: 'La_Radio_Plus.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'La Radio Plus']
		},
		{
			name: 'La Radio Plus - Alpes du sud',
			url: 'http://lalaradio.ice.infomaniak.ch/lalaradio-high.mp3',
			img: 'La_Radio_Plus.png',
			tags: ['Française', 'Régionale/Locale', 'J/K/L', 'La Radio Plus']
		}/*,
		{
			name: '----- Radios Régionales / Locales : M / N / O -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		}*/,
		{
			name: 'Magnum La radio',
			url: 'http://str0.creacast.com/magnum',
			img: 'Magnum_La_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Métropolys',
			url: 'http://str0.creacast.com/metropolys',
			img: 'Metropolys.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Mistral FM - Aubagne',
			url: 'http://broadcast.infomaniak.ch/mistralfmaubagne-128.mp3',
			img: 'Mistral_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Mistral FM']
		},
		{
			name: 'Mistral FM - Marseille',
			url: 'http://mistralfmaubagne.ice.infomaniak.ch/mistralfmaubagne-128.mp3',
			img: 'Mistral_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Mistral FM']
		},
		{
			name: 'Mistral FM - Toulon',
			url: 'http://mistralfm.ice.infomaniak.ch/mistralfm-high.mp3',
			img: 'Mistral_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Mistral FM']
		},
		{
			name: 'Mixx Radio',
			url: 'http://mixxfmfr.ice.infomaniak.ch/mixxfmfr-192.mp3',
			img: 'Mixx_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Mona FM',
			url: 'http://monafm.bcast.infomaniak.ch/monafm-high.mp3',
			img: 'Mona_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Montagne FM',
			url: 'http://montagnefm.ice.infomaniak.ch/montagnefm-96.mp3',
			img: 'Montagne_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'MTI',
			url: 'http://radiomti.ice.infomaniak.ch/radiomti.mp3',
			img: 'MTI.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'N\'Radio',
			url: 'http://nradio.ice.infomaniak.ch/nradio-128.mp3',
			img: 'NRadio.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Océane FM',
			url: 'http://oceanefm.ice.infomaniak.ch/oceanefm-128.mp3',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Concarneau',
			url: 'http://icepe4.infomaniak.ch/oceaneconcarneau-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Guer',
			url: 'http://icepe3.infomaniak.ch/oceaneguer-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Guingamp',
			url: 'http://icepe3.infomaniak.ch/oceaneguingamp-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM La Roche Bernard',
			url: 'http://icepe3.infomaniak.ch/oceanelarochebernard-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM La Roche sur Yon',
			url: 'http://icepe3.infomaniak.ch/oceanelarochesuryon-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Lannion',
			url: 'http://icepe3.infomaniak.ch/oceanelannion-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Nantes',
			url: 'http://icepe3.infomaniak.ch/oceanenantes-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Paimpol',
			url: 'http://icepe1.infomaniak.ch/oceanepaimpol-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Quimper',
			url: 'http://icepe1.infomaniak.ch/oceanequimper-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Quimperle',
			url: 'http://icepe1.infomaniak.ch/oceanequimperle-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Redon',
			url: 'http://icepe1.infomaniak.ch/oceaneredon-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Rouen',
			url: 'http://icepe1.infomaniak.ch/oceanerouen-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Saint-Nazaire',
			url: 'http://icepe1.infomaniak.ch/oceanesaintnazaire-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'Océane FM Vannes',
			url: 'http://icepe1.infomaniak.ch/oceanevannes-128',
			img: 'Oceane_FM.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Océane FM']
		},
		{
			name: 'ODS Radio',
			url: 'http://ods.ice.infomaniak.ch/ods-high.mp3',
			img: 'ODS_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O']
		},
		{
			name: 'Oxygène Auron Isola',
			url: 'http://ice01.dicast.fr:8000/oxygene-mercantour',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Hautes Alpes',
			url: 'http://stream.mengine.net:8014/stream',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène La Valberg',
			url: 'http://ice01.dicast.fr:8000/oxygene-nice',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Maurienne',
			url: 'http://ice01.dicast.fr:8000/oxygene-maurienne',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Oisans',
			url: 'http://ice01.dicast.fr:8000/oxygene-oisans',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Ubaye',
			url: 'http://ice01.dicast.fr:8000/oxygene-ubaye',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Maurienne Val-d\'Isère',
			url: 'http://ice01.dicast.fr:8000/oxygene-maurienne',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène Vercors',
			url: 'http://ice01.dicast.fr:8000/oxygene-vercors',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène FM',
			url: 'http://stream.radios-arra.fr:8000/oxygenefm',
			img: 'Oxygene_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène, La radio de la Seine-et-Marne - Coulommiers',
			url: 'http://str0.creacast.com/oxy-coulommiers',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène, La radio de la Seine-et-Marne - Meaux',
			url: 'http://str0.creacast.com/oxy-meaux',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène, La radio de la Seine-et-Marne - Melun',
			url: 'http://str0.creacast.com/oxy-melun',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène, La radio de la Seine-et-Marne - Provins',
			url: 'http://str0.creacast.com/oxy-provins',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		},
		{
			name: 'Oxygène, La radio de la Seine-et-Marne - Sud 77',
			url: 'http://str0.creacast.com/oxy-montereau',
			img: 'OXYGENE_RADIO_2.png',
			tags: ['Française', 'Régionale/Locale', 'M/N/O', 'Oxygène']
		}/*,
		{
			name: '----- Radios Régionales / Locales : P / Q / R / S -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		}*/,
		{
			name: 'Pyrénées FM',
			url: 'http://antenne.pyreneesfm.com/;stream/1',
			img: 'Pyrenees_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio 6 Abbeville',
			url: 'http://radio6-abbeville.ice.infomaniak.ch/radio6-abbeville-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Boulogne-sur-Mer',
			url: 'http://radio6-boulognesurmer.ice.infomaniak.ch/radio6-boulognesurmer-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Calais',
			url: 'http://radio6-calais.ice.infomaniak.ch/radio6-calais-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Cayeux-sur-Mer',
			url: 'http://radio6-cayeux.ice.infomaniak.ch/radio6-cayeux-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Dunkerque',
			url: 'http://radio6-dunkerque.ice.infomaniak.ch/radio6-dunkerque-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Hesdin',
			url: 'http://radio6-hesdin.ice.infomaniak.ch/radio6-hesdin-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Lille',
			url: 'http://radio6-lille.ice.infomaniak.ch/radio6-lille-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio 6 Montreuil-sur-Mer',
			url: 'http://radio6-montreuilsurmer.ice.infomaniak.ch/radio6-montreuilsurmer-128.mp3',
			img: 'Radio_6.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio 6']
		},
		{
			name: 'Radio Bonheur',
			url: 'http://radiobonheur.ice.infomaniak.ch/radiobonheur-128-1.mp3',
			img: 'Radio_Bonheur.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Caroline',
			url: 'https://radiocast-002.m2network.fr:8443/radiocaroline.mp3',
			img: 'Radio_Caroline.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Courtoisie',
			url: 'http://direct.radiocourtoisie.fr',
			img: 'Radio_Courtoisie.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Cristal',
			url: 'http://radiocristal.ice.infomaniak.ch/radiocristal-high.mp3',
			img: 'Radio_Cristal.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Dreyeckland France',
			url: 'http://stream.rcs.revma.com/aguwyw7fkzzuv.mp3',
			img: 'Radio_Dreyeckland.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Dreyeckland Strasbourg',
			url: 'https://stream.rcs.revma.com/1vm371agkzzuv.mp3',
			img: 'Radio_Dreyeckland_Libre_RDL.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Dreyeckland Selestat',
			url: 'http://stream.rcs.revma.com/wcrk7f9fkzzuv.mp3',
			img: 'Radio_Dreyeckland_Libre_RDL.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Espérance',
			url: 'http://stream.radio-esperance.net/esperance.mp3',
			img: 'Radio_Esperance.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Espace',
			url: 'http://radioespace.ice.infomaniak.ch/radioespace-high.mp3',
			img: 'Radio_Espace.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Isa Grenoble',
			url: 'http://radioisagrenoble.ice.infomaniak.ch/radioisagrenoble-128.mp3',
			img: 'Radio_ISA.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Isa']
		},
		{
			name: 'Radio Isa Nord Isère',
			url: 'http://radioisa.ice.infomaniak.ch/radioisa-128.mp3',
			img: 'Radio_ISA.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Isa']
		},
		{
			name: 'Radio Isa Pont de Beauvoisin',
			url: 'http://radioisapdb.ice.infomaniak.ch/radioisapdb-128.mp3',
			img: 'Radio_ISA.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Isa']
		},
		{
			name: 'Radio Isa Voiron',
			url: 'http://radioisavoiron.ice.infomaniak.ch/radioisavoiron-128.mp3',
			img: 'Radio_ISA.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Isa']
		},
		{
			name: 'Radio Ménergy',
			url: 'http://radiomenergy.ice.infomaniak.ch/radiomenergy-128.mp3',
			img: 'Radio_Menergy.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Numéro 1',
			url: 'http://radiono1.ice.infomaniak.ch/radiono1-128.mp3',
			img: 'Radio_Numero_1.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Présence Figeac',
			url: 'https://direct.radiopresence.com/radio-presence-figeac',
			img: 'Radio_Presence.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Présence']
		},
		{
			name: 'Radio Présence Lot',
			url: 'https://direct.radiopresence.com/radio-presence-lot',
			img: 'Radio_Presence.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Présence']
		},
		{
			name: 'Radio Présence Lourdes Pyrénées',
			url: 'https://direct.radiopresence.com/radio-presence-lourdes',
			img: 'Radio_Presence.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Présence']
		},
		{
			name: 'Radio Présence Saint-Gaudens',
			url: 'https://direct.radiopresence.com/radio-presence-pyrenees',
			img: 'Radio_Presence.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Présence']
		},
		{
			name: 'Radio Présence Toulouse',
			url: 'https://direct.radiopresence.com/radio-presence',
			img: 'Radio_Presence.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Présence']
		},
		{
			name: 'Radio RVA',
			url: 'http://rva.ice.infomaniak.ch/rva-high.mp3',
			img: 'Radio_RVA.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Scoop Aubenas',
			url: 'http://radioscoopaubenas.ice.infomaniak.ch/radioscoop-aubenas-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Bellegarde',
			url: 'http://radioscoopbellegarde.ice.infomaniak.ch/radioscoop-bellegarde-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Bourg-en-Bresse',
			url: 'http://radioscoop-bourg.ice.infomaniak.ch:80/radioscoop-bourg-128',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Clermont-Ferrand',
			url: 'http://radioscoop-clermont.ice.infomaniak.ch:80/radioscoop-clermont-128',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Le Puy en Velay',
			url: 'http://radioscooplepuy-en-velay.ice.infomaniak.ch/radioscoop-lepuy-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Lyon',
			url: 'http://radioscoop-lyon.ice.infomaniak.ch:80/radioscoop-lyon-128',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Macon',
			url: 'http://radioscoopmacon.ice.infomaniak.ch/radioscoop-macon-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Roanne',
			url: 'http://radioscooproanne.ice.infomaniak.ch/radioscoop-roanne-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Saint-Etienne',
			url: 'http://radioscoop-stetienne.ice.infomaniak.ch:80/radioscoop-stetienne-128',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Vichy',
			url: 'http://radioscoopvichy.ice.infomaniak.ch/radioscoop-vichy-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Vienne',
			url: 'http://radioscoopvienne.ice.infomaniak.ch/radioscoop-vienne-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Scoop Yssingeaux',
			url: 'http://radioscoopyssingeaux.ice.infomaniak.ch/radioscoop-yssingeaux-128.mp3',
			img: 'Radio_Scoop.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Scoop']
		},
		{
			name: 'Radio Star (Franche-Comté)',
			url: 'http://radiostar.ice.infomaniak.ch/radiostar-128.mp3',
			img: 'Radio_Star.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Radio Star']
		},
		{
			name: 'Radio Star (PACA)',
			url: 'https://listen.radioking.com/radio/9728/stream/20210',
			img: 'Radio_Star.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Radio Zinzine',
			url: 'http://91.121.65.189:8000/3?1526206575807.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		},
		{
			name: 'Raje Avignon',
			url: 'https://rajeavignon.ice.infomaniak.ch/rajeavignon-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Raje']
		},
		{
			name: 'Raje Nîmes',
			url: 'https://rajenimes.ice.infomaniak.ch/rajenimes-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Raje']
		},
		{
			name: 'Raje Paris',
			url: 'https://rajeparis.ice.infomaniak.ch/rajeparis-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Raje']
		},
		{
			name: 'RTS FM National',
			url: 'http://stream.rtsfm.com/rts-national.mp3',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Avignon',
			url: 'http://stream.rtsfm.com/rts-avignon',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Béziers',
			url: 'http://stream.rtsfm.com/rts-beziers',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Montpellier',
			url: 'http://stream.rtsfm.com/rts-montpellier',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Narbonne',
			url: 'http://stream.rtsfm.com/rts-narbonne',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Nimes',
			url: 'http://stream.rtsfm.com/rts-nimes',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Perpignan',
			url: 'http://stream.rtsfm.com/rts-perpignan',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Sète',
			url: 'http://stream.rtsfm.com/rts-sete',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RTS FM Toulouse',
			url: 'http://stream.rtsfm.com/rts-toulouse',
			img: 'RTS.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RTS FM']
		},
		{
			name: 'RVM Radio',
			url: 'http://stream.rvm.fr:8002/;stream/1',
			img: 'RVM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RVM']
		},
		{
			name: 'RVM Radio Charleville',
			url: 'http://stream.rvm.fr:8030/rvmcharleville.mp3',
			img: 'RVM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RVM']
		},
		{
			name: 'RVM Radio Monthermé',
			url: 'http://stream.rvm.fr:8028/rvmmontherme.mp3',
			img: 'RVM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RVM']
		},
		{
			name: 'RVM Radio Revin',
			url: 'http://stream.rvm.fr:8024/rvmrevin.mp3',
			img: 'RVM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RVM']
		},
		{
			name: 'RVM Radio Sedan',
			url: 'http://stream.rvm.fr:8026/rvmsedan.mp3',
			img: 'RVM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'RVM']
		},
		{
			name: 'Sensations Essonne',
			url: 'http://sensationsessonne.ice.infomaniak.ch/sensationsessonne-128.mp3',
			img: 'Radio_Sensations.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sensations']
		},
		{
			name: 'Sensations Normandie (Bernay)',
			url: 'http://sensationsnormandie.ice.infomaniak.ch/sensations-normandie.mp3',
			img: 'Radio_Sensations.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sensations']
		},
		{
			name: 'Sensations Paris',
			url: 'http://sensationsparisdab.ice.infomaniak.ch/sensationsparisdab-192.mp3',
			img: 'Radio_Sensations.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sensations']
		},
		{
			name: 'Sensations Rouen',
			url: 'http://sensationsnormandierouen.ice.infomaniak.ch/sensationsnormandierouen-128.mp3',
			img: 'Radio_Sensations.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sensations']
		},
		{
			name: 'Sensations Yvelines',
			url: 'http://sensations.ice.infomaniak.ch/sensations.mp3',
			img: 'Radio_Sensations.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sensations']
		},
		{
			name: 'Sweet FM Alençon',
			url: 'https://sweetfm-alencon.ice.infomaniak.ch/sweetfm-alencon-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Blois',
			url: 'http://sweetfm-blois.ice.infomaniak.ch/sweetfm-blois-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Château-Gontier',
			url: 'http://sweetfm-haut-anjou.ice.infomaniak.ch/sweetfm-haut-anjou-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Craon',
			url: 'http://sweetfm-haut-anjou.ice.infomaniak.ch/sweetfm-haut-anjou-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Lamotte-Beuvreon',
			url: 'http://sweetfm-sologne.ice.infomaniak.ch/sweetfm-sologne-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM L\'aigle',
			url: 'http://sweetfm-aigle-verneuil.ice.infomaniak.ch/sweetfm-aigle-verneuil-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM La Ferté-Bernard',
			url: 'http://sweetfm-perche72.ice.infomaniak.ch/sweetfm-perche72-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM La Loupe',
			url: 'http://sweetfm-perche28.ice.infomaniak.ch/sweetfm-perche28-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Le Mans',
			url: 'http://sweetfm-lemans.ice.infomaniak.ch/sweetfm-lemans-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Mamers',
			url: 'http://sweetfm-mamers.ice.infomaniak.ch/sweetfm-mamers-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Montoire sur le Loir',
			url: 'http://sweetfm-vendome-montoire.ice.infomaniak.ch/sweetfm-vendome-montoire-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Nogent-Le Rotrou',
			url: 'https://sweetfm-perche28.ice.infomaniak.ch/sweetfm-perche28-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Romorantin',
			url: 'http://sweetfm-sologne.ice.infomaniak.ch/sweetfm-sologne-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Rouen',
			url: 'http://sweetfm-rouen.ice.infomaniak.ch/sweetfm-rouen-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Sablé-Sur-Sarthe',
			url: 'http://sweetfm-sable-sur-sarthe.ice.infomaniak.ch/sweetfm-sable-sur-sarthe-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Saint-Calais',
			url: 'http://sweetfm-perche72.ice.infomaniak.ch/sweetfm-perche72-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Vallée du Cher',
			url: 'http://sweetfm-blois.ice.infomaniak.ch/sweetfm-blois-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Vendôme',
			url: 'http://sweetfm-vendome-montoire.ice.infomaniak.ch/sweetfm-vendome-montoire-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Sweet FM Verneuil-sur-Avre',
			url: 'http://sweetfm-aigle-verneuil.ice.infomaniak.ch/sweetfm-aigle-verneuil-192.mp3',
			img: 'Sweet_FM.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S', 'Sweet FM']
		},
		{
			name: 'Swigg',
			url: 'http://start-adofm.ice.infomaniak.ch/start-adofm-high.mp3',
			img: 'Swigg.png',
			tags: ['Française', 'Régionale/Locale', 'P/Q/R/S']
		}/*,
		{
			name: '----- Radios Régionales / Locales : T / U / V -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V']
		}*/,
		{
			name: 'Tendance Ouest Alencon',
			url: 'http://streaming.tendanceouest.com/alencon.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Argentan',
			url: 'http://streaming.tendanceouest.com:80/argentan.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Avranches',
			url: 'http://streaming.tendanceouest.com:80/avranches.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Bernay',
			url: 'http://streaming.tendanceouest.com/bernay.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Caen',
			url: 'http://streaming.tendanceouest.com/caen.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Cherbourg',
			url: 'http://streaming.tendanceouest.com/cherbourg.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Dieppe',
			url: 'http://streaming.tendanceouest.com/dieppe.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Fecamp',
			url: 'http://streaming.tendanceouest.com/fecamp.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Flers',
			url: 'http://streaming.tendanceouest.com/flers.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest L\'Aigle',
			url: 'http://streaming.tendanceouest.com/laigle.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Le Havre',
			url: 'http://streaming.tendanceouest.com/lehavre.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Rouen',
			url: 'http://streaming.tendanceouest.com/rouen.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tendance Ouest Saint-Lo',
			url: 'http://streaming.tendanceouest.com/saintlo.mp3',
			img: 'Tendance_Ouest.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tendance Ouest']
		},
		{
			name: 'Tonic Radio Bourgoin',
			url: 'http://tonicradiobourgoin.ice.infomaniak.ch/tonicradiobourgoin.mp3',
			img: 'Tonic_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tonic Radio']
		},
		{
			name: 'Tonic Radio Lyon & Vienne',
			url: 'http://hit-sport.ice.infomaniak.ch/hit-sport-high.mp3',
			img: 'Tonic_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tonic Radio']
		},
		{
			name: 'Tonic Radio Marseille',
			url: 'http://tonicradiohd.ice.infomaniak.ch/tonicradiohd-128.mp3',
			img: 'Tonic_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tonic Radio']
		},
		{
			name: 'Tonic Radio Villefranche-sur-Saône',
			url: 'http://tonicradiovillefranche.ice.infomaniak.ch/tonicradiovillefranche.mp3',
			img: 'Tonic_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Tonic Radio']
		},
		{
			name: 'Top Music Colmar',
			url: 'http://str0.creacast.com/topmusic2',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Haguenau',
			url: 'http://str0.creacast.com/topmusic3',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Mulhouse',
			url: 'http://str0.creacast.com/topmusic_mulhouse',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Sainte-Marie-aux-Mines',
			url: 'http://str0.creacast.com/topmusic_sainte_marie',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Sarrebourg',
			url: 'http://str0.creacast.com/topmusic4',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Saverne',
			url: 'http://str0.creacast.com/topmusic5',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Schirmeck',
			url: 'http://str0.creacast.com/topmusic_schirmeck',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Selestat',
			url: 'http://str0.creacast.com/topmusic6',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Top Music Strasbourg',
			url: 'http://str0.creacast.com/topmusic1',
			img: 'Top_Music.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Top Music']
		},
		{
			name: 'Totem Aveyron',
			url: 'http://aratotem.ice.infomaniak.ch/aveyron.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Totem Auvergne',
			url: 'http://aratotem.ice.infomaniak.ch/auvergne.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Totem Correze',
			url: 'http://aratotem.ice.infomaniak.ch/correze.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Totem Gard',
			url: 'http://aratotem.ice.infomaniak.ch/gard.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Totem Lozere',
			url: 'http://aratotem.ice.infomaniak.ch/lozere.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Totem Tarn & Garonne',
			url: 'http://aratotem.ice.infomaniak.ch/tarn-et-garonne.mp3',
			img: 'Totem.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V', 'Totem']
		},
		{
			name: 'Vibration',
			url: 'http://vibration.ice.infomaniak.ch/vibration-high.mp3',
			img: 'Vibration.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V']
		},
		{
			name: 'Virage Radio',
			url: 'http://virageradio.ice.infomaniak.ch/virageradio-high.mp3',
			img: 'Virage_Radio.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V']
		},
		{
			name: 'Voltage',
			url: 'http://start-voltage.ice.infomaniak.ch/start-voltage-high.mp3',
			img: 'Voltage.png',
			tags: ['Française', 'Régionale/Locale', 'T/U/V']
		}/*,
		{
			name: '----- Radios Régionales / Locales : W / X / Y / Z -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', 'W/X/Y/Z']
		}*/,
		{
			name: 'Wit FM',
			url: 'http://start-witfm.ice.infomaniak.ch/start-witfm-high.mp3',
			img: 'Wit_FM.png',
			tags: ['Française', 'Régionale/Locale', 'W/X/Y/Z', 'Wit FM']
		},
		{
			name: 'Wit FM Arcachon',
			url: 'http://witarcachon.ice.infomaniak.ch/witarcachon.mp3',
			img: 'Wit_FM.png',
			tags: ['Française', 'Régionale/Locale', 'W/X/Y/Z', 'Wit FM']
		},
		{
			name: 'Wit FM Bordeaux',
			url: 'http://witbordeaux.ice.infomaniak.ch/witbordeaux.mp3',
			img: 'Wit_FM.png',
			tags: ['Française', 'Régionale/Locale', 'W/X/Y/Z', 'Wit FM']
		},
		{
			name: 'Wit FM Périgueux',
			url: 'http://witperigueux.ice.infomaniak.ch/witperigueux.mp3',
			img: 'Wit_FM.png',
			tags: ['Française', 'Régionale/Locale', 'W/X/Y/Z', 'Wit FM']
		}/*,
		{
			name: '----- Radios Régionales / Locales : 0 / 1 / 2 / 3 -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3']
		}*/,
		{
			name: '100% Albi',
			url: 'http://100radio-albi.ice.infomaniak.ch/100radio-albi-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Auch',
			url: 'http://100radio-auch.ice.infomaniak.ch/100radio-auch-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Cahors',
			url: 'http://100radio-cahors.ice.infomaniak.ch/100radio-cahors-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Carcassone',
			url: 'http://100radio-carcassonne.ice.infomaniak.ch/100radio-carcassonne-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Castres',
			url: 'http://100radio-castres.ice.infomaniak.ch/100radio-castres-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Catalogne',
			url: 'http://100radio-perpignan.ice.infomaniak.ch/100radio-perpignan-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Foix',
			url: 'http://100radio-foix.ice.infomaniak.ch/100radio-foix-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Montauban',
			url: 'http://100radio-montauban.ice.infomaniak.ch/100radio-montauban-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Pau',
			url: 'http://100radio-pau.ice.infomaniak.ch/100radio-pau-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Saint-Gaudens',
			url: 'http://100radio-stgaudens.ice.infomaniak.ch/100radio-stgaudens-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Tarbes',
			url: 'http://100radio-tarbes.ice.infomaniak.ch/100radio-tarbes-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		},
		{
			name: '100% Toulouse',
			url: 'http://d3-soundcast-edge-3.infomaniak.ch/100radio-toulouse-128.mp3',
			img: '100_Radio.png',
			tags: ['Française', 'Régionale/Locale', '0/1/2/3', '100%']
		}/*,
		{
			name: '----- Locales : Fip -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Locale', 'Fip']
		}*/,
		{
			name: 'Fip Bordeaux',
			url: 'http://direct.fipradio.fr/live/fipbordeaux-midfi.mp3',
			img: 'FIP.png',
			tags: ['Française', 'Locale', 'Fip']
		},
		{
			name: 'Fip Nantes',
			url: 'http://direct.fipradio.fr/live/fipnantes-midfi.mp3',
			img: 'FIP.png',
			tags: ['Française', 'Locale', 'Fip']
		},
		{
			name: 'Fip Strasbourg',
			url: 'http://direct.fipradio.fr/live/fipstrasbourg-midfi.mp3',
			img: 'FIP.png',
			tags: ['Française', 'Locale', 'Fip']
		}/*,
		{
			name: '----- Locales : Nova -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Locale', 'Fip']
		}*/,
		{
			name: 'Nova Lyon',
			url: 'http://nova-lyon.ice.infomaniak.ch/nova-lyon-128.mp3',
			img: 'Radio_Nova.png',
			tags: ['Française', 'Locale', 'Radio Nova']
		},
		{
			name: 'Nova Sauvagine (Bordeaux)',
			url: 'http://broadcast.infomaniak.ch/snb-high.mp3',
			img: 'Radio_Nova.png',
			tags: ['Française', 'Locale', 'Radio Nova']
		}/*,
		{
			name: '----- Locales : Phare FM -----',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Locale', 'Phare FM']
		}*/,
		{
			name: 'Phare FM Grenoble',
			url: 'http://str0.creacast.com/pharefm_grenoble',
			img: 'Phare_FM.png',
			tags: ['Française', 'Locale', 'Phare FM']
		},
		{
			name: 'Phare FM Haguenau',
			url: 'http://str0.creacast.com/pharefm_haguenau',
			img: 'Phare_FM.png',
			tags: ['Française', 'Locale', 'Phare FM']
		},
		{
			name: 'Phare FM Montauban',
			url: 'http://str0.creacast.com/pharefm_montauban',
			img: 'Phare_FM.png',
			tags: ['Française', 'Locale', 'Phare FM']
		},
		{
			name: 'Phare FM Mulhouse',
			url: 'http://str0.creacast.com/pharefm_mulhouse',
			img: 'Phare_FM.png',
			tags: ['Française', 'Locale', 'Phare FM']
		},
		{
			name: 'Phare FM Lyon Dauphiné',
			url: 'http://str0.creacast.com/pharefm_dauphine',
			img: 'Phare_FM.png',
			tags: ['Française', 'Locale', 'Phare FM']
		}/*,
		{
			name: '* * * * * Webradios : Chérie FM * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		}*/,
		{
			name: 'Chérie 90\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30239/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie 80\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30237/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie 100 Plus Belles Musiques',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56311/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Acoustic',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30269/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie At Work',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30215/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Ballads',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30297/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Coeur Brise',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56303/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Emotions',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30313/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Fitness',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30283/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Frenchy',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30213/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Happy',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30331/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Jazzy',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30241/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Latino',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30247/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Les Plus Belles Voix',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30317/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Love Songs',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30207/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Party',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30261/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Plus Belle Musique',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56237/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Pop',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30227/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie No Repeat',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30295/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Nouveautés',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30255/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie R\'n\'B Chic',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30275/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Romantic',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30287/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Running',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55648/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Sweet Pop',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30289/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		},
		{
			name: 'Chérie Zen',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30203/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Chérie FM']
		}/*,
		{
			name: '* * * * * Webradios : Fip * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		}*/,
		{
			name: 'FIP Electro',
			url: 'http://icecast.radiofrance.fr/fipelectro-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Groove',
			url: 'http://icecast.radiofrance.fr/fipgroove-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Jazz',
			url: 'http://icecast.radiofrance.fr/fipjazz-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Monde',
			url: 'http://icecast.radiofrance.fr/fipworld-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Nouveautés',
			url: 'http://icecast.radiofrance.fr/fipnouveautes-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Pop',
			url: 'https://icecast.radiofrance.fr/fippop-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Reggae',
			url: 'http://icecast.radiofrance.fr/fipreggae-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		},
		{
			name: 'FIP Rock',
			url: 'http://icecast.radiofrance.fr/fiprock-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fip']
		}/*,
		{
			name: '* * * * * Webradios : Fun Radio * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fun Radio']
		}*/,
		{
			name: 'Fun Radio Chill',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio31.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fun Radio']
		},
		{
			name: 'Fun Radio Fitness',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio32.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Fun Radio']
		}/*,
		{
			name: '* * * * * Webradios : France Musique * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		}*/,
		{
			name: 'France Musique Classique Easy',
			url: 'http://icecast.radiofrance.fr/francemusiqueeasyclassique-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique Classique Plus',
			url: 'http://icecast.radiofrance.fr/francemusiqueclassiqueplus-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique Concerts Radio France',
			url: 'http://icecast.radiofrance.fr/francemusiqueconcertsradiofrance-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique La Baroque',
			url: 'http://icecast.radiofrance.fr/francemusiquebaroque-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique La B.O. Musiques de Films',
			url: 'http://icecast.radiofrance.fr/francemusiquelabo-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique La Contemporaine',
			url: 'http://icecast.radiofrance.fr/francemusiquelacontemporaine-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique La Jazz',
			url: 'http://icecast.radiofrance.fr/francemusiquelajazz-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique Ocora Musiques du monde',
			url: 'http://icecast.radiofrance.fr/francemusiqueocoramonde-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		},
		{
			name: 'France Musique Opéra',
			url: 'http://icecast.radiofrance.fr/francemusiqueopera-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'France Musique']
		}/*,
		{
			name: '* * * * * Webradios : Mouv\' * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		}*/,
		{
			name: 'Mouv\' Rap Français',
			url: 'http://icecast.radiofrance.fr/mouvrapfr-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' 100% Mix',
			url: 'http://icecast.radiofrance.fr/mouv100p100mix-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' Classics',
			url: 'http://icecast.radiofrance.fr/mouvclassics-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' DanceHall',
			url: 'http://icecast.radiofrance.fr/mouvdancehall-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' Kids \'N Family',
			url: 'http://icecast.radiofrance.fr/mouvkidsnfamily-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' Rap US',
			url: 'http://icecast.radiofrance.fr/mouvrapus-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		},
		{
			name: 'Mouv\' RnB & Soul',
			url: 'http://icecast.radiofrance.fr/mouvrnb-hifi.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Mouv\'']
		}/*,
		{
			name: '* * * * * Webradios : Nostalgie * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		}*/,
		{
			name: 'Nostalgie 80 N°1',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56726/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie 100 Plus Grandes Chansons',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30627/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie 100% Francais 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56164/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Best-Of 60\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30615/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Best-Of 70\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30613/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Best-Of 80\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30605/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Best-Of 90\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55206/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Blues',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30639/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Chansons Francaises',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30611/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Disco Fever',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30617/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Fans des Années 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56373/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Fiesta',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30767/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Funk',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30607/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Dance Party 90',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55205/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Generation 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55524/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Italia',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30663/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Jazz',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30641/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Le Classement Ultime 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56609/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Legendes',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55196/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Les Plus Grands Slows',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30609/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Les Plus Grands Tubes Francais',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30705/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Maxi de Max',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56937/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Mini Mix de Max',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56955/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie New Wave',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30703/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Poetes',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30619/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Pop Rock 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56718/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Rock',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30621/mp3_128.mp3?origine=fluxradios',
			img: 'nostalierock.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Route 66',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56040/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Saturday Night',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30773/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Soul',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56953/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie Tous les Tubes, Tous les Styles',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30699/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		},
		{
			name: 'Nostalgie USA 80',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56621/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Nostalgie']
		}/*,
		{
			name: '* * * * * Webradios : NRJ * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		}*/,
		{
			name: 'NRJ Acoustic Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30157/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ All Hits All Stars',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31149/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ At Home',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31011/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ At Work',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30033/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Best Hits Ever',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31251/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Better Days',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/56888/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ C\'Cauet',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30097/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Classic Rap FR',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55189/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Classic Rap US',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31093/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Classic RNB',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31095/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Classic Rock',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31097/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Clubbin',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30017/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Club Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31073/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Dance',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30013/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Dance 90',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31099/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Dance Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31131/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Deep House',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31437/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Discover',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30137/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ EDM',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31419/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ EuroHot 30',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31407/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Extravadance',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30027/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Fiesta',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31247/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Fiesta Latina',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55210/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Fitness',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30007/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ French Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30037/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Funky',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31035/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Gangsta Rap',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31081/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Good Night',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31051/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Happy Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55127/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30043/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hits 90',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55274/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hip Hop RNB Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31559/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hits For Running',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30057/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hits Of The Week',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31153/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Hits Remix',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31019/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Kizomba',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31523/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ La Playlist 2000\'s',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55275/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Latino',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30077/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Latino Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31409/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Lounge',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30049/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Love',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30081/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Made In France',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31217/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Manu dans le 6-9',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30103/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Metal',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30079/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Nouveautés',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30023/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ No Repeat',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31005/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Oriental',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31079/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Party Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30063/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Pop',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30053/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ POP RNB Dance',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31489/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Pure Hits Only',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31503/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Rai',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30133/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Rap FR',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30059/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Rap US',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30061/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Reggae',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30075/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Reggaeton',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31023/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Relax',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31161/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ RNB',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30011/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ RNB FR',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30171/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Rock',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30055/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Romantic',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30191/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Sentimental',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31277/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Sexy',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/55126/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Urban Hits',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30099/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ US Top 40',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/31513/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		},
		{
			name: 'NRJ Zouk',
			url: 'https://scdn.nrjaudio.fm/adwz1/fr/30085/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'NRJ']
		}/*,
		{
			name: '* * * * * Webradios : Oui FM * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		}*/,
		{
			name: 'Oüi FM Acoustic',
			url: 'http://acoustic.stream.ouifm.fr/ouifmacoustic.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Alternatif',
			url: 'http://alternatif.stream.ouifm.fr/ouifm2.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Blues\'n\'Rock',
			url: 'http://bluesnrock.stream.ouifm.fr/ouifmbluesnrock-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Bring The Noise',
			url: 'http://bringthenoise.stream.ouifm.fr/ouifmbringthenoise.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Christmas Rock',
			url: 'http://christmasrock.stream.ouifm.fr/ouifmnoel-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Classic Rock',
			url: 'http://classicrock.stream.ouifm.fr/ouifm3.mp3',
			img: 'Oui_FM_Classic_Rock.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Girls Rock',
			url: 'http://girlsrock.stream.ouifm.fr/ouifmgirlsrock.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Indé',
			url: 'http://rockinde.stream.ouifm.fr/ouifm5.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Johnny 100% Live',
			url: 'http://johnnyislive.stream.ouifm.fr/ouifmjohnnyislive.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Les Slows du Rock',
			url: 'http://slowrock.stream.ouifm.fr/ouifmslowrock.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Reggae',
			url: 'http://ganja.stream.ouifm.fr/ouifmganja-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock 60\'s',
			url: 'http://rock60s.stream.ouifm.fr/ouifmsixties.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock 70\'s',
			url: 'http://rock70s.stream.ouifm.fr/ouifmseventies.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock 80\'s',
			url: 'http://rock80s.stream.ouifm.fr/ouifmeighties.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock 90\'s',
			url: 'http://rock90s.stream.ouifm.fr/ouifmnineties.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock 2000',
			url: 'http://rock2000.stream.ouifm.fr/ouifmrock2000.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock Français',
			url: 'http://rockfrancais.stream.ouifm.fr/ouifmrockfrancais.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Rock\'n\'Food',
			url: 'http://rocknfood.stream.ouifm.fr/ouifmrocknfood.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Summertime',
			url: 'http://summertime.stream.ouifm.fr/ouifmsummertime.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		},
		{
			name: 'Oüi FM Top Of The Week',
			url: 'http://topweek.stream.ouifm.fr/ouifmtopweek.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Oui FM']
		}/*,
		{
			name: '* * * * * Webradios : Radio FG * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		}*/,
		{
			name: 'FG Chic',
			url: 'http://radiofg.impek.com/fgc',
			img: 'Radio_FG_Chic.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Deep Dance',
			url: 'http://radiofg.impek.com/fgd',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Mix',
			url: 'http://radiofg.impek.com/fg6',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG At Work',
			url: 'http://radiofg.impek.com/fge',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Avant-garde',
			url: 'http://radiofg.impek.com/ufg',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'Starter FG By Hakimakli',
			url: 'http://radiofg.impek.com/fgv.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Nomade',
			url: 'http://radiofg.impek.com/fg13',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Xtra',
			url: 'http://12525.cloudrad.io:9272/fgxtra',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'FG Zen',
			url: 'http://radiofg.impek.com/fg17',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'Maxximum',
			url: 'http://radiofg.impek.com/max1',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		},
		{
			name: 'Maxximum Classixx (Maxximum 90\'s)',
			url: 'http://radiofg.impek.com/max2',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio FG']
		}/*,
		{
			name: '* * * * * Webradios : Radio Nova * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio Nova']
		}*/,
		{
			name: 'Nova Classics',
			url: 'http://nova-vnt.ice.infomaniak.ch/nova-vnt-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio Nova']
		},
		{
			name: 'Nova Dance',
			url: 'http://nova-dance.ice.infomaniak.ch/nova-dance-128',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio Nova']
		},
		{
			name: 'Nova La Nuit',
			url: 'http://nova-ln.ice.infomaniak.ch/nova-ln-128.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Radio Nova']
		}/*,
		{
			name: '* * * * * Webradios : RFM * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		}*/,
		{
			name: 'Le Hit RFM',
			url: 'http://stream.rfm.fr/rfm-wr7.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM 70\'s',
			url: 'http://stream.rfm.fr/rfm-wr16.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM 80\'s',
			url: 'http://stream.rfm.fr/rfm-wr4.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM 100% Femmes',
			url: 'http://stream.rfm.fr/rfm-wr3.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM 100 % Français',
			url: 'http://stream.rfm.fr/rfm-wr11.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM 100 % New Wave',
			url: 'http://stream.rfm.fr/rfm-wr12.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Collector',
			url: 'http://stream.rfm.fr/rfm-wr1.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Hit Party',
			url: 'http://stream.rfm.fr/rfm-wr8.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Musique Fraîche',
			url: 'http://stream.rfm.fr/rfm-wr14.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Lounge',
			url: 'http://stream.rfm.fr/rfm-wr6.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Night Fever',
			url: 'http://stream.rfm.fr/rfm-wr2.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Party 90',
			url: 'http://stream.rfm.fr/rfm-wr5.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Pop Rock',
			url: 'http://stream.rfm.fr/rfm-wr10.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Run & Fit',
			url: 'http://stream.rfm.fr/rfm-wr9.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		},
		{
			name: 'RFM Slow',
			url: 'http://stream.rfm.fr/rfm-wr13.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RFM']
		}/*,
		{
			name: '* * * * * Webradios : Rire & Chansons * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		}*/,
		{
			name: 'Rire & Chansons à la maison',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/57171/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Blagues',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30411/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Canulars',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30413/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Chansons Droles',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/56786/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Collectors',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30421/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Duos',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/55601/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Francophonie',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/57107/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Futurs Talents',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/55818/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Humour du Sud',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/55514/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Live',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30409/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Nouvelle Generation',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30405/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons One Woman Show',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/55576/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Open du Rire',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30443/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Sketches',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30407/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		},
		{
			name: 'Rire & Chansons Stand Up',
			url: 'http://scdn.nrjaudio.fm/adwz1/fr/30417/mp3_128.mp3?origine=fluxradios',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Rire & Chansons']
		}/*,
		{
			name: '* * * * * Webradios : RTL * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL']
		}*/,
		{
			name: 'RTL 100% Hits',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio11.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL']
		},
		{
			name: 'RTL Grosses Têtes',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio12.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL']
		}/*,
		{
			name: '* * * * * Webradios : RTL2 * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL2']
		}*/,
		{
			name: 'RTL2 Acoustique',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio21.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL2']
		},
		{
			name: 'RTL2 Sur la Route',
			url: 'https://rtlfr.live.6cloud.fr/out/u/6play/webradio22.m3u8',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'RTL2']
		}/*,
		{
			name: '* * * * * Webradios : Skyrock * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		}*/,
		{
			name: 'Skyrock 100% Français',
			url: 'http://icecast.skyrock.net/s/francais_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Abidjan',
			url: 'http://icecast.skyrock.net/s/abidjan_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Hit Skyrock',
			url: 'http://icecast.skyrock.net/s/hit_skyrock_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Hit US',
			url: 'http://icecast.skyrock.net/s/hit_us_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Klassiks',
			url: 'http://icecast.skyrock.net/s/klassiks_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Premier sur le Rap',
			url: 'http://icecast.skyrock.net/s/1er_rap_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Rap et RnB Non Stop',
			url: 'http://icecast.skyrock.net/s/rap_rnb_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		},
		{
			name: 'Skyrock Urban Music Non-Stop',
			url: 'http://icecast.skyrock.net/s/urban_music_aac_96k',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Skyrock']
		}/*,
		{
			name: '* * * * * Webradios : Virgin Radio * * * * *',
			url: 'http://lasonotheque.org/UPLOAD/mp3/0313.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		}*/,
		{
			name: 'Virgin Radio Classics',
			url: 'http://stream.virginradio.fr/vr-wr2.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Radio Electro Shock',
			url: 'http://stream.virginradio.fr/vr-wr3.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Radio Hit',
			url: 'http://stream.virginradio.fr/vr-wr4.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Radio New',
			url: 'http://stream.virginradio.fr/vr-wr1.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Radio Nouvelle Scène',
			url: 'http://stream.virginradio.fr/vr-wr8.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Radio Rock',
			url: 'http://stream.virginradio.fr/vr-wr5.aac',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		},
		{
			name: 'Virgin Tonic Radio',
			url: 'http://stream.virginradio.fr/vr-wr6.mp3',
			img: 'empty.png',
			tags: ['Française', 'Webradio', 'Virgin Radio']
		}
  ]
}

export { radios }
var config = {
    style: 'mapbox://styles/ed1990/clshd5fko001d01qw5qk66k79',
    accessToken: 'pk.eyJ1IjoiZWQxOTkwIiwiYSI6ImNtMnVwbTRoOTAzbTQyanNiMjhpZHBwaG8ifQ.i3HVEmv16f9kntaM5xeS8w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: '<span style="font-family:\'Fira Sans\'; font-weight: 400; padding: 1px 4px; border-radius: 10px; color: #634233; font-size: 1.3rem; background-color: #FBBE3B;">Aici vine supratitlu (dacă vreți)</span>',
    subtitle: '<span style="font-family: \'Roboto\'; color: #000000; font-size: 2.2rem; font-weight: 500;">Aici vine titlul',

    byline: '<a href="https://beta.dela0.ro/acasa/dela0-cine-suntem/" target="_blank" style="color:white;">Diana Oncioiu</a> <p> <img src="./scroll.png"> </p> <p> scroll </p> ',
    footer: '<br> 23 octombrie 2024 <br> <a href="https://beta.dela0.ro/acasa/dela0-cine-suntem/" target="_blank">Editor: Vlad Stoicescu</a> <br> Creat folosind <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling </a> ',
    chapters: [
        {
            id: 'cap1.1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: true,
            title: '',
            image: '',
            description: '',
            overlayImage: 'blank1.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        
        
        
        {
            id: 'cap1',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            horizontalScroll: false,
            hidden: false,
            title: '',
            image: '',
            description: '<div style="width:250px; height:auto; padding:5px; margin: 0 auto; text-align: center;"> <img src="./diana.png"></div>Sunt <span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">mama unui băiat de doi ani</span>, revenită în câmpul muncii după un concediu de maternitate de aproape doi ani. La începutul verii povesteam pe rețelele de socializare despre ce dificilă/solicitantă poate să fie revenirea la muncă pentru o mamă.',
            overlayImage: 'blank.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 15,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        


        {
            id: 'cap2',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Vorbeam de pe o poziție privilegiată, care viza mai degrabă stări emoționale, adaptare la un nou program și nicidecum privarea de drepturi sau existența unui angajator interesat mai degrabă să scape de mine. Multe mame se confruntă cu tot pachetul. Încurajată de comentariile mamelor care invocau absența acestui subiect de pe agenda publică, din discursul public am decis să ne uităm la Dela0.ro <span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">cum arată reintegrarea mamelor întoarse din concediu de maternitate</span> în România.',
            overlayImage: 'blank1.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },

        {
            id: 'cap2.1',
            daysAgo: 760,
            showTimeline: false,
            horizontalScroll: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">Am vorbit cu 18 mame</span>, am trecut prin procesele a patru mame care au contestat deciziile de concediere ale angajatorilor, <span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">am solicitat date de la instituții publice</span> precum Inspectoratele Teritoriale de Muncă, Agenția Națională de Plăți și Inspecție Socială, <span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">am pus întrebări</span> Ministerului Muncii, am discutat cu avocați specializați în litigii de muncă, dar și cu specialiști din zona drepturilor femeilor.',
            overlayImage: 'blank1.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, null, null]
            
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului', // Customize maximum value for y-axis
        
        
        },


        {
            id: 'cap2.1',
            daysAgo: 700,
            showTimeline: false,   
            horizontalScroll: false,     
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Și nu în ultimul rând <span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;">am trimis solicitări</span> legate de revenirea la muncă din concediu de creștere a copilului către 18 angajatori publici și privați. ',
            overlayImage: 'blank1.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: 'Dataset 1',
            //     dataPoints: [10.5, 8.6, 29.5, null],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului',
        },

        {
            id: 'cap2.2',
            daysAgo: 30,
            showTimeline: false,
            timelineImage: '', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În ciuda acestui efort documentar ce am obținut este o vedere parțială. Și asta pentru că toate cele 18 mame cu care am discutat ocupă poziții din zona de asistență medicală/medicină, financiară, bancară, IT, ONG, activism, educație, cultură, consultanță, vânzări. Tocmai de aceea articolul de față nu este doar o încercare de a explica, aprofunda un proces, ci și un apel la mărturii din partea mamelor a căror voce nu se aude aproape niciodată.',
            overlayImage: 'blank3.png',           
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [10.5, 8.6, 29.5, 27.2, 30.7, 26, 28.2, 26, 21.5,22.9, 19.7, 22.3, 21.6, 24.2, 20.5, 20.8, 17.7, 21.4, 16.6, 15.1, 15.9, 18.4, 20, 16.1, 17 ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: 'Rata șomajului',
        },



        {
            id: 'cap3',
            daysAgo: 731,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Acolo unde vocile nu se aud abuzurile sunt și mai mari. Așa că ne-am propus la Dela0.ro să facem o hartă a abuzurilor comise de angajatori față de mamele revenite la muncă după concediu de maternitate. ',
            overlayImage: 'blank3.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap3.1',
            daysAgo: 731,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În jur de<span style="background-color: #FBBE3B; padding: 1px 5px; font-weight: bold;"> 230.000 de mame se reîntorc anual la muncă</span> după un concediu de creștere a copilului care variază între două luni și doi ani, în funcție de opțiunea mamei. Unele dintre ele sunt concediate la scurt timp după ce revin la muncă deși avem o lege care interzice acest lucru din 2003.',
            overlayImage: 'blank3.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [15.9, 11.4, ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        {
            id: 'cap3.2',
            daysAgo: 650,
            showTimeline: true,
            timelineImage: 'chart1.png', 
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Altele sunt forțate de angajatori să-și dea demisia. Sunt forțate prin tot felul de metode: sunt retrogradate, umilite, le sunt tăiate salariile sau pur și simplu refuzate măririle. ',
            overlayImage: 'blank3.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [15.9, 11.4, 22.1, 22.8, 30.3, ],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 35,
            // chartTitle: '% celor care au declarat că raționalizează mâncarea',
        },

        
        {
            id: 'cap13galben',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Angajatorii nu le informează în legătură cu drepturile pe care le au la revenirea din concediul pentru creșterea copilului și nu le oferă programe de reintegrare profesională așa cum prevede legea. Cu toate acestea Inspectoratele Teritoriale de Muncă, organisme de control, nu au aplicat, de exemplu, între 2023 - iulie 2024 nicio sancțiune cu privire la absența acestor programe profesionale de reintegrare.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap13sgr',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Confruntat cu o parte din aceste probleme Ministerul Munci enumeră legile care privesc maternitatea, beneficiile financiare și invocă Legea Dialogului Social care încurajează negocierea și încheierea contractelor colective de muncă astfel încât nevoile angajatelor să fie mai bine protejate.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap14',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Deși avem cadru legislativ 69% dintre mamele care se întorc la muncă după concediu de creștere a copilului spun că au avut o experiență negativă de reintegrare. Doar 31% spun că reintegrarea a fost o experiență pozitivă. Rezultatele se bazează pe mărturiile a 1.500 de mame și stau la baza studiului Ce rost are mama în România?, publicat în martie 2024 și realizat de Andra Pintican, specialistă în resurse umane, fondatoarea Școlii de HR și a Centrului de Carieră.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap15',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Realitatea ne arată că simpla existență a legii nu e o garanție a respectării ei. Statul nu ar trebui să fie interesat doar de adoptarea cadrului legislativ, ci și de cum e el ulterior aplicat, de capacitatea mecanismelor de control de a sancționa neaplicarea sa. Statul român nu s-a mai uitat la aceste detalii. A vrut  doar să bifeze niște cerințe externe și atât. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap15maro',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ordonanța de urgență care privește protecția maternității a fost adoptată în 2003 pentru îndeplinirea obligațiilor asumate în procesul de aderare la Uniunea Europeană. Vreme de 12 ani statul nu a mai adus nicio îmbunătățire legii. În 2015 au venit iar obligațiile peste el, mai exact nevoia transpunerii în legislația națională a unei directive europene din 1992 care viza  siguranța și sănătatea la locul de muncă a gravidelor, femeilor care au născut recent sau care alăptează.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap16',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: ' ', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'S-a achitat de ea într-o lună. Atât a durat inițierea proiectului de lege, dezbaterea lui, votul în Parlament și apoi promulgarea. În vreme ce o altă lege care introducea drepturi suplimentare pentru mamele revenite la muncă a stat în Parlament doi ani de zile. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap17',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Spălarea ambalajelor', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Și dacă tot am ajuns la forul legislativ, din 2000 până în prezent au existat doar două interpelări în Parlament pe tema revenirii mamelor la muncă după concediul de maternitate - una din 2011 și o alta din 2024. Cea din 2011 a fost făcută de o parlamentară UDMR, cea din 2024 de un parlamentar independent.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },




        {
            id: 'cap18',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Cea din 2011 aborda chiar tema cursurilor/programelor/trainingurilor care să facă reintegrarea mai ușoară, așa cum se întâmpla deja la nivel european. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },


        {
            id: 'cap4',
            daysAgo: 760,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Indiferența autorităților cu privire la revenirea mamelor la locul de muncă pare un paradox având în vedere preocuparea, la nivel declarativ, față de scăderea demografică, de creșterea natalității. ',
            overlayImage: 'blank7.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap4.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O simulare a Institutului Național de Statistică arată că, în 2050 populația României va ajunge la 16 milioane de locuitori. Tot cei de la INS transmiteau că în 2020 s-au născut cei mai puțini copiii în România în ultimul secol, iar în 2023 cei mai puțini de când se culeg astfel de date. De asemenea, o analiză a ONU privind modul în care demografia României va evolua în următoarele decenii estimează că, până în anul 2100, populația ar putea scădea chiar până la opt  milioane de locuitori.',
            overlayImage: 'blank7.png',
            
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            timelineImage: 'chart.png', 
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        
        {
            id: 'cap5.1',
            daysAgo: 30,
            showTimeline: true,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Încurajarea natalității vizează în acest moment o serie de vouchere, prime, bonusuri, creșterea numărului de creșe, grădinițe. Nu vizează însă deloc reintegrarea mamelor la locul de muncă. Cel puțin nu în practică. În practică, de cele mai multe ori, mamele revin în locuri care nu le recunosc noua realitate, în care sunt privite ca niște persoane privilegiate, în care nu primesc condiții de muncă adaptate la situația lor, dar sunt așteptate să livreze la fel ca înainte să devină mame: să stea peste program, să fie disponibile în vacanțe, în concedii medicale.',
            overlayImage: 'blank7.png',
            showChart: false,
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
            // chartData: {
            //     labels: ['Ian 2022', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2023', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec', 'Ian 2024'],
            //     label: '',
            //     dataPoints: [5.8, 5, 0, 0, 0, 0, 0, 1.4, 3.3, 3.6, 2.3, 3.3, 2.8, 3.1, 3.5, 2.5, 1.2, 1.8, 0.2, 0, 0,1, 1, 2.5, 4.3, 4,],
                
            // },
            // yAxisMin: 0, // Customize minimum value for y-axis
            // yAxisMax: 6,
            // chartTitle: 'Exporturile de cereale prin porturile de la Marea Neagră (milioane tone)',
        },





        
        {
            id: 'cap11',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            endCustomScroll: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            overlayImage: 'blank7.png',
            description: 'Se întorc în locuri în care deși așteptarea este să livreze performanță sunt percepute ca fiind mai puțin pregătite din cauza maternității. ',
            
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 1,
                //     duration: 2000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'data-driven-circles',
                //     opacity: 0
                // }
            ]
        },


        

        {
            id: 'cap19',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În ultimă instanță revenirea mamelor la muncă după concediul de maternitate este despre drepturi. O femeie care naște nu pierde dreptul la muncă. O femeie care naște nu e mai mult mamă și mai puțin profesionistă la locul ei de muncă doar pentru că așa decide angajatorul.',
            overlayImage: 'blank4.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0,
            //         duration: 6000
            //     }
            // ],
            // onChapterExit: [
            //     {
            //         layer: 'Data-driven-circles',
            //         opacity: 0
            //     }
            ],
        },

        {
            id: 'cap20',
            daysAgo: 430,
            showTimeline: false,
            mapStyle: '',
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O femeie care stă în concediu de maternitate doi ani nu pierde dreptul de a primi, la întoarcere, beneficiile oferite colegilor săi în cei doi ani de absență, inclusiv creșterile salariale. Aceste creșteri salariale nu sunt un moft. Sunt un drept. ',
            overlayImage: 'blank4.png',
            location: {
                center: [31.2718321, 49.4871968],
                zoom: 6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Data-driven-circles',
                    opacity: 1,
                    duration: 6000
                }
            ],
            onChapterExit: [
                {
                    layer: 'Data-driven-circles',
                    opacity: 0
                }
            ],
            
        },

        {
            id: 'cap21',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Te calc în picioare!', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Experiențele negative la locul de muncă atunci când vine vorba de reintegrarea după concediu de maternitate diferă în funcție de mediul în care lucrezi. Sunt șanse mici ca o mamă angajată într-o companie/corporație/bancă să fie concediată ușor, să fie hărțuită, agresată verbală. Șansele ca așa ceva să se întâmple sunt mai mari atunci când lucrezi ca îngrijitoare, vânzătoare sau muncitoare necalificată într-o firmă cu puțini angajați. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap22',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dela0.ro nu a reușit să obțină în mod direct mărturii ale mamelor care sunt la mâna micilor angajatori. A ales o cale indirectă și anume platforma ReJust.ro, dezvoltată de Consiliul Superior al Magistraturii pentru a permite accesul facil la hotărârile judecătorești pronunțate de instanțele naționale. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap23',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dela0.ro a identificat pe această platformă 36 de sesizări care au vizat contestarea deciziei de concediere între 2019 - 2024 de către mame revenite din concediu de maternitate. 75% dintre acestea au fost admise de instanțe. În cazul celor respinse decizia de concediere a avut loc în urma reorganizării judiciare, a dizolvării sau falimentului angajatorului. Sunt excepțiile în baza cărora angajatorii pot concedia o mamă revenită la locul de muncă. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap24',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dintre cele 36 de contestații doar patru vizează locuri de muncă ce ar intra în categoria gulere albastre',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap25',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Taci din gură că te dau cu capul de toți pereții! Ești o nenorocită! Te calc în picioare dacă te mai aud cu drepturile tale! Nu accepți, te trec nemotivată și te concediez pe motive disciplinare! ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap26',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Așa i s-ar fi adresat angajatorul Valeriei o femeie abia revenită din concediul de creștere a copilului. Era croitoreasă necalificată într-o fabrică de confecții care avea la vremea respectivă 57 de angajați. S-a întors la muncă în aprile 2019 după doi ani de concediu de creștere a copilului.',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap27',
            daysAgo: 430,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Administratorii i-au cerut să renunțe la postul ei pentru cel de femeie de serviciu. Valeria a refuzat motiv pentru care administratorii au devenit agresivi verbal cu ea. Femeia a chemat poliția care a sfătuit-o să plece pentru a aplana conflictul, dar și să depună plângere la Inspectoratul Teritorial de Muncă. Pe 22 aprilie a fost concediată. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap28',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O lună mai târziu Valeria a cerut în instanță anularea deciziei de concediere. În iunie 2020 instanța a anulat această decizie, ceea ce însemna că Valeria putea reveni la muncă pe postul inițial. Faptele descrise mai sus sunt de găsit în hotărârea instanței care este publică pe ReJust.ro.',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap29',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Cristina, îngrijitoare curățenie la o grădiniță, a revenit la muncă în septembrie 2019 după doi ani de concediu de maternitate. Trei  luni mai târziu a fost concediată fiind considerată de angajator inaptă temporar să-și îndeplinească atribuțiile. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap30',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O evaluare făcută de medicina muncii arăta că e agresivă, incapabilă să se încadreze în colectiv. La momentul emiterii deciziei de concediere fișa de aptitudini nu era însă definitivată. După aproape doi ani de procese Cristina a obținut repunerea pe post, despăgubiri, dar și daune morale în valoare de 10.000 de lei. În 2019, grădinița avea nouă angajați.',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap31',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În cazul Manuelei, asistentă medicală și puericultor, angajatorul a invocat pentru concedierea ei, cu cinci zile înainte să revină la locul de muncă din concediu de maternitate, reorganizarea judiciară. Nu exista însă nicio dovadă a acestei reorganizări. Opt luni a durat procesul în urma căruia instanța a decis reintegrarea femeii pe postul deținut. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap32',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Simona, vânzătoare într-un magazin, a revenit la muncă cu trei luni înainte de terminarea concediului de creștere a copilului. Era însărcinată din nou și, din motive de sănătate, a fost nevoită destul de repede să intre în concediu medical pentru risc maternal. Așa că angajatorul a decis să-i închidă contractul de muncă pe motiv că postul a fost desființat. Și în cazul ei instanța a decis reintegrarea pe postul deținut, dar și plata unor despăgubiri de către angajator. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap33',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Avocata Elenina Nicuț spune că astfel de contestații se câștigă de la intrarea în tribunal, dar durează ca la balamuc.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap34',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În cazul celor 36 de contestații consultate de Dela0.ro durata de soluționare variază între șase luni și doi ani și jumătate, media fiind undeva la un an - un an și jumătate. 86% dintre contestații au fost înaintate de mame care lucrează ca economiste, contabile, directoare, medici, funcționari publici. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap35',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Deși e ușor de câștigat avem doar 36 de contestații în șase ani. Partea financiara poate constitui un impediment, mai ales că trebuie estimată din dublă perspectiva: cheltuielile proprii, plus cheltuielile de judecată obținute de partea adversă, în caz de respingere a acțiunii, explică avocata Elenina Nicuț. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap36',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Uniunea Națională a Barourilor din România recomandă un onorariu minim de 2.900 de lei pentru contestarea deciziei de concediere. Dincolo de obstacolele financiare, mai este vorba de educație și disponibilitate. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap37',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În general, mamele cu venituri medii spre mari sunt cele mai dispuse să raporteze astfel de abuzuri, a declarat Ana Măiță, președinta asociației Mame pentru Mame, pentru Dela0.ro. Ana Măiță pune această realitate pe seama educației care duce la un nivel mai mare de conștientizare a noțiunii de drepturi în muncă și pe o mai mare disponibilitate emoțională din partea acestor femei să se înhame la un astfel de parcurs din pricipiu, deși realizează că cel mai probabil nu vor rămâne la respectivul loc de muncă însă le deranjează nedreptatea. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap38',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Asociația Mame pentru Mame a consiliat în 2023 17 mame revenite la muncă după concediul de maternitate. În cazul angajatorilor care nu le mai vor asociația le sfătuiește să negocieze un pachet solid de salarii compensatorii în schimbul demisiei. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap39',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Sigur că ele se pot adresa și instanței cu șanse aproape certe de câștig însă la fel de adevărat este că și în cazul în care câștigă speța mediul de lucru la compania care le-a vrut plecate va fi foarte toxic iar sănătatea lor psiho-emoțională va avea de suferit pe termen lung. Este și acesta un procent din prețul social și profesional pe care maternitatea le obligă pe femei să îl plătească, din păcate, explică Ana Măiță.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap40',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O altă instituție către care mamele se pot îndrepta este Consiliul Național pentru Combaterea Discriminării. În perioada 2019 - 2023 s-au înregistrat la CNCD 18 petiții prin care mamele reclamau hărțuirea la locul de muncă și/sau un comportament discriminatoriu.  ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap41',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Principalul mecanism însă de control în cazul protecției maternității este Inspecția Muncii prin intermediul Inspectoratelor Teritoriale de Muncă. În perioada 2019-2023 s-au înregistrat la ITM-urile din țară 434 de petiții. Petiții înseamnă plângeri din partea salariatelor, solicitări de puncte de vedere, interpretări legislative. Inspecția Muncii nu poate spune exact câte controale s-au făcut în urma petițiilor venite exclusiv din partea mamelor care reclamau încălcarea unor drepturi. ',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap41.1',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'tilemap.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'cap41.2',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: true,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '',
            overlayImage: 'tilemap.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap41.3',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/20039343/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/20039343/?utm_source=embed&utm_campaign=visualisation/20039343" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap42',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ce poate spune în schimb este numărul controalelor totale făcute pe parcursul unui an pe tema protecției maternității. Controalele nu se realizează doar în urma unei petiții. ITM-urile pot întreprinde controale tematice, de fond sau controale de tip campanie. Între 2019 și 2023 ITM-urile au realizat 23.111 de controale și au aplicat 7.185 de contravenții pentru nerespectarea ordonanței privind protecția maternității. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap42.1',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/20039704/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/20039704/?utm_source=embed&utm_campaign=visualisation/20039704" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap42.2',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/20040375/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/20040375/?utm_source=embed&utm_campaign=visualisation/20040375" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap43',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Problema în cazul acestor controale menite să verifice că angajatorul respectă drepturile mamelor este limitarea lor. Ele se concentrează pe verificarea drepturilor prevăzute în OUG 96/2003. Mai sunt drepturi care privesc revenirea mamelor la muncă după concediul de maternitate în alte patru legi. Câteva exemple. Dreptul la concediu medical plătit pentru situațiile în care copilul se îmbolnăvește este reglementat de Ordonanța privind concediile și indemnizațiile de asigurări sociale de sănătate. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap44',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dreptul la program de reintegrare profesională se află în Legea privind egalitatea de șanse și de tratament între femei și bărbați. ITM-urile nu a aplicat între 2023 - iulie 2024 nicio contravenție cu privire la nerespectarea acestui drept. 90% dintre mamele revenite la muncă în perioada 2019 - 2024, care au discutat cu Dela0.ro, nu au beneficiat de program de reintegrare profesională. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap45',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Într-un răspuns transmis redacției Dela0.ro, Inspecția Muncii a făcut un top cinci al neregulilor sesizate la controalele efectuate în urma petițiilor. Toate cele cinci cele mai frecvente nereguli vizează starea de graviditate. Revenirea la muncă după concediu de maternitate pare să fie o experiență pozitivă potrivit Inspecției Muncii. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap46',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Titlu', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În vreme ce mamele care ocupă locuri de muncă din zona gulerelor albastre sunt la mâna angajatorilor, în cazul mamelor cu locuri de muncă incluse în categoria gulerelor albe cea mai mare problema este absența procedurilor. La nivel de nereguli cele mai frecvente sunt lipsa unui program de reintegrare profesională, neinformarea, refuzul nemotivat al angajatorului de a oferi un program individualizat de lucru. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap47',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'De data aceasta aș prioritiza sănătatea mintală și aș fi mai prezentă când sunt cu copiii. Dacă mă deconectez între 17.00 și 21.00 atunci între acele ore nu mai există să vorbesc cinci minute la telefon, să trimit repede un mail',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap48',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: ', îmi spune Timea care urmează să revină la muncă după 11 luni de concediu de creștere a copilului. Cifrele demontează credința publică potrivit căreia cele mai multe mame aleg să stea acasă doi ani. Datele solicitate de Dela0.ro arată că, aproape, 60% dintre părinți se întorc la locul înainte să împlinească copilul un an. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap49',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Timea a avut deja o discuție cu șeful ei, una inițiată de ea în care i-a explicat că de data aceasta va fi obligată să apeleze mai des la zilele de concediu plătit având în vedere că are doi copii care se pot îmbolnăvi în același timp. A făcut-o pentru a nu crea așteptări. Nu s-a pus problema de program de reintegrare profesională, nu s-a pus problema beneficiilor pe care compania le oferă mamelor, de ce drepturi are. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap50',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nimic. Și așa a fost și la primul copil când a revenit la muncă după un an și o lună de concediu. Programul ei atunci era următorul: între 9.00 - 10.00 făcea de mâncare, dădea cu aspiratorul și poate apuca să facă un duș; 10.00 - 17.00 program de lucru fără pauze cât timp copilul stătea cu bona; preluat copilul între 17.00 - 20.00 prin rotație cu soțul; reconectat la 21.00 și lucrat până spre 2.30 noaptea. Nu va putea renunța la lucrat noaptea nici acum. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap51',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Poate trebuie să cerem noi mai mult - eu ce drepturi am? eu de ce pot beneficia?. Oare nu ne putem ajuta punând aceste întrebări, se gândește Timea. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap52',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Bianca a pus întrebări la departamentul de Resurse Umane al instituției în care lucrează. A întrebat dacă nu poate să-și ia o zi de lucru acasă pe săptămână. Auzise ea de la o prietenă că poate să facă asta. Cei de la resurse umane au spus că verifică și că vor reveni. Nu au mai revenit. ',
            overlayImage: 'blank4.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap53',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O modificare adusă Codului Muncii în 2022 prevede următorul lucru: salariații care au în întreținere copii în vârstă de până la 11 ani beneficiază de 4 zile pe lună de muncă la domiciliu sau în regim de telemuncă, cu excepția situațiilor în care natura sau felul muncii nu permite desfășurarea activității în astfel de condiții. ',
            overlayImage: 'blank2.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap54',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Bianca a revenit la muncă la începutul anului când copilul avea opt luni. Și-ar fi dorit un program flexibil, dar nu a beneficiat de el deși legea îi oferă această posibilitate, cel puțin pe hârtie. Cred că aș fi renunțat la o parte din salariul, măcar vreo jumătate de an, pentru un program redus ca să nu fie trecerea atât de bruscă, spune Bianca.',
            overlayImage: 'blank2.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap55',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Andreea* știa că legea îi dă dreptul la două ore de pauză pentru alăptare când a decis să revină la muncă. Anul era 2022, iar copilul avea cinci luni și jumătate. Angajatorul însă nu-și dorea ca Andreea să revină atât de repede așa că i-a pus niște condiții greu de acceptat: salariul nu-i va mai fi mărit, cum discutaseră înainte de concediu de maternitate și trebuia să vină zilnic la birou, deși de când cu pandemia lucra de acasă. ',
            overlayImage: 'blank2.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap56',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Când am semnat actele pentru reînceperea activității m-am simțit foarte prost că mi se îngrădeau niște drepturi, își amintește Andreea. Era hotărâtă să-și ceară cele două ore însă nu a mai fost nevoie pentru că și-a găsit destul de repede un alt loc de muncă. Și aici programul era fix însă putea lucra de acasă, iar flexibilitatea se traducea prin faptul că nimeni nu se supăra dacă în timpul programului avea nevoie să-și ia o pauză pentru copil. ',
            overlayImage: 'blank2.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap57',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pentru Maria flexibilitatea a însemnat un program cu jumătate de normă, cu sarcini săptămânale de îndeplinit, și nu un număr de ore de bifat pe zi. Lucra între 5.00 - 7.00 dimineața, după amiază și seara. Erau fix orele la care simțea că nu prea dă randament și îi era foarte rușine de angajator care, credea ea, îi face o favoare că o lasă să lucreze între acele ore. ',
            overlayImage: 'blank2.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap58',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Fiul Mariei avea trei luni când a revenit la muncă, la finalul lui 2021. I-a lipsit un program de reintegrare, de reacomodare cu locul de muncă, cu responsabilitățile pe care le are, cu colegii. Poate un astfel de proces ar fi scutit-o de remarci precum: ce faci tu într-o săptămână eu pot face într-o oră. M-au aruncat direct într-o mare de proiecte și bugete și mi-au spus "Descurcă-te!"',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap59',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Descurcă-te a însemnat pentru Maria să ducă mai multe proiecte decât putea pentru a nu fi arătată cu degetul că se folosește de copii ca să muncească mai puțin. A însemnat să lucreze multe seri, multe weekenduri, să meargă în deplasări când copiii îi erau bolnavi. A însemnat un ritm care a dus-o în cele din urmă în burnout. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap60',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '60% dintre părinții care își iau concediu de creșterea a copilului revin la muncă înainte să împlinească copilul un an. Dela0.ro a discutat cu opt mame care intră în această categorie. Au revenit din motive financiare:, câștigau mai bine decât partenerii. Sau domeniu în care lucrau nu le permitea o absență îndelungată, care ar fi echivalat cu o stagnare sau chiar o retrogradare profesională după mulți ani de muncă. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap60.1',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '<iframe src="https://flo.uri.sh/visualisation/20040458/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:600px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe><div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/visualisation/20040458/?utm_source=embed&utm_campaign=visualisation/20040458" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"> </a></div>',
            overlayImage: 'blank.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap61',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Medicina evoluează de-a lungul a celor doi ani, efortul de a recupera, de a reveni în pâine este uriaș (...) Am născut la 41 de ani, pot să spun la mijlocul carierei, e mult mai greu să iau o pauză acum, mi-a explicat Ioana Simian, medic dermatolog. A revenit la cabinet când fiica ei avea șapte luni și jumătate',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap62',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Unele dintre ele au revenit mai repede și pentru a evita o depresie, una pe care o experimentaseră deja la primul copil. Au simțit că un loc de muncă le obligă să se mobilizeze să facă și altceva decât îngrijirea copilului, că le ține pe linia de plutire și conectate la o viață pe care credeau că au pierdut-o odată cu venirea copilului. Este un motiv în plus pentru care angajatorul are nevoie de niște proceduri clare când vine vorba de reintegrarea mamelor. Pentru că reintegrarea poate rapid să ajungă și o chestiune de sănătate mintală.',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap63',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Angajatorii', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Institutul pentru egalitatea de șanse între bărbați și femei din Bruxelles recomandă angajatorilor, într-un studiu din 2021, să meargă dincolo de lege când vine vorba de reintegrarea mamelor revenite din concediu de creștere a copilului: Practica nu ar trebui să fie o simplă implementare a legii, ci ar trebui să fie ambițioasă și orientată spre viitor, făcând mai mult decât cerințele minime prevăzute de legislația națională. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap64',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'BIA Human Capital Solutions, o agenție de recrutare care, a publicat în primăvara acestui an un material despre nevoia unor programe de (re)integrare a mamelor la locul de muncă. Ideile sunt preluate din articole publicate în Forbes și pe o platformă de locuri de muncă în 2020 și 2021. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap65',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'O reprezentantă a agenției a explicat pentru Dela0.ro că ideea de a promova astfel de programe le-a venit după ce au consiliat mai multe mame în căutarea unui loc nou de muncă. Până în prezent nicio companie nu le-a solicitat sprijin în dezvoltarea unor astfel de programe: Din păcate, există angajatori pentru care concediul de creștere copil este „un minus” în carieră, consideră că femeile uită informații, că nu mai sunt la zi cu modificările legislative sau angajatori pentru care reintegrarea mamelor nu prezintă o prioritate.',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap66',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ce ar trebui să conțină totuși un astfel de program/politică? Posibilitatea unui program redus chiar la jumătate pentru o perioadă determinată, traininguri, suport psihologic, parteneriate cu creșe/grădinițe, flexibilitate. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap67',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dela0.ro a trimis solicitări cu privire la reintegrarea mamelor la locul de muncă după concediul de maternitate către 18 angajatori publici și privați mari: Poșta Română, Societatea de Transport București, Compania Națională de Căi Ferate, Armată, Kaufland, Dedeman, Lidl, Mega Image, Carrefour, BRD, BCR, ING, ENGIE, Dacia, OMV Petrom, Orange, Ina Schaeffler și ROMGAZ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap68',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'CFR, Poșta Română, Kaufland, Dedeman, Dacia, Lidl, Mega Image, CFR au fost în 2023 în top 10 cei mai mari angajatori din România. La Kaufland femeile reprezintă peste 70% dintre angajați, la Poșta Română 66%, la Orange 50%. O analiză BankingNews arată că în domeniul bancar femeile reprezintă 72% din forța de muncă. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap69',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dintre cei 18 angajatori au răspuns doar șapte: Poșta Română, Societatea de Transport București, Compania Națională de Căi Ferate, Armată, Engie, ING, BCR. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap70',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Dela0.ro a solicitat de la cei 18 angajatori date, precum numărul mamelor angajate, dar și informații despre programele/politicile de reintegrare în cazul în care ele există. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap71',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ministerul Apărării Naționale nu știe câte mame lucrează în armată și ne-a sugerat să întrebăm la fiecare unitate în parte. STB și CFR au transmis procentul femeilor aflate în concediu de maternitate. În acest moment aproape 100 de mame se află în această situație în cele două companii. Potrivit informațiilor oferite pe rețelele de socializare chiar de angajator, CFR avea în 2023 în jur de 22.000 de angajați dintre care 5.500 erau  femei. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap72',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Întrebate despre existența unor politici/programe/proceduri care să vizeze reintegrarea mamelor angajatorii publici au trecut în revistă prevederi legislative precum dreptul la concediu și indemnizație (MAPN), pașii birocratici, concediu medical plătit în cazul în care se îmbolnăvește copilul (CFR) și dreptul la vouchere, imposibilitatea concedierii, dreptul de a nu lucra noaptea (STB). ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap73',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În cazul angajatorilor privați care au răspuns, ING și Engie nu au o politică de reintegrare a mamelor, dar oferă cameră de alăptare, program flexibil și stimulente financiare, altele decât cele oferite prin lege.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap74',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Singurii angajatori, dintre cei care au răspuns, care au cu adevărat un program de reintegrare sunt Poșta Română și BCR. Ce presupune el mai exact? Cursuri, traininguri, întâlniri speciale cu echipa și/sau șeful direct pentru ca mama să se adapteze la schimbările din companie și să nu simtă că a rămas în urmă; consiliere profesională și/sau psihologică; program flexibil care poate presupune inclusiv o reîntoarcere treptată la muncă sau șapte zile în plus de concediu plătit față de ce prevede legea; cameră de alăptare și posibilitatea de a aduce copilul la muncă în cazuri urgente. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap75',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Un program de reintegrare nu înseamnă o înșiruire de drepturi prevăzute de lege. Presupune gândirea unor politici, a unor pași clari care să-i facă mamei acomodarea ușoară. Înseamnă în final recunoașterea noii realități pe care mama o trăiește și adaptarea la această nouă realitate. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap76',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Titlu', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Diana* lucrează în domeniul IT. A revenit la muncă în iunie 2024, după un an și zece luni de concediu de maternitate. Lucrează de acasă, situație valabilă din pandemie, ceea ce-i permite să-și alăpteze copilul la prânz. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap77',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'A revenit direct la program de opt ore, cu lucrat seara/noaptea după ce se culca copilul: E bruscă trecerea asta, nu există o pregătire. Și nu m-am gândit să optez, poate pentru un program de șase ore la început. Am început direct cu opt ore, după aceea mi-a venit ideea. Poate că așa ar fi fost mai ușoară trecerea. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap78',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Prima discuție cu angajatorul a inițiat-o ea în momentul în care și-a anunțat intenția de a reveni la muncă. După primirea actelor și bifarea tuturor formalităților i-a scris direct șefului ei să-l întrebe ce are de făcut, pe ce poziție se întoarce. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap79',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Diana crede că e totuși norocoasă că nu a simțit o presiune din partea angajatorului ca ea să livreze imediat. A primit task-uri mai ușoare și asta o mulțumește momentan pentru că și-a dat seama ca a uitat destul de multe lucruri: Mă simt cumva ca un coleg nou care doar ce a venit în echipă și nu știe cum merg lucrurile. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap80',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Există un fel de ipocrizie în cultura companiilor, spune Ana Măiță președinta asociației Mame pentru Mame. Din documentele de misiune/viziune și afișele de pe pereți, continuă ea, pare că există sprijin pentru mamele revenite la muncă: În realitate însă vorbim de o atitudine toxică, nimeni nu are timp de ele, mulți le invidiază că au stat acasă plătite atâtea luni, sunt considerate "depășite". Din aceste motive Ana Măiță e convinsă că, un program bine stabilit, cu proceduri clare ajută ca sloganele să nu rămână doar pe hârtie. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap81',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În plus, mai arată ea, lipsa procedurilor poate face un părinte să se simtă inadecvat, incapabil nedorit: Pentru femei, care sunt și afectate de schimbările hormonale asociate cu sarcina, nașterea și alăptarea aceste sentimente pot fi devastatoare pentru sănătatea emoțională.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap82',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu-ți ascund că sunt o mamă habarnistă, mi-a spus la prima discuție Lavinia*, care lucrează în domeniul tehnologiei informației. Era cu zece zile înainte să revină la muncă: Cumva am fost într-o evitare, cel puțin lunile astea, zilele acestea , care mi-au mai rămas. Adică eu nu prea mă gândesc la faptul că mă întorc la muncă. Sunt într-o evitare continuă.  ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap83',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Pe 29 iulie a fost prima zi de muncă a Laviniei. A avut o discuție cu șeful ei care i-a spus că nu e nicio grabă, că o vor lua ușor. În zilele următoare a primit un client de care să se ocupe în primele trei-patru luni tocmai pentru a avea o acomodare ușoară. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap84',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu s-a pus problema de program de reintegrare profesională. Nu a existat o discuție despre salariu. Lavinia dorea o creștere salarială care să o aducă în rând cu ceilalți colegi: Când ai flexibilitate, un volum mai mic de muncă, dai un pas înapoi și zici: Mă lasă să mă duc cu copilul la doctor, mă lasă să nu intru în nu știu câte meeting-uri. Eu cum pot să le mai cer bani?  ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap85',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'La începutul lui 2024, după aproape doi ani de concediu maternal, Miruna a revenit la muncă. Pentru că mai avea acasă încă un copil i-a cerut angajatorului să-i reducă numărul de zile în care trebuie să fie la birou. Numărul era de zece zile. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap86',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din documentarea Dela0.ro flexibilitatea în programul de lucru este obligatorie într-un proces de reintegrare al unei mame revenite din concediu de maternitate. Ea rămâne însă la mâna angajatorului. El poate refuza motivat un program individualizat.',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap87',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Partea cu programul individualizat de muncă e mai degrabă teoretică în România și e valabilă doar pentru cei care prestează la locul de munca, nu și pentru cei aflați în munca la domiciliu/telemunca, a explicat pentru Dela0.ro avocata Elenina Nicuț. Nu este imposibil, mai spune ea, dar e greu de implementat pentru că trebuie aplicată tuturor salariaților, ceea ce ar presupune o organizare mai mult decât riguroasă cu care nu prea se încurcă angajatorii, mai ales cei mai mici.',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap88',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'După sărbători angajatorul a anunțat-o pe Miruna că nu-i poate oferi un program individualizat. A fost nevoită să-și caute un alt loc de muncă. Unul care să-i ofere fie un salariu mai bun din care să poată plăti o bonă, fie flexibilitate. L-a găsit destul de repede așa că din primăvara Miruna lucrează de acasă. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap89',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Îmi este incredibil de greu, este incredibil de solicitant, solicitant în ideea în care psihic este foarte greu pentru că eu nu ies din casă. Eu sunt nelipsită de acasă. Închid munca, trec la făcut cina, culc copiii și apoi muncesc. Practic fac și overtime, cum s-ar spune.',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap90',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Deși s-a întors din concediu de maternitate direct într-o companie nouă, cu proiecte de la zero, cu multe incertitudini Miruna spune că nu se simte atât de copleșită: după două concedii de maternitate creierul meu simte nevoia să fie folosit și în altă direcție. Vreau să mă simt productivă și în alte direcții.  ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap91',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Natalia a revenit la muncă după un concediu de maternitate în 2018 și un altul în 2022. Prima revenire a fost la un loc de muncă într-o bancă. Nu a avut nicio discuție cu șeful direct sau cu cineva de la resurse umane despre cum va arăta întoarcerea ei. A simțit că o ia de la zero, fără niciun sprijin. Deși revenea pe aceeași poziție, la aceleași responsabilități a simțit că e datoare să le demonstreze colegilor că ea își poate face treaba, că deși a lipsit doi ani de zile e încă capabilă să-și îndeplinească sarcinile, că merită să fie promovată. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap92',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'La șapte luni de la revenirea ei au avut loc schimbări la nivel de departament iar ea a rămas pe aceeași poziție pe care o ocupa de cinci ani de zile. Nu i-a spus nimeni direct motivul, dar a simțit că a fost neglijată pentru că a lipsit și un om care lipsește doi ani de zile nu poate avea atât de repede ambiția să fie avansat. Natalia a decis atunci să-și schimbe locul de muncă. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap93',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Reintegrarea după doi ani de zile poate să fie una dificilă, arată avocata Elenina Nicuț, pentru că cele două părți rup practic legătura pentru o perioada destul de lungă. În plus, explică avocata, angajatorul se simte "faultat" pentru că a trebuit să găsească om în loc, iar după revenire are o serie de interdicții și obligații. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap94',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În UK, pe perioada concediului de creștere a copilului salariatul are posibilitatea de a accesa până la 10 zile de menținere a contactului cu angajatorul. În practică, asta presupune: participarea la ședințe, la cursuri, îndeplinirea unor sarcini. Toate aceste activități sunt plătite. Concediul pentru creșterea copilului în UK este de 52 de săptămâni. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap95',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Există și alte modalități de a ține legătura cu angajatul aflat în concediu pentru creșterea copilului practicate de alte țărri: întâlnire înainte ca angajatul să înceapă concediul, nominalizarea unui coleg pentru a transmite informații importante despre muncă angajatului în timp ce acesta este în concediu, actualizare prin e-mail, evenimente sociale la care părintele aflat în concediu să fie în continuare invitat.  ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap96',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'M-au băgat direct pe programul pe care eram înainte să intru în concediu. Lucram zi - noapte cu o zi liberă. Nu poți așa cu un copil mic, povestește Flavia care a revenit la muncă după un an și nouă luni de zile. Flavia lucra la acel moment pe secția de terapie intensivă a unui spital public din provincie. Nu a beneficiat de o mărire salarială, cum au beneficiat alți colegi și nici de un program de reintegrare profesională deși ar fi avut nevoie: Nu a stat nimeni lângă mine  măcar o săptămână. Se simte la pus branulă, cateter că nu ai mai făcut asta de doi ani de zile. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap97',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Flavia a plecat într-un alt spital din cauza programului. La noul loc de muncă mamele revenite din concediu pentru creșterea copilului au un mentor care stă lângă ele timp de două săptămâni pentru a le face reintegrarea mai ușoară. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap98',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Flexibilitatea e importantă chiar și atunci când revenirea are loc la aproape doi ani. Dacă situația financiară nu-ți permite să plătești o bonă sau o creșă privată, copilul va mai sta acasă cu tine un an de zile. România se confruntă încă cu un deficit de creșe. În 2021,  Ministrul Dezvoltării, Cseke Attila, declara că România se află pe ultimul loc între ţările Uniunii Europene în ceea ce priveşte asigurarea de locuri în creşe, pentru copiii de până în trei ani. Prin Planul Național de Redresare și Reziliență ar urma să fie gata în 2025, 124 de creșe.',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap99',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Copilul Flaviei nu a prins loc la creșa publică. S-a gândit mult dacă e o idee bună să revină la muncă în loc să mai stea acasă încă un până când cel mic împlinea trei ani și-l putea înscrie la grădiniță.',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap100',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Nu doar România se confruntă cu această problemă. Diferența dintre România și alte țări este că, cele din urmă plătesc integral sau parțial suplinirea acestor servicii. Mame din mai multe țări au povestit pentru Panorama cum statul le achită salariul unei bone dacă nu prind loc la grădiniță sau 70% din costul total al unei creșe. Tichetele oferite de statul român acoperă între 18 - 27% din costurile unei creșe private. ',
            overlayImage: 'blank3.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap101',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'O chestiune de noroc', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Din cele 18 mame, șase spun că au avut parte de o reintegrare pozitivă. Experiențele țin de noroc, norocul de a avea un angajator dispus să respecte legea și/sau o echipă care înțelege noua realitate a femeii care revine la muncă. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap102',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Emilia, care a stat în concediu de maternitate doi ani,  a avut parte de o revenire treptată. A trecut printr-o serie de traininguri, pe care le-a perceput ca o mini vacanță. În primele două-trei luni i-au dat timp să citească, să se (re)acomodeze. Acest timp i-a permis și să stea cu copilul care începuse creșa și se îmbolnăvea destul de des. I-a luat un an găsească un echilibru între performanță la muncă și timp cu copilul.',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap103',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Contează și poziția pe care mama o ocupă în interiorul companiei. Cu cât ea este mai înaltă cu atât puterea de a-și negocia programul de muncă crește. Irina Nicoleta Scarlat a fost promovată fix în ziua în care a născut. Și-a obținut de la angajator toată flexibilitatea de care avea nevoie. Spune că a simțit că a ajuns la nivelul la care era înainte de copil din punct de vedere fizic, psihologic și ca reziliență abia după ce copilul a împlinit patru ani. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap104',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Alte două mame care au avut parte de o reintegrare pozitivă nu sunt angajate, ci lucrează pe PFA. Această situație le-a oferit un oarecare control. Le-a permis să-și aleagă colaborările, clienții, numărul de ore alocate. A venit însă la pachet cu unele sacrificii: ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap105',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Am renunțat la activitatea fizică, lectura este pusă pe pauză, știința o citesc în bucătărie. Nu e deloc ușor, timpul pentru tine nu există, iar dacă ai o zi liberă realizezi câte ai posibilitatea să faci. Ai sentimentul dezavantajului, însă pentru mine e extrem de mult compensat de ceea ce fac zi de zi, a explicat medicul dermatolog Ioana Simian. ',
            overlayImage: 'blank5.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap106',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Documentarea Dela0.ro arată că și acolo unde a existat o reintegrare pozitivă lucrurile nu au fost neapărat ușoare pentru mame. O reintegrare pozitivă le-a dat însă mamelor timpul necesar să ajungă la un moment dat la un echilibru între viața personală și cea profesională, le-a dat timp să revină la capacitatea profesională pe care o aveau înainte de copil fără niciun fel de presiune și fără teama că angajatorul va încerca să scape de ele. Dar astfel de situații se petrec în doar 30% din cazuri. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap107',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Colega care ne enervează', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Gabriela* a experimentat două reveniri din concediu de maternitate la același loc de muncă. Când s-a întors prima oară, în 2011, simțea că, în cei doi ani de concediu, se detașase complet de tot ceea ce însemna loc de muncă. Nu am știut cum să mă întorc, povestește Gabriela. Colegii au privit-o ca pe o privilegiată, o persoană care a stat doi ani acasă în vreme ce ei au preluat sarcinile ei.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap108',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Cel mai greu a fost cu reintegrarea în colectiv și găsirea unui rost acolo că părea că nu a mai rămas nimic de făcut acolo pentru mine în afară de munci din alea de le dai probabil unor începători. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap109',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'A fost o retrogradare nedeclarată oficial. Nu a existat nicio discuție cu vreun superior pentru că era de la sine înțeles că lucrurile trebuie să se întâmple așa. Colegii erau îndreptățiți să păstreze sarcinile ei de care s-au achitat foarte bine vreme de doi ani. ',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap110',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Eram așa, cam fără rost. Egoul îmi era clar rănit. Și... Da, deci asta mi-a fost cel mai greu și nici n-am știut, n-am putut să fiu fermă și să cer. Adică am stat așa în starea asta neștiind ce să fac.',
            overlayImage: 'blank6.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap111',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'A mers doar șase luni la muncă pentru că a rămas însărcinată. A revenit după un an de concediu de maternitate, în 2013. S-a întors epuizată, motiv pentru care a făcut o encefalită care a băgat-o în spital în semi comă. Au urmat două luni de concediu. În aceeași perioadă soțul a anunțat-o că vrea să divorțeze așa că pe Gabriela nu a mai interesat-o să-și recupereze atribuțiile, ci să-și facă treaba. Trăia cu teama că într-o zi o vor anunța pur și simplu că nu mai au nevoie de ea. Anii au trecut, șefii s-au mai schimbat, în 2020 s-a mutat, forțat, într-un alt departament. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap112',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Eu nici nu mai cred în mine, nu m-am mai dezvoltat deloc, nu știu dacă mai vreau în domeniul acesta. Sunt un om care la 45 de ani arată că nu a evoluat deloc, nici în companie. Cum crede că ar fi stat lucrurile dacă revenirea ei la muncă ar fi fost cu adevărat sprijinită?',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap113',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Ar fi fost foarte valoros ca întoarcerea să fie punctată, recunoscută. Hai să redistribuim, să-i dăm înapoi activitățile, hai să o punem la curent cu ce s-a întâmplat în cei doi ani. E clar că nu o să mai existe disponibilitate de stat peste program. Dacă trebuie să iau copilul, trebuie să-l iau și nu am cum altfel. Cred că e important ca o autoritate să spună asta într-o întâlnire deschisă.',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap114',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Și emoțional ți-ar da o stare de liniște, că te duci spre echilibru. Da, m-am întors nu este o nenorocire, oamenii mă văd și înțeleg că am venit încărcată, poate obosită. Cumva ai încredere și tu în cei cu care reîncepi activitatea, au și ei în tine și te privesc nu cu compasiune, ci cu înțelegere asupra noii realități. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap115',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Între experiența Gabrielei și a celor mai multe mame care au discutat cu Dela0.ro este o diferență de opt, chiar zece ani și doar atât. Deși în acest interval au existat îmbunătățiri legislative. ',
            overlayImage: 'blank7.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap116',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: 'Titlu', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '22 de experiențe au stat la baza acestui articol. 22 de povești spuse direct de mame, dar și indirect de hotărâri judecătorești. Doar cinci dintre ele vizează meserii din zona gulerelor albastre. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap117',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Reintegrarea mamelor la locul de muncă după concediul de maternitate este un subiect tabu. Mamele sunt mai degrabă concentrate să-și păstreze locul de muncă sub orice condiții, sunt preocupate să demonstreze că încă își pot face treaba, că merită să fie luate în calcul la viitoare promovări, că absența pentru creșterea copilului nu este un minus în CV-ul lor. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap118',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'Există o teamă de a discuta despre reintegrarea la locul de muncă. Teama de a nu fi acuzate că abia s-au întors și se plâng. Și există o reticență în a semnala abuzurile și a merge în instanță. E greu să mai ai așa ceva în vedere când trebuie să te gândești cum să te pui la punct cu toate modificările din companie, când trebui să te gândești cum să te împarți ca să ajungi să iei copilul la timp de la creșă, când te gândești cum să faci să nu pară că ești neserioasă doar pentru că copilul se îmbolnăvește frecvent. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap119',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: 'În România, mamele cu venituri medii spre mari vorbesc puțin despre experiența reintegrării, în vreme ce mamele cu venituri mai mici nu vorbesc deloc. Pentru că nu pot, pentru că nu știu cum, pentru că presa nu ajunge la ele. De aceea ne-am propus  să facem o hartă a abuzurilor comise de angajatori față de mamele revenite la muncă după concediu de maternitate.',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'cap120',
            daysAgo: 100,
            showTimeline: false,
            alignment: 'center',
            hidden: false,
            title: '', // Consider adding a title if needed
            image: '', // Specify if there's a header image for the chapter
            description: '. O hartă care să se bazeze pe mărturiile anonime venite din partea mamelor prin completarea unui chestionar. O astfel de hartă nu va schimba imediat lucrurile, dar va pune cu siguranță problema pe agenda publică, o va face vizibilă. ',
            overlayImage: 'blank1.png',
            location: {
                center: [12.02595, 49.90885],
                zoom: 1,
                pitch: 60,
                bearing: 0,
            },
            mapAnimation: 'jumpTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        



        


        


















        


        
        

    ]
};
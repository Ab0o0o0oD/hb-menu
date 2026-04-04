export type Lang = 'nb' | 'en';

type SpecialtyItem = {
    name: string;
    description: string;
};

type Feature = {
    title: string;
    description: string;
};

type Translations = {
    [K in Lang]: {
        nav: {
            home: string;
            menu: string;
            catering: string;
            aboutUs: string;
        };
        landing: {
            welcomeTo: string;
            subtitle: string;
            cta: string;
            imageAlt: string;
        };
        about: {
            title: string;
            description: string;
        };
        specialties: {
            heading: string;
            subtitle: string;
            items: {
                shawarma: SpecialtyItem;
                falafel: SpecialtyItem;
                crispy: SpecialtyItem;
            };
        };
        whyUs: {
            heading: string;
            features: {
                fresh: Feature;
                recipe: Feature;
                fast: Feature;
            };
        };
        ctaBanner: {
            heading: string;
            subtitle: string;
            cta: string;
        };
        menu: {
            heading: string;
            subtitle: string;
            extras: string;
        };
        catering: {
            heading: string;
            subtitle: string;
            services: {
                heading: string;
                items: {
                    corporate: { title: string; description: string };
                    weddings: { title: string; description: string };
                    private: { title: string; description: string };
                };
            };
            howItWorks: {
                heading: string;
                steps: {
                    contact: { title: string; description: string };
                    plan: { title: string; description: string };
                    enjoy: { title: string; description: string };
                };
            };
            menuInspiration: {
                heading: string;
                description: string;
                cta: string;
            };
            form: {
                heading: string;
                subtitle: string;
                name: string;
                email: string;
                phone: string;
                eventDate: string;
                guests: string;
                eventType: string;
                eventTypes: {
                    corporate: string;
                    wedding: string;
                    birthday: string;
                    other: string;
                };
                message: string;
                submit: string;
                sending: string;
                success: string;
                error: string;
            };
        };
        footer: {
            followUs: string;
            rights: string;
        };
        langToggle: string;
    };
};

export const translations: Translations = {
    nb: {
        nav: {
            home: 'Hjem',
            menu: 'Meny',
            catering: 'Catering',
            aboutUs: 'Om oss',
        },
        landing: {
            welcomeTo: 'Velkommen til',
            subtitle:
                'Smak den autentiske syriske gleden! Nyt de rike smakene av saftig Shawarma, gylne sprø biter og ' +
                'deilig Falafel — alt laget fersk, på den syriske måten. Din appetitt, vår lidenskap!',
            cta: 'Utforsk menyen vår',
            imageAlt: 'Hungry Birds retter',
        },
        about: {
            title: 'En smak av Syria, laget med kjærlighet',
            description:
                'Vi brenner for å bringe de fineste smakene fra Syria til ditt bord.\n' +
                'Hver rett er tilberedt med kjærlighet, omsorg og dyp respekt for tradisjonen.\n' +
                'Utforsk vår unike meny og bli en del av vår kulinariske reise.',
        },
        specialties: {
            heading: 'Våre Spesialiteter',
            subtitle: 'Oppdag smakene som har gjort oss til en favoritt i Oslo',
            items: {
                shawarma: {
                    name: 'Syrisk Shawarma',
                    description: 'Saftig marinert kjøtt, langsomt stekt og servert i mykt brød med friske grønnsaker og hjemmelaget saus.',
                },
                falafel: {
                    name: 'Falafel Rull',
                    description: 'Sprøstekte kikerter med urter, servert med frisk salat, syltet løk og kremet tahinisaus.',
                },
                crispy: {
                    name: 'Crispy Chicken',
                    description: 'Gyllen og sprø kylling med vår signatur krydderblanding, pakket i en varm tortilla med frisk salat.',
                },
            },
        },
        whyUs: {
            heading: 'Hvorfor Hungry Birds?',
            features: {
                fresh: {
                    title: 'Ferske Råvarer',
                    description: 'Vi bruker kun de ferskeste ingrediensene, levert daglig til kjøkkenet vårt for å sikre topp kvalitet.',
                },
                recipe: {
                    title: 'Autentiske Oppskrifter',
                    description: 'Våre oppskrifter er overlevert gjennom generasjoner, med ekte syriske smaker og tradisjoner.',
                },
                fast: {
                    title: 'Rask Servering',
                    description: 'Nyt et raskt måltid uten å gå på kompromiss med kvaliteten. Fersk mat, klar på kort tid.',
                },
            },
        },
        ctaBanner: {
            heading: 'Klar til å bestille?',
            subtitle: 'Utforsk hele menyen vår med shawarma, falafel, pizza, frokost og mye mer.',
            cta: 'Se hele menyen',
        },
        menu: {
            heading: 'Restaurant Meny',
            subtitle: 'En smak du aldri glemmer',
            extras: 'Ekstra tilbehør:',
        },
        catering: {
            heading: 'Catering',
            subtitle: 'La oss gjøre ditt arrangement uforglemmelig med autentisk syrisk mat.',
            services: {
                heading: 'Våre Catering-tjenester',
                items: {
                    corporate: {
                        title: 'Bedriftsarrangementer',
                        description: 'Imponér kollegaer og kunder med et utvalg av våre mest populære retter. Perfekt for møter, seminarer og firmafester.',
                    },
                    weddings: {
                        title: 'Bryllup & Feiring',
                        description: 'Gjør den store dagen ekstra spesiell med et rikt utvalg av syriske spesialiteter. Vi tilpasser menyen etter dine ønsker.',
                    },
                    private: {
                        title: 'Private Selskaper',
                        description: 'Bursdager, familiesammenkomster eller vennemiddager — vi leverer smakfull mat til enhver anledning.',
                    },
                },
            },
            howItWorks: {
                heading: 'Slik Bestiller Du',
                steps: {
                    contact: {
                        title: '1. Kontakt Oss',
                        description: 'Fyll ut skjemaet nedenfor med detaljer om arrangementet ditt.',
                    },
                    plan: {
                        title: '2. Vi Planlegger Sammen',
                        description: 'Vi tar kontakt for å skreddersy menyen etter dine behov og budsjett.',
                    },
                    enjoy: {
                        title: '3. Nyt Maten',
                        description: 'Vi leverer fersk, deilig mat rett til arrangementet ditt.',
                    },
                },
            },
            menuInspiration: {
                heading: 'Inspirert av Vår Meny',
                description: 'Vår catering-meny er basert på de samme autentiske oppskriftene du kjenner fra restauranten. Shawarma, falafel, crispy chicken og mye mer — alt tilpasset store grupper.',
                cta: 'Se hele menyen',
            },
            form: {
                heading: 'Bestill Catering',
                subtitle: 'Fortell oss om arrangementet ditt, så tar vi kontakt innen 24 timer.',
                name: 'Fullt navn',
                email: 'E-post',
                phone: 'Telefon',
                eventDate: 'Dato for arrangement',
                guests: 'Antall gjester',
                eventType: 'Type arrangement',
                eventTypes: {
                    corporate: 'Bedriftsarrangement',
                    wedding: 'Bryllup',
                    birthday: 'Bursdag',
                    other: 'Annet',
                },
                message: 'Fortell oss om arrangementet ditt',
                submit: 'Send forespørsel',
                sending: 'Sender...',
                success: 'Takk! Vi har mottatt forespørselen din og tar kontakt snart.',
                error: 'Noe gikk galt. Vennligst prøv igjen eller kontakt oss direkte.',
            },
        },
        footer: {
            followUs: 'Følg oss:',
            rights: '© 2026 Hungry Birds AS. Alle rettigheter reservert.',
        },
        langToggle: 'EN',
    },
    en: {
        nav: {
            home: 'Home',
            menu: 'Menu',
            catering: 'Catering',
            aboutUs: 'About Us',
        },
        landing: {
            welcomeTo: 'Welcome to',
            subtitle:
                'Taste the Authentic Syrian Delight! Indulge in the rich flavors of juicy Shawarma, golden Crispy bites, and ' +
                'mouthwatering Falafel — all made fresh, the Syrian way. Your cravings, our passion!',
            cta: 'Explore our menu',
            imageAlt: 'Hungry Birds dishes',
        },
        about: {
            title: 'A Taste of Syria, Made with Love',
            description:
                'We are passionate about bringing the finest flavors of Syria to your table.\n' +
                'Every dish is prepared with love, care, and a deep respect for tradition.\n' +
                'Explore our unique menu and become a part of our culinary journey.',
        },
        specialties: {
            heading: 'Our Specialties',
            subtitle: 'Discover the flavors that made us a favorite in Oslo',
            items: {
                shawarma: {
                    name: 'Syrian Shawarma',
                    description: 'Juicy marinated meat, slow-roasted and served in soft bread with fresh vegetables and homemade sauce.',
                },
                falafel: {
                    name: 'Falafel Wrap',
                    description: 'Crispy fried chickpeas with herbs, served with fresh salad, pickled onion and creamy tahini sauce.',
                },
                crispy: {
                    name: 'Crispy Chicken',
                    description: 'Golden and crispy chicken with our signature spice blend, wrapped in a warm tortilla with fresh salad.',
                },
            },
        },
        whyUs: {
            heading: 'Why Hungry Birds?',
            features: {
                fresh: {
                    title: 'Fresh Ingredients',
                    description: 'We use only the freshest ingredients, delivered daily to our kitchen to ensure top quality.',
                },
                recipe: {
                    title: 'Authentic Recipes',
                    description: 'Our recipes have been passed down through generations, with genuine Syrian flavors and traditions.',
                },
                fast: {
                    title: 'Quick Service',
                    description: 'Enjoy a quick meal without compromising on quality. Fresh food, ready in no time.',
                },
            },
        },
        ctaBanner: {
            heading: 'Ready to order?',
            subtitle: 'Explore our full menu with shawarma, falafel, pizza, breakfast and much more.',
            cta: 'View full menu',
        },
        menu: {
            heading: 'Restaurant Menu',
            subtitle: 'A taste you will never forget',
            extras: 'Extra sides:',
        },
        catering: {
            heading: 'Catering',
            subtitle: 'Let us make your event unforgettable with authentic Syrian cuisine.',
            services: {
                heading: 'Our Catering Services',
                items: {
                    corporate: {
                        title: 'Corporate Events',
                        description: 'Impress colleagues and clients with a selection of our most popular dishes. Perfect for meetings, seminars and company parties.',
                    },
                    weddings: {
                        title: 'Weddings & Celebrations',
                        description: 'Make the big day extra special with a rich selection of Syrian specialties. We tailor the menu to your wishes.',
                    },
                    private: {
                        title: 'Private Parties',
                        description: 'Birthdays, family gatherings or dinner with friends — we deliver delicious food for any occasion.',
                    },
                },
            },
            howItWorks: {
                heading: 'How to Order',
                steps: {
                    contact: {
                        title: '1. Contact Us',
                        description: 'Fill out the form below with details about your event.',
                    },
                    plan: {
                        title: '2. We Plan Together',
                        description: 'We will get in touch to tailor the menu to your needs and budget.',
                    },
                    enjoy: {
                        title: '3. Enjoy the Food',
                        description: 'We deliver fresh, delicious food straight to your event.',
                    },
                },
            },
            menuInspiration: {
                heading: 'Inspired by Our Menu',
                description: 'Our catering menu is based on the same authentic recipes you know from our restaurant. Shawarma, falafel, crispy chicken and much more — all adapted for large groups.',
                cta: 'View full menu',
            },
            form: {
                heading: 'Order Catering',
                subtitle: 'Tell us about your event and we will get back to you within 24 hours.',
                name: 'Full name',
                email: 'Email',
                phone: 'Phone',
                eventDate: 'Event date',
                guests: 'Number of guests',
                eventType: 'Event type',
                eventTypes: {
                    corporate: 'Corporate event',
                    wedding: 'Wedding',
                    birthday: 'Birthday',
                    other: 'Other',
                },
                message: 'Tell us about your event',
                submit: 'Send request',
                sending: 'Sending...',
                success: 'Thank you! We have received your request and will be in touch soon.',
                error: 'Something went wrong. Please try again or contact us directly.',
            },
        },
        footer: {
            followUs: 'Follow us:',
            rights: '© 2026 Hungry Birds AS. All rights reserved.',
        },
        langToggle: 'NO',
    },
};

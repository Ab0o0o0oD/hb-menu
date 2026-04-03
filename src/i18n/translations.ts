export type Lang = 'nb' | 'en';

type Translations = {
    [K in Lang]: {
        nav: {
            home: string;
            menu: string;
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
        menu: {
            heading: string;
            subtitle: string;
            extras: string;
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
        menu: {
            heading: 'Restaurant Meny',
            subtitle: 'En smak du aldri glemmer',
            extras: 'Ekstra tilbehør:',
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
        menu: {
            heading: 'Restaurant Menu',
            subtitle: 'A taste you will never forget',
            extras: 'Extra sides:',
        },
        footer: {
            followUs: 'Follow us:',
            rights: '© 2026 Hungry Birds AS. All rights reserved.',
        },
        langToggle: 'NO',
    },
};

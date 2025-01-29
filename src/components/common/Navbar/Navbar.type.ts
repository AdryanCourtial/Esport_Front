interface Navbar {
    content: string
    redirection: string;
    variants: VariantsButtonNavbar
}

export type VariantsButtonNavbar = 'primary' | 'black';

export const arrayContent: Navbar[] = [
    {
        content: 'Accueil',
        redirection: '/',
        variants: "black"
    },
    {
        content: 'Nos Tournois',
        redirection: '/tournois',
        variants: "black"

    },
    {
        content: 'Nos Articles',
        redirection: '/articles',
        variants: "black"

    },
    {
        content: 'Connexion',
        redirection: '/signin',
        variants: "primary"

    },
    {
        content: 'Inscription',
        redirection: '/signup',
        variants: "primary"
    },
]
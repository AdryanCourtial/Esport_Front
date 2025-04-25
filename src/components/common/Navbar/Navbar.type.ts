interface Navbar {
    content: string
    redirection: string;
    variants: VariantsButtonNavbar
}

export type VariantsButtonNavbar = 'primary' | 'black';

export const arrayContent: Navbar[] = [
    {
        content: 'Accueil',
        redirection: '/home',
        variants: "black"
    },
    {
        content: 'Nos Tournois',
        redirection: '/tournament',
        variants: "black"

    },
    {
        content: 'Nos Articles',
        redirection: '/articles',
        variants: "black"

    }
]
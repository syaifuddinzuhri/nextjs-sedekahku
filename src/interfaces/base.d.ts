import { ReactNode } from "react";
import { NavbarHeaderProps } from '@/components/Navbar/NavbarHeader';

export interface Base {
    meta?: {
        title?: string,
        description?: string
    },
    logo: string,
    navbar: {
        content?: string,
    },
    footer: {
        contactus: {
            title: string,
            body: string
        }
        faq: {
            title: string,
            body: string,
        }

    }
}
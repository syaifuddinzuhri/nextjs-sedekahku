import { ReactNode } from "react";
import { NavbarHeaderProps } from "@/components/Navbar/NavbarHeader";

export interface Layout {
    children: ReactNode;
    navbarHeader?: NavbarHeaderProps;
    backgroundColor?: string;
    contentWrapper?: boolean;
    dataPage?: typeof getServerSideProps;
}
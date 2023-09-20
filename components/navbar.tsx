import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";

import getCategories from "@/actions/get-categories";

export const revalidate = 0;

export default async function Navbar(){
  const categories = await getCategories();

  return (
    <div className="border-b">
    <Container>
        <div className="relative px-4 flex sm:px-6 lg:px-8 h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}
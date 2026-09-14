'use client';
import Link from "next/link";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/custom/logo";
import { useState } from "react";
import { Tenant } from "@/lib/types";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const CartCounterWithoutSSR = dynamic(() => import('./cart-counter'), { ssr: false });

function Header({ tenants }: { tenants: Tenant[] }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState('');
    const selectedRestaurantName = tenants.find(
        (tenant) => String(tenant.id) === selectedRestaurant
    )?.name;


    const handleValueChange = async (value: any) => {
        setSelectedRestaurant(value)
        router.push(`/?restaurantId=${value}`)
    }

    return (
        <header className="bg-white">
            <nav className="mx-auto max-w-300.75 px-4 py-5 sm:px-6 lg:px-8">
                <div className="hidden items-center justify-between md:flex">
                    <div className="flex items-center gap-4">
                        <Link href={'/'}>
                            <Logo />
                        </Link>
                        <Select value={selectedRestaurant} onValueChange={handleValueChange}>
                            <SelectTrigger className="w-45">
                                <SelectValue placeholder="Select Restaurant">
                                    {selectedRestaurantName}
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {tenants.map((item) => (
                                        <SelectItem key={item.id} value={String(item.id)}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ul className="flex items-center gap-6 font-medium">
                            <li><Link href="/">Menu</Link></li>
                            <li><Link href="/">Orders</Link></li>
                        </ul>
                        <CartCounterWithoutSSR />
                        <div className="flex items-center gap-x-2 ml-12">
                            <Phone />
                            <span>+91 123 456 7891</span>
                        </div>
                        <Button>Logout</Button>
                    </div>
                </div>
                {/*  mobile navbar  */}
                <div className="flex items-center justify-between md:hidden">

                    {/* Left: Hamburger + Logo */}
                    <div className="flex items-center gap-3">

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(true)}
                            className="flex h-10 w-10 items-center justify-center"
                            aria-label="Open menu"
                        >
                            <MenuIcon size={27} />
                        </button>

                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>

                    {/* Right: Phone + Cart */}
                    <div className="flex items-center gap-5">

                        <Link href="tel:+911234567891">
                            <Phone size={25} />
                        </Link>

                        <CartCounterWithoutSSR />

                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 z-50 md:hidden">

                    {/* Overlay */}
                    <button
                        className="absolute inset-0 bg-black/40"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    />

                    {/* Drawer */}
                    <div className="relative h-full w-[80%] max-w-sm bg-white p-6">

                        {/* Close */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="mb-8 flex h-10 w-10 items-center justify-center"
                            aria-label="Close menu"
                        >
                            <X size={28} />
                        </button>

                        {/* Menu */}
                        <div className="space-y-2">

                            <Link
                                href="/"
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded-lg px-3 py-4 text-lg font-medium hover:bg-muted"
                            >
                                Menu
                            </Link>

                            <Link
                                href="/orders"
                                onClick={() => setIsMenuOpen(false)}
                                className="block rounded-lg px-3 py-4 text-lg font-medium hover:bg-muted"
                            >
                                Orders
                            </Link>

                            {/* Existing Select */}
                            <div className="px-3 py-4">
                                <Select value={selectedRestaurant} onValueChange={handleValueChange}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Restaurant" >
                                            {selectedRestaurantName}
                                        </SelectValue>
                                    </SelectTrigger>

                                    <SelectContent>
                                        <SelectGroup>
                                            {tenants.map((item) => (
                                                <SelectItem
                                                    key={item.id}
                                                    value={String(item.id)}
                                                >
                                                    {item.name}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="my-4 h-px bg-border" />

                            {/* Phone */}
                            <a
                                href="tel:+911234567891"
                                className="flex items-center gap-4 px-3 py-4 text-lg"
                            >
                                <Phone size={24} />
                                <span>+91 123 456 7891</span>
                            </a>

                            {/* Logout */}
                            <Button className="mt-6 w-full">
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header

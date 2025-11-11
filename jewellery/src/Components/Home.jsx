'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'HOME', href: '#' },
    { name: 'PRODUCT', href: '#' },
    { name: 'ABOUT', href: '#' },
    { name: 'BLOG', href: '#' },
    { name: 'CONTACT', href: '#' },
]

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-gray-100">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                alt=""
                                src="https://klbtheme.com/djewno/wp-content/uploads/2024/01/logo-2x-dark.png"
                                className="h-5 w-auto"
                            />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-sm font-semibold text-gray-900">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold text-gray-900">
                            Log in →
                        </a>
                    </div>
                </nav>

                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="mt-6 space-y-2 py-6">
                            {navigation.map((item) => (
                                <a key={item.name} href={item.href} className="block rounded-md py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                                    {item.name}
                                </a>
                            ))}
                            <a href="#" className="block rounded-md py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-100">
                                Log in
                            </a>
                        </div>

                    </DialogPanel>
                </Dialog>
            </header>

            {/* HERO SECTION WITH CENTERED TEXT */}
            <div className="relative h-[600px] w-full mt-20">
                <img
                    src="https://klbtheme.com/djewno/wp-content/uploads/2024/01/banner-02.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                />

                {/* TEXT CENTERED OVER IMAGE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-4xl font-semibold drop-shadow-lg">
                        Look gorgeous and dreamy with the most intriguing jewelry ever.
                    </h1>
                    <p className="mt-6 text-lg max-w-2xl drop-shadow-md">
                        Mara Ambistat proskade tempofiering, reamatisk megasomos. Memil galna chips-sjukans till IVPA.
                    </p>

                    <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </div>
    )
}

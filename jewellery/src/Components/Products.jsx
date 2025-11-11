const products = [
  {
    id: 1,
    name: 'Bracelet',
    href: '#',
    price: '$48',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/01/category-bracelets-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Earrings',
    href: '#',
    price: '$35',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/01/category-earrings-01.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Gold Set',
    href: '#',
    price: '$89',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/01/category-gold-set-01.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Necklaces',
    href: '#',
    price: '$35',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/01/category-neclaces-01.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Rings',
    href: '#',
    price: '$64',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/02/banner-28.jpg',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 6,
    name: 'Silver Set',
    href: '#',
    price: '$39',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/02/banner-27.jpg',
    imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
  },
  {
    id: 7,
    name: 'Gold set',
    href: '#',
    price: '$50',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/02/slider-07-1.jpg',
    imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
  },
  {
    id: 8,
    name: 'Necklaces',
    href: '#',
    price: '$32',
    imageSrc: 'https://klbtheme.com/djewno/wp-content/uploads/2024/02/banner-29.jpg',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
]

export default function Products() {
  return (
    // <div className="bg-white mt-28">
    //   <div className="text-center  mb-10">
    //     <p className="text-3xl font-bold underline">LIVE A STYLISH LIFE</p>
    //   </div>
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
    //     <h2 className="sr-only">Products</h2>

    //     <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //       {products.map((product) => (
    //         <a key={product.id} href={product.href} className="group">
    //           <img
    //             alt={product.imageAlt}
    //             src={product.imageSrc}
    //             className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
    //           />
    //           <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
    //           <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white pt-28 pb-16">
      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold underline text-gray-900">LIVE A STYLISH LIFE</h2>
      </div>

      {/* GRID */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group block">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={product.imageSrc}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>

  )
}

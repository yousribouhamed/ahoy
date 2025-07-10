"use client";

const logos = [
    {
        name: 'TradeSocial',
        url: '/TradeSocial.svg',
    },
    {
        name: 'Comet',
        url: '/comet.svg',
    },
    {
        name: 'Fly+',
        url: '/Fly+.svg',
    },
    {
        name: '24six9',
        url: '/24six9.svg',
    },
    {
        name: 'Webflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
    },
    {
        name: 'Airbnb',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
    },
    {
        name: 'Tina',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
    },
    {
        name: 'Stackoverflow',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/ts1j4mkooxqmscgptafa.svg',
    },
    {
        name: 'mistral',
        url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
    },
]

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-8">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 w-max"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', 
 
            }}
          >
            {/* First set of logos */}
            <div className="flex shrink-0 animate-logo-cloud gap-6">
              {logos.map((logo, key) => (
                <img
                  key={key}
                  src={logo.url}
                  className="h-10 w-28 px-2 brightness-0 invert"
                  alt={`${logo.name}`}
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex shrink-0 animate-logo-cloud gap-6">
              {logos.map((logo, key) => (
                <img
                  key={`duplicate-${key}`}
                  src={logo.url}
                  className="h-10 w-28 px-2 brightness-0 invert"
                  alt={`${logo.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedLogoCloud

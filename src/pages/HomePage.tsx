import { useState } from 'react'

function HomePage() {
    const [count, setCount] = useState(0)

  return (
    <main className="flex-1 snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth bg-slate-950 text-slate-100">
      
      {/* 1. SEKCJA: HERO / O MNIE */}
      <section 
        id="about" 
        className="snap-start snap-always min-h-screen w-full flex flex-col justify-center items-center px-6 py-16"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mauris sapien, pretium vel nisl id, posuere sollicitudin purus. Aenean imperdiet nulla mi, non lobortis est iaculis ac. Nulla posuere odio arcu, id elementum tellus fringilla id. Nunc eget dui quis massa fermentum bibendum sit amet eu libero. Nam sed nisl et quam semper rhoncus sed eu ante. Donec eu mauris sit amet nisl blandit vehicula. Etiam eu orci eget libero pellentesque auctor. Aliquam finibus hendrerit purus non ultricies.
      </section>

      {/* 2. SEKCJA: EDUKACJA */}
      <section 
        id="education" 
        className="snap-start snap-always min-h-screen w-full flex flex-col justify-center items-center px-6 py-16"
      >
        Donec gravida ac ipsum in finibus. Etiam venenatis ultrices nisi, placerat porta leo venenatis ut. Fusce sit amet dui vitae dui cursus dictum in eu justo. Integer eget nisi dui. Praesent fringilla varius luctus. Curabitur viverra consequat erat eget finibus. Nulla ut fringilla enim. Duis vel neque velit. Vestibulum auctor diam eu tortor rutrum gravida. Vestibulum scelerisque diam et risus finibus, a pharetra enim rhoncus. Nullam a elementum quam, ac consequat est. Pellentesque interdum felis a leo lobortis, sit amet auctor lacus hendrerit. Cras viverra lacus at rhoncus tristique. Curabitur viverra ut ex ut vestibulum.
      </section>

      {/* 3. SEKCJA: DOŚWIADCZENIE */}
      <section 
        id="experience" 
        className="snap-start snap-always min-h-screen w-full flex flex-col justify-center items-center px-6 py-16"
      >
        Phasellus ac porttitor libero. Sed ac convallis lacus. Donec eget turpis tellus. Fusce nec sem ut nibh tristique lobortis. Phasellus vitae dapibus nulla. Morbi ullamcorper ullamcorper ipsum, ac ornare nisi pretium eu. Fusce vehicula sagittis malesuada. Aenean maximus ultrices orci fermentum viverra. Integer ultrices risus lacus, sit amet commodo ex posuere a. Etiam pretium malesuada tortor, eu congue sapien efficitur at. Sed efficitur, neque faucibus luctus ultrices, velit ipsum accumsan tortor, nec porta odio tortor sit amet leo. Sed sagittis bibendum lorem et vulputate. Nam fringilla iaculis ligula, et sodales leo hendrerit sed.
      </section>

      {/* 4. SEKCJA: PROJEKTY */}
      <section 
        id="projects" 
        className="snap-start snap-always min-h-screen w-full flex flex-col justify-center items-center px-6 py-16"
      >
        Pellentesque sagittis eros et faucibus sagittis. Integer semper nibh non sem malesuada, sed porta quam congue. Fusce molestie lacus vitae velit varius, sit amet molestie sapien aliquam. Nulla varius eu elit sed pellentesque. Maecenas sed arcu turpis. Vivamus ullamcorper accumsan risus. Phasellus gravida blandit tincidunt. Fusce non nunc ac quam posuere maximus. Vestibulum ullamcorper vitae tortor eu viverra.
      </section>

    </main>
  )
}

export default HomePage
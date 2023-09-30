

export const filterOutCart=(id,cart)=>{
    return cart.find((el)=>el.id==id);
}

export const  handleScroll=(headings)=> {
  
    headings?.forEach((heading,i) => {
      const rect = heading.getBoundingClientRect();
  
      if (rect.top <= 140) {
        headings.forEach((head,j)=>{
          head.classList.remove('lg:fixed');
          head.classList.remove('lg:z-50');
          head.classList.remove('lg:top-[14%]');
        heading.classList.add('lg:opacity:0');
        head.classList.remove('lg:py-2');
        heading.nextSibling.classList.remove("pt-10")

    })
        heading.classList.add('lg:fixed');
        heading.classList.add('lg:top-[14%]');
        heading.classList.add('lg:z-50');
        heading.classList.remove('lg:opacity:0');
        heading.classList.add('lg:py-2');
        heading.nextSibling.classList.add("pt-10")
      } else {
        heading.classList.remove('lg:fixed');
        heading.classList.remove('lg:z-50');
        heading.classList.add('lg:opacity:0');
        heading.classList.remove('lg:top-[14%]');
        heading.classList.remove('lg:py-2');
        heading.nextSibling.classList.remove("pt-10")


      }
     
    });
  }
import { ActivePageContext } from "../context/ActivePage";


export const filterOutCart=(id,cart)=>{
    return cart.find((el)=>el.id==id);
}

export const  handleScroll=(headings,cb)=> {
  let val=null;
    headings?.forEach((heading,i) => {
      const rect = heading.getBoundingClientRect();
      
      if (rect.top <= 140) {
        headings.forEach((head,j)=>{
          head.classList.remove('lg:fixed');
          head.classList.remove('lg:z-50');
          head.classList.remove('lg:top-[13.5%]');
          head.classList.add('lg:opacity:0');
          head.classList.remove('lg:py-2');
          head.nextSibling.classList.remove("pt-10")

    })
        heading.classList.add('lg:fixed');
        heading.classList.add('lg:top-[13.5%]');
        heading.classList.add('lg:z-50');
        heading.classList.remove('lg:opacity:0');
        heading.classList.add('lg:py-2');
        heading.nextSibling.classList.add("pt-10")
        console.log(heading.innerText)
        val=heading.innerText||val;
          cb(val);
      } else {
        heading.classList.remove('lg:fixed');
        heading.classList.remove('lg:z-50');
        heading.classList.add('lg:opacity:0');
        heading.classList.remove('lg:top-[13.5%]');
        heading.classList.remove('lg:py-2');
        heading.nextSibling.classList.remove("pt-10")


      }
     
    });
  }
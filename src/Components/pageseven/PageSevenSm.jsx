// import React, { useEffect } from "react";
// import "./PageSeven.css";

// const ProductList = () => {
//   useEffect(() => {
//     const scrollRight = document.getElementById("scrollRight");
//     const productListContainer = document.querySelector(
//       ".product-list-container"
//     );

//     console.log("Initial Scroll Left:", productListContainer.scrollLeft);

//     const handleScrollRightClick = () => {
//       console.log("Clicked!");
//       productListContainer.scrollBy({
//         top: 0,
//         left: 620,
//         behavior: "smooth",
//       });
//       console.log("Scroll Left After:", productListContainer.scrollLeft);
//     };

//     scrollRight.addEventListener("click", handleScrollRightClick);

//     // Cleanup event listener on component unmount
//     return () => {
//       scrollRight.removeEventListener("click", handleScrollRightClick);
//     };
//   }, []); // Empty dependency array means the effect will run once when the component mounts

//   return (
//     <section className="section-container">
//       <div className="product-list-container">
//         <div className="product-list" id="productList">
//           <div class="product-card">
//             <div class="new-badge">New</div>
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=1"
//               alt="Product 1 Image"
//             />
//             <h3>Product 1</h3>
//             <p>This is product 1.</p>
//           </div>
//           {/* <!-- Product 2 --> */}
//           <div class="product-card">
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=2"
//               alt="Product 2 Image"
//             />
//             <h3>Product 2</h3>
//             <p>This is product 2.</p>
//           </div>
//           {/* <!-- Product 3 --> */}
//           <div class="product-card">
//             <div class="new-badge">New</div>
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=3"
//               alt="Product 3 Image"
//             />
//             <h3>Product 3</h3>
//             <p>This is product 3.</p>
//           </div>
//           {/* <!-- Product 4 --> */}
//           <div class="product-card">
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=4"
//               alt="Product 4 Image"
//             />
//             <h3>Product 4</h3>
//             <p>This is product 4.</p>
//           </div>
//           {/* <!-- Product 5 --> */}
//           <div class="product-card">
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=5"
//               alt="Product 5 Image"
//             />
//             <h3>Product 5</h3>
//             <p>This is product 5.</p>
//           </div>
//           {/* <!-- Product 6 --> */}
//           <div class="product-card">
//             <div class="new-badge">New</div>
//             <img
//               src="https://source.unsplash.com/random/150x150?sig=6"
//               alt="Product 6 Image"
//             />
//             <h3>Product 6</h3>
//             <p>This is product 6.</p>
//           </div>
//         </div>
//       </div>

//       {/* Assuming you have a button with id "scrollRight" somewhere in your JSX */}
//       <button id="scrollRight">Scroll Right</button>
//     </section>
//   );
// };

// export default ProductList;
import React from "react";
import star from "../../assets/../assets/star.svg";
import gif1 from "../../assets/gif1.png";
import glassgif1 from "../../assets/glassgif1.png";
import gif2 from "../../assets/gif2.png";
import glassgif2 from "../../assets/glassgif2.png";
import gif3 from "../../assets/gif3.png";
import glassgif3 from "../../assets/glassgif3.png";
import gif4 from "../../assets/gif4.png";
import glassgif4 from "../../assets/glassgif4.png";

const PageSevenSm = () => {
  return (
    <div>
      <div className="fit ">
        <div className="h-scroll ">
          {/* card1 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif1} alt="i1" />
              <img
                src={glassgif1}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
          {/* card2 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif2} alt="i1" />
              <img
                src={glassgif2}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
          {/* card3 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif3} alt="i1" />
              <img
                src={glassgif3}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
          {/* card4 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif4} alt="i1" />
              <img
                src={glassgif4}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
          {/* card5 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif1} alt="i1" />
              <img
                src={glassgif1}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
          {/* card6 */}
          <div className="hs">
            <div className="fit hs__img relative">
              <img className="fit-cover" src={gif2} alt="i1" />
              <img
                src={glassgif2}
                alt=""
                className="absolute z-20 -bottom-[0px] lg:w-[240px] lg:h-[115px] md:w-[240px] md:h-[115px] sm:w-[240px] sm:h-[115px] vsm:w-[260px] vsm:h-[110px] vvsm:h-[140px]"
              />
            </div>
            <p className="absolute z-30 fontAdd lg:text-[11.5px] lg:w-[80%] md:text-[11px] md:w-[78%] sm:text-[10.5px] sm:w-[80%] vsm:text-[12px] vvsm:text-[13px] lg:bottom-7 md:bottom-7 sm:bottom-12 text-left pl-2 ">
              “I wanted a unique and personalized gift for my friend's wedding,
              and a custom-made tie seemed like the perfect idea. The tie turned
              out even better than I imagined, with beautiful craftsmanship and
              attention to detail.”
            </p>
            <div className="text-white name_text flex items-center lg:text-[11.5px] md:text-[11px] sm:text-[10.5px] fontAdd pl-3 pt-2">
              <p className="mr-2">Neenu Maira @neenu_fuzz</p>
              <img src={star} alt="" className="  w-16 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSevenSm;

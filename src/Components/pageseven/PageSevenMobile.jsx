// import React, { useEffect } from "react";
// import Hammer from "hammerjs";
// import gif1 from "../../assets/gif1.png";
// import glassgif1 from "../../assets/glassgif1.png";
// import gif2 from "../../assets/gif2.png";
// import glassgif2 from "../../assets/glassgif2.png";
// import gif3 from "../../assets/gif3.png";
// import glassgif3 from "../../assets/glassgif3.png";
// import gif4 from "../../assets/gif4.png";
// import glassgif4 from "../../assets/glassgif4.png";
// import star from "../../assets/../assets/star.svg";

// const Tinder = () => {
//   useEffect(() => {
//     const tinderContainer = document.querySelector(".tinder");
//     const allCards = document.querySelectorAll(".tinder--card");

//     function initCards(card, index) {
//       const newCards = document.querySelectorAll(".tinder--card:not(.removed)");

//       newCards.forEach(function (card, index) {
//         card.style.zIndex = allCards.length - index;
//         card.style.transform =
//           "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
//         card.style.opacity = (10 - index) / 10;
//       });

//       tinderContainer.classList.add("loaded");
//     }

//     initCards();

//     allCards.forEach(function (el) {
//       const hammertime = new Hammer(el);

//       hammertime.on("pan", function (event) {
//         el.classList.add("moving");
//       });

//       hammertime.on("pan", function (event) {
//         if (event.deltaX === 0) return;
//         if (event.center.x === 0 && event.center.y === 0) return;

//         tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
//         tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

//         const xMulti = event.deltaX * 0.03;
//         const yMulti = event.deltaY / 80;
//         const rotate = xMulti * yMulti;

//         event.target.style.transform =
//           "translate(" +
//           event.deltaX +
//           "px, " +
//           event.deltaY +
//           "px) rotate(" +
//           rotate +
//           "deg)";
//       });

//       hammertime.on("panend", function (event) {
//         el.classList.remove("moving");
//         tinderContainer.classList.remove("tinder_love");
//         tinderContainer.classList.remove("tinder_nope");

//         const moveOutWidth = document.body.clientWidth;
//         const keep =
//           Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

//         event.target.classList.toggle("removed", !keep);

//         if (keep) {
//           event.target.style.transform = "";
//         } else {
//           const endX = Math.max(
//             Math.abs(event.velocityX) * moveOutWidth,
//             moveOutWidth
//           );
//           const toX = event.deltaX > 0 ? endX : -endX;
//           const endY = Math.abs(event.velocityY) * moveOutWidth;
//           const toY = event.deltaY > 0 ? endY : -endY;
//           const xMulti = event.deltaX * 0.03;
//           const yMulti = event.deltaY / 80;
//           const rotate = xMulti * yMulti;

//           event.target.style.transform =
//             "translate(" +
//             toX +
//             "px, " +
//             (toY + event.deltaY) +
//             "px) rotate(" +
//             rotate +
//             "deg)";
//           initCards();
//         }
//       });
//     });

//     return () => {
//       allCards.forEach((el) => {
//         const hammertime = Hammer(el);
//         hammertime.destroy();
//       });
//     };
//   }, []);
import React, { useEffect } from "react";
import Hammer from "hammerjs";
import gif1 from "../../assets/gif1.png";
import glassgif1 from "../../assets/glassgif1.png";
import gif2 from "../../assets/gif2.png";
import glassgif2 from "../../assets/glassgif2.png";
import gif3 from "../../assets/gif3.png";
import glassgif3 from "../../assets/glassgif3.png";
import gif4 from "../../assets/gif4.png";
import glassgif4 from "../../assets/glassgif4.png";
import star from "../../assets/../assets/star.svg";

const Tinder = () => {
  useEffect(() => {
    const tinderContainer = document.querySelector(".tinder");
    const allCards = document.querySelectorAll(".tinder--card");

    function initCards() {
      const newCards = document.querySelectorAll(".tinder--card:not(.removed)");

      newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform =
          "scale(" + (20 - index) / 20 + ") translateY(-" + 30 * index + "px)";
        card.style.opacity = (10 - index) / 10;
      });

      tinderContainer.classList.add("loaded");
    }

    initCards();

    allCards.forEach(function (el) {
      const hammertime = new Hammer(el);

      hammertime.on("pan", function (event) {
        el.classList.add("moving");
      });

      hammertime.on("pan", function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle("tinder_love", event.deltaX > 0);
        tinderContainer.classList.toggle("tinder_nope", event.deltaX < 0);

        const xMulti = event.deltaX * 0.03;
        const yMulti = event.deltaY / 80;
        const rotate = xMulti * yMulti;

        event.target.style.transform =
          "translate(" +
          event.deltaX +
          "px, " +
          event.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammertime.on("panend", function (event) {
        el.classList.remove("moving");
        tinderContainer.classList.remove("tinder_love");
        tinderContainer.classList.remove("tinder_nope");

        const moveOutWidth = document.body.clientWidth;
        const keep =
          Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        if (keep) {
          el.style.transform = "";
        } else {
          const toX = event.deltaX > 0 ? moveOutWidth : -moveOutWidth;
          const xMulti = event.deltaX * 0.03;
          const rotate = xMulti;

          el.style.transform =
            "translate(" + toX + "px, -100px) rotate(" + rotate + "deg)";

          el.classList.add("removed");

          // Trigger a reflow to ensure the transform is applied before the card is moved to the back
          void el.offsetWidth;

          // Reset the card's position for the next card
          el.style.transform = "";

          // Move the removed card to the back of the card stack
          const removedCard = document.querySelector(".tinder--card.removed");
          if (removedCard) {
            removedCard.classList.remove("removed");
            document.querySelector(".tinder--cards").appendChild(removedCard);
          }

          initCards();
        }
      });
    });

    return () => {
      allCards.forEach((el) => {
        const hammertime = Hammer(el);
        hammertime.destroy();
      });
    };
  }, []);

  return (
    <div className="tinder">
      <div className="tinder--cards">
        <div className="tinder--card">
          <img src={gif1} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[13px] mt-40 ml-6 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className="w-[25%] ml-2" />
          </div>

          <img src={glassgif1} alt="" className="glassgif" />
        </div>

        <div className="tinder--card">
          <img src={gif2} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[14px] mt-40 ml-3 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className=" w-[75px] ml-2" />
          </div>

          <img src={glassgif2} alt="" className="glassgif" />
        </div>
        <div className="tinder--card">
          <img src={gif3} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[14px] mt-40 ml-3 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className=" w-[75px] ml-2" />
          </div>

          <img src={glassgif3} alt="" className="glassgif" />
        </div>
        <div className="tinder--card">
          <img src={gif4} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[14px] mt-40 ml-3 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className=" w-[75px] ml-2" />
          </div>

          <img src={glassgif4} alt="" className="glassgif" />
        </div>
        <div className="tinder--card">
          <img src={gif1} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[14px] mt-40 ml-3 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className=" w-[75px] ml-2" />
          </div>

          <img src={glassgif1} alt="" className="glassgif" />
        </div>
        <div className="tinder--card">
          <img src={gif2} alt="Demo card 1" />
          <p className="card-text fontAdd text-xs">
            “I wanted a unique and personalized gift for my friend's wedding,
            and a custom-made tie seemed like the perfect idea. The tie turned
            out even better than I imagined, with beautiful craftsmanship and
            attention to detail.”
          </p>
          <div className=" card-text fontAdd flex justify-start items-center gap-2 text-[#ffff] fontAdd vvsm:text-[14px] mt-40 ml-3 ">
            Neenu Maria @neenu_fuzz
            <img src={star} alt="" className=" w-[75px] ml-2" />
          </div>

          <img src={glassgif2} alt="" className="glassgif" />
        </div>
      </div>
    </div>
  );
};

export default Tinder;

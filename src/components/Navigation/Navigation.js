import styles from "./Navigation.module.css";
import Column from "../Layout/Column/Column";
import typography from "../../theme/typography.module.css";
import Row from "../Layout/Row/Row";
import { CrossAxisAlignment, MainAxisAlignment } from "../Layout/Layout";
import React, { useEffect, useMemo, useState } from "react";

const Navigation = ({ items, onNavigate }) => {
  const [scrollTop, setScrollTop] = useState(0);

  var itemsInDiv = useMemo(() => {
    function goToSection(id) {
      var section = document.getElementById(id);
      var sectionY = section.getBoundingClientRect().top + window.scrollY - 150;
      onNavigate();
      window.scrollTo({ top: sectionY, behavior: "smooth" });
    }
    return items !== undefined
      ? items.map((value, index) => {
          if (index === 0) {
            return (
              <div
                key={value.innerHTML}
                className={`${styles.link} ${styles.active} ${typography["title-medium"]}`}
                onClick={() => goToSection(value.innerHTML)}
              >
                {value.innerHTML}
              </div>
            );
          } else {
            return (
              <div
                key={value.innerHTML}
                className={`${styles.link} ${typography["title-medium"]}`}
                onClick={() => goToSection(value.innerHTML)}
              >
                {value.innerHTML}
              </div>
            );
          }
        })
      : [];
  }, [items, onNavigate]);

  // console.log(itemsInDiv);
  var indicators = useMemo(() => {
    return itemsInDiv.map((value, index) => {
      if (index === 0) {
        return (
          <div
            key={index}
            className={`${styles.indicator} ${styles.active}`}
          ></div>
        );
      } else {
        return <div key={index} className={`${styles.indicator}`}></div>;
      }
    });
  }, [itemsInDiv]);

  

  // var sections = document.querySelectorAll(`div.${infoStyles.content} > div[id]`);



  function calculatePercentage(distances, scroll, scrollMax) {
    let k = distances.length;

    // Handle edge case where scroll is greater than or equal to scrollMax
    if (scroll >= scrollMax - 150) {
      return 100;
    }

    // Handle edge case where scroll is less than the first distance
    if (scroll <= distances[0]) {
      return 0;
    }

    // Find the interval where scroll fits and perform linear interpolation
    for (let i = 0; i < k - 1; i++) {
      if (scroll <= distances[i + 1]) {
        let percentagePerStep = 100 / (k - 1);
        let stepPercentage =
          percentagePerStep *
          (i + (scroll - distances[i]) / (distances[i + 1] - distances[i]));
          console.log(stepPercentage);
        return stepPercentage;
      }
    }

    // Edge case where scroll is larger than all distances but less than scrollMax
    return (100 / (k - 1)) * (k - 1);
  }

  var getElemDistance = function (elem) {
    var location = 0;
    if (elem.offsetParent) {
      do {
        location += elem.offsetTop - 20;
        elem = elem.offsetParent;
      } while (elem);
    }
    return location >= 0 ? location : 0;
  };

  var sectionsDistance = useMemo(() => {
    return items !== undefined ? items.map((section) => {
      return getElemDistance(section) - 155;
    }) : [];
  }, [items]);

  const onScroll = () => {
    // Get sections element

    var scrollMax =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight -
      1;

    // Map each section's scroll position to a percentage value based on the section's order
    var scrolled = calculatePercentage(
      sectionsDistance,
      window.scrollY,
      scrollMax
    );

    // Get indicators
    var indicators = document.querySelectorAll(`div.${styles.indicator}`);
    var itemsInDiv = document.querySelectorAll(`div.${styles.link}`);

    // Apply active to indicator if scrolled >= index*(100/(number of indicators))
    indicators.forEach((indicator, index) => {
      if (scrolled >= index * (100 / (indicators.length - 1))) {
        indicator.classList.add(`${styles.active}`);
        itemsInDiv[index].classList.add(`${styles.active}`);
      } else {
        indicator.classList.remove(`${styles.active}`);
        itemsInDiv[index].classList.remove(`${styles.active}`);
      }
    });

    setScrollTop(scrolled.toFixed(2));
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <div className={`${styles.navigation}`}>
      <Column expanded={true}>
        <Row mainAxisAlignment={MainAxisAlignment.center} stretch={true}>
          <Column
            mainAxisAlignment={MainAxisAlignment.spaceBetween}
            crossAxisAlignment={CrossAxisAlignment.center}
            expanded={true}
          >
            <div className={`${styles.progress}`}></div>
            <div
              className={`${styles.progress} ${styles.active}`}
              style={{ transform: `scaleY(${scrollTop / 100})` }}
            ></div>
            {indicators}
          </Column>
          <div style={{ width: "20px" }}></div>
          <Column
            mainAxisAlignment={MainAxisAlignment.spaceBetween}
            expanded={true}
          >
            {itemsInDiv}
          </Column>
        </Row>
      </Column>
    </div>
  );
};

export default Navigation;
